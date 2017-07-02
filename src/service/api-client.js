import superagent from 'superagent';

const BASE_PATH = 'http://localhost:3000';
export default class ApiClient {
	paramToString(param) {
		if (param === undefined || param === null) {
			return '';
		}
		if (param instanceof Date) {
			return param.toJSON();
		}

		return param.toString();
	}
	buildUrl(path, pathParams) {
		if (!path.match(/^\//)) {
			path = `/${path}`;
		}
		let url = path;
		const _this = this;
		url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
			let value;
			if (pathParams.hasOwnProperty(key)) {
				value = _this.paramToString(pathParams[key]);
			} else {
				value = fullMatch;
			}

			return encodeURIComponent(value);
		});

		return url;
	}
	isJsonMime(contentType) {
		return Boolean(contentType !== null && contentType.match(/^application\/json(;.*)?$/i));
	}
	jsonPreferredMime(contentTypes) {
		for (let i = 0; i < contentTypes.length; i++) {
			if (this.isJsonMime(contentTypes[i])) {
				return contentTypes[i];
			}
		}

		return contentTypes[0];
	}
	normalizeParams(params) {
		const newParams = {};
		for (const key in params) {
			if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
				const value = params[key];
				if (Array.isArray(value)) {
					newParams[key] = value;
				} else {
					newParams[key] = this.paramToString(value);
				}
			}
		}

		return newParams;
	}
	deserialize(response, returnType) {
		if (response === null || returnType === null) {
			return null;
		}
		// Rely on SuperAgent for parsing response body.
		// See http://visionmedia.github.io/superagent/#parsing-response-bodies
		let data = response.body;
		if (data === null) {
			// SuperAgent does not always produce a body; use the unparsed response as a fallback
			data = response.text;
		}

		return data;

		//FIXME this is not working due hierarchy issues in swagger codegen ->
		// https://github.com/swagger-api/swagger-codegen/issues/2041
		//return exports.convertToType(data, returnType);
	}
	callApi(path, httpMethod, pathParams,
		queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts) {
		const _this = this;
		const url = BASE_PATH + this.buildUrl(path, pathParams);
		const request = superagent(httpMethod, url);

		// set query parameters
		request.query(this.normalizeParams(queryParams));

		// set header parameters
		request.set(this.normalizeParams(headerParams));

		// set request timeout
		request.timeout(this.timeout);

		const contentType = this.jsonPreferredMime(contentTypes);

		if (contentType) {
			request.type(contentType);
		} else if (!request.header['Content-Type']) {
			request.type('application/json');
		}

		request.send(bodyParam);

		const accept = this.jsonPreferredMime(accepts);
		if (accept) {
			request.accept(accept);
		}

		return new Promise(function(resolve, reject) {
			request.end(function(error, response) {
				if (error) {
					reject(error);
				} else {
					const data = _this.deserialize(response);
					resolve(data);
				}
			});
		});
	}

	/**
	 * Converts a value to the specified type.
	 * @param {(String|Object)} data The data to convert, as a string or object.
	 * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
	 * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
	 * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
	 * all properties on <code>data<code> will be converted to this type.
	 * @returns An instance of the specified type.
	 */
	convertToType(data, type) {
		switch (type) {
			case 'Boolean':
				return Boolean(data);
			case 'Integer':
				return parseInt(data, 10);
			case 'Number':
				return parseFloat(data);
			case 'String':
				return String(data);
			default:
				if (type === Object) {
					// generic object, return directly
					return data;
				} else if (Array.isArray(type)) {
					// for array type like: ['String']
					const itemType = type[0];

					return data.map(function(item) {
						return this.convertToType(item, itemType);
					});
				} else if (typeof type === 'object') {
					// for plain object type like: {'String': 'Integer'}
					let keyType, valueType;
					for (const k in type) {
						if (type.hasOwnProperty(k)) {
							keyType = k;
							valueType = type[k];
							break;
						}
					}
					const result = {};
					for (const k in data) {
						if (data.hasOwnProperty(k)) {
							const key = this.convertToType(k, keyType);
							const value = this.convertToType(data[k], valueType);
							result[key] = value;
						}
					}

					return result;
				} else {
					// for unknown type, return the data directly
					return data;
				}
		}
	}
}
