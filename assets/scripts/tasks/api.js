'use strict'
const config = require('../config')
const store = require('../store')

const createTask = taskFormData => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    data: taskFormData,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showAllTasks = () => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateTask = (saveEditForm, id) => {
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    data: {
      task: saveEditForm
    },
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteTask = (id) => {
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showTask = (id) => {
  return $.ajax({
    url: config.apiUrl + `/tasks/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createTask,
  showAllTasks,
  updateTask,
  deleteTask,
  showTask
}
