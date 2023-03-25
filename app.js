const express = require('express');
const logger = require('morgan')
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//goi den folder css de su dụng style cho cac file
app.use(express.static('css'))
app.use(express.static('images'))


//cau hinh handlebars
const expressHbs = require('express-handlebars')
app.engine('.hbs', expressHbs.engine({ extname: "hbs", defaultLayout: 'index', layoutsDir: "views/layouts/" }));
app.set('view engine', '.hbs');
app.set('views', './views');

var userRouter = require('./router/userRouter');
var racRouter = require('./router/racRouter')
var listRouter = require('./router/listRouter')
var addSP = require('./router/addSP')
var editSP = require('./router/editSPRouter')
var addUser = require('./router/addUserRouter')
var editUserRouter = require('./router/editUserRouter')

app.use(userRouter)
app.use(racRouter)
app.use(listRouter)
app.use(addSP)
app.use(editSP)
app.use(addUser)
app.use(editUserRouter)



app.listen(port, () => {
  console.log(`Localhost dang chay cong: ${port}`)
});


module.exports = app;
