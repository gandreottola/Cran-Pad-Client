'use strict'

const store = require('../store')
const showIdeasTemplate = require('../templates/idea-listing.handlebars')

const successMessage = message => {
  $('#message').text(message).show()
  $('#message').css({'color': 'green'})
  setTimeout(() => { $('#message').hide() }, 3000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
  $('#search').val('')
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

// creates idea
const createIdeaSuccessful = responseData => {
  successMessage('Idea Saved!!')

  store.idea = responseData.idea

  const showIdeasHtml = showIdeasTemplate({ideas: responseData})

  $('.content').html(showIdeasHtml)
  $('.content').css({'margin-top': '50px'})
  $('div').removeClass('modal-backdrop fade show')
  $('div').removeClass('modal-body')
  $('body').removeClass('modal-open')
  $('.idea-modal').css({'display': 'none'})
  $('#new-idea').hide()
}

// shows all ideas by user
const showIdeasSuccessful = data => {
  successMessage('Here are your great ideas!')

  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })
  store.data = data
  store.filter = store.data.ideas

  $('.content').html(showIdeasHtml)
  $('.content').show()
  $('.filter-sort').show()
}

// updates idea
const updateIdeaSuccessful = (data, id) => {
  successMessage(` #${store.id} Idea Edit Saved!`)
  $('#new-idea').hide()
  $('#save-edit').hide()

  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })

  $('.content').html(showIdeasHtml)
  $('div').removeClass('modal-backdrop fade show')
  $('div').removeClass('modal-body')
  $('body').removeClass('modal-open')
  $('.idea-modal').css({'display': 'none'})
}

// deletes idea
const deleteIdeaSuccessful = data => {
  successMessage(`Idea Removed!`)

  const showIdeasHtml = showIdeasTemplate({ ideas: data.ideas })

  $('.content').html(showIdeasHtml)
}

// show idea
const showIdeaSuccessful = responseData => {
  successMessage(`Here's Your Idea!`)

  const showIdeasHtml = showIdeasTemplate({ ideas: responseData })

  $('.content').html(showIdeasHtml)
  $('.content').css({'margin-top': '50px'})
}

const clearIdeas = () => {
  $('.content').empty()
  $('.filter-sort').hide()
}

module.exports = {
  createIdeaSuccessful,
  failure,
  showIdeasSuccessful,
  updateIdeaSuccessful,
  deleteIdeaSuccessful,
  showIdeaSuccessful,
  clearIdeas
}
