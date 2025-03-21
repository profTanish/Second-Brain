import express from "express";
import { PrismaClient } from "@prisma/client";
import { userProfileSchema } from "./interfaces"
import bcrypt from "bcrypt";
import { z } from "zod";
import cors from "cors";

const app = express();
const PORT = 3000;

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.post("/signup", async (req, res) => {
    try{
        const { success, error } = userProfileSchema.safeParse(req.body);
        
        if(success){
            const updateBody: FinalUserSchema = req.body;
            const userExist = await prisma.user.findUnique({
                    where: {
                        username: updateBody.username,
                        email: updateBody.email,
                    }
                }
            )
            if(!userExist){
                const hashedPass = await bcrypt.hash(updateBody.password, 2) 
                await prisma.user.create({
                data:{
                        username: updateBody.username,
                        email: updateBody.email,
                        password: hashedPass,
                    },
                })
                console.log(`User Successfuly Created`)
                res.status(200).json(`inserted into Database`)
            } else {
                console.log(`User Already Exist Into DataBase`)
                res.status(403).json(`user already exist`)
            }
        } else {
            throw new Error(error?.errors[0].message)
        }
    }catch(e){
        console.log(e)
        res.status(411).json(`${e}`)
    }
});

app.post("/api/brains", async (req, res) => {
    console.log(`req.came`)
    try{
        const response = await prisma.brain.findMany({
            where:{
                userId: 15
            }
        })
        console.log(response)
        res.json(response);
    }catch(e){
        console.log(e)
        res.json({mess: "Error occured"})
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});