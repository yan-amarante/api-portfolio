"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SkillsSchema = new mongoose_1.default.Schema({
    frontEnd: {
        type: Array,
        required: true,
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        }
    },
    backEnd: {
        type: Array,
        required: true,
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        }
    }
}, { collection: 'Skills' });
exports.default = mongoose_1.default.model("Skills", SkillsSchema);
