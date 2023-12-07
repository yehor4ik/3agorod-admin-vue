import { AxiosError } from 'axios';

export class HttpError extends Error {
	status;
	message;
	payload;

	constructor(error) {
		super();
		if (error instanceof AxiosError && error?.response) {
			const { status, data, ...payload } = error.response;
			this.status = status;
			this.message = data;
			this.payload = payload;

			return;
		}

		this.message = error.message;
	}

	setMessage(message) {
		this.message = typeof message !== 'string' ? message.err : message;
	}

	getArrayFormatFormError() {
		if (typeof this.message === 'object') {
			return Object.entries(this.message).map(([key, value]) => {
				return {
					name: key,
					errors: [value],
				};
			});
		}

		throw new Error("Error 'message' is not a object ");
	}

	getMessage(){
		if (typeof this.message === 'object') {
			return Object.values(this.message)[0];
		}

		return this.message;
	}
}
