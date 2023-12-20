import mongoose from "mongoose"

import dotenv from "dotenv";


dotenv.config();


async function connectDatabase() {

    if (typeof process.env.DATABASE_URL !== 'undefined') {

        mongoose.connect(process.env.DATABASE_URL)

            .then(() => console.log("MongoDB Atlas Connected"))

            .catch((error) => console.log(error))

    }

}


export default connectDatabase

