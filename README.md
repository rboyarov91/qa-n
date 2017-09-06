# QA-&

QA-& is a sample application using a MERN stack utilizing es6 with babel to compile it to es5 and gulp for task automation.
The goal of QA-& is to provide website analytics. 

  - MongoDb
  - Express
  - React
  - Node

### Installation

QA-& requires [Node.js](https://nodejs.org/) v8+ to run.
For data persistance [MongoDb](https://www.mongodb.com/) v3.4.7+ required

Install MongoDb and make sure it's running. 
To actively run it:
```sh
mongod --fork --logpath <PATH_TO_LOG_FILE> --dbpath=<PATH_TO_DB_DIRECTORY>
```

To run it in the background:
```sh
mongod --dbpath=<PATH_TO_DB_DIRECTORY>
```
Install the dependencies and devDependencies and start the server.

```sh
$ cd qa-n
$ npm install
```
### Development

QA-& leverages Gulp and Facebook's [react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts)

Open your favorite Terminal and run these commands.

First tab to run the frontend React:
```sh
$ npm run start
```

Second tab to run the backend server and watch for changes in the frontend styles:
```sh
$ gulp
```