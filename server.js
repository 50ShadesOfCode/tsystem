const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}))

const db = require('./app/models')
const Role = db.role

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync db')
  initial()
})

app.get("/", (req, res) => {
  res.json({message: "OK!"})
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
  console.log(`Listening on port: ${PORT}`)
}) 

function inital(){
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}