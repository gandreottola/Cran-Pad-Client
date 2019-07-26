'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

$('#back').hide()

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.failure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.failure)
}

const onSettings = () => {
  ui.settings()
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.failure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.failure)
}

const onChangeEmail = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changeEmail(formData, store.user.id)
    .then(ui.changeEmailSuccessful)
    .catch(ui.failure)
}

const onBack = () => {
  $('#signin-settings').hide()
  $('#newIdeaButton').show()
  $('#showIdeasButton').show()
  $('#settings').show()
  $('#back').hide()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#settings').on('click', onSettings)
  $('#change-email').on('submit', onChangeEmail)
  $('#back').on('click', onBack)
}

module.exports = {
  addHandlers
}
