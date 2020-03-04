const axios = require('axios');
const TWITTER_URL = "https://api.twitter.com/1.1/search/tweets.json";

class Twitter {
    get(query, resultType, maxId) {
        return axios.get(TWITTER_URL, {
            params: {
                q: query,
                result_type: resultType,
                count: 10,
                tweet_mode: "extended",
                max_id: maxId
            },
            headers: {
                "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
            }
        })
        
    }

}

module.exports = Twitter;