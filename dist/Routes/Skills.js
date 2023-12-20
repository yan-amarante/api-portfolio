"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Skills_1 = require("../Controllers/Skills");
const router = (0, express_1.Router)();
router.get('/', Skills_1.listSkills);
router.post('/register-skills', Skills_1.registerSkills);
exports.default = router;
