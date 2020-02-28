const express = require("express");
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json());

app.get('/tweets', (req, res)=>{
    const q = req.query.q;
    const resultType = req.query.result_type;
    const twitterUrl = "https://api.twitter.com/1.1/search/tweets.json";
    axios.get(twitterUrl, {
        params: {
            q: q,
            result_type: resultType,
            count: 10,
            tweet_mode: "extended"
        },
        headers: {
            "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
        }
    }).then((response)=>{
        res.status(200).send(response.data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
})

app.listen(3000, ()=>console.log("Listening on http://localhost:3000/"));