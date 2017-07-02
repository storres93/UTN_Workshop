import ApiClient from './api-client';

export default class PropertyReferenceApi {
	constructor() {
		this.apiClient = new ApiClient();
	}

	getTodos() {
		const postBody = null;

		const pathParams = {};
		const queryParams = {};
		const headerParams = {};
		const formParams = {};

		const authNames = [];
		const contentTypes = ['application/json'];
		const accepts = ['application/json'];

		return this.apiClient.callApi(
			'/todos', 'GET',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts
		);
	}

	addTodo(text, id) {
		const postBody = null;

		const pathParams = {};
		const queryParams = {};
		const headerParams = {};
		const formParams = {
			"id": id,
			"text": text,
			"checked": false,
		};

		const authNames = [];
		const contentTypes = ['application/x-www-form-urlencoded'];
		const accepts = ['application/json'];

		return this.apiClient.callApi(
			'/todos', 'POST',
			pathParams, queryParams, headerParams, formParams, postBody,
			authNames, contentTypes, accepts
		);
	}
}
