MEAN Walking Skeleton
=====

A end-to-end simple app build on AngunlarJS, NodeJS, Express and MongoDB.

A walking skeleton is a tiny implementation of the system that performs a small end-to-end function. It should link together the main architetural components, from the view to the persistence layer.

### Install Dependencies

You will need [Node.js][node], [Bower][bower] and [MongoDB][mongo] installed to run this app. Install the server side node libraries we depend upon via `npm`, the [node package manager][npm].

```
npm install
```
This creates a `node_modules` folder which contains the npm packages

```
bower install
```
This creates a `public/vendor` folder which contains the bower packages


### Run the Application

```
node server.js
```
This starts the application on `http://localhost:3030/`. See the log and database to more info.

[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[bower]: http://bower.io/
[mongo]: https://www.mongodb.org/