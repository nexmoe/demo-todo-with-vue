import { Client as Appwrite, Databases, Account } from "appwrite";
import { Server } from "../utils/config";

const client = new Appwrite();
const account = new Account(client);
const database = new Databases(client, Server.database);
client.setEndpoint(Server.endpoint).setProject(Server.project);

const sdk = { account, database };
export { sdk };
