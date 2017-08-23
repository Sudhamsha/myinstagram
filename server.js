const express = require('express');
const app = express();
const ig = require('instagram-node').instagram();
require('dotenv').config();
const INSTA_TOKEN = process.env.INSTA_TOKEN;

app.use(express.static('public'));
app.listen(8000, () => {
    console.log('App started on 8000');
});

app.get("/get-photos", function (req, res) {

    ig.use({ access_token: process.env.INSTA_TOKEN });

    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        res.send({ photos: medias });
    });

})