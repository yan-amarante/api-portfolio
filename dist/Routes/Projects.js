"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Projects_1 = require("../Controllers/Projects");
const projectsRouter = (0, express_1.Router)();
projectsRouter.get('/', Projects_1.listProjects);
projectsRouter.post('/register-projects', Projects_1.registerProjects);
exports.default = projectsRouter;
