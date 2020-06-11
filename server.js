//Dependecies
const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./p_data/database");
const client = require("./p_data/elephantsql");
const app = express();
require("dotenv").config();


//Landing page
app.use(express.static("./public"));
app.use(bodyParser.json());

//Routes
app.post("/score" , async (req,res)=>{
    const data = req.body;
    await client.query("INSERT INTO scorerecords (username,score) VALUES ('"+data.username+"',"+data.score+")");
    res.json(data);
})
app.get("/score" , async (req,res)=>{
    //const data = await pool.query("SELECT * FROM scorerecords ORDER BY score DESC");
    const test = await client.query("SELECT * FROM scorerecords ORDER BY score DESC");
    //console.log(test.rows);
    res.json(test.rows);
})



app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`App running on port ${process.env.PORT}`);
});