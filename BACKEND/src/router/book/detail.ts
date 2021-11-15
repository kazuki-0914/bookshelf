import express from 'express'
var router = express.Router()

// define the home page route
router.get('/', function (req: express.Request, res: express.Response) {
    res.send('detail home page')
})

module.exports = router