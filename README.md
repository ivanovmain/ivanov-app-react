# Deployed project in address

>https://ivanovmain.github.io/react-app-ivv/

## Run project
Clone project and use
### `npm install`
or
### `yarn install`

## You need add API token
[Get token](https://github.com/settings/tokens) and add
this token 
> /src/components/App/App.js
```javascript
//Please add your api github Personal access token
//String number of code 12
//https://github.com/settings/tokens 

const TOKEN = 'YOUR TOKEN';
```

In the project directory, you can run:
### `npm start`
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

###Application structure
   1. Image loader.
   
   This is the main page.
   You can enter URLs into the form and upload them to the page. You can delete a card by clicking on the button in the upper corner of the card
   
   2. Visual API.
   
   On this page, you can enter the github repository name and get a list of the latest repositories. Im used graphql api
