<template>
  <div id="app">
    <router-view class="rView"/>
  </div>
</template>

<style lang="less">
*{padding: 0;margin: 0;}
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 14px;
  color: #606266;
}
html,body,#app,.rView{
  width: 100%;
  height: 100%;
}

ul,ol{
  list-style: none;
}
 

.container{
  width: 1000px;
  margin: 0 auto;
}


</style>
