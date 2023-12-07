import { ApiServiceBase } from '../../ApiServiceBase.js';
import { HttpError } from '../../HttpError.js';

class ApiProduct extends ApiServiceBase {
	baseUrl = `${process.env.VUE_APP_BASE_URL}/products`;

	async getAll() {
		try {
			const response = await this.get(this.baseUrl);

			return response.data;
		} catch (e) {
			throw new HttpError(e);
		}
	}
}

export const apiProduct = new ApiProduct();
