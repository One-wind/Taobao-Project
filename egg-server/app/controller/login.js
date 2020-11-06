'use strict';

const Controller = require('egg').Controller;



module.exports = class extends Controller {
  async index() {
    const { ctx } = this;
    const param = ctx.request.body
    console.log(param.username)
    console.log(param.pwd)

    if (param.username && param.pwd) {
      // const sql = `select * from userinfo where username=${param.username}`
      let result = await this.app.mysql.query('select * from userinfo where username=?', param.username);
      if (result.length) {
        // ctx.body = result[0]
        if (param.pwd == result[0].password) {
          try {
            if (result[0].cart) {
              result[0].cart = JSON.parse(result[0].cart)
            }
            if (result[0].collgoods) {
              result[0].collgoods = JSON.parse(result[0].collgoods)
            }
            if (result[0].collshop) {
              result[0].collshop = JSON.parse(result[0].collshop)
            }
            if (result[0].receive) {
              result[0].receive = JSON.parse(result[0].receive)
            }
            if (result[0].send) {
              result[0].send = JSON.parse(result[0].send)
            }
            if (result[0].pay) {
              result[0].pay = JSON.parse(result[0].pay)
            }
            if (result[0].evaluate) {
              result[0].evaluate = JSON.parse(result[0].evaluate)
            }
          } catch (error) {
            ctx.body = {
              state: 'error',
              stateText:'数据错误'
            }
          }

          ctx.body = {
            state: 'success',
            stateText: '登录成功',
            msg: result[0]
          }
        } else {
          ctx.body = {
            state: 'error',
            stateText: '验证密码错误'
          }
        }


      } else {
        ctx.body = { state: 'error', stateText: '用户不存在' }
      }
    } else {
      ctx.body = {
        state: 'error',
        stateText: '用户名密码为空'
      }
    }
  }
}
