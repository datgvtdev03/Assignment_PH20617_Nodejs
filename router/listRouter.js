var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs');


const usersss = require('../data/users');
const products = require('../data/products');


router.get('/trangquantri', (req, res) => {
  res.render('TrangQuanTri', { usersss, products });
  console.log("req: ", req);
});



module.exports = router