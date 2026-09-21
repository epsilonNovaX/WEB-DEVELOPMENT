import express  from "express";

const port=3000;
const app=express()
app.set("view engine","ejs");


app.get("/",(req,res)=>
{
    const today=new Date();
    const day=today.getDay();
    let advice="";
    if(day===0 || day===6)
    {
        advice="Have a good weekend";
    }
    else{
        advice="It's a weekday, Stay focused  and get your work done Big A";
    }
    res.render("index",
        {
            advice:advice
        }
    )
})

app.listen(port,()=>
{
    console.log(`Listenin on port:${port}`);
})