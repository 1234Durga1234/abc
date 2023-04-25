
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';

let app=express()

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

const port=process.env.PORT || 5000;
app.use('/api',router)


app.get('/',(req,res)=>{
    try{
        res.json("Get Request")
    } catch (error){
        res.json(error)
    }
})

connect().then(()=>{
   try{
   } catch(error){
    console.log("canont connect to database");
   }
}).catch(error=>{
    console.log("invalid database connection");
})
app.listen(5000)
