var express = require('express');
var router = express.Router();

router.get('/themsanpham', (req, res) => {
  res.render('ThemSanPham')
  console.log("Them sp");
});

module.exports = router;