var express = require('express');
var User = require('../models/user');
var md5 = require('blueimp-md5');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', {
    user: req.session.user
  })

});

router.get('/register', (req, res) => {
  res.render('register.html')
});

router.post('/register', async (req, res) => {
  var body = req.body;
  try {
    if (await User.findOne({
        email: body.email
      })) {
      return res.status(200).json({
        err_code: 1,
        message: 'Email aleady exists.'
      })
    }

    if (await User.findOne({
        nickname: body.nickname
      })) {
      return res.status(200).json({
        err_code: 2,
        message: 'Nickname aleady exists.'
      })
    }

    // 对密码进行md5双层加密
    body.password = md5(md5(body.password));

    // 创建用户
    await new User(body).save((err, user) => {
      if (!err) {
        req.session.user = user;
        // console.log(req.session.user);
      }
      // 生成session
      res.status(200).json({
        err_code: 0,
        message: 'Ok.'
      })
    });


  } catch (error) {
    return res.status(500).json({
      err_code: 500,
      message: error.message
    })
  }

});

router.get('/login', (req, res) => {
  res.render('login.html')
});

router.post('/login', (req, res) => {
  var body = req.body;
  body.password = md5(md5(body.password));
  try {
    User.findOne(body, (err, user) => {



      if (!user) {
        return res.status(200).json({
          err_code: 1,
          message: 'Email or password is invalid.'
        })
      }
      req.session.user = user;

      res.status(200).json({
        err_code: 0,
        message: 'OK'
      })
    })

  } catch (error) {
    return res.status(500).json({
      err_code: 500,
      message: error.message
    })
  }
});

router.get('/logout', (req, res) => {

  req.session.user = null;

  res.redirect('/login')
});

module.exports = router;