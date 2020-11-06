'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // 查询所有数据
    async findAll() {
        return await this.app.mysql.query('select * from user', '');
    }
    // 插入数据
    async add(args) {
        // 参数1：表名， 参数2：要插入的数据
        const user = await this.app.mysql.insert('user', args);
        return user;
    }
    // 更新数据
    async update(args) {
        const user = await this.app.mysql.update('user', args);
        return user;
    }

}

module.exports = UserService;