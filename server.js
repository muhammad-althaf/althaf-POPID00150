const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 2000;

//1connect mongodb
mongoose.connect("mongodb://127.0.0.1:27017/testDb");

//2check
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function (){
    console.log("conection successfully");
})

//3creat schema
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    place:String
})

// creat model
const userModel = new mongoose.model("user", userSchema)

//model:1
// app.get('/',(req, res) => {
//     const user = new userModel({
//         name: "muhammad althaf",
//         age:19,
//         place:"kollam"
//     })
//     user.save()
//     res.send("my name is  althaf");
// });

//model:2
app.get('/',async (req, res) => {

    const data = await userModel.find({ name:"althaf"})
      console.log(data);
    res.send(data);
});


app.listen(port, () => {
    console.log(`port ${port} is succses`);
});