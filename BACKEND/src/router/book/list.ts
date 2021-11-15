import express from 'express'
var router = express.Router()

// define the home page route
router.get('/', function (req: express.Request, res: express.Response) {
    //ファイル読み込み
    const fs = require('fs');
    let text = JSON.parse(fs.readFileSync("./__data/books-list.json",  {encoding: 'utf-8'}));
    console.log(text);
    res.json(text)
})

module.exports = router