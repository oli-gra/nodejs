const express = require('express')
const parser = require('body-parser')

const app = express()
app.use(parser.urlencoded({ extended: false }))

app.use('/added', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})
app.use('/add', (req, res, next) => {
  res.send('<form action="/added" method="POST"><input name="add"><button type="submit">ADD</button></form>').status(200)
})
app.use('/', (req, res, next) => {
  res.send('<h1>hello</h1>').status(200)
})

app.listen(3000)