'use strict'
const config = require('../config')
const store = require('../store')

const createIdea = ideaFormData => {
  return $.ajax({
    url: config.apiUrl + '/ideas',
    data: ideaFormData,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showAllIdeas = () => {
  return $.ajax({
    url: config.apiUrl + '/ideas',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateIdea = (saveEditForm, id) => {
  return $.ajax({
    url: config.apiUrl + `/ideas/${id}`,
    data: {
      idea: saveEditForm
    },
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteIdea = (id) => {
  return $.ajax({
    url: config.apiUrl + `/ideas/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showIdea = (id) => {
  return $.ajax({
    url: config.apiUrl + `/ideas/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createIdea,
  showAllIdeas,
  updateIdea,
  deleteIdea,
  showIdea
}
