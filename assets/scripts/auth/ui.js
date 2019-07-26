'use strict'

const store = require('../store')

$('#nav-buttons').hide()
$('#signin-settings').hide()

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

const signUpSuccessful = responseData => {
  successMessage('Sign up successful!')
}

const signInSuccessful = responseData => {
  successMessage('Sign in successful!')
  $('#nav-buttons').show()
  $('#showIdeasButton').show()
  $('#settings').show()
  $('#newIdeaButton').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#back').hide()
  // keeping track of the user, so we can have the token for the api
  // we use 'store' so we can access the token in any file
  store.user = responseData.user
}

const settings = () => {
  $('#settings').hide()
  $('#new-idea').hide()
  $('#showIdeasButton').hide()
  $('#newIdeaButton').hide()
  $('#signin-settings').show()
  $('#back').show()
  $('.content').hide()
}

const changePasswordSuccessful = responseData => {
  successMessage('Password successfully changed!')
}

const signOutSuccessful = responseData => {
  successMessage('Sign out successful!')
  $('#signin-settings').hide()
  $('#nav-buttons').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}

const changeEmailSuccessful = responseData => {
  successMessage('Email successfully changed!')
}

module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful,
  changePasswordSuccessful,
  settings,
  failure,
  changeEmailSuccessful
}
