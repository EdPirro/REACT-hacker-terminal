const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require('fs');

router.post('/json', (req, res) => {
    fs.writeFile(path.join(__dirname, '../data/gameData.json'), JSON.stringify(req.body), err => {if(err)console.log(err)});
    res.status(200).send();
})

router.get('/json', (_, res) => {
    fs.readFile(path.join(__dirname, '../data/gameData.json'), (err, data) => {
        if(err) return console.log(err);
        const anwser = JSON.parse(data);
        return res.send(anwser);
    });
    
})

router.get("*", (_, res) => {
    res.sendStatus(404);
});


module.exports = router;