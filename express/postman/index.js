import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
  console.log(req.query.name);
});

app.put("/user/sebastian", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/sebastian", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/sebastian", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
