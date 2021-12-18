var path =require("path");
var { absolutePath } = require("swagger-ui-dist");
var express = require("express");
var app = express();
 
app.use("/spec", express.static(path.join(__dirname, "./spec")));
app.use(express.static(absolutePath()));
 
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))