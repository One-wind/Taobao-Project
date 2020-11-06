'use strict';

const Service = require('egg').Service;

class UserService extends Service {
   
    // 插入测试数据
    async addTestDb(args) {
        // 参数1：表名， 参数2：要插入的数据
        const user = await this.app.mysql.insert('goods', args);
        return user;
    }

    // 查找有好货中人气最高的6条数据
    async findHaoHuo(args) {
        return await this.app.mysql.query('select id,imgs, name,info,zan from goods order by zan desc limit 0,6;', '');
    }
    // 猜你喜欢 模糊查询
    async findLike(args) {
        console.log( args )
        let sql = `select * from goods where name like '%${args.like}%' or  info like '%${args.like}%' or  price like '%?%' or pengJia like '%?%' limit ? ,?`
        return await this.app.mysql.query(sql,
                [parseInt(args.like),parseInt(args.like),
                parseInt(args.start),parseInt(args.end)]);
    }
    //  模糊查询 有总记录数
    async findLikeAll(args) {
        console.log( args )
        let sql = `select * from goods where name like '%${args.like}%' or  info like '%${args.like}%' or  price like '%?%' or pengJia like '%?%' limit ? ,?`
        let list =  await this.app.mysql.query(sql,
                [parseInt(args.like),parseInt(args.like),
                parseInt(args.start),parseInt(args.end)]);

        
        let sql2 = `select count(id) from goods where name like '%${args.like}%' or  info like '%${args.like}%' or  price like '%?%' or pengJia like '%?%' `
        let count =  await this.app.mysql.query(sql2,[parseInt(args.like),parseInt(args.like)]);    
        return { list, count:count[0]['count(id)']}          
        
    }
    // 通过ID查找指定商品
    async findById(args) {
        let sql = "select * from goods  where  id=? "
        return await this.app.mysql.query(sql,[parseInt(args.id)]);
    }
    
    // 更新购物车数据
    async updataUserCartInfo(args) {
        let sql = "update userinfo set cart=? where id=?"
        return await this.app.mysql.query(sql,[args.cartInfo,parseInt(args.id)]);
    }
    // 根据商品ID获取商品信息，可以查询到多条数据，（购物车用）
    async findGoodsByID(args) {
        
        // [1,3,3,5,6]
        let sql = "select *  from  goods where "
        if(args.ids.length == 1){
            sql += 'id=?' 
        }else{
            sql += 'id=?'
            for(let i=1; i<args.ids.length; i++){
                sql +=  ' or id=? '
            }
        }
        return await this.app.mysql.query(sql, args.ids);
    }

    

}

module.exports = UserService;