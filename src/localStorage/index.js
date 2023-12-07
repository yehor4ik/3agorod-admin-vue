import {LocalStorageKey} from "@/localStorage/constants";


export class Storage {
	static getUser() {
		const userData = localStorage.getItem(LocalStorageKey.USER);
		return userData ? JSON.parse(userData) : userData;
	}

	static setUser(user) {
		localStorage.setItem(LocalStorageKey.USER, JSON.stringify(user));
	}

	static removeUser() {
		localStorage.removeItem(LocalStorageKey.USER);
	}
}
