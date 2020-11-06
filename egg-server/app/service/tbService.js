'use strict';
const fs = require('fs');
const { jsonp } = require('../../config/plugin');

const Service = require('egg').Service;

class UserService extends Service {
    // 管理员登录
    async login(param) {
        const sql = "select admin,id,username from userinfo where username=? and password=? "
        let result = await this.app.mysql.query(sql,[ param.username,param.pwd]);
        console.log( result[0] )
        if(result.length){
            result = result[0]
            result.stateText = 'success'
        }else{
            result = {stateText:'error'}
        }
        return result
    }
    // 查询所有数据
    async findAll(param) {
        const sql = "select id,name,imgs from goods order by id desc limit ?,?"
        const sql2 = "select  count(*) as total from goods order by id desc"
        let list = await this.app.mysql.query(sql,[parseInt( param.start),parseInt(param.num)]);
        let total = await this.app.mysql.query(sql2,null);
        total = total[0]
        for(let i=0; i<list.length; i++){
            try {
                list[i].imgs = JSON.parse(list[i].imgs)
            } catch (error) {
            }
        }
        return {
            list, total:total.total,
            stateText:'success'
        }
    }
    // 查询所有数据（淘宝移动端）
    async findAllM(param) {
        const sql = "select id,title,subtitle from qiandiaogoods order by id"
        // const sql2 = "select  count(*) as total from goods order by id desc"
        let list = await this.app.mysql.query(sql);
        // let total = await this.app.mysql.query(sql2,null);
        // total = total[0]
        // for(let i=0; i<list.length; i++){
        //     try {
        //         list[i].imgs = JSON.parse(list[i].imgs)
        //     } catch (error) {
        //     }
        // }
        return {
            // list, total:total.total,
            list,
            stateText:'success'
        }
    }

   
    // 删除指定id 的数据
    async delByID(param) {
         // 删除图片
         const sql2 = 'select imgs from goods where id=?'
         let value = await this.app.mysql.query(sql2,[parseInt( param.id)]);
        try {
            let imgs = JSON.parse( value[0]['imgs'] )
            for(let i=0; i<imgs.length; i++){
                fs.unlinkSync(`app/${imgs[i]}`); 
            }
        } catch (error) {
            console.log(error)
            console.log( '删除图片失败' )
        }
        // 删除数据
        const sql = "delete from goods where id=?"
        let list = await this.app.mysql.query(sql,[parseInt( param.id)]);
        return list
    }
    // 查找指定id 的数据
    async findByID(param) {
        const sql = "select * from goods where id=?"
        let list = await this.app.mysql.query(sql,[parseInt( param.id)]);
        let result = null
        if(list.length){
           try {
            list[0].imgs = JSON.parse(list[0].imgs)
           } catch (error) {
           }
            result = {
                stateText:'success',
                data:list[0]
            }
        }else{
            return{
                stateText:'error'
            }
        }
        return result
    }


    // 插入数据
    async add(param) {
        const sql = "insert into goods (name, price, info, type, imgs) values  (?,?,?,?, ? ) "
        let result = await this.app.mysql.query(sql,
            [param.name, 
            parseFloat(param.price),
            param.info,
            parseInt( param.type),
            param.imgs ])
        if(result.affectedRows && 1 == result.affectedRows){
            return{
                stateText:'addSuccess'
            }
        }else{
            return{
                stateText:'addError'
            } 
        }
    }


    // 更新数据
    async updata(param) {
        const sql = "update goods set name=?,info=?,price=?,pengJia=?,showCang=?,shouChu=?,type=? where id=? "
        let result = await this.app.mysql.query(sql,
            [param.name, param.info,
            parseFloat(param.price),
            parseInt(param.pengJia),
            parseInt(param.showCang),
            parseInt(param.shouChu),
            parseInt( param.type),
            parseInt(param.id )])
        if(result.affectedRows && 1 == result.affectedRows){
            return{
                stateText:'updataSuccess'
            }
        }else{
            return{
                stateText:'updataError'
            } 
        }
    }

}

module.exports = UserService;