import express from "express";
import { fileURLToPath } from "url";
import {dirname} from "path";
import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const PORT=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html");
})
app.post("/login",(req,res)=>
{
    const name=req.body["name"];
    const pass=req.body["pass"];
    console.log(` name :${name} | pass:${pass}`)
})
app.listen(PORT,()=>
{
    console.log(`LISTENING ON PORT ${PORT}`)
})