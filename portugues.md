Hacker's Terminal
=================

NAO TERMINADO

Hacker's Terminal é um simples App React usado durante um jogo de "escape room" que fiz. Ele simplemente recebe frases como comandos e faz differentes coisas dependendo qual comando foi entrado.

Esse projeto é dividido em Front e Back end. O front-end

The project is divided in Front and Back end. The front-end is where almost everithing happens while the back-end is mainly used to stop a command to be used before the time it should and to "save" the progress in [this](Back/gameData.json) .json file.

Setting Up
----------

This project is jus a simple base project to fully use it commands and their behaviours must be set-up.

To set-up the commands you'll need to change it's data [here](Front/src/components/hints/hintsData.js) and add it [here](Back/gameData.json) to be able to use.

For a better and more comprehensive set-up guide click [here](setup.md).

Running
-----------
As most web apps, Hacker's Terminal is composed of Front and a Back end, to properly run it you'll need both.

To run them you simply need to:
1. Open [The Back-end](Back) or [The Front-end](Front) folder.
2. In a terminal* run:
	```shell
	> npm install
	```
3. Now run:
	```shell
	> npm start
	```

After running Back and Front end you can access:

> http://localhost:3000/

In any browser in the same machine that is running the project (or change localhost for your IP to access it through any device in your network).

<sub><sup> *You'll need to have npm start running for both Front and Back at the same time in two different terminals </sup></sub>

Support
-------

If you are having any issues, please let me know.<br/>
Contact me at edpirro.ep@gmail.com.

License
-------

The project is licensed under the [MIT license](LICENSE).

Repository
----------

[Back to the repository page.](https://github.com/EdPirro/REACT-hacker-terminal)