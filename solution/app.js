const express = require("express");
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
const Twitter = require('./api/helpers/twitter');
const twitter = new Twitter();
dotenv.config();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json());

app.get('/tweets', (req, res)=>{
    const query = req.query.q;
    const resultType = req.query.result_type;
    twitter.get(query, resultType).then((response)=>{
        res.status(200).send(response.data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
})

app.listen(3000, ()=>console.log("Listening on http://localhost:3000/"));