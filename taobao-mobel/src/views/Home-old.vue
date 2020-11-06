<template>
  <div class="home">
    <div class="searchArea">
      <span class="iconfont icon-tao"></span>
      <router-link to="/search">
        <span class="iconfont icon-search"></span>
        <span>寻找宝贝店铺</span>
      </router-link>
    </div>

    <swiper class="bannder" :options="bannderOption">
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i4/102/O1CN01LjJyQf1Ccl1iVWQdT_!!102-0-ppp-picassogw.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i4/102/O1CN01LjJyQf1Ccl1iVWQdT_!!102-0-ppp-picassogw.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i4/102/O1CN01LjJyQf1Ccl1iVWQdT_!!102-0-ppp-picassogw.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i4/102/O1CN01LjJyQf1Ccl1iVWQdT_!!102-0-ppp-picassogw.jpg" alt=""></router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="quickNavbarArea">
      <div class="topBorder"></div>
      <div class="quickNavbar">
        <div class="container" @scroll.stop="qnavbarScroll">
            <div class="content" ref='qnc'>
              <ul>
                <li v-for="(i, index) in 10" :key="index">
                  <img src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1" alt="">
                  <span>天猫超市</span>
                </li>
              </ul>
              <ul>
                <li v-for="(i, index) in 10" :key="index">
                  <img src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1" alt="">
                  <span>天猫超市</span>
                </li>
              </ul>
            </div>
        </div>

        <div class="qnavbarPagination" ref='qbp'>
            <div class="qPContent" ref="qpc" :style="{left:quickNavbarOffset+'px'}"></div>
        </div>
      </div>
    </div>
    sdfdfdfdfdfdf
    <div style="height:3000px"></div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bannderOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
      quickNavbarOffset:0
    }
  },
  
  methods: {
    // 快捷导航栏 
    qnavbarScroll(ev){
      let totalWidth =   ev.target.getBoundingClientRect().width
      // 获取快捷导航偏移量
      let offset  = Math.abs( this.$refs['qnc'].getBoundingClientRect().left )
      // 获取分页的偏移量
      let qq =  this.$refs.qbp.getBoundingClientRect().width - this.$refs.qpc.getBoundingClientRect().width
      this.quickNavbarOffset = offset/totalWidth * qq
    }
  },
};
</script>

<style lang="less" scoped>
.searchArea{
  position: fixed;
  left: 0;right: 0;top: 0;
  z-index: 900;
  display: flex;
  padding: 0.375rem 0.5625rem;
  background: rgb(255, 133, 42);
  color: #fff;
  >span{
    font-size: 1.75rem;
    width: 1.75rem;
    height: 1.75rem;
    position: absolute;
    top:0.25rem
  }
  >a{
    height: 1.5625rem;
    background: rgb(255, 78, 34);
    border-radius: 3px;
    flex-grow: 1;
    color: #fff;
    margin-left: 2rem;
    text-align: center;
    font-size: 0.75rem;
    span{
      height: 1.5625rem;
      line-height: 1.5625rem;
      &:first-child{
        margin-right: 0.125rem;
      }
    }
  }

}

.bannder{
  .swiper-slide{
    margin-top: 2.3125rem;
    z-index: 600;
    height: 7.5rem;
    img{
      width: 100%;
      height: 7.5rem;
    }
    &:nth-child(odd){
      background: chocolate;
    }
    &:nth-child(even){
      background: green;
    }
  }
}
.quickNavbarArea{
  position: relative;
  z-index: 800;
  // height: 11.625rem;
  padding-bottom: 6px;
  background: #fff;
  margin-top: -0.5625rem;
  .topBorder{
    width: 100%;
    height: 0.625rem;
    background: url('../assets/navbarbg.png') no-repeat ;
    background-size: 100% 100%;
  }
  .quickNavbar{
    position: relative;
    margin-top: -1px;
    height: 9.75rem;
    background: #fff;
    overflow:hidden;
    .container{
      overflow-x: auto;
      height: 12.5rem;
      background: #fff;
      .content{
        height: 156px;
        width: 200%;
        // background: orange;
        ul{
          display: flex;
          height: 78px;
          align-items: center;
          &:last-child{
            margin-bottom: 8px;
          }
          li{
            font-size: 12px;
            color: #999;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            text-align: center;
            justify-content: center;
            img{
              width: 61px;
              height: 48px;
              margin: 0 auto;
            }
          }

        }
      }
    }
    .qnavbarPagination{
      position: relative;
      width: 3.125rem; height: 0.1875rem;
      background: #80808099;
      border-radius: 0.3125rem;
      position: absolute;
      bottom: 0.125rem;
      left: 50%;
      margin-left: -1.5625rem;
      .qPContent{
        width: 1.25rem; height: 0.1875rem;
        background: rgb(255, 109, 42);
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}

</style>
