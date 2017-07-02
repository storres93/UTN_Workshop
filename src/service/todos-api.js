import ApiClient from './api-client';

export default class PropertyReferenceApi {
	constructor() {
		this.apiClient = new ApiClient();
	}

	getTodos(opts) {
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
}
