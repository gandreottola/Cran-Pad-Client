'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const showIdeasTemplate = require('../templates/idea-listing.handlebars')

$('#new-idea').hide()
$('#update-idea').hide()
$('#save-edit').hide()
$('#cancel-form').hide()
$('#ideas').hide()

// Displays form for creating idea
const onIdeaButton = event => {
  event.preventDefault()
  $('#new-idea').show()
  $('#cancel-form').show()
}

// limits user to only pick the date, on the day they create idea
const todaysDate = new Date()

const year = todaysDate.getFullYear()
const month = ('0' + (todaysDate.getMonth() + 1)).slice(-2)
const day = ('0' + todaysDate.getDate()).slice(-2)

const minDate = (year + '-' + month + '-' + day)
const maxDate = (year + '-' + month + '-' + day)

$('#date').attr('min', minDate)
$('#date').attr('max', maxDate)

// Saves idea once user finish filling out form
const onCreateIdea = event => {
  event.preventDefault()

  const ideaForm = event.target
  const ideaFormData = getFormFields(ideaForm)

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
  store.id = id

  // passes already created form into edit mode
  $('#name').val(resource.name)
  $('#category').val(resource.category)
  $('#description').val(resource.description)
  $('#date').val(resource.date)

  $('#save').hide()
  $('#new-idea').show()
  $('#save-edit').show()
  $('#cancel-form').show()
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
    .then(() => api.showAllIdeas())
    .then(ui.updateIdeaSuccessful)
    .catch(ui.failure)
}

// deletes idea, when remove button is clicked
const onDeleteIdea = event => {
  event.preventDefault()

  const id = $(event.target).data('id')

  api.deleteIdea(id)
    .then(() => api.showAllIdeas())
    .then(ui.deleteIdeaSuccessful)
    .catch(ui.failure)
}

const onShowIdea = event => {
  event.preventDefault()

  const ideaId = $('#search').val()
  let id = $(event.target).data('id')
  id = ideaId

  api.showIdea(id)
    .then(ui.showIdeaSuccessful)
    .catch(ui.failure)
}

// filters forms based on filter button
const onFilter = event => {
  event.preventDefault()

  const categoryFilter = $(event.target).attr('data-filter')
  const resource = [store.data.ideas]

  for (let i = 0; i < resource.length; i++) {
    const resourceForm = resource[i]

    const filterIdeas = resourceForm.filter(resource =>
      resource.category === categoryFilter)

    store.filter = filterIdeas

    const showIdeasHtml = showIdeasTemplate({
      ideas: filterIdeas
    })

    $('.content').html(showIdeasHtml)
  }
}

// sorts forms when sort button is clicked
const onSort = event => {
  event.preventDefault()

  $(event.target).attr('data-sort')
  const resource = [store.filter]

  for (let i = 0; i < resource.length; i++) {
    const resourceForm = resource[i]

    const sortIdeas = resourceForm.sort((newest, oldest) => {
      // sorts from bottom to top,
      // puts older dates closer to bottom and newer dates closer to top
      return new Date(oldest.date) - new Date(newest.date)
    })

    const showIdeasHtml = showIdeasTemplate({
      ideas: sortIdeas
    })

    $('.content').html(showIdeasHtml)
  }
}

const onClearIdeas = event => {
  event.preventDefault()

  ui.clearIdeas()
}

const onCancelForm = event => {
  event.preventDefault()

  ui.cancelForm()
}

const onShowIdeaSection = event => {
  event.preventDefault()

  $('#ideas').show()
  $('#tasks').hide()
}

const addHandlers = () => {
  $('#showIdeasButton').on('click', onShowAllIdeas)
  $('#new-idea').on('submit', onCreateIdea)
  $('#newIdeaButton').on('click', onIdeaButton)
  $('body').on('click', '.update', onUpdateIdea)
  $('#save-edit').on('submit', onSaveUpdate)
  $('body').on('click', '.delete', onDeleteIdea)
  $('#showIdeaButton').on('click', onShowIdea)
  $('#filter-button-group').on('click', 'button', onFilter)
  $('#sort-button').on('click', 'button', onSort)
  $('#clearIdeasButton').on('click', onClearIdeas)
  $('#cancel-form').on('click', onCancelForm)
  $('#ideaButton').on('click', onShowIdeaSection)
}

module.exports = {
  addHandlers
}
