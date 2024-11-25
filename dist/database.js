"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = exports.createClient = void 0;
const pg_1 = require("pg");
const dbConfig = {
    user: 'schooladmin',
    host: 'localhost',
    database: 'coolschool',
    password: '12345',
    port: 5432,
};
// Function to create a new client
const createClient = () => {
    return new pg_1.Client(dbConfig);
};
exports.createClient = createClient;
// Optional: Helper function to connect and log
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, exports.createClient)();
    try {
        yield client.connect();
        console.log('Connected to the database');
        return client; // Return connected client for immediate use
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
});
exports.connectDb = connectDb;
