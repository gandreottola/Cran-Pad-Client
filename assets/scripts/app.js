'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const ideasEvents = require('./ideas/events')
const tasksEvents = require('./tasks/events')

$(() => {
  authEvents.addHandlers()
  ideasEvents.addHandlers()
  tasksEvents.addHandlers()
})

// transition between login form and sign-up form
$('.signup-message').click(() => {
  $('.sign-up').animate({ height: 'toggle', opacity: 'toggle' }, 'slow')
  $('.sign-in').animate({ height: 'toggle', opacity: 'toggle' }, 'slow')
})
