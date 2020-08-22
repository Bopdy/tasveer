const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server has started on port 3000')
})
