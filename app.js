const express = require('express');
const logger = require('morgan')
const app = express();
const port = process.env.PORT || 3000;

//goi den folder css de su dụng style cho cac file
app.use(express.static('css'))
app.use(express.static('images'))

//cau hinh handlebars
const expressHbs = require('express-handlebars')
app.engine('.hbs', expressHbs.engine({ extname: "hbs", defaultLayout: 'index', layoutsDir: "views/layouts/" }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/dangnhap', function (req, res) {
  res.render('DangNhap') //file name
})

app.get('/dangki', function (req, res) {
  res.render('DangKi') //file name
})


app.get('/', (req, res) => {
  res.render('DangNhap')
});

app.listen(port, () => {
  console.log(`Localhost dang chay cong: ${port}`)
});

