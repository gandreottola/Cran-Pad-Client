# Idea-Task Manager
A simple web page that will save a users ideas and tasks that need to be done.
It will help manage one's thinking process by organizing and categorizing
the ideas. Also the user will have a choice to manage tasks that need to
be completed by a certain time frame.

## Github Links
[Client Repo](https://github.com/gandreottola/Idea-Pad-Client)
[Server Repo](https://github.com/gandreottola/Idea-Pad-Server)

## Deployed Sites
 [Webpage](https://gandreottola.github.io/Idea-Pad-Client/)
 [Heroku](https://limitless-atoll-46417.herokuapp.com/)

## Technologies Used
* HTML

* CSS

* Boostrap

* JAVASCRIPT -> jquery(event handler), ajax(API)

* Ruby on Rails

* Postgresql

* Handlebars

* Heroku

* Git

* Used curl scripts to test out API in terminal before testing API on browser
  to ensure the CRUD requests were working properly.

* Used CRUD requests to have basic functions for storing data in API.

* CRUD
  - Create
  - Read
  - Update
  - Destroy

## Development Process
  1. Drew out a Wireframe and a Entity Relationship Diagram (ERD).

  2. Cretaed User Stories for the Wireframe.

  3. Created the backend with Ruby on Rails.
    - Created two resources with one to many relationships with User.
    - Scaffold RESTful routes files for GET, PATCH, POST, and DELETE requests.
    - Tested CRUD requests using curl scripts.

  4. Created the Fronted with Javascript, CSS and HTML.
    - Tested connection to backend API with curl scripts.
    - Created the Text layout with HTML.
    - Styled the text with CSS and Boostrap.
    - Used Handlebars for viewing and keeping the connection organized
      throught out the files.
    - Used Ajax to create, update, delete, show and index the resources with
      CRUD requests.
    - Used Jquery and Javascript to handle the events and User Interface.

  5. Used Version Control git to push to Github and heroku,
      also to merge, and branch on terminal.

  6. Heroku was used to create and deploy a backend URL.

  * My strategy to approaching this project was to be methodical, setting up
    a plan of what order the requiremnts should be done for making this
    full stack project. Made it easy to keep track on what was finished and
    what needed to be done. I started with backend first to keep make sure
    the database for good to go for some data. Once that was completed. I
    proceeded my way to the frontend to get the the API, UI, and Events working,
    as well getting the layout on the HTML to be working for button
    functionality.

## Wireframes
![Wireframe](https://i.imgur.com/euMv0Sm.jpg)

## User Stories
As a user, I want to sign in.
As a user, I want to see message for successful sign in.
As a user, I want to see message for failed sign in.

As a user, I want to sign out.
As a user, I want to see message for successful sign out.
As a user, I want to see message for failed sign out.

As a user, I want to change password.
As a user, I want to see message for successful change password.
As a user, I want to see message for failed change pasword.

As a user, I want to sign up.
As a user, I want to see message for successful sign up.
As a user, I want to see message for failed sign up.

As a user, I want to save, update my ideas.
As a user, I want to see message for successful updated idea.
As a user, I want to see message for failed updated idea.

As a user, I want my ideas to be only accessed by me when I'm signed in.

As a user, I want a button to show all my ideas.
As a user, I want to see message for successful show ideas.
As a user, I want to see message for failed show ideas.

As a user, I want a button to clear my ideas when shown.

As a user, I want a button to delete my ideas.
As a user, I want to see message for successful deleted idea.
As a user, I want to see message for failed deleted idea.

As a user, I want to create my idea.
As a user, I want to see message for successful created idea.
As a user, I want to see message for failed created idea.

As a user, I want to sort ideas based on date.

As a user, I want to filter ideas based on category.

As a user, I want to save, update my tasks.
As a user, I want to see message for successful updated task.
As a user, I want to see message for failed updated task.

As a user, I want my tasks to be only accessed by me when I'm signed in.

As a user, I want a button to show all my tasks.
As a user, I want to see message for successful show task.
As a user, I want to see message for failed show task.

As a user, I want a button to clear my tasks when shown.

As a user, I want a button to delete my tasks.
As a user, I want to see message for successful deleted task.
As a user, I want to see message for failed deleted task.

As a user, I want to create my task.
As a user, I want to see message for successful created task.
As a user, I want to see message for failed created task.

## Entity Relationship Diagram (ERD)
![ERD](https://i.imgur.com/guQyL6k.jpg)

## Future Iterations
  * Incorporate more Boostrap.

  * Integrate interaction with third-party APIs.

  * Continue working on making visual and UI design better.

  * Learn to use conditional statements in Handlebars.
