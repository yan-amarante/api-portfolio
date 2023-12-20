import mongoose from "mongoose"


const SkillsSchema = new mongoose.Schema({

    frontEnd: {

        type: Array,

        required: true,


        name: {

            type: String,

            required: true

        },

        image: {

            type: String,

            required: true,

        }
        
    },

    backEnd: {

        type: Array,

        required: true,


        name: {

            type: String,

            required: true

        },

        image: {

            type: String,

            required: true,

        }

    }

}, { collection: 'Skills' })


  


export default mongoose.model("Skills", SkillsSchema)