# short.me
Simple URL shortener on Node JS.

## Installation
To install this project to your machine, you need **Node JS and NPM**.

1. Run command `npm i` in the root folder of the project. All packages in package.json file will be downloaded.
2. Entry point of the app is at `src/app.js`. Use this directory to start the server with the command `node src/app.js`.

Consider using nodemon to reload server automatically, when something changes in the files. To install it, run this command:

`npm i -g nodemon`

## Using
Endpoint: **localhost:3000/api/v1/url**

Use **POST** method to send the link you want to shorten. At this point, `originLink` is not validated in any way, so it can be pretty much anything.

Result will look somewhat similar to this:
```json
{
  "originLink": "https://github.com/sdvinov/shortme",
  "shortenedLink": "http://short.me/TzqfTB"
}
```
