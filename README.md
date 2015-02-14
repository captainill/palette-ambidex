## Introduction ##

This is an example app built with [**Ambidex**](https://github.com/appsforartists/Ambidex/).  For more information, **please see [that repo](https://github.com/appsforartists/Ambidex/)**.

## Getting Started ##

#### The REST service is now deployed to heroku ####
  - https://palette-restify.herokuapp.com/api/v1/palettes

    REST server source here:
  - [restify server](https://github.com/captainill/palette-restify/)

#### Install the dependencies ####
    npm install

#### Add the appropriate lines to `/private/etc/hosts` ####
    127.0.0.1       bikeindex.local

#### Start the server ###
    npm start

  -if you don't want to run the server locally test the production settings which hit the web service hosted on heroku by setting NODE_ENV

    `NODE_ENV=production npm start`    

#### Navigate to the appropriate page in your browser ####
 - http://bikeindex.local:8080/

