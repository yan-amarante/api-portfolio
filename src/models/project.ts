import mongoose from "mongoose"


const Schema = mongoose.Schema;


const ProjectsSchema = new mongoose.Schema({

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


}, { collection: 'Projects' })


export default mongoose.model("Projects", ProjectsSchema)