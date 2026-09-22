//Basic imports
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
//Basic setup
const app=express();
const port=3000;
const __dirname=dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html");
})
app.post("/login",(req,res)=>
{
    const email=req.body["email"];
    const password=req.body["password"];
    console.log(email);
    console.log(password);
})
app.listen(port,()=>{
    console.log(`LISTENING ON PORT ${port}`);
})