var path =require("path");
var { absolutePath } = require("swagger-ui-dist");
var express = require("express");
var app = express();
 
app.use("/spec", express.static(path.join(__dirname, "./spec")));
app.use(express.static(absolutePath()));
 
app.listen(process.env.PORT || 3000);