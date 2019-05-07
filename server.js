/**
  @author Rohan Patil
  @description server script
*/

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(process.env.PORT || 8080);
console.log("react-express listens on ->>", 8080)
