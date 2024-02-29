"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ProjectsSchema = new mongoose_1.default.Schema({
    screenshots: {
        type: [String],
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    tecnologias: [{
            type: Schema.Types.ObjectId,
            ref: 'Skills',
            required: true
        }],
}, { collection: 'Projects' });
exports.default = mongoose_1.default.model("Projects", ProjectsSchema);
