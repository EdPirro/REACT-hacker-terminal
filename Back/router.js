const express = require('express');
const router = express.Router();

const fs = require('fs');

router.post('/json', (req, res) => {
    fs.writeFile('./gameData.json', JSON.stringify(req.body), err => {if(err)console.log(err)});
    res.status(200).send();
})

router.get('/json', (req, res) => {
    fs.readFile('./gameData.json', (err, data) => {
        if(err) return console.log(err);
        const anwser = JSON.parse(data);
        console.log(anwser); // just for debug
        return res.send(anwser);
    });
    
})


module.exports = router;