# Bookstore
Check out this project online at http://bookstore-env.eba-je2tsrcc.eu-central-1.elasticbeanstalk.com  
Login:john.cena@o2.pl   
Password:testtest   
## Book Store Management MEAN Stack

MEAN is a full-stack JavaScript open-source solution, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/)
and [Angular](http://angular.io/) based applications. The idea is to solve the common issues with connecting those frameworks, build a robust
 framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.

- **M**ongoDB : Document database – used by your back-end application to store its data as JSON (JavaScript Object Notation) documents
- **E**xpress (sometimes referred to as Express.js): Back-end web application framework running on top of Node.js
- **A**ngular : Front-end web app framework; runs your JavaScript code in the user's browser, allowing your application UI to be dynamic
- **N**ode.js : JavaScript runtime environment – lets you implement your application back-end in JavaScript
## Preview

![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/sign-in.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/sign-up.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/view-book.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/create-book.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/create-book-filled.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/search.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/details.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/Bookstore/blob/master/src/assets/images/manage-book.png?raw=true)

## Technology Stacks
- MongoDB 4.2.6
- Express 4.17.1
- Angular 9.1.7
- NodeJS 12.16.0
- HTML5
- SCSS 
- Mongoose 5.9.15
- Bootstrap 4.5.0

#### This Projects covers all fundamentals of Angular

- Multiple Modules
- Components, Template and DataBinding
- HttpClient
- Animations
- Dependency Injection
- Routing & Navigation
- Pipes
- Directives
- Gaurds etc..

## Features
- Adding book to libary
- Updating/Deleting book
- Book management
- Account management
- Catalogue
- Searching book
- Pagination

## Installation

## Before You Begin
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js
 and npm first, then install bower globally using npm.

### Clone repository

```bash
git clone https://github.com/AndrzejSierocinski/Bookstore.git
```

### Install NPM packages

```bash
cd Bookstore
npm install
```


### Configuring MongoDB and AWS

Connecting to MongoDB and AWS is done in the file [Bookstore\server\config\dev.js](server/config/dev.js). See the following sample set of credentials.
 
```
 module.exports = {
   DB_URI: "mongodb+srv://<name>:<password>@cluster0-qhkfl.mongodb.net/bookstore?retryWrites=false",
   SECRET: "randomstring",
   AWS_ACCESS_KEY_ID: '',
   AWS_SECRET_ACCESS_KEY: '',
   AWS_REGION: 'eu-central-1',
 };
 ```
How to Find Your AWS Access Key ID and Secret Access Key?
https://www.msp360.com/resources/blog/how-to-find-your-aws-access-key-id-and-secret-access-key/

### Run development server

```bash
ng serve
```

Runs a webpack-development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


