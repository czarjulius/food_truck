# Food truck

A simple full-stack web application that will assist you in finding the nearest food Trucks in San Francisco

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <img src="/normal.png" style="width: 48%; height: auto; margin-bottom: 10px;">
  <img src="/desktop.png" style="width: 48%; height: auto; margin-bottom: 10px;">
</div>

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <img src="/tablet.png" style="width: 48%; height: auto; margin-bottom: 10px;">
  <img src="/mobile.png" style="width: 48%; height: auto; margin-bottom: 10px;">
</div>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Setting up

- Install Node js
- Clone the repository `https://github.com/czarjulius/food_truck.git`
- Navigate to the location of the folder

### Backend

The backend was implemented using:

- [Node](https://nodejs.org/en/) Node Js is a Javascript runtime built on Chrome's V8 JavaScript engine
- [Express](https://expressjs.com/) Express is a minimal and flexible Node.js web application framework
- [Typescript] This addition gives us more certainty over the code we write and helps reduce the number of bugs and issues that are created.

# API Endpoints

| Method | Description                         | Endpoints |
| ------ | ----------------------------------- | --------- |
| GET    | View all data in a paginated format | /data     |

### Installing

- On your IDE terminal, navigate to the server directory by running `cd server`
- Run `npm install` to install dependencies
- Run `npm run dev` to start the server in dev mode
- Visit `http://localhost:1001/data` to interact with the endpoints
- Create a .env fille and populate it with similar variable as seen in `.env.sample`

## Running the tests

To run tests for the server side

- Run `npm test` to view the automated test

## Running the docker

- Navigate to the location of the folder in your terminal
- Make sure your docker client is up and running on your machine
- Run `docker-compose up` to start up the server
- Visit `http://localhost:4001/data` to interact with the endpoints

### Client Side:

The frontend was implmented using:

- [Reactjs](https://legacy.reactjs.org/) It enhance user experience, optimize performance, promote code reusability, and provide a scalable and flexible development process.
- [Typescript] This addition gives us more certainty over the code we write and helps reduce the number of bugs and issues that are created.
- [Tailwind](https://tailwindcss.com/) Tailwind CSS offers a unique and efficient way to handle styling in web applications, promoting rapid development, maintainability, and consistency.
- [JAVASCRIPT](https://www.javascript.com/) A programing language of html and the web

### Installing

- On your IDE terminal, navigate to the server directory by running `cd client`
- Run `npm install` to install dependencies
- Run `npm start` to start the server in dev mode
- Visit `http://localhost:3000` to interact with the web app.
- Create a .env fille and populate it with similar variable as seen in `.env.sample`

### Things I would have done if I had more time

Backend:

- Add more unit and integration tests
- Add caching to improve the system optimization
- Create a job that will fetch the dataset directly from city endpoint and update it in a database

Frontend:

- Improve the look and feel of the UI
- Suggest food for users using their search keywords

## Authors

- Julius Ngwu

## License

MIT License
Copyright (c) 2024 Julius Ngwu
