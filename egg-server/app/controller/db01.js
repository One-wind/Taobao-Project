'use strict';

const Controller = require('egg').Controller;





module.exports = class extends Controller {
  async index() {
    const { ctx } = this;
    let result = ''
    // 获取 post参数
    const param = ctx.request.body
    // 查找所有数据
    if ('findAll' === param.flag) {
      result = await ctx.service.db.findAll();
      // 插入数据
    }else if('add' === param.flag){
      result = await ctx.service.db.add({name:'小明',age:19});
      // 更新数据
    }else if('update' === param.flag){
      result = await ctx.service.db.update({id:8, name:'王明',age:99});

      // 添加测试数据
    }else if('addtestdata' === param.flag){
      for(let i=0; i<100; i++){
        let data = {
          name:"肖优秀真皮细高跟过膝瘦腿弹力靴"+i,
          info:"细跟尖头设计更显优雅女人味。",
          zan:Math.ceil( Math.random() * 1000),
          imgs:'["http://192.168.6.48:3000/public/home/havegoods/squareShoes.jpg","http://192.168.6.48:3000/public/home/havegoods/stockings.jpg","http://192.168.6.48:3000/public/home/havegoods/torreShoes.jpg","http://192.168.6.48:3000/public/home/havegoods/waterChannel.jpg"]',
          pengJia:Math.ceil( Math.random() * 1000),
          showCang:Math.ceil( Math.random() * 1000),
          price: Math.ceil( Math.random() * 1000),
          shouChu:Math.ceil( Math.random() * 1000),
          type:Math.ceil( Math.random() * 8),
        }
        await ctx.service.goodsDb.addTestDb(data);
      }
      // 查找有好货中人气最高的6条数据
    }else if('findHaoHuo' == param.flag){
      result =   await ctx.service.goodsDb.findHaoHuo();
    }else if('findLike' == param.flag){
      result =   await ctx.service.goodsDb.findLike({
        like:param.like,
        start:param.start, 
        end:param.end
      });

      for(let i=0; i<result.length; i++){
        result[i].imgs = JSON.parse(result[i].imgs)
      }
    }else if('findLikeAll' == param.flag){
      result =   await ctx.service.goodsDb.findLikeAll({
        like:param.like,
        start:param.start, 
        end:param.end
      });

      for(let i=0; i<result.list.length; i++){
        result.list[i].imgs = JSON.parse(result.list[i].imgs)
      }
    }else if('findById' == param.flag){
      // console.log( param.id )
      result =   await ctx.service.goodsDb.findById({id:param.id});
      if(result.length == 1){
        result = result[0]
        try {
          result.imgs = JSON.parse(result.imgs)
        } catch (error) {
          result.imgs = result.imgs
        }
      }else{
        result = {state:'error'} 
      }
    } else if('updataUserCartInfo' == param.flag){ //更新用户信息 （购物车信息）
      result =   await ctx.service.goodsDb.updataUserCartInfo({
        id:param.id,
        cartInfo:param.cartInfo
      });
    }
    
    else if('findGoodsByID'  == param.flag){ //根据商品ID获取商品信息，可以查询到多条数据，（购物车用）
      let ids = JSON.parse( decodeURI( param.ids ) )

      result =   await ctx.service.goodsDb.findGoodsByID({
        ids: ids,
      });
      
      for(const i in result){
        result[i].imgs = JSON.parse(result[i].imgs)
      }
    }


    
    
    
    else {
      result = {state:'error'}
    }
    // 返回响应数据给调用者
    ctx.body = result

  }
}
