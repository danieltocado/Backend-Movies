# Backend API MovieDB

A simple movie database backend getting the films from MoviesDB API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Built With

* [NodeJS](https://github.com/topics/nodejs) 
* [Nodemon](https://github.com/remy/nodemon) 
* [Express](https://github.com/expressjs/express) 
* [Sequelize](https://github.com/sequelize/sequelize) 
* [Sequelize-CLI](https://github.com/sequelize/cli) 
* [MySQL2](https://github.com/sidorares/node-mysql2) 
* [BCryptJS](https://github.com/kelektiv/node.bcrypt.js) 
* [JSonWebtoken](https://github.com/auth0/node-jsonwebtoken) 
* [Axios](https://github.com/axios/axios) 

### Prerequisites

First we need to install [NodeJS](https://nodejs.org/en/download/), which we will download from their website.

Then we will install these global dependencies.

```
npm i -g nodemon
npm i -g sequelize-CLI
```

### Installing

Start a NodeJS project.
```
npm init -y
```
Install dependencies.
```
npm install express
npm install sequelize
npm install mysql2
npm install bcryptjs
npm install jsonwebtoken
npm install axios
```
Create database and models.
```
sequelize db:create ...
sequelize generate:model --name ... --attributes ...
```

## Running the tests

We will test the backend with [Postman](https://www.postman.com/downloads/).



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

