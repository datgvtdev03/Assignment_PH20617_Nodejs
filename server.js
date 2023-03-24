const express = require('express');
const app = express();

// Định nghĩa các thư mục tĩnh cho ExpressJS
app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));

// Thiết lập express-handlebars
app.set('view engine', 'hbs');

// Định nghĩa các tuyến đường
app.get('/', (req, res) => {
  res.render('dashboard');
});

app.get('/products', (req, res) => {
  res.render('products');
});

app.get('/customers', (req, res) => {
  res.render('customers');
});

// Khởi động ứng dụng
app.listen(3000, () => console.log('Server started'));
