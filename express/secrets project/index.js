import express from "express";
import { validateHeaderName } from "http";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
var correct = false; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

function passwordCheck(req, res, next){
    if(req.body["password"] === "piwo"){
        correct = true; 
    }
    next();
}

app.use(passwordCheck);

app.post("/check", (req, res) =>{
    if(correct){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
      res.redirect("/");
    }
  })
  
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });