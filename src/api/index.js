import { sdk } from "./appwrite";

let api = {
	createAccount: (email, password, name) => {
		return sdk.account.create("unique()", email, password, name);
	},

	getAccount: () => {
		return sdk.account.get();
	},

	createSession: (email, password) => {
		return sdk.account.createEmailSession(email, password);
	},

	deleteCurrentSession: () => {
		return sdk.account.deleteSession("current");
	},

	createDocument: (collectionId, data, read, write) => {
		return sdk.database.createDocument(
			collectionId,
			"unique()",
			data,
			read,
			write
		);
	},

	listDocuments: (collectionId) => {
		return sdk.database.listDocuments(collectionId);
	},

	updateDocument: (collectionId, documentId, data, read, write) => {
		return sdk.database.updateDocument(
			collectionId,
			documentId,
			data,
			read,
			write
		);
	},

	deleteDocument: (collectionId, documentId) => {
		return sdk.database.deleteDocument(collectionId, documentId);
	},
};

export default api;
