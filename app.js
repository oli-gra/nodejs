const path = require('path')
const express = require('express')
const parser = require('body-parser')

const adminRoot = require('./routes/admin')
const shopRoot = require('./routes/shop')

const app = express()

// config
app.set('view engine', 'pug')
app.use(parser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(adminRoot.routes)
app.use(shopRoot)
app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(3000)