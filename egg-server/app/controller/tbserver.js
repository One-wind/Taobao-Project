'use strict';

const Controller = require('egg').Controller;





module.exports = class extends Controller {
  async index() {
    const { ctx } = this;
    let result = ''
    // 获取 post参数
    const param = ctx.request.body
    console.log(param.flag);
    if('login' ==  param.flag){
      result = await ctx.service.tbService.login(param)
    }else if('findall' == param.flag){ //查找 所有
      result = await ctx.service.tbService.findAll(param)
    }else if('delbyid' == param.flag){ //删除指定ID的数据
      result = await ctx.service.tbService.delByID(param)
    }else if('findbyid' == param.flag){ //查找指定ID的数据
      result = await ctx.service.tbService.findByID(param)
    }
    // 添加数据
    else if('add' == param.flag){
      result = await ctx.service.tbService.add(param)
    }
    // 更新数据
    else if('updata' == param.flag){
      result = await ctx.service.tbService.updata(param)
      
    }
    else if( 'qiandiao' == param.flag ){
      result = await ctx.service.tbService.findAllM(param)
      console.log('qiandiao');
    }
    
    else {
      result = {state:'error'}
    }
    // 返回响应数据给调用者
    ctx.body = result



  }
}
