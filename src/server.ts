import  Express, {Application}  from "express"

import bodyParser from "body-parser"

import cors from "cors"

import router from "./Routes/Skills"

import projectsRouter from "./Routes/Projects"


const app: Application = Express()

const port: number = 3000



app.use(cors({

    origin: "*"

}))


app.use(bodyParser.json());


app.use("/skills", router)

app.use("/projects", projectsRouter)


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))