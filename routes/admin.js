const path = require('path')
const express = require('express')
const root = require('../helpers/path')

const router = express.Router()

router.post('/add', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})
router.get('/add', (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'add.html')) // win + lin
})

module.exports = router