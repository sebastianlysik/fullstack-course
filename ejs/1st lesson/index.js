import express from "express";

const d = new Date();
const day = d.getDay(); 

const app = express(); 
const port = 3000; 

app.get("/", (req, res) =>{
    if(day === 0 || day === 6){
        res.render("index.ejs", {dayType: "weekend", advice: "have fun"})
    }
    else{
        res.render("index.ejs", {dayType: "a weekday", advice: "it's time to work hard"})
    }
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}.`);
})
