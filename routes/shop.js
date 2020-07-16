const path = require('path')
const express = require('express')
const root = require('../helpers/path')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'shop.html')) // win + lin
})

module.exports = router