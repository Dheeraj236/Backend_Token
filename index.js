import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import {moviesRouter} from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";

dotenv.config();
const app = express();
app.use(cors());


const PORT= process.env.PORT;
const MONGO_URL= process.env.MONGO_URL;


async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongodb is connected 😍😍");
    return client;
}

export const client = await createConnection();

app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);


app.listen(PORT, ()=> console.log(`App is started in ${PORT}`))



