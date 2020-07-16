const express = require('express')
const adminRoot = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  const products = adminRoot.products
  res.render('shop', { products })
})

module.exports = router