<template>
  <div class="topBar">
    <div class="container">
      <ul @click.stop='routerClick'>
        <li @mouseover.stop="addrSelectIn" @mouseout.stop="addrSelectOut"
          :class="{topbarActive:popWindow1}">
          <span data-addr="addr">{{ addr }}</span>
          <span data-addr="icon" class="iconfont icon-down"></span>
          <div
            class="popWindow1"
            v-show="popWindow1"
            @mouseover.stop="pw1In"
            @mouseout.stop="pw1Out"
          >
            <ol @click.stop="addrSelectClick">
              <li v-for="(item, i) in addrList" :key="i">
                <a href="javascript:;" :data-addr="item.name">{{
                  item.title
                }}</a>
              </li>
            </ol>
          </div>
        </li>
        <li>
          <span data-path='/login'
            @mouseover.stop="lpwIn" @mouseout.stop="lpwOut">
            {{$store.state.UserInfo.info.username?$store.state.UserInfo.info.username:'亲,请登录'}}
          </span>
          <span data-addr="icon" class="iconfont icon-down" v-show="$store.state.UserInfo.info.username"></span>
          <div
            class="loginWindow"
            v-show="loginWindow && $store.state.UserInfo.info.username"
            @mouseover.stop="lpwindowIn" @mouseout.stop="lpwindowOut"
            >
            <div class="lWinBtns">
                <span>账号管理</span>
                <span @click.stop='quitLoginClick'>退出</span>
            </div>
            <div class="lWinInfo">
              <img src="../assets/getAvatar.jpg" alt="">
              <p>{{level[$store.state.UserInfo.info.level]}}</p>
            </div>
            <button>查看您的权益</button>
          </div>
        </li>
        <li><span data-path='/register' v-show="!$store.state.UserInfo.info.username">免费注册</span></li>
        <li><span>手机逛淘宝</span></li>
      </ul>
      <ul @click.stop='routerClick'>
        <li
          @mouseover.stop="rightPopMenuIn"
          @mouseout.stop="rightPopMenuOut"
          data-tag="p2"
          :class="{topbarActive:rightPopdow.p2}"
        >
          <span>我的淘宝</span>
          <span class="iconfont icon-down"></span>
          <div
            class="popWindow2"
            v-show="rightPopdow.p2"
            @mouseover.stop="rightPopWinowIn"
            @mouseout.stop="rightPopWinowOut"
          >
            <p>已买到的宝贝</p>
            <p>我的足迹</p>
          </div>
        </li>
        <li>
          <span class="iconfont icon-Cart"></span>
          <span data-path='/cart'>购物车</span>
          <span>{{$store.state.UserInfo.info.cart? $store.state.UserInfo.info.cart.length : 0}}</span>
        </li>
        <li
          @mouseover.stop="rightPopMenuIn"
          @mouseout.stop="rightPopMenuOut"
          data-tag="p3"
          :class="{topbarActive:rightPopdow.p3}"
        >
          <span class="iconfont icon-xing"></span>
          <span>收藏夹</span>
          <div
            class="popWindow3"
            v-show="rightPopdow.p3"
            @mouseover.stop="rightPopWinowIn"
            @mouseout.stop="rightPopWinowOut"
          >
            <p>已买到的宝贝</p>
            <p>我的足迹</p>
            <p>我的足迹</p>
          </div>
        </li>
        <li><span>商品分类</span></li>
        <li><span>免费开店</span></li>
        <li
          @mouseover.stop="rightPopMenuIn"
          @mouseout.stop="rightPopMenuOut"
          data-tag="p4"
          :class="{topbarActive:rightPopdow.p4}"
        >
          <span>千牛卖家中心</span>
          <span class="iconfont icon-down"></span>
          <div
            class="popWindow4"
            v-show="rightPopdow.p4"
            @mouseover.stop="rightPopWinowIn"
            @mouseout.stop="rightPopWinowOut"
          >
            <p>已买到的宝贝</p>
            <p>我的足迹</p>
            <p>我的足迹</p>
            <p>我的足迹</p>
            <p>我的足迹</p>
            <p>我的足迹</p>
            <p>我的足迹</p>
          </div>
        </li>
        <li
          @mouseover.stop="rightPopMenuIn"
          @mouseout.stop="rightPopMenuOut"
          data-tag="p5"
          :class="{topbarActive:rightPopdow.p5}"
        >
          <span>联系客服</span>
          <span class="iconfont icon-down"></span>
          <div
            class="popWindow5"
            v-show="rightPopdow.p5"
            @mouseover.stop="rightPopWinowIn"
            @mouseout.stop="rightPopWinowOut"
          >
            <p>已买到的宝贝</p>
            <p>我的足迹</p>
            <p>我的足迹</p>
          </div>
        </li>
        <li>
          <span class="iconfont icon-menu"></span>
          <span>网站导航</span>
          <span class="iconfont icon-down"></span>
        </li>
      </ul>
      <!-- 网站导航弹窗 -->
      <div class="navbarPopWindow" v-show="nPopWindow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popWindow1: false,
      t1: null,
      rightPopdow: { p2: false, p3: false, p4: false, p5: false },
      nPopWindow:false, //导航弹窗
      loginWindow:false, //用户登录弹窗
      loginWindowT:null,
      level:{1:'普通会员',2:'金牌会员',3:'钻石会员'},

      addr: "中国",
      addrList: [
        { name: "中国", title: "中国" },
        { name: "中国香港", title: "中国香港" },
        { name: "中国澳门", title: "中国澳门" },
        { name: "中国台湾1", title: "中国台湾1" },
        { name: "中国台湾2", title: "中国台湾2" },
        { name: "中国台湾3", title: "中国台湾3" },
        { name: "中国台湾4", title: "中国台湾4" },
        { name: "中国台湾5", title: "中国台湾5" },
        { name: "中国台湾6", title: "中国台湾6" },
        { name: "中国台湾7", title: "中国台湾7" },
        { name: "中国台湾8", title: "中国台湾8" },
      ],
    };
  },


  methods: {
    lpwindowOut(){
       this.loginWindowT =  setTimeout(() => {
        this.loginWindow = false
     }, 200);
    },
    lpwindowIn(){
      if(this.loginWindowT){
        clearTimeout(this.loginWindowT)
      }
      this.loginWindow = true
    },
    lpwIn(){
      if(this.loginWindowT){
        clearTimeout(this.loginWindowT)
      }
      this.loginWindow = true
    },
    lpwOut(){
     this.loginWindowT =  setTimeout(() => {
        this.loginWindow = false
     }, 200);
    },
    // 退出登录 
    quitLoginClick(){
      // 清除用户信息
      this.$cookie.delByName('loginState')
      this.$store.commit('UserInfo/setInfo',{})
      this.$router.push('/')
    },
    routerClick(ev){
      let path = ev.target.dataset.path
      console.log( path )
      if(path){
        if('/login' == path && this.$store.state.UserInfo.info.username){
          return
        }else if('/cart' == path){
          this.$router.push(`/cart/${encodeURI(JSON.stringify([]))}`)
          return
        } 

        this.$router.push(path)
      }
    },
    rightPopWinowIn(ev){
      if(this.t1){
        clearTimeout(this.t1)
      }
    },
    rightPopWinowOut(ev){
        this.t1 = setTimeout(() => {
          this.rightPopdow = { p2: false, p3: false, p4: false, p5: false }
        }, 200);
    },
    rightPopMenuIn(ev) {
      let key = ev.target.parentNode.dataset.tag;
      if ("SPAN" == ev.target.nodeName && key) {
        if (this.t1) {
          clearTimeout(this.t1);
        }
        this.rightPopdow = { p2: false, p3: false, p4: false, p5: false }
        this.rightPopdow[key] = true
      }
    },
    rightPopMenuOut(ev) {
      let key = ev.target.parentNode.dataset.tag;
      if ("SPAN" == ev.target.nodeName && key) {
        this.t1 = setTimeout(() => {
          this.rightPopdow[key] = false;
        }, 200);
      }
    },
    addrSelectClick(ev) {
      if ("A" == ev.target.nodeName) {
        this.addr = ev.target.dataset.addr;
      }
    },
    addrSelectIn(ev) {
      if (ev.target.dataset.addr) {
        if (this.t1) {
          clearTimeout(this.t1);
        }
        this.popWindow1 = true;
      }
    },
    addrSelectOut(ev) {
      if (ev.target.dataset.addr) {
        this.t1 = setTimeout(() => {
          this.popWindow1 = false;
        }, 200);
      }
    },
    pw1In() {
      if (this.t1) {
        clearTimeout(this.t1);
      }
    },
    pw1Out() {
      this.t1 = setTimeout(() => {
        this.popWindow1 = false;
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
@height: 36px;
@color: #3c3c3c;

.topbarActive{
  background: #fff;
  >span&:hover{
           color:@color;
         }  
}

.pwPublic {
  background: #fff;
  border: 1px solid #eee;
  border-top: none;
  > p {
    padding: 6px 4px;
    cursor: pointer;
    &:hover {
      background: #f4f4f4;
    }
  }
}
.topBar {
  background: #f5f5f5;

  .container {
    display: flex;
    position: relative;
    justify-content: space-between;
    > ul {
      display: flex;
      > li {
        cursor: pointer;
        margin-right: 10px;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
        .icon-down {
          margin-left: 4px;
        }
        .icon-menu,
        .icon-xing,
        .icon-Cart {
          margin-right: 4px;
        }
        .icon-xing {
          font-size: 10px;
        }

        >span {
          display: inline-block;
          height: @height;
          line-height: @height;
          &:hover{
            color: rgb(250, 79, 79);
          }  
        }

      }
      // 用户登录信息弹窗
      .loginWindow{
        position: absolute;
        top: @height;
        left: 0;
        background: #fff;
        border: 1px solid #eee;
        border-top: none;
        width: 260px;
        padding: 15px;
        .lWinBtns{
          text-align: right;
          span{
            padding: 0 10px;
            &:last-child{
              border-left: 1px solid rgb(212, 212, 212);
            }
          }
        }
        .lWinInfo{
          display: flex;
          align-items: center;
          img{
            width: 50px;
            height: auto;
            border-radius: 50%;
            margin-left: 20px;
          }
          p{
            margin-left: 20px;
          }
        }

        >button{
          cursor: pointer;
          width: 100%;
          height: 30px;
          background: rgba(248, 147, 75, 0.705);
          font-size: 14px;
          margin-top: 20px;
        }
        
      }
      // 地址栏弹窗
      .popWindow1 {
        position: absolute;
        top: @height;
        left: 0;
        width: 250px;
        height: 270px;
        background: #fff;
        border: 1px solid #eee;
        border-top: none;
        overflow-x: hidden;
        overflow-y: auto;
        a {
          color: @color;
          font-size: 12px;
        }
        li {
          padding: 10px;
          cursor: pointer;
          &:hover {
            background: #f4f4f4;
          }
        }
      }
      // 我的淘宝弹窗
      .popWindow2,
      .popWindow3,
      .popWindow4,
      .popWindow5 {
        position: absolute;
        left: 0;
        top: @height;
        width: 90px;
        .pwPublic();
      }
    }

    .iconfont {
      font-size: 12px;
    }
    .navbarPopWindow{
      position:absolute;
      left: 0;
      right: 0;
      top: @height;
      height: 300px;
      background: red;
    }
  }
}
</style>



<i18n locale="en">
{
  "hello": "hello world!"
}
</i18n>

<i18n locale="zh">
{
  "hello": "你好 i18n"
}
</i18n>