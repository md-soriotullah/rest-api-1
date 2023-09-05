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