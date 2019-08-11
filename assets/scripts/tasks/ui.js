'use strict'

const store = require('../store')
const showTasksTemplate = require('../templates/task-listing.handlebars')

const successMessage = message => {
  $('#message').text(message).show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
  $('#searchTask').val('')
}

const failure = message => {
  $('#message').text('FAIL!').show()
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // clear out our forms
  $('form').trigger('reset')
}

// creates task
const createTaskSuccessful = responseData => {
  successMessage('Task Saved!!')
  store.task = responseData.task

  const showTasksHtml = showTasksTemplate({tasks: responseData})

  $('.task-content').html(showTasksHtml)
  $('.task-content').show()
  $('div').removeClass('modal-backdrop fade show')
  $('div').removeClass('modal-body')
  $('body').removeClass('modal-open')
  $('.task-modal').css({'display': 'none'})
  $('#new-task').hide()
}

// shows all tasks by user
const showAllTasksSuccessful = data => {
  successMessage('Here what needs to get done!')

  const showTasksHtml = showTasksTemplate({tasks: data.tasks})
  store.data = data

  $('.task-content').html(showTasksHtml)
  $('.task-content').show()
}

// updates task
const updateTaskSuccessful = (data, id) => {
  successMessage(` #${store.id} Task Edit Saved!`)
  $('#new-task').hide()
  $('#save-edit-task').hide()

  const showTasksHtml = showTasksTemplate({ tasks: data.tasks })

  $('.task-content').html(showTasksHtml)
  $('div').removeClass('modal-backdrop fade show')
  $('div').removeClass('modal-body')
  $('body').removeClass('modal-open')
  $('.task-modal').css({'display': 'none'})
}

// deletes task
const deleteTaskSuccessful = data => {
  successMessage(`Task Removed!`)

  const showTasksHtml = showTasksTemplate({ tasks: data.tasks })

  $('.task-content').html(showTasksHtml)
}

// show task
const showTaskSuccessful = responseData => {
  successMessage(`Here's Your Task!`)

  const showTasksHtml = showTasksTemplate({ tasks: responseData })

  $('.task-content').html(showTasksHtml)
}

const clearTasks = () => {
  $('.task-content').empty()
}

module.exports = {
  createTaskSuccessful,
  failure,
  showAllTasksSuccessful,
  updateTaskSuccessful,
  deleteTaskSuccessful,
  showTaskSuccessful,
  clearTasks
}
