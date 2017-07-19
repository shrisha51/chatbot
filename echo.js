'use strict'
const http = require('http')
const Bot = require('../')

let bot = new Bot({
  token: 'EAAKqg4XFDk0BANMp4LZAYeCzFlQugjKZA9BFZAbZAHpUIGaWQUl6CyE87eCfXY8TDHFoKsZCYo1YrLyOAQQh3ZCKrKZCfa1P3OVxnB6GBO1vTnjUN6l29YQDZCOOJcIZCG0eRZAzQeiYHZCW0j31dWffpD71HaBzmbboJxcO4CzVdM49wZDZD',
  verify: 'hello',
  app_secret: '6b6cfda9c1618787ecf0b6dafbe7c31b'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')
