<template>
  <div class="my">
    <div class="box">
      <!-- 头部信息栏 -->
      <div class="detailed">
        <ul class="detailedTop">
          <ul class="dtLeft">
            <router-link to="">
              <img class="tx" src="../assets/my/tx.jpg" />
            </router-link>
            <router-link to="" class="username">
              爱吃橙汁沙冰的钢铁侠
            </router-link>
          </ul>
          <ul class="dtRight">
            <router-link to="/mailList" class="dtRights">
              <img src="../assets/my/lxr1.png">
            </router-link>
            <router-link to="" class="dtRights">
              <img src="../assets/my/sz1.png" >
            </router-link>
          </ul>
        </ul>

        <ul class="detailedBottom">
          <router-link to="/myFavorite">
            <span>156</span>
            <span class="fs">收藏夹</span>
          </router-link>
          <router-link to="/global">
            <span>65</span>
            <span class="fs">关注店铺</span>
          </router-link>
          <router-link to="/footprint">
            <span>86</span>
            <span class="fs">足迹</span>
          </router-link>
          <router-link to="">
            <span>13</span>
            <span class="fs">红包卡券</span>
          </router-link>
        </ul>
      </div>
      <!-- 我的订单 -->
      <div class="order">
        <div class="oMain">
          <ul class="orderTop">
            <router-link to="">
              <span class="ott">我的订单</span>
            </router-link>
            <router-link to="">查看全部订单 &gt;</router-link>
          </ul>

          <ul class="orderList">
            <router-link to="">
              <img src="../assets/my/qb.png" />
              <span>待付款</span>
            </router-link>
            <router-link to="">
              <img src="../assets/my/dfh.png" />
              <img class="sz" src="../assets/my/2.png">
              <span>待发货</span>
            </router-link>
            <router-link to="">
              <img src="../assets/my/dsh.png" />
              <img  class="sz" src="../assets/my/1.png">
              <span>待收货</span>
            </router-link>
            <router-link to="">
              <img src="../assets/my/pj.png" />
              <img class="sz" src="../assets/my/5.png">
              <span>评价</span>
            </router-link>
            <router-link to="">
              <img src="../assets/my/tk.png" />
              <span>退款/售后</span>
            </router-link>
          </ul>

          <div class="orderBotttom">
              <router-link to="">
                <h6 class="otitle">
                  <span>最新物流</span>
                  <span>10-26</span>
                </h6>
                <div class="wuliu">
                  <img  class="ip" src="../assets/my/iph12.png">
                  <div class="wlright">
                    <div class="dq">
                      <img class="cart" src="../assets/my/ylj.png" >
                      <span class="ysz">运输中</span>
                    </div>
                    <span class="ys">广州转运中心公司 已发出,下一站 深圳转运中心</span>
                  </div>
                </div>
              </router-link>
          </div>
        </div>
      </div>
      <!-- 必备工具 -->
      <div class="tool">
        <div class="tmain">
          <ul class="toolTop">
            <router-link to="">
              <span class="ott">必备工具</span>
            </router-link>
            <router-link to="">查看全部工具 &gt;</router-link>
          </ul>

          <ul class="tlist">
            <router-link to="" class="timg">
              <img src="../assets/my/mrfx.png" />
              <span>每日返现</span>
            </router-link>
            <router-link to="" class="timg">
              <img src="../assets/my/lqzx.png" />
              <span>领券中心</span>
            </router-link>
            <router-link to="" class="timg">
              <img src="../assets/my/xzhq.png" />
              <span>闲置换钱</span>
            </router-link>
            <router-link to="" class="timg">
              <img src="../assets/my/kfxm.png" />
              <span>客服小蜜</span>
            </router-link>
            <router-link to="" class="timg">
              <img src="../assets/my/hb.png" />
              <span>花呗</span>
            </router-link>
            <router-link to="" class="timg">
              <img src="../assets/my/cnyz.png" />
              <span>菜鸟驿站</span>
            </router-link>
            <router-link to="" class="timg">
              <img src="../assets/my/wdpj.png" />
              <span>我的评价</span>
            </router-link>
            <router-link to="" class="timg">
              <img src="../assets/my/zthf.png" />
              <span>主题换肤</span>
            </router-link>
          </ul>
        </div>
      </div>
      <!-- 弹窗 -->
      <router-link to="" v-if="aswitch">
        <div class="tc">
          <img class="tao" src="../assets/my/tao.png" @click.stop="closeClick">
          <img class="close" src="../assets/my/close.png">
          <p class="dakai">打开App</p>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
    aswitch : true,
      
    };

  },
  methods:{
    // 弹窗开关
    closeClick(){
      this.aswitch = false  
    }

    
  }
};
</script>

<style lang="less" scoped>
// 顶部信息
.detailed {
  height: 10.5rem;
  background-image: url(../assets/my/bj.jpg);
  background-size: 100% 100%;
  background-repeat: repeat-y;
  a {
    color: #fff;
  }
  .detailedTop {
    height: 5.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-top: 0.625rem;
    .dtLeft {
      display: flex;
      align-items: center;
    }
    .tx {
      width: 2.9375rem;
      height: 2.9375rem;
      border-radius: 50%;
      margin: 1.75rem 0 0 1.125rem;
      border: 1px solid white;
    }
    .username {
      font-size: 1.25rem;
      font-weight: 700;
      margin-left: 0.9375rem;
    }
    .dtRights {
      margin-right: 0.625rem;
      img{
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
  .detailedBottom {
    height: 4.1875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 1.875rem;
    a {
      font-size: 0.875rem;
    }
    span {
      display: block;
      text-align: center;
    }
    .fs {
      font-size: 0.75rem;
      margin-top: 0.625rem;
    }
  }
}
// 我的订单
.order {
  height: 13.875rem;
  box-sizing: border-box;
  padding-top: 0.75rem;
  .oMain {
    height: 12.4375rem;
    margin: 0 0.75rem;
    background: #fff;
    border-radius: 0.625rem;
    .orderTop {
      height: 2.3125rem;
      line-height: 2.3125rem;
      border-bottom: 1px solid #eeeee7;
      display: flex;
      justify-content: space-between;
      padding: 0px 0.625rem;
      .ott {
        font-size: 0.875rem;
        color: #333;
        font-weight: 600;
      }
      a {
        font-size: 0.75rem;
        color: #999;
      }
    }
    .orderList {
      display: flex;
      height: 4.75rem;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 1.25rem 0.9375rem 0.625rem 1.25rem;
      >a{
      position: relative;
      }
      img {
        width: 1.8125rem;
        height: 1.8125rem;
        margin-left: 0.3125rem;
      }
      .sz{
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
        top: -0.375rem;
        left: 1rem;
      }
      span {
        display: block;
        font-size: 0.75rem;
        color: #666;
      }
    }
    .orderBotttom{
      width: 20.4375rem;
      height: 4.5rem;
      margin: 0 auto;
      box-sizing: border-box;
      background: #F6F6F6;
      color: #999;
      .otitle{
        display: flex;
        justify-content: space-between;
        span{
          padding: 0.3125rem 0.625rem;
          font-weight: 100;
        }
      }
      .wuliu{
        display: flex;
        .ip{
          width: 2.0625rem;
          height: 2.0625rem;
          border-radius: 10%;
          margin-left:0.625rem ;
        }
        .cart{
          width: 1.125rem;
          height: 1.125rem;
        }
        .ys{
          display: block;
          font-size: 0.75rem;
          display: block;
          margin-top: 0.3125rem;
        }
        .ysz{
          color: #3897E0;
          font-size: 0.8125rem;
          margin-left: 0.3125rem;
          display: inline-block;
        }
        .dq{
          display: flex;
          align-items: center;
        }
        .wlright{
          margin-left: 0.625rem;
        }
      }
    }
  }
}
// 必备工具
.tool {
  height: 13.5625rem;
  box-sizing: border-box;
  .tmain {
    height: 12.8125rem;
    margin: 0 0.75rem;
    background: #fff;
    border-radius: 0.625rem;
    .toolTop {
      height: 2.3125rem;
      line-height: 2.3125rem;
      border-bottom: 1px solid #eeeee7;
      display: flex;
      justify-content: space-between;
      padding: 0px 0.625rem;
      .ott {
        font-size: 0.875rem;
        color: #333;
        font-weight: 600;
      }
      a {
        font-size: 0.75rem;
        color: #999;
      }
    }
    .tlist {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      > a {
        padding: 1rem 1rem 0.625rem 1.25rem;
      }
      img {
        width: 2rem;
        height: 2rem;
      }
      span {
        display: block;
        font-size: 0.75rem;
        color: #666;
      }
    }
  }
}
//弹窗
.tc{
  position: fixed;
  right:0.75rem;
  bottom: 8.125rem;
  .tao{
  width: 2.75rem;
  height: 2.75rem;
  }
  .dakai{
    background: url(../assets/my/bj.jpg);
    background-size: 100% 100%;
    background-repeat: repeat-y;
    font-size: 0.75rem;
    color: #FFF;
    border-radius: 0.3125rem;
    text-align: center;
    width: 3rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 100;
  }
  .close{
    width:1.125rem;
    height:1.125rem;
    position: absolute;
  }
}
</style>
