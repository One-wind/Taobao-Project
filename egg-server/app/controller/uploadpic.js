'use strict';
const path = require("path");
const fs = require('fs');
const Controller = require('egg').Controller;





module.exports = class extends Controller {
  async index() {
    const { ctx } = this;
    // 获取 post参数
    const param = ctx.request.body

    const file = ctx.request.files['pic']
    console.log( ctx.request.files )
    if (!file) {
      ctx.body = {
        state: 'error',
        stateText: '参数错误'
      }
      return
    }
    const targetPath = `app/public/upload/${new Date().getTime()}-${file.name}`
    try {
      //读取文件
      let fileData = fs.readFileSync(file.path)
      // 写入文件
      fs.writeFileSync(targetPath, fileData)
    } catch (error) {

    }finally{
      ctx.body = targetPath
    }

  }

  async uploadimgs() {
    const { ctx } = this;
    // 获取 post参数
    const param = ctx.request.body

    const files = ctx.request.files
    let imgPath=[] //已经保存到服务器的图片路径
    for(const key in files){
      const file = files[key]
      const targetPath = `public/upload/${new Date().getTime()}-${file.name}`
      try {
        //读取文件
        let fileData = fs.readFileSync(file.path)
        // 写入文件
        fs.writeFileSync( 'app/'+targetPath, fileData)
      } catch (error) {
        ctx.body = {
          stateText:'uploadError',
          errImgName:file.name,
          successPath:imgPath
        }
      }finally{
       imgPath.push(targetPath)
      }
     
    }


    ctx.body = {
      stateText:'uploadSuccess',
      imgPath:imgPath
    }
    

  }

  // 删除图片
  async delpic() {
    const { ctx } = this;
    // 获取 post参数
    const param = ctx.request.body
    param.path
    try {
      fs.unlinkSync(`app/${param.path}`);
    } catch (err) {
      ctx.body={
        stateText:'delError'
      }
      return
    }
    ctx.body = {
      stateText:'delSuccess',
    }
    

  }

}
