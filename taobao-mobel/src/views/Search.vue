<template>
  <div>
    <div class="search" @click='bottomShowClick'>
      <div class="searchInput">
        <span @click.stop="selectListClick" data-key="fenlei">{{fenlei}}</span>
        <ul class="selectList" v-show="flag" @click.stop="addrSelectClick">
          <li v-for="(key, i) in fenleiList" :key="i">
            <span class="iconfont icon-dianpu"></span>
            <a href="javaScript:;" :data-key="key.name">{{ key.name }}</a>
          </li>
        </ul>
        <span class="iconfont icon-down"></span>
        <input type="text" @keydown.stop="keydownClick" v-model="msg"  @keyup.enter.stop="inputChange"/>
        <span class="iconfont icon-close" v-show="close"  @click.stop="closeClick" ></span>
        <span class="iconfont icon-zoom"></span>
      </div>
      <router-link to="/"  class="quxiao">取消</router-link>
    </div>

    <!-- 输入时的弹窗 -->
    <div class="searchPopWin" v-show="popWinGoods">
      <ol @click.stop="inputClick">
        <li v-for="(item, j) in popGoodsList" :key="j">
          <router-link to="" :data-msg="item.name" >{{item.name}}</router-link>
          <span class="iconfont icon-zoom"></span>
        </li>
      </ol>
    </div>
   
   <div class="login">
    <div class="banner" v-if="bannerActive">
      
      <img src="../assets/selectBanner.jpg" alt="图片加载失败">
      <span class="iconfont icon-close" @click="bannerCloseBtn"></span>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      bannerActive:true,
      flag: false,
      close: false ,
      popWinGoods: false,
      msg: "",
      fenlei: "宝贝",    
      fenleiList: [
        { name: "宝贝", img: "icon-baobei" },
        { name: "店铺", img: "icon-dianpu" },
        { name: "天猫", img: "icon-tianmao2" },
      ],
      popGoodsList: [
        { name: "热水器" },
        { name: "太阳能热水器" },
        { name: "燃气热水器" },
        { name: "电热水器" },
        { name: "热水器" },
      ],     
    };
  },
  created(){
    if(this.$cookie.get('gg')){
      this.bannerActive = false
    }
  },
  methods: {
    bannerCloseBtn(){
      this.bannerActive = false
      this.$cookie.add('gg','fklfjk',24*60)
    },

    // 显示宝贝，店铺或者天猫
    selectListClick(ev) { 
      this.flag=true
    },
    // 选择宝贝，店铺或者天猫
    addrSelectClick(ev) {
      if ("A" == ev.target.nodeName) {
        // console.log(ev.target.dataset.key)
        this.fenlei = ev.target.dataset.key;
        this.flag = false;       
      }
    },
    inputClick(ev) {
      if ("A" == ev.target.nodeName) {
        console.log(ev.target.dataset.msg);
        this.msg = ev.target.dataset.msg;
      }
    },
    // 鼠标按下时的弹窗
    keydownClick(ev) {
      this.close = true;
      this.popWinGoods = true;
    },
    
    // 清除按钮
    closeClick(ev) {
      this.msg = ''
    },
    // 回车触发跳转
    inputChange(ev){
      console.log(ev)
      this.$router.push("/searchgroup")
    },
    
  },
  

};
</script>

<style lang="less" scoped>
.search {
  height: 30px;
  background: #fff;
  display: flex;
  padding: 7px 10px;
  align-items: center;
  border-bottom: 1px solid rgb(226, 223, 223);
  .searchInput {
    background: rgb(226, 223, 223);
    display: flex;
    flex-grow: 1;
    line-height: 30px;
    border-radius: 3px;
    margin-right: 10px;
    padding-left: 10px;
    position: relative;
    span {
      font-size: 14px;
    }
    input {
      flex-grow: 1;
      border: none;
      outline: none;
      background: rgb(226, 223, 223);
      // background: red;
      margin-right: 15px;
    }
    .iconfont {
      margin-right: 10px;
    }
    .selectList {
      width: 140px;
      // height: 108px;
      border: 1px solid grey;
      border-radius: 5px;
      position: absolute;
      top: 40px;
      background: #484d50;
      color: #c7c8c9;
      li {
        border-bottom: 1px solid #707476;
        color: #c7c8c9;
        font-size: 14px;
        padding-left: 5px;
        display: flex;
        align-items: center;
        &:last-child {
          border-bottom: none;
          align-items: center;
        }
      }
      .iconfont {
        font-size: 20px;
        color: #c7c8c9;
      }
    }
  }
  .quxiao {
    font-size: 12px;
    color: #333;
    margin: 10px;
  }
}
.searchPopWin {
  background: #f9f9f9;
  li {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid rgb(202, 201, 201);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 14px;
      color: #666;
    }
  }
}
.login{
  height: 100%;
  .banner{
    img{
      width: 100%;
      height: auto;
      position: relative;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .icon-close{
      position: absolute;
      z-index: 900;
      bottom:47px;
      right: 0;
      font-size: 20px;
      color: #fff;
      background: #4d363644;
    }
  }
}
</style>
