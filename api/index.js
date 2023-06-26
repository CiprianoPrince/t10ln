const express = require('express')
const cors = require('cors')
// const { urlencoded } = require('express')
// const path = require('path')
// const file = require('file')

const addID = require('./middleware/addID')
const sortGenre = require('./middleware/sortGenre')
const fileupload = require('express-fileupload')
const path = require('path')

// configure the dotenv module to use environment variables
require('dotenv').config()
const PORT = process.env.PORT_NUMBER
// const multer = require('multer')
// const upload = multer({ dest: os.tmpdir() })

// instace of express
const app = express()

app.use(fileupload({ createParentPath: false }))
console.log(path.join(__dirname, '../uploads'))

// handle get request for new novel
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

// handle post request for new novel
app.post('/novels', cors(), express.json(), express.urlencoded({ extended: true }), async (req, res) => {
  console.log(req.body.files)

  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  })
  res.status(201).send(req.body)
})

// handle post request for new novel
app.post('/upload', cors(), addID, express.urlencoded({ extended: false }), async (req, res) => {
  const obj = JSON.parse(req.body)
  // refactor
  const sampleFile = req.files.cover
  const mime = sampleFile.mimetype.match(/(jpeg|jpg|JPG|png|webp)$/)[0]
  const uploadPath = path.join(__dirname, '../src/data/uploads/other-books/' + `${sampleFile.md5}.${mime}`)

  // // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err)
    obj.cover = `${sampleFile.md5}.${mime}`
    res.status(201).send(JSON.stringify(obj))
  })
})

app.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`listening on port ${PORT}`)
})
