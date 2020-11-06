<template>
  <div class="navbar" v-show="$store.state.hiddenBottom">
      <ul>
        <li><router-link to="/">
          <span class="iconfont icon-home"></span>
          <span>首页</span>
        </router-link></li>
        <li><router-link to="/cart">
          <span class="iconfont icon-cart"></span>
          <span>购物车</span>
        </router-link></li>
        <li><router-link to="/orderlist">
          <span class="iconfont icon-order"></span>
          <span>订单列表</span>
        </router-link></li>
        <li><router-link to="/my">
          <span class="iconfont icon-my"></span>
          <span>我的淘宝</span>
        </router-link></li>
        <li><router-link to="/more">
          <span class="iconfont icon-more"></span>
          <span>更多</span>
        </router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
 
}
</script>

<style scoped lang="less">
.navbar{
 
  ul{
    height: 44px;
    display: flex;
    align-items: center;
    background: #fff;
    li{
      flex-grow: 1;
      a{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 0.75rem;
        color: #5d656b;
        .iconfont{
          font-size: 1.25rem;
        }
        &.router-link-exact-active{
          color: #ff852a;
        }
      }
    }
  }
}
</style>

