import mongoose from "mongoose"


const SkillsSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true

    },

    image: {

        type: String,

        required: true

    },

    label: {

        type: String,

        required: true

    }

}, { collection: 'Skills' })


export default mongoose.model("Skills", SkillsSchema)