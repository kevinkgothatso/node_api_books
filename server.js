const express = require("Express");
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");


const port = process.env.PORT || 3000;

const app = new express();

mongoose.connect("", {useNewUrlParser: true}, (err)=>{
    if(err){
        console.log(`mongodb fail connection :${err}`);
    }
    else{
        console.log("mongodb connected succesfully");
    }
});

app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})

app.use(cors());
app.use(express.static(path.join(__dirname,'app')));

app.get("/", (req, res)=>{
    return res.sendFile(__dirname,"app/index.html");
});

app.post("book/new", (req, res)=>{
    return res.json("works");
});

app.get("/books", (req, res)=>{
    return res.json("works");
})