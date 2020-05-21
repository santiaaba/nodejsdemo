var express = require('express')
var Database = require('./db.js')
var programa = require('./programa.js')

var bodyParser = require("body-parser")
var cors = require('cors')

var app = express()
const port = 3003

db = new Database
users = new Array
var path = ''

app.use(bodyParser.json())
app.use(cors())

app.get("/azar_user", function(req,res){programa.azar_user(req,res)})

app.listen(port,function(){
    console.log("Nose server running on http://10.120.78.86:" + port)
    console.log('CORS-enabled')
})
