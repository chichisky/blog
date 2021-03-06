var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')

var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    // 注意这里不要写Date.now()， 因为会即刻调用
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  birthday: {
    type: Date
  },
  status: {
    type: Number,
    // 0 : 可以登录使用
    // 1 : 不可以评论
    // 2 : 不可以登录
    default: 0
  }
}) )