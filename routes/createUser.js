import { client } from "../index.js";

export async function createUser(userName, hashedPassword) {
    return await client.db("b36").collection("user").insertOne({ userName: userName, password: hashedPassword });
}

export async function getUserByName(userName) {
    return await client.db("b36").collection("user").findOne({ userName: userName});
}