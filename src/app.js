var express = require('express')
var createError = require('http-errors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var app = express()
app.get('/api/hello', (req, res) => {
  res.json('hello world')
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Listening')
})