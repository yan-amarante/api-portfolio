import  { Router }  from "express"

import { listProjects, registerProjects } from "../Controllers/Projects"


const projectsRouter:Router = Router()


projectsRouter.get('/', listProjects)

projectsRouter.post('/register-projects', registerProjects)


export default projectsRouter