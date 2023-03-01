import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import { createUser } from "./createUser.js";
import {getUserByName} from "./createUser.js";

async function genHashedPassword(password){
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
}

router.post("/signup", async(req,res) =>{
    const {userName, Password} = req.body;
   

    const userFromDb = await getUserByName(userName);
    console.log(userFromDb)
    
    if(userFromDb){
        res.send({msg: "User already exists",})
    } else{
    const hashedPassword = await genHashedPassword(Password);
    const result = await createUser(userName, hashedPassword);
    res.send(result);
    }

    
})

export const usersRouter = router;


