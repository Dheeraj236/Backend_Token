import { client } from "../index.js";

export async function getMoviebYId(id) {
    return await client.db("b36").collection("movies").findOne({ id: id });
}
