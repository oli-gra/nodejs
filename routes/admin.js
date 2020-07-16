const express = require('express')

const router = express.Router()

const products = []

router.post('/add', (req, res, next) => {
  products.push({ title: req.body.add })
  res.redirect('/')
})
router.get('/add', (req, res, next) => {
  res.render('add', { pageTitle: 'Add', path: '/add' })
})

exports.routes = router
exports.products = products