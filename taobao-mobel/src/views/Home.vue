<template>
  <div class="home">
    <div class="searchArea">
      <span class="iconfont icon-tao"></span>
      <router-link to="/search" >
      <div class="search" @click='bottomShowClick'>
        <span class="iconfont icon-zoom"></span>
        <span>寻找宝贝店铺</span>
      </div>        
      </router-link>
    </div>

    <swiper class="bannder" :options="bannderOption">
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i4/102/O1CN01LjJyQf1Ccl1iVWQdT_!!102-0-ppp-picassogw.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i1/164/O1CN019LjvXT1D59a54GPXr_!!164-0-lubanu.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i4/102/O1CN01LjJyQf1Ccl1iVWQdT_!!102-0-ppp-picassogw.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i1/164/O1CN019LjvXT1D59a54GPXr_!!164-0-lubanu.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i4/102/O1CN01LjJyQf1Ccl1iVWQdT_!!102-0-ppp-picassogw.jpg" alt=""></router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/"><img src="https://gw.alicdn.com/imgextra/i1/164/O1CN019LjvXT1D59a54GPXr_!!164-0-lubanu.jpg" alt=""></router-link>
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

    
    <div class="goodsbox">
      <div>
        <ul class="listli1">
          <li class="onegoods">
              <img src="../assets/img/15 juhuasaun .png" style="width:180px">
              <div class="all">
                <span>品牌折扣</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
         <li class="onegoods">
              <div class="all" style="margin-top:25px">
                <span>划算好货</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
          <li class="onegoods">
              <img src="../assets/img/05 tandian.png" style="width:180px">
              <div class="all"  style="background:white">
                <span>好物传送门</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
          <li class="onegoods">
              <div class="all" style="margin-top:25px">
                 <div style="background:white"><img src="../assets/img/12 dayi.png" class="las1" style="height:70px"></div>
              </div>
          </li>
        </ul>
        <ul class="listli1">
          <li class="onegoods">
              <img src="../assets/img/15 juhuasaun .png" style="width:180px">
              <div class="all">
                <span>品牌折扣</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
         <li class="onegoods">
              <div class="all" style="margin-top:25px">
                <span>划算好货</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
          <li class="onegoods">
              <img src="../assets/img/05 tandian.png" style="width:180px">
              <div class="all"  style="background:white">
                <span>好物传送门</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
          <li class="onegoods">
              <div class="all" style="margin-top:25px">
                 <div style="background:white"><img src="../assets/img/12 dayi.png" class="las1" style="height:70px"></div>
              </div>
          </li>
        </ul>
        <ul class="listli1">
          <li class="onegoods">
              <img src="../assets/img/15 juhuasaun .png" style="width:180px">
              <div class="all">
                <span>品牌折扣</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
         <li class="onegoods">
              <div class="all" style="margin-top:25px">
                <span>划算好货</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
          <li class="onegoods">
              <img src="../assets/img/05 tandian.png" style="width:180px">
              <div class="all"  style="background:white">
                <span>好物传送门</span>
                 <img src="../assets/img/07 baobao.png" class="las1">
              </div>
          </li>
          <li class="onegoods">
              <div class="all" style="margin-top:25px">
                 <div style="background:white"><img src="../assets/img/12 dayi.png" class="las1" style="height:70px"></div>
              </div>
          </li>
        </ul>
      </div>
      <div class="lunbo">
        <img src="../assets/img/18 toutiao.png" style="width:80px;"> 
      </div>
    </div>
    <div>
        <span><img src="../assets/img/19 xihuan.png" class="xihuan"></span>
    </div>
    

    <div class="TaobaoHeadlines" >
        <div class="nr">
          <div class="taobaotoutiao">淘宝头条</div>
          <div>
            <swiper class="bannder2" :options="bannderOption2">
              <swiper-slide>
                <span class="title">阿巴</span>
                <span>阿巴阿巴阿巴阿巴阿巴阿巴</span>
              </swiper-slide>
              <swiper-slide>
                <span class="title">西八</span>
                <span>西八西八西八西八西八西八</span>
              </swiper-slide>
              <swiper-slide>
                <span class="title">阿巴</span>
                <span>阿巴阿巴阿巴阿巴阿巴阿巴</span>
              </swiper-slide>
              <swiper-slide>
                <span class="title">西八</span>
                <span>西八西八西八西八西八西八</span>
              </swiper-slide>
              <div class="swiper-pagination2" slot="pagination2"></div>
          </swiper>
          </div>
        </div>  
    </div>
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
    },
    bottomShowClick(){
      this.$store.commit('setHidden',false)
    },  
  },
  mounted() {
    this.$store.commit('setHidden',true)
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
    .search{
      width: 100%;
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

.goodsbox{
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 363px;
  height: 420px;
  margin: 0 auto;
  margin-top: 15px;
  background: white;
  border-bottom: 1px solid rgb(219, 218, 218);
  border-radius: 15px;
  .listli1{
    display: flex;
    &:last-child{
      border-bottom: 1px solid rgb(248, 239, 239);
      }
    .onegoods{
    text-align: center;
    padding-top: 10px;
      span{
        font-size: 14px;
        color: red;
      }
      .las1{
        width: 50px;
        padding-top: 8px;
      }
      .all{
        background:rgb(243, 226, 227);
        margin: 0 8px;
        border-radius: 5px;
      }
    }
    li{
    position: relative;
    box-sizing: border-box;
    width: 90.75px;
    height: 125px;
    }
  } 
  .lunbo{
    width: 363px;
    height: 45px;
    position: absolute;
    bottom: 2px;
    top: 385px;
    right: -12px;
  }
}
.xihuan{
  display: flex;
  margin: 0 auto;
  height: 20px;
  padding:20px
}
.lists{
  height: 260px;
  width: 363px;
  background: pink;
  margin: 0 auto;
  li{
    width: 181.5px;
    height: 260px;
    background: red;
  }
}


.TaobaoHeadlines{
  .nr{
    display: flex;
    background: #fff;
    height: 2.5rem;
    border-bottom-left-radius:0.75rem ;
    border-bottom-right-radius: 0.75rem;

    .taobaotoutiao{
      font-size: 1rem;
      color: black;
      line-height:2.5rem;
      margin: 0 0.3125rem;
      .bannder2{
        height: 1.875rem;
        
        .swiper-slide{
          margin: 0;
          padding: 0;
          height: 6.25rem;
          width: 100%;
          line-height: 1.875rem;
          font-size: 0.9375rem;
            &:nth-child(odd){
              color: black;
            }
            &:nth-child(even){
              color: black;
            }
            .title{
              background: rgba(255, 192, 203, 0.507);
              color: red;
              margin: 0 0.625rem;
            }
          }
      }
    }
  }  
}
.bannder2{
  height: 1.875rem;
  
  .swiper-slide{
    margin: 0;
    padding: 0;
    height: 6.25rem;
    width: 100%;
    line-height:2.5rem;
    font-size: 0.9375rem;
    &:nth-child(odd){
      color: black;
    }
    &:nth-child(even){
      color: black;
    }
    .title{
      background: rgba(255, 192, 203, 0.507);
      color: red;
      margin: 0 0.625rem;
    }
  }
}
</style>
