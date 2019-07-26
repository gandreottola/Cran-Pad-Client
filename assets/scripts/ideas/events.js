'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

$('#new-idea').hide()
$('#update-idea').hide()
$('#save-edit').hide()

// Displays form for creating idea
const onIdeaButton = event => {
  event.preventDefault()
  $('#new-idea').show()
  $('#save').show()
}

// Saves idea once user finish filling out form
const onCreateIdea = event => {
  event.preventDefault()

  const ideaform = event.target
  const ideaFormData = getFormFields(ideaform)
  api.createIdea(ideaFormData)
    .then(ui.createIdeaSuccessful)
    .catch(ui.failure)
}

// shows all ideas created by user
const onShowAllIdeas = event => {
  event.preventDefault()

  api.showAllIdeas()
    .then(ui.showIdeasSuccessful)
    .catch(ui.failure)
}

// lets user update already created idea
const onUpdateIdea = event => {
  event.preventDefault()

  const id = $(event.target).data('id')
  const resource = store.data.ideas.find(idea => idea.id === id)

  // passes already created form into edit mode
  $('#name').val(resource.name)
  $('#category').val(resource.category)
  $('#description').val(resource.description)
  $('#date').val(resource.date)
  store.id = id

  $('#save').hide()
  $('#new-idea').show()
  $('#save-edit').show()
}

// saves updated form
const onSaveUpdate = event => {
  event.preventDefault()

  const saveEditForm = {
    name: $('#name').val(),
    category: $('#category').val(),
    description: $('#description').val(),
    date: $('#date').val()
  }

  api.updateIdea(saveEditForm, store.id)
    .then(ui.updateIdeaSuccessful)
    .catch(ui.failure)
}

const onDeleteIdea = event => {
  event.preventDefault()

  const id = $(event.target).data('id')

  api.deleteIdea(id)
    .then(ui.deleteIdeaSuccessful)
    .catch(ui.failure)
}

const onShowIdea = event => {
  event.preventDefault()

  const id = $(event.target).data('id')

  api.showIdea(id)
    .then(ui.showIdeaSuccessful)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#showIdeasButton').on('click', onShowAllIdeas)
  $('#new-idea').on('submit', onCreateIdea)
  $('#newIdeaButton').on('click', onIdeaButton)
  $('body').on('click', '.update', onUpdateIdea)
  $('#save-edit').on('submit', onSaveUpdate)
  $('body').on('click', '.delete', onDeleteIdea)
  $('body').on('click', '.show-idea', onShowIdea)
}

module.exports = {
  addHandlers
}
