var express = require('express')
var app = express()
var server = require('http').createServer(app)
var robot = require('robotjs')
var io = require('socket.io')(server)
io.on('connection', function (socket) {
  console.log('A new user connected!')
  socket.on('click', function (dir) {
    robot.keyTap(dir)
  })
})
app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
})
server.listen(3000)
