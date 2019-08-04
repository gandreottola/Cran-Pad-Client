'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

$('#tasks').hide()
$('#new-task').hide()
$('#save-edit-task').hide()
$('#cancel-form').hide()

const onShowTaskSection = event => {
  event.preventDefault()

  $('#tasks').show()
  $('#ideas').hide()
}

// Displays form for creating task
const onTaskButton = event => {
  event.preventDefault()

  $('#new-task').show()
  $('#cancel-form').show()
}

// limits user to only pick current date and any later dates
const todaysDate = new Date()

const year = todaysDate.getFullYear()
const month = ('0' + (todaysDate.getMonth() + 1)).slice(-2)
const day = ('0' + todaysDate.getDate()).slice(-2)

const minDate = (year + '-' + month + '-' + day)

$('#start_date').attr('min', minDate)
$('#end_date').attr('min', minDate)

const onCreateTask = event => {
  event.preventDefault()

  const form = event.target
  const taskFormData = getFormFields(form)

  api.createTask(taskFormData)
    .then(ui.createTaskSuccessful)
    .catch(ui.failure)
}

const onShowAllTasks = event => {
  event.preventDefault()

  api.showAllTasks()
    .then(ui.showAllTasksSuccessful)
    .catch(ui.failure)
}

const onShowTask = event => {
  event.preventDefault()

  const taskId = $('#searchTask').val()
  let id = $(event.target).data('id')
  id = taskId

  api.showTask(id)
    .then(ui.showTaskSuccessful)
    .catch(ui.failure)
}

const onClearTasks = event => {
  event.preventDefault()

  ui.clearTasks()
}

// lets user update already created task
const onUpdateTask = event => {
  event.preventDefault()

  const id = $(event.target).data('id')
  const resource = store.data.tasks.find(task => task.id === id)
  store.id = id

  // passes already created form into edit mode
  $('#start_date').val(resource.start_date)
  $('#end_date').val(resource.end_date)
  $('#priority').val(resource.priority)
  $('#task_description').val(resource.description)

  $('#saveTaskButton').hide()
  $('#new-task').show()
  $('#save-edit-task').show()
  $('#cancel-form').show()
}

// saves updated form
const onSaveUpdate = event => {
  event.preventDefault()

  const saveEditForm = {
    start_date: $('#start_date').val(),
    end_date: $('#end_date').val(),
    priority: $('#priority').val(),
    description: $('#task_description').val()
  }

  api.updateTask(saveEditForm, store.id)
    .then(() => api.showAllTasks())
    .then(ui.updateTaskSuccessful)
    .catch(ui.failure)
}

// deletes task, when remove button is clicked
const onDeleteTask = event => {
  event.preventDefault()

  const id = $(event.target).data('id')

  api.deleteTask(id)
    .then(() => api.showAllTasks())
    .then(ui.deleteTaskSuccessful)
    .catch(ui.failure)
}

const onCancelForm = event => {
  event.preventDefault()

  ui.cancelForm()
}

const addHandlers = () => {
  $('#taskButton').on('click', onShowTaskSection)
  $('#new-task').on('submit', onCreateTask)
  $('#showTasksButton').on('click', onShowAllTasks)
  $('#showTaskButton').on('click', onShowTask)
  $('#clearTasksButton').on('click', onClearTasks)
  $('body').on('click', '.update-task', onUpdateTask)
  $('#save-edit-task').on('submit', onSaveUpdate)
  $('body').on('click', '.delete-task', onDeleteTask)
  $('#newTaskButton').on('click', onTaskButton)
  $('#cancel-form').on('click', onCancelForm)
}

module.exports = {
  addHandlers
}
