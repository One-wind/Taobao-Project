'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // 配置 egg-mysql
  mysql: {
    enable: true,
    package: 'egg-mysql',
  }
};
