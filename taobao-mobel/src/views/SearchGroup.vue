<template>
  <div class="searchgroup">
    <div class="searchTop">
      <div class="searchinput">
        <span>宝贝</span>
        <span class="iconfont icon-down"></span>
        <input type="text" @click="inputChange"/>
        <span class="iconfont icon-zoom"></span>
      </div>
      <router-link
        to="/"
        class="iconfont icon-home"
      > </router-link>
    </div>
    <div class="selectBar">
      <div class="totalOrder">综合排序<span class="iconfont icon-down"></span></div>
      <span class="bar"></span>
      <div class="sellNum">销量优先</div>
      <span class="bar"></span>
      <div class="selectOrder"><span class="iconfont icon-sift"></span> 筛选</div>
      <div class="iconfont icon-list"></div>
    </div>
    <div class="goodsInfor">
      <ul>
        <li>
          <div class="goodsName">
            <div class=" ">
              <img src="https://gw1.alicdn.com/bao/uploaded/i1/1104878464/O1CN01bwPmrd2COYul01OFy_!!1104878464-0-lubanu-s.jpg_210x210.jpg" alt="" >
            </div>
            <div class="listItem">
              <router-link to="">游乐者拉杆箱行李箱旅行箱20男女学生24密码皮箱子28寸</router-link>
              <p>￥999.00</p>
              <div class="main">
                <span>免运费</span>
                <span>100万+人付款</span>
                <span>上海</span>
              </div>
            </div>
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods:[0],
    }
  },
  // created(){
  //   this.initData()
  // },
  methods:{
    inputChange(ev){
      this.$router.push("/search")
    },
    // initData(){
    //   this.getGoods()
    // },
    // getGoods(){
    //   this.$ajax({
    //     method: "post",
    //     url: this.$url + "/db",
    //     data: {
    //       flag: "findById",
    //     },
    //   })
    //     .then((res) => {
    //       this.goods = res
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  },
};
</script>

<style lang="less" scoped>
.searchgroup {
  height: 45px;
  line-height: 32px;
  .searchTop {
    display: flex;
    background: #f6f6f6;
    align-items: center;
    justify-content: space-between;
    .searchinput {
      display: flex;
      height: 32px;
      color: #999;
      margin: 0 0.3125rem 0 0.3125rem;
      border: 1px solid #e3e3e5;
      border-radius: 5px;
      background: #e3e3e5;
      flex-grow: 1;
      input {
        flex-grow: 1;
        background: #e3e3e5;
        outline: none;
        border: none;
        text-indent: 0.6rem;
      }
      span {
        &:first-child {
          padding-left: 8px;
        }
      }
    }
    .icon-home {
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 25px;
      margin-left: -5px;
    }
    .icon-zoom {
      width: 30px;
      height: 30px;
      font-size: 18px;
      text-align: center;
    }
    .icon-down {
      font-size: 12px;
      padding-left: 3px;
    }
  }
  .selectBar {
    display: flex;
    align-items: center;
    text-align: center;
    height: 39px;
    background: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .totalOrder {
      width: 38%;
      height: 39px;
      line-height: 39px;
    }
    .sellNum {
      height: 39px;
      line-height: 39px;
      width: 97px;
    }
    .selectOrder {
      width: 97px;
      line-height: 39px;
      height: 39px;
      border-right: 1px solid #ccc;
    }
    .iconfont {
      height: 39px;
      line-height: 39px;
      width: 50px;
    }
    .icon-sift {
      font-size: 15px;
    }
    .bar {
      height: 20px;
      width: 1px;
      background: #ccc;
    }
  }
  .goodsInfor {
    background: #f9f9f9;
    padding: 0 12px;
    border-bottom: 1px solid #ccc;
    .goodsName {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .listItem{
        // height: 94px;
        width: 230px;
        margin: 4px 15px 6px ;
        .main{
          font-size: 13px;
          color: #999;
          display: flex;
          justify-content: space-between;
        }
        a{
          font-size: 14px;
          color: #4b566a;
        }
        p{
          color: #eb525c;
          font-size: 14px;
        }
      }
      img{
        width: 100px;
        height: 100px;
      }
    }
    
  }
}
</style>