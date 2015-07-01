/*
* main.js
*
*
* Created by FSC Automated
*/
(function () {
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
  if (navigator.vibrate) {
    var socket = io()
    document.querySelector('#up').addEventListener('click', function () {
      navigator.vibrate(150)
      socket.emit('click', 'up')
      console.log('Clicked up!')
    })
    document.querySelector('#left').addEventListener('click', function () {
      navigator.vibrate(150)
      socket.emit('click', 'left')
      console.log('Clicked left!')
    })
    document.querySelector('#center').addEventListener('click', function () {
      navigator.vibrate(150)
      socket.emit('click', 'enter')
      console.log('Clicked center!')
    })
    document.querySelector('#right').addEventListener('click', function () {
      navigator.vibrate(150)
      socket.emit('click', 'right')
      console.log('Clicked right!')
    })
    document.querySelector('#down').addEventListener('click', function () {
      navigator.vibrate(150)
      socket.emit('click', 'down')
      console.log('Clicked down!')
    })
    document.querySelector('#back').addEventListener('click', function () {
      navigator.vibrate(150)
      socket.emit('click', 'escape')
      console.log('Clicked back!')
    })
    document.querySelector('#keyboard').addEventListener('click', function () {
      if (document.querySelector('#keyboard').innerHTML === 'keyboard') {
        document.querySelector('#keyboard').innerHTML = 'keyboard_hide'
      } else {
        document.querySelector('#keyboard').innerHTML = 'keyboard'
      }
      document.querySelector('#inputDiv').classList.toggle('hide')
    })
    document.querySelector('#input').addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        socket.emit('string', document.querySelector('#input').value)
        document.querySelector('#input').value = ''
      }
    })
  } else {
    alert('Vibration API Not Supported :(')
  }
})()
