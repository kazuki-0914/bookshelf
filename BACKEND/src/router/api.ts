import express from 'express'
var router = express.Router()

// define the home page route
// router.get('/', function (req: express.Request, res: express.Response) {
//     res.send('Birds home page')
// })

var bookList = require('./book/list')
var boolDetail = require('./book/detail')

router.use('/book-list', bookList)
router.use('/book-detail', boolDetail)

module.exports = router