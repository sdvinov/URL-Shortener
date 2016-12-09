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
#### POST /api/v1/url

Use **POST** method to send the link you want to shorten. At this point, `link` is not validated in any way, so it can be pretty much anything. It is expected that you pass the link in the `link` field. Use `userID` field to identify which user created that link. **GET /api/v1/users/:id** will display links created by this user.

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

#### GET /api/v1/urls
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

#### GET /api/v1/urls/:id
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

#### POST /api/v1/urls/:id
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

#### DELETE /api/v1/urls/:id
Use **DELETE** method to delete the entry.

```json
1
```

Note: `1` means success. `0` means it did not delete anything, which means, it cannot find this ID in the database.

#### GET /go/:shortLinkID
This route will find this ID in the database and a corresponding origin link. Then it will redirect you to that origin link.

### Users
#### POST /api/v1/user

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

#### GET /api/v1/users
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

#### GET /api/v1/users/:id
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

#### POST /api/v1/users/:id
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

#### DELETE /api/v1/users/:id
Use **DELETE** method to delete the entry.

```json
1
```

Note: `1` means success. `0` means it did not delete anything, which means, it cannot find this ID in the database.

## Styleguide
If you want to contribute to this code, consider using coding styleguide. I am using [ESLint](http://eslint.org/) on [Atom](https://atom.io/). To get it working, you will need [AtomLinter package](https://github.com/AtomLinter/linter-eslint). To install it, run this command:
`apm install linter-eslint`

Create `.eslintrc.json` file in the root folder of your project. You can use [these rules](https://gist.github.com/reactivepixel/ca827b418bb9068b60f88793b34bd1c0). Full list of rules is [here](http://eslint.org/docs/rules/).

Since ESLint comes to your machine broken because of version conflict in its' dependencies, here is a working list of versions:
```
"eslint": "3.11.1",
"eslint-config-airbnb": "9.0.1",
"eslint-plugin-import": "1.16.0",
"eslint-plugin-jsx-a11y": "1.5.5",
"eslint-plugin-react": "5.2.2",
```

Add it to your `package.json` file to `devDependencies`.
