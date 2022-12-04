const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload'); 
const dotenv = require('dotenv');

const errorMiddleware = require("./middlewares/error");

//config
dotenv.config({ path: 'backend/config/config.env' });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" })); app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

//Route import
const order = require("./routes/order");
const product = require("./routes/product");
const user = require("./routes/user");
const payment = require("./routes/payment");

app.use("/api/v1",order);
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",payment);

//Middleware for error
app.use(errorMiddleware);

module.exports = app; 