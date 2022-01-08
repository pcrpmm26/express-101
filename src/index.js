const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const appRoute = require('./routes/appRoute');
const adminRoute = require('./routes/addminRoute');
const productRoute = require('./routes/productRoute.js');
require("dotenv").config({path:"./config.env"});

const app = express();
const port = process.env.PORT || 4005;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/",appRoute);
app.use("/admin",adminRoute);
app.use("/product",productRoute);

app.listen(port,()=>{
    console.log("Running Web at " + port);
});