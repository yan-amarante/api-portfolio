import connectDatabase from "../models/database"

import { Request, Response } from "express"

import Projects from "../models/project"


async function listProjects(req: Request, res: Response) {

    try {

        connectDatabase()

        const projects = await Projects.find().populate('tecnologias');

        const response = { projects: Object.assign({}, projects) }

        res.status(200).send(response)

    } catch (error) {

        res.status(500).send({ message: error })

    }


}

async function registerProjects(req: Request, res: Response) {

    try {

        const values = { screenshots: req.body.screenshots, logo: req.body.logo, titulo: req.body.titulo, descricao: req.body.descricao, tecnologias: req.body.tecnologias }

        await connectDatabase()

        const project = await Projects.create(values)

        res.status(200).send(project)

    } catch (error) {

        res.status(500).send(error)

    }

}


export { listProjects, registerProjects }
