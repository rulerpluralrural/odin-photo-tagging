import dotenv from "dotenv"
dotenv.config()

import express, { urlencoded } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000

const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()