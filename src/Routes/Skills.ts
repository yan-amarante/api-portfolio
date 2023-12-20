import  { Router }  from "express"

import { listSkills, registerSkills } from "../Controllers/Skills"


const router:Router = Router()


router.get('/', listSkills)

router.post('/register-skills', registerSkills)


export default router