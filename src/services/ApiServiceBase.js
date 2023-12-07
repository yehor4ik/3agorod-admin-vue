import Axios, { AxiosError } from 'axios';
import { getApiRouter } from './utils/getApiRouter.js';
import { Storage } from '@/localStorage';
import {ROUTES_PATHS} from "@/router";

export const apiAxiosInstance = Axios.create({
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		Accept: 'application/json',
	},
});

apiAxiosInstance.interceptors.request.use((request) => {
	if (Storage.getUser()?.token) {
		request.headers['Authorization'] = 'Bearer ' + Storage.getUser()?.token ?? '';
	}
	return request;
});

apiAxiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		if (!(error instanceof AxiosError) || !error?.response) return Promise.reject(error);

		if (error.response.status === 403 || error.response.status === 401) {
			Storage.removeUser();
			window.location.replace(`/${ROUTES_PATHS.LOGIN}`);
		}

		return Promise.reject(error);
	},
);

export class ApiServiceBase {
	baseUrl = '';
	axios = apiAxiosInstance;

	get(url = '', { params, query, ...config } = {}) {
		return this.axios.get(getApiRouter(this.baseUrl + url, { params, query }), config);
	}

	post(url = '', data, { params, query, ...config } = {}) {
		return this.axios.post(getApiRouter(this.baseUrl + url, { params, query }), data, config);
	}

	formatFormData(body) {
		const formData = new FormData();

		Object.keys(body).forEach((key) => {
			const item = body[key];

			if (Array.isArray(item)) {
				item.forEach((itemElement) => {
					formData.append(key, itemElement);
				});
				return;
			}

			formData.append(key, item);
		});

		return formData;
	}
}
