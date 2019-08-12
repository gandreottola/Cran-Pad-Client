'use strict'

const store = require('../store')

$('#nav-buttons').hide()
$('#nav-links').hide()
$('#signin-settings').hide()
$('#sign-out').hide()

const successMessage = message => {
  $('#message').text(message).show()
  $('#message').css({'color': 'green'})
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
}

const failure = message => {
  $('#message').text('FAIL!').show()
  $('#message').css({'color': 'red'})
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
  $('#nav-links').show()
  $('#nav-buttons').show()
  $('#showIdeasButton').show()
  $('#settings').show()
  $('#newIdeaButton').show()
  $('#sign-out').show()
  $('.login-forms').hide()
  $('#back').hide()
  // keeping track of the user, so we can have the token for the api
  // we use 'store' so we can access the token in any file
  store.user = responseData.user
}

const settings = () => {
  $('#signin-settings').show()
  $('.content').hide()
  $('#tasks').hide()
  $('#ideas').hide()
}

const changePasswordSuccessful = responseData => {
  successMessage('Password successfully changed!')

  $('div').addClass('collapse show')
  $('.password').removeClass('collapsed')
}

const signOutSuccessful = responseData => {
  successMessage('Sign out successful!')
  $('#signin-settings').hide()
  $('#nav-links').hide()
  $('#nav-buttons').hide()
  $('.login-forms').show()
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-out').hide()
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
