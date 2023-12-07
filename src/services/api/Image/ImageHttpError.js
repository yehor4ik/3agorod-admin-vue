import { HttpError } from '../../HttpError.js';

export class ImageHttpError extends HttpError {
	constructor(error) {
		super(error);
	}

	getImageValidationError(errorField) {
		const errors = Object.values(this.message);
		return [
			{
				name: errorField,
				errors,
			},
		];
	}
}
