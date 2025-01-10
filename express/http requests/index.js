import express from 'express';
const app = express();
const port = 3000; 

app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact:</h1> <h2>E-mail: lysik.seb@gmail.com</h2> <h2>Number: 123-456-789</h2>")
})

app.listen(port, () => {
    console.log(`Server started on a port ${port}`);
})