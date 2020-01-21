'use strict'

const Router = require('koa-router');
const User = require('../app/controllers/user');
const EntBaseInfo = require('../app/controllers/entBaseInfo');
const App = require('../app/controllers/app');

module.exports = function(){
  var router = new Router({
    prefix: '/api'
  });

  // user
  router.post('/u/signup', App.hasBody, User.signup);
  router.post('/u/update', App.hasBody, App.hasToken, User.update);
  router.post('/u/findByPhoneNumber', App.hasBody, User.selectUserByPhoneNumber);
  router.post('/u/login', App.hasBody, User.queryLogin);
  // entBaseInfo
  router.post('/ent/baseInfo', App.hasBody, EntBaseInfo.findByUserId);
  // DB Interface test
  router.get('/test/user/users', User.users);
  router.post('/test/user/add', User.addUser);
  router.post('/test/user/delete', User.deleteUser);

  return router
}
