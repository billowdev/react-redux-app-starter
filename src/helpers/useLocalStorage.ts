import log from "../services/logger/console";

export const loadLocalStorage = (key: string) => {
	try {
		const serializedState = localStorage.getItem(key);
		if (!serializedState) {
			return undefined;
		} else {
			return JSON.parse(serializedState);
		}
	} catch (err) {
		log({ success: false, msg: "error on load state persist", error: err });
		return undefined;
	}
};

export const saveLocalStorage = async (key: string, state: any) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(key, serializedState);
	} catch (err) {
		log({ success: false, msg: "on persist state", err })
	}
};

export const clearLocalStorageWithKey = (key: string) => {
	try {
		const serializedState: any = localStorage.removeItem(key);
		if (!serializedState) {
			return undefined;
		} else {
			return JSON.parse(serializedState);
		}
	} catch (err) {
		log({ success: false, msg: "error on load state persist", error: err });
		return undefined;
	}
};