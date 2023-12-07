import { ApiServiceBase } from '../../ApiServiceBase.js';
import { HttpError } from '../../HttpError.js';
import { Storage } from '@/localStorage';

class ApiAuth extends ApiServiceBase {
	baseUrl = process.env.VUE_APP_BASE_URL + '/users';

	async login(data) {
		try {
			const response = await this.post('/login', data);
			Storage.setUser(response.data);
			return response.data;
		} catch (error) {
			const newError = new HttpError(error);

			if (newError.status === 401) {
				newError.setMessage(newError.message);
			}

			throw newError;
		}
	}
}

export const apiAuth = new ApiAuth();
