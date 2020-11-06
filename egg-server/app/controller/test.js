'use strict';

const Controller = require('egg').Controller;


let data=[
  {name:'hello',age:19},
  {name:'hello',age:19},
  {name:'hello',age:19},
  {name:'hello',age:19},
  {name:'hello',age:19},
  {name:'hello',age:19},
  {name:'hello',age:19},
  {name:'hello',age:19},
]


module.exports = class  extends Controller {
  async index() {
    const { ctx } = this;
    console.log( ctx.request.body )
    // 返回响应数据
    ctx.body = data
    // post参数
   
  }
}
