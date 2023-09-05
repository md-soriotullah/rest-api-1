# REST API test project

## It's a simple rest api. Dont creating for publicly use

### Here is the coding stracture

```console
$ npm install
```

```js
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// Environment veriable setup
dotenv.config()
const port = process.env.PORT || 8080;

// init express
const app = express();

// use express middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false }));

// server listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgCyan.black);
});
```

### uses packages

1. express js

2. nodemon

3. dotenv

4. colors

#### server start comand

```console
$ npm start
```
