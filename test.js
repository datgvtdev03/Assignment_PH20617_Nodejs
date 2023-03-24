const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/signup', (req, res, next) => {
  const { username, email, password } = req.body;
  const user = new User({
    username: username,
    email: email,
    password: password
  });
  user.save((err) => {
    if (err) {
      return res.status(400).json({ message: 'Error creating user' });
    }
    res.status(201).json({ message: 'User created' });
  });
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return res.status
    }
  })
})
