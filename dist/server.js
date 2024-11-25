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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_routes_1 = __importDefault(require("./routes/student.routes"));
const databasePool_1 = __importDefault(require("./databasePool")); // Pool
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', student_routes_1.default);
// Gracefully close all connections
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Shutting down application...');
    yield databasePool_1.default.end(); // Close all connections in the pool
    process.exit(0);
}));
// connectDb().then(() => {
//   app.listen(3000, () => {
//     console.log(`Server started in port 3000...`)
//   })
// })
// Pool
app.listen(3000, () => {
    console.log(`Server started in port 3000...`);
});
