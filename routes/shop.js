const path = require('path')
const express = require('express')
const root = require('../helpers/path')
const adminRoot = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  const products = adminRoot.products
  res.render('shop', { products })
})

module.exports = router