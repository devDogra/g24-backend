// const express = require('express'); 
import express from 'express'; 
import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient(); 
import cors from 'cors'; 
import userRouter from "./routers/userRouter.js"; 


const app = express(); 
app.use(cors()); 
app.use(express.json()); 

app.use('/users', userRouter); 



app.listen(3000, () => console.log("http://localhost:3000"));






