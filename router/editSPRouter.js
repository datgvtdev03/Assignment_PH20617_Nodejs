var express = require('express');
var router = express.Router();

router.get('/chinhsuasanpahm', (req, res) => {
  res.render('ThemSanPham')
  console.log("1");
});

module.exports = router;