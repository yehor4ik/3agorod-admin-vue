import {ApiServiceBase} from '../../ApiServiceBase.js';
import {CollectionHttpError} from './CollectionHttpError.js';

class ApiCollection extends ApiServiceBase {
    baseUrl = process.env.VUE_APP_BASE_URL + '/collections';

    async create(data) {
        try {
            const response = await this.post('/', data);
            return response.data;
        } catch (error) {
            throw new CollectionHttpError(error);
        }
    }

    async fetch() {
        try {
            const response = await this.get();

            return response.data;
        } catch (e) {
            throw new CollectionHttpError(e);
        }
    }
}

export const apiCollection = new ApiCollection();
