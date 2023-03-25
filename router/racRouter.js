var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('DangNhap')
  console.log("1");
});

module.exports = router;