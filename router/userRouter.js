var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //neu chua co folder thi tao ra folder
      if(file.mimetyp == "image/jpeg" || file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
          var dir = './uploads';

          if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
          }
            cb(null, 'uploads')
      } else {
          cb(new Error('Không phải là ảnh'));

      } 
  },

  filename: function (req, file, cb) {
      let fileName = file.originalname;
      arr = fileName.split('.');

      let newFileName = '';

      for(let i = 0; i < arr.length; i++) {
        if (i != arr.length - 1) {
          newFileName += arr[i];
        } else {
          newFileName += ('-' + Date.now() + '.' + arr[i]);
        }
      }
      cb(null, newFileName)
      
  }
})

var upload = multer({ storage: storage })

const users = [];

router.post('/dangki', upload.single('file'), (req, res) => {
  const fullName = req.body.fullname;
  const email = req.body.email;
  const password = req.body.password;

  if (email == "" || password == "" || fullName == "" || !req.file) {
    res.status(400).send('Không được để trống các trường');
  } else {
    const newUser = {
    email: email,
    password: password,
    fullName: fullName,
    avatar: req.file
    };
    users.push(newUser);
    res.redirect('DangNhap')
  }
  console.log("assaas", users);
});


router.post('/dangnhap', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  console.log("emaillll: ", email);
  console.log("password: ", password);

  if(!email == "" && !password == "") {
    for(let i = 0; i <= users.length; i++) {
      if(email == users[i].email && password == users[i].password) {
        res.redirect('TrangQuanTri')
        return
      } else {
        res.send("Tài khoản hoặc mật khẩu không đúng!")
      }
    }
  } else {
    console.log("Không được để trống các trường!");
  }
  
})

router.get('/dangki', function (req, res) {
  res.render('DangKi') //file name
  console.log("dang ki");
})

router.get('/dangnhap', function (req, res) {
  res.render('DangNhap') //file name
  console.log("Dang nhap");
})


module.exports = router