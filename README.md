# Client 16

Starter kit pour React 16...

$ mkdir client16
$ cd client16

Le répertoire build contient l'application après bundle.

$ mkdir build src
$ touch src/index.js

$ touch README.md
$ vim .gitignore
/build
/node_modules
npm-debug.log
yarn-error.log
.DS_Store

$ git init
$ git add .
$ git commit -m "Initial commit"

$ yarn init -y

## Configuration de node

See package.json

## Eslint

$ yarn global add eslint
$ eslint --init

## Configuration de Webpack

See related file.

## Webpack dev server

Voici les packages requis

    "html-webpack-plugin": "^3.2.0",
    "webpack-dev-server": "^3.1.5"

On ajoute src/index.template

Le script yarn start démarre le serveur à l'adresse localhost:8080

## Ajouter Bootstrap-sass

Voici les packages requis

    "bootstrap": "^4.1.3",
    "font-awesome": "^4.7.0",
    "jquery": "^3.3.1",
    "popper.js": "^1.14.3",

On importe bootstrap depuis app.scss

## Ajouter custom fonts

On ajoute src/fonts
On ajoute des fonts personnels
On ajoute src/fonts.scss
On importe fonts.scss depuis app.scss


## Optimisation de webpack

Ajout de vendor.js
Configuration HMR de webpack dev server
