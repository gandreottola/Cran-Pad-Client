'use strict'

const store = require('../store')
const showIdeasTemplate = require('../templates/idea-listing.handlebars')

const successMessage = message => {
  $('#message').text(message).show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
}

const failure = message => {
  $('#message').text('FAIL!').show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // clear out our forms
  $('form').trigger('reset')
}

// creates idea
const createIdeaSuccessful = responseData => {
  successMessage('Awesome Idea!!')

  $('#new-idea').hide()
  store.idea = responseData.idea
}

// shows all ideas by user
const showIdeasSuccessful = data => {
  successMessage('Here are your amazing ideas!')

  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })
  store.data = data

  $('.content').html(showIdeasHtml)
}

// updates idea
const updateIdeaSuccessful = responseData => {
  successMessage('Edit saved!')
  $('#new-idea').hide()
  $('#save-edit').hide()
}

// deletes idea
const deleteIdeaSuccessful = responseData => {
  successMessage('Idea removed!')
}

// show idea
const showIdeaSuccessful = responseData => {
  successMessage(`Here's your idea`)
}

module.exports = {
  createIdeaSuccessful,
  failure,
  showIdeasSuccessful,
  updateIdeaSuccessful,
  deleteIdeaSuccessful,
  showIdeaSuccessful
}
