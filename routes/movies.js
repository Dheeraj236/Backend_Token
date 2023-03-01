import express from "express";
import {client} from "../index.js"
import { getMoviebYId } from "./getMoviebYId.js";
const router = express.Router();

router.get('/', async (req,res) =>{
    const movies = await client .db("b36").collection("movies").find(req.query).toArray();
    res.send(movies);
})

router.get('/:id',async(req,res) =>{
    const {id} = req.params;

    const movie = await getMoviebYId(id);

    movie? res.send(movie) : res.send ('msg:Movie not found');
})


router.post("/", async(req,res) =>{
    const data = req.body;
    const result = await client .db("b36").collection("movies").insertMany(data);
    res.send(result);
})

router.put("/:id", async(req,res) =>{
    const {id} = req.params;
    const data = req.body;

    const result = await client .db("b36").collection("movies").updateOne({id:id},{$set: data});
    result?
    res.send(result): res.status(404).send('msg:Movie not found');
})

export const  moviesRouter = router;


