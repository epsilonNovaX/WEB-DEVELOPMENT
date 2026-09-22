import express from "express";
import morgan from "morgan";
const port=3000;
const app=express();

app.use(morgan("combined"));

app.get("/",(req,res)=>
{
    res.send("hello");
})
app.listen(port,()=>
{
    console.log("LISTENING...");
})