# Contact App

## Project Description

contact app is a web application that allows users to manage their contacts. The app is built using a combination of Node.js for the backend and Vue.js for the frontend. The backend provides a set of CRUD (Create, Read, Update, Delete) endpoints that allow users to perform various operations on their contacts.

The app uses JSON Web Tokens (JWT) for authentication and authorization. When a user logs in to the app, the backend generates a JWT that contains the user's identity and any relevant permissions. This token is then passed to the frontend, where it is stored in the browser's local storage.

## Features
 1. User registration with JWT authentication
 2. User login and logout with JWT token
 3. Contact creation, update, and deletion
 4. Contact search and filtering
 5. Contact sharing and collaboration
 6. User profile management

## Technologies Used
 1. Node.js
 2. Express
 3. MongoDB
 4. JWT authentication
 5. HTML/CSS/JavaScript
 6. Bootstrap

### Backend Endpoints

* public routes

    1. `POST /api/users/register`

    2. `POST /api/users/login`

* private routes

    1. `GET /api/users/current`

    2. `POST /api/contacts`

    3. `GET api/contacts`

    4. `GET api/contacts/:id`

    5. `PUT api/contacts/:id`

    6. `DELETE api/contacts/:id`


### How to Run

&gt;&gt; clone the repo

setup server

1. cd server

2. rename .env\_copy file to .env and set up the environment variable

3. npm install

4. npm start


setup client

1. cd client

2. npm install

3. npm run serve
