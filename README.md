# short.me
Simple URL shortener on Node JS.

## Installation
To install this project to your machine, you need **Node JS and NPM**.

1. Run command `npm i` in the root folder of the project. All packages in package.json file will be downloaded.
2. Entry point of the app is at `src/app.js`. Use this directory to start the server with the command `node src/app.js`.

Consider using nodemon to reload server automatically, when something changes in the files. To install it, run this command:

`npm i -g nodemon`

## Environmental variables
This app uses environmental variables. You can set them either in the command line while starting the server (`DB_PORT=3306 node src/app.js`) or set them up in the `.env` file in the root of the app. Here is a template:

```
DB_NAME =
DB_USER =
DB_PASS =
DB_PORT =
DB_HOST =
DB_SCHEMA =
DEBUG =
```

## Using
### URLS
#### POST localhost:3000/api/v1/url

Use **POST** method to send the link you want to shorten. At this point, `link` is not validated in any way, so it can be pretty much anything. It is expected that you pass the link in the `link` field. Use `userID` field to identify which user created that link. **GET localhost:3000/api/v1/users/:id** will display links created by this user.

Result will look somewhat similar to this:
```json
{
  "id": 47,
  "originLink": "https://vk.com/jnfdsjjbkbkbvdsfaddacdsfm,ssss",
  "shortLinkID": "ldpC3GU",
  "userID": "1",
  "updatedAt": "2016-12-02T02:32:10.000Z",
  "createdAt": "2016-12-02T02:32:10.000Z"
}
```

#### GET localhost:3000/api/v1/urls
User **GET** method to get all links that are in the database.

Example output:
```json
[
  {
    "id": 1,
    "originLink": "https://vk.com/audios203669363",
    "shortLinkID": "SPmBHEf",
    "createdAt": "2016-12-02T00:24:06.000Z",
    "updatedAt": "2016-12-02T00:24:06.000Z",
    "userID": 1
  },
  {
    "id": 3,
    "originLink": "https://vk.com/audios20366936",
    "shortLinkID": "UekjuaF",
    "createdAt": "2016-12-02T00:24:49.000Z",
    "updatedAt": "2016-12-02T00:24:49.000Z",
    "userID": 1
  },
  {
    "id": 6,
    "originLink": "https://vk.com/audios2036693",
    "shortLinkID": "qNEWwzJ",
    "createdAt": "2016-12-02T00:31:48.000Z",
    "updatedAt": "2016-12-02T00:31:48.000Z",
    "userID": 1
  }
]
```

#### GET localhost:3000/api/v1/urls/:id
Use **GET** to find one link by `id`.

```json
{
  "id": 1,
  "originLink": "https://vk.com/audios203669363",
  "shortLinkID": "SPmBHEf",
  "createdAt": "2016-12-02T00:24:06.000Z",
  "updatedAt": "2016-12-02T00:24:06.000Z",
  "userID": 1
}
```

#### POST localhost:3000/api/v1/urls/:id
Use **POST** method to update the entry.

```json
{
  "id": 1,
  "originLink": "https://vk.com/123",
  "shortLinkID": "SPmBHEf",
  "createdAt": "2016-12-02T00:24:06.000Z",
  "updatedAt": "2016-12-02T02:45:31.000Z",
  "userID": "1"
}
```

Note: for this method use `originLink` instead of `link`.

#### DELETE localhost:3000/api/v1/urls/:id
Use **DELETE** method to delete the entry.

```json
1
```

Note: `1` means success. `0` means it did not delete anything, which means, it cannot find this ID in the database.

#### GET localhost:3000/go/:shortLinkID
This route will find this ID in the database and a corresponding origin link. Then it will redirect you to that origin link.

### Users
#### POST localhost:3000/api/v1/user

Use **POST** method to send the account credentials. It expected to get fields `username` and `password`. Hashing is coming right up.

Result will look somewhat similar to this:
```json
{
  "id": 3,
  "username": "dvinov1",
  "password": "password",
  "token": "pvWLGFD8KIfu3KM",
  "updatedAt": "2016-12-02T02:55:11.000Z",
  "createdAt": "2016-12-02T02:55:11.000Z"
}
```

#### GET localhost:3000/api/v1/users
User **GET** method to get all users that are in the database.

Example output:
```json
[
  {
    "id": 1,
    "username": "dvinov",
    "password": "password",
    "token": "TCQOI6D6cCLW2EY",
    "createdAt": "2016-12-02T00:12:23.000Z",
    "updatedAt": "2016-12-02T00:12:23.000Z"
  }
]
```

#### GET localhost:3000/api/v1/users/:id
Use **GET** to find one user by `id`. It also will display all links that were created by this user.

```json
{
  "id": 5,
  "username": "sdvinov",
  "password": "password",
  "token": "bgjuR4xqEYkUdW3",
  "createdAt": "2016-12-02T03:08:10.000Z",
  "updatedAt": "2016-12-02T03:08:10.000Z",
  "links": [
    {
      "id": 49,
      "originLink": "https://vk.com/123589123456",
      "shortLinkID": "5fb2Cai",
      "createdAt": "2016-12-02T03:11:47.000Z",
      "updatedAt": "2016-12-02T03:11:47.000Z",
      "userID": 5
    },
    {
      "id": 50,
      "originLink": "https://vk.com/5678",
      "shortLinkID": "hwdzB3R",
      "createdAt": "2016-12-02T03:16:45.000Z",
      "updatedAt": "2016-12-02T03:16:45.000Z",
      "userID": 5
    },
    {
      "id": 51,
      "originLink": "https://vk.com/qwerty",
      "shortLinkID": "Yzoo6zs",
      "createdAt": "2016-12-02T03:16:51.000Z",
      "updatedAt": "2016-12-02T03:16:51.000Z",
      "userID": 5
    }
  ]
}
```

#### POST localhost:3000/api/v1/users/:id
Use **POST** method to update the entry.

```json
{
  "id": 3,
  "username": "dvinov123",
  "password": "password",
  "token": "pvWLGFD8KIfu3KM",
  "createdAt": "2016-12-02T02:55:11.000Z",
  "updatedAt": "2016-12-02T02:56:25.000Z"
}
```

Note: for this method use `originLink` instead of `link`.

#### DELETE localhost:3000/api/v1/users/:id
Use **DELETE** method to delete the entry.

```json
1
```

Note: `1` means success. `0` means it did not delete anything, which means, it cannot find this ID in the database.

## Debug tool
This project has a built in debug tool. It only triggers if the environmental variable `DEBUG` is set to `true`. To run it, turn on the server with `DEBUG=true node src/app.js` or add it to `.env` file (see section **environmental variables**).

### Usage
To run it simply do this:
```JavaScript
const util = require('pathToUtilFile');
const path = 'src/routes/api/api.js';
util.debug('My message', 'src/myApp,js', 'success');
```

The file is located in `src/modules/util.js`. It accepts 3 arguments: `data`, `path`, and `level`. `data` is a message. `path` is a path of file from which this message is coming from, which you should type manually. `level` is an importance of message. All of these variables are optional, but it would make a lot more sense if you define all of them.

Debug tool spits data to console and to `logs/debug.log` file. In console messages are colored, depending on the level. There are 4 levels of messages: `notice` (or `n`), `success` (or `s`), `warning` (or `w`, or `warn`), and `error` (or `e`, or `err`). They are colored in blue, green, yellow, and red respectively. In log file the messages may look somewhat like this:

`NOTICE [Sat Dec 03 2016 21:33:15 GMT-0500 (EST)] FILE: src/app.js SAYS: "Server running on port 3000" `

## Deployment
This API is also available on [Heroku](https://urlshortenersd-prod.herokuapp.com/). It consists of 2 stages: staging and production. I use [codeship](https://codeship.com/) to run unit testing automatically. If it passes, the code is being sent to staging server. Ensure, that everything is fine, and manually promote staging to production. This is being done in order to avoid uploading broken code to production server.

## Workflow
Feature branch development is essentially development of one feature on a separate branch (not master). If you work on your code with somebody, you will continuously fight over master branch - numerous push conflicts and so on.

To create a branch, type this command:

`git checkout -b branchName`

Now you have a branch in your local repo, but Github still does not know this branch exists. To fix that, run:

`git add -A` (`-A` means `all`)

`git commit message "Your message goes here"`

`git push --set-upstream origin branchName`

The last command has to be run just for one time. After you run this command, you can use just:

`git push`

Now your commit is up on Github and you have a branch set up. Commit as many more code as you need. After you are done developing and testing (using [codeship](https://codeship.com/), for example), you are ready to merge this branch with master branch and create a new release.

`git checkout master` - go back to master branch.

`git merge branchName` - merge it with feature branch.

`git push` - push updated code to Github.

`git tag v2.15.7` - add a tag.

`git checkout release` - go back to release if you still need it.

`git merge master` - merge it with master.

`git push` - and push again.

After this release goes to codeship and to staging server.
