/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602318765784_3587';
  config.cluster = {
    listen: {
      hostname: '192.168.7.56', //也就是“localhost”,不能在前面添加协议
      port: 3000  //默认值是7001
    }
  };


  // add your middleware config here
  config.middleware = [];
  /***************设置可以跨域 Start*****************/
  config.security = {
    csrf: {
      enable: false,
      csrf: false,
    },
    domainWhiteList: ['*']  //白名单
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  /***************设置可以跨域 end*****************/

  // add your user config here
  const userConfig = {

    // 配置egg-mysql 
    mysql: {
      client: {
        // host
        host: '192.168.7.56',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'mydb',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
