# Hacker's Terminal

Hacker's Terminal is a simple React App used during a "escape room" game I made. It simply takes a phrase as a command and do different stuff based on what command was entered.

The project is divided in Front and Back end. The front-end is where almost everything happens while the back-end is mainly used to stop a command from being used before the time it should and to "save" the progress in [this](../data/gameData.json) .json file.

## Setting Up

This project is just a simple base project, to fully use it, commands and their behaviours must be set-up.

To set up the commands you'll need to change it's data [here](../view/src/components/hints/hintsData.js) and add it [here](../data/gameData.json) to be able to use.

For a better and more comprehensive set-up guide check [here](./setup.md).

## Dependencies

In order to run this project you'll need node.js installed, click [here](https://nodejs.org/en/download/package-manager/) for the official node.js installation guide.

Optionally, if you wish to run the application in development mode, you'll need "nodemon", which can be installed with npm `npm i -g nodemon`

## Running

There are mainly two ways to run this application:

### As a production-ready application

Building a production-optimized version of the react app and serving it and all necessary static files through the node server.

### In Dev mode

Runing a development version of the react app. This allows for easy debugging as well as support for hot-reload (for both back and front end, even though, in this mode, they will be running as separated services)

For easier installation and deploy process, a Makefile was written. You may opt to use it or run the application manually.

### Using Makefile

To install all packages used for the whole application all you need to do is run

```sh
> make install
```

This may take a while...

After installing, all you need to do is decide which of the 2 modes explained above you wish to run the application in

- To run in production mode you'll need to

  ```sh
  > make
  ```

  Alternatively if you wish to build react and run in separated commands you may run

  ```sh
  > make build
  > make
  ```

  The app will be available at [localhost:8000](http://localhost:8000/)

- To run in development mode you'll need to

  ```sh
  > make dev
  ```

  The app will be available at [localhost:3000](http://localhost:3000/)  
  Requests to the server may be sent to [localhost:8000/api](http://localhost:8000/api/)

### Manually

You'll need to install the dependencies of both the front and back end applications

The server folder is where [this package.json](../package.json) can be found (originally the root folder).

The react application folder is where [this other package.json](../view/package.json) can be found (originally at ROOT/view)

In order to install all needed packages you'll need to navigate to both server and react folder and run

```sh
> npm install
```

- To run in production mode you'll need to

  Navigate to react app's folder and run

  ```sh
  npm run build
  ```

  navigate to the server's folder and run

   ```sh
  npm start
  ```

  The app will be available at [localhost:8000](http://localhost:8000/)

- To run in development mode you'll need to

  Navigate to react app's folder and run*

  ```sh
  npm start
  ```

  Navigate to the server's folder and run*

   ```sh
  npm start
  ```

  optionally to enable server hot-relaod you could

  ```sh
  nodemon ./server.js
  ```

  The app will be available at [localhost:3000](http://localhost:3000/)  
  Requests to the server may be sent to [localhost:8000/api](http://localhost:8000/api/)

<sub><sup> *You'll need both Front and Back end running at the same time. </sup></sub>

## Support

If you are having any issues, please let me know.  
Contact me at edpirro.ep@gmail.com.

## License

The project is licensed under the [MIT license](LICENSE).

## Repository

[Back to the repository page.](https://github.com/EdPirro/REACT-hacker-terminal)
