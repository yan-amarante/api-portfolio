import connectDatabase from "../models/database"

import { Request, Response } from "express"

import Skills from "../models/skill"


async function listSkills(req: Request, res: Response) {

    try {

        connectDatabase()

        const skills = await Skills.find()

        res.status(200).send(skills)

    } catch (error) {

        res.status(500).send({ message: error })

    }


}

async function registerSkills(req: Request, res: Response) {

    try {

        const values = {image: req.body.image, name: req.body.name}

        await connectDatabase()
        
        const skill = await Skills.create(values)

        res.status(200).send(skill)

    } catch (error) {

        res.status(500).send(error)

    }

}


export { listSkills, registerSkills }
