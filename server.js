import express from "express";
import bodyParse from "body-parser";
import authroutes from './server/routes/authroutes';
import blogRoute from './server/routes/blogroutes';
import dotenv, { config } from 'dotenv';
const app = express();
dotenv.config
    ({path:'./.env'})
app.use(bodyParse.json());
app.use('/api/v1/blog',authroutes);
app.use('/api/v1/blog',blogRoute);
app.use('/',(req,res)=>{
    res.status(200).send({
        statu:200,
        message:"this is Blogpost Api"
    })
})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

export default app;

