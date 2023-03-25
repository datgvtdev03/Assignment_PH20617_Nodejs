var express = require('express');
var router = express.Router();

router.get('/adduser', function (req, res) {
  res.render('ThemUser') //file name
  console.log("Dang nhap");
})

module.exports = router;