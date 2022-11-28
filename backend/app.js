const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//Route import
const order = require("./routes/order");
const product = require("./routes/product");
const user = require("./routes/user");

app.use("/api/v1",order);
app.use("/api/v1",product);
app.use("/api/v1",user);

//Middleware for error
app.use(errorMiddleware);

module.exports = app; 