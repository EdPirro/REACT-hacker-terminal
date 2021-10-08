all: view\build\index.html
	npm start

install:
	npm i & cd view && npm i

build,  view\build\index.html:
	cd view && npm run build

dev:
	nodemon ./server.js & cd view && npm start

