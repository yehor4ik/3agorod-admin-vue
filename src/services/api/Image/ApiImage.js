import { ApiServiceBase } from '../../ApiServiceBase.js';
import { ImageHttpError } from './ImageHttpError.js';

class ApiImage extends ApiServiceBase {
	baseUrl = process.env.VUE_APP_BASE_URL + '/images';

	async create(image, options = {}) {
		try {
			const formData = this.formatFormData({ image });

			const response = await this.post('/', formData, options);
			return response.data;
		} catch (error) {
			throw new ImageHttpError(error);
		}
	}
}

export const apiImage = new ApiImage();
