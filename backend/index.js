const express=require("express");
const dotenv=require("dotenv");
const {chats}= require("./data/data");

const app=express();
dotenv.config();

app.get("/",(req,res)=>{
    res.send("API running");
})

app.get("/api/chats",(req,res)=>{
    res.send(chats);
})

app.get("/api/chat/:id",(req,res)=>{
    singlechat=chats.find((c)=> c._id=req.params.id);
    res.send(singlechat);
})

const PORT= process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running on ${PORT}`))