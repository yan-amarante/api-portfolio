"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Skills_1 = __importDefault(require("./Routes/Skills"));
const Projects_1 = __importDefault(require("./Routes/Projects"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(body_parser_1.default.json());
app.use("/skills", Skills_1.default);
app.use("/projects", Projects_1.default);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
