'use strict';


//中间件 支持post请求获取参数
const koaBody = require('koa-body')({
  multipart: true,  // 允许上传多个文件
});




/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;


  router.get('/', controller.home.main);
  router.post('/test', koaBody, controller.test.index);
  // 登录
  router.post('/login', koaBody, controller.login.index);
  // 数据库
  router.post('/db', koaBody, controller.db01.index);

  // 服务端管理
  router.post('/tbserver', koaBody, controller.tbserver.index);

  // 图片上传，支持多图上传
  router.post('/uploadimgs', koaBody, controller.uploadpic.uploadimgs);

  // 删除指定图片
  router.post('/delpic', koaBody, controller.uploadpic.delpic);

  router.post('/upload', koaBody, controller.uploadpic.index);



};
