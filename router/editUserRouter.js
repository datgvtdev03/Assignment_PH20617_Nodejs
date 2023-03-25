var express = require('express');
var router = express.Router();

router.get('/chinhsuauser', (req, res) => {
  res.render('ThemUser')
  console.log("1");
});

module.exports = router;