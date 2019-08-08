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

// if (store.task.start_date > store.task.end_date) {
//   console.log('test')
// }

// creates task
const createTaskSuccessful = responseData => {
  store.task = responseData.task

  successMessage('Task Saved!!')

  const showTasksHtml = showTasksTemplate({tasks: responseData})

  $('.content').html(showTasksHtml)
  $('#cancel-form-task').hide()
  $('#new-task').hide()
}

// shows all tasks by user
const showAllTasksSuccessful = data => {
  successMessage('Here what needs to get done!')

  const showTasksHtml = showTasksTemplate({tasks: data.tasks})
  store.data = data

  $('.content').html(showTasksHtml)
  $('.content').show()
}

// updates task
const updateTaskSuccessful = (data, id) => {
  successMessage(` #${store.id} Task Edit Saved!`)
  $('#new-task').hide()
  $('#save-edit-task').hide()

  const showTasksHtml = showTasksTemplate({ tasks: data.tasks })

  $('.content').html(showTasksHtml)
  $('#cancel-form-task').hide()
}

// deletes task
const deleteTaskSuccessful = data => {
  successMessage(`Task Removed!`)

  const showTasksHtml = showTasksTemplate({ tasks: data.tasks })

  $('.content').html(showTasksHtml)
}

// show task
const showTaskSuccessful = responseData => {
  successMessage(`Here's Your Task!`)

  const showTasksHtml = showTasksTemplate({ tasks: responseData })

  $('.content').html(showTasksHtml)
}

const clearTasks = () => {
  $('.content').empty()
}

const cancelForm = () => {
  $('#new-task').hide()
  $('#cancel-form-task').hide()
  $('#save-edit-task').hide()
}

module.exports = {
  createTaskSuccessful,
  failure,
  showAllTasksSuccessful,
  updateTaskSuccessful,
  deleteTaskSuccessful,
  showTaskSuccessful,
  clearTasks,
  cancelForm
}
