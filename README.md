cat
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Use this command to get the appropiate packages you will need.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Helpful guide
0. Install node.js and whatever IDE you want.
1. Create a new project by opening a terminal and entering in: npx create-react-app <app-name>
	a. Install create-react-app if not installed.
2. After everything is created, change directories to your new project in your terminal and start the app: npm start
3. Cancel the running server. 
4. Add bulma to the project using: npm install bulma --save
5. Add react-router using: npm install react-router-dom --save
6. Add typescript to the application: npm install --save typescript @types/node @types/react @types/react-dom @types/jest
7. Add a typescript.json file: npx tsc --init

# Run your json-server
1. Go to the DataConstants folder in a new terminal.
2. Run the following: ```json-server --watch clientDb.json --port 8040```
 
Helpful Links:
* https://bulma.io/
* https://reactjs.org/tutorial/tutorial.html
* https://reactrouter.com/en/main
* https://create-react-app.dev/docs/adding-typescript/
* https://github.com/typicode/json-server
