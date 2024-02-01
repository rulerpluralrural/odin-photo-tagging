export default class CustomAPIError extends Error {
	constructor(message) {
		super(message);
		if (message instanceof Array) {
			this.multipleErrors = message;
		}
	}
}
