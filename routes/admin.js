const path = require('path')
const express = require('express')
const root = require('../helpers/path')

const router = express.Router()

const products = []

router.post('/add', (req, res, next) => {
  products.push(req.body.add)
  res.redirect('/')
})
router.get('/add', (req, res, next) => {
  res.render('add', { pageTitle: 'Add', path: '/add' })
})

exports.routes = router
exports.products = products