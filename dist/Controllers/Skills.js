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
exports.registerSkills = exports.listSkills = void 0;
const database_1 = __importDefault(require("../models/database"));
const skill_1 = __importDefault(require("../models/skill"));
function listSkills(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, database_1.default)();
            const skills = yield skill_1.default.find();
            const response = { skills: Object.assign({}, skills) };
            res.status(200).send(response);
        }
        catch (error) {
            res.status(500).send({ message: error });
        }
    });
}
exports.listSkills = listSkills;
function registerSkills(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const values = { image: req.body.image, name: req.body.name, label: req.body.label };
            yield (0, database_1.default)();
            const skill = yield skill_1.default.create(values);
            res.status(200).send(skill);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.registerSkills = registerSkills;
