import { HttpError } from '../../HttpError.js';

export class CollectionHttpError extends HttpError {
	constructor(error) {
		super(error);
	}

	changeBackgroundIdKey() {
		if (typeof this.message === 'object' && 'backgroundId' in this.message) {
			this.message.backgroundImage = this.message.backgroundId;
			delete this.message.backgroundId;
		}
	}
}
