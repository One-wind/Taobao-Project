<template>
  <div class="goods">
    <div class="container haveGood">
      <div class="homeGuide" :style="guidePosition">
        <img src="../../assets/images/haveGood/aLiWang.png" alt="" />
        <ul>
          <li class="guideActive">
            <router-link to="/">品质好货</router-link>
          </li>
          <li>
            <router-link to="/">好店直播</router-link>
          </li>
          <li>
            <router-link to="/">实惠热卖</router-link>
          </li>
          <li>
            <router-link to="/">猜你喜欢</router-link>
          </li>
          <li class="goTop" v-show="showGoTopBtn" @click="goTop">
            <span>顶部</span>
          </li>
          <li>
            <router-link to="/">反馈</router-link>
          </li>
          <li>
            <router-link to="/">暴恐举报</router-link>
          </li>
        </ul>
      </div>
      <div class="homeGuideTag" ref="homeGuide"></div>
      <div class="haveGood-title">
        <img src="../../assets/images/haveGood/haveGood.png" alt="" />
        <span>与品质生活不期而遇</span>
      </div>
      <ul class="haveGood-show">

        <li v-for="(item, i) in youHaoHuo" :key='i'>
          <router-link :to="'/goods/'+item.id">
            <img :src="item.img"  />
            <h3>{{item.name}}</h3>
            <p>{{item.info}}</p>
            <div><span>☺</span>{{item.zan}}人说好</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="container haveGoodAdv">
      <router-link to="/">
        <img src="../../assets/images/haveGood/haveGoodAdv.jpg" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      guidePosition: [{ position: "absolute" }, { top: "-245px" }],
      windowWidth: 0,
      showGoTopBtn: false,
      youHaoHuo:[], //有好货
    };
  },
  created(){
    this.initData()
  },
  mounted() {
    this.windowWidth = (window.innerWidth - 1190) / 2 - 69;
    window.addEventListener("scroll", this.scrollListen);
  },

  beforeDestroy(){
      window.removeEventListener('scroll',this.scrollListen);
  },
  methods: {
    // 初始化页面数据
    initData() {
      this.getYouHaoHuo() //获取有好货数据
    },
    
    // 获取有好货的数据
    getYouHaoHuo() {
      this.$ajax({
        method: "post",
        url: this.$url + "/db",
        data: {
          flag: "findHaoHuo",
        },
      })
        .then((res) => {
          // console.log(res)
          for(const i in res){
            // console.log( res[i].imgs )
            res[i].imgs = JSON.parse(res[i].imgs)
            res[i].img = res[i].imgs[Math.floor(Math.random()*4) ]
          }
          // console.log(res)
          this.youHaoHuo = res
        })
        .catch((err) => {
          console.log(err);
        });
    },

    scrollListen() {
      // return
      let scrollTop = document.documentElement.scrollTop;
      let distance = this.$refs.homeGuide.getBoundingClientRect().top;
      if (0 >= distance) {
        this.guidePosition = [
          { position: "fixed" },
          { top: "0" },
          { right: this.windowWidth + "px" },
        ];
      } else {
        this.guidePosition = [{ position: "absolute" }, { top: "-245px" }];
      }
      if (700 < scrollTop) {
        this.showGoTopBtn = true;
      } else {
        this.showGoTopBtn = false;
      }
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.goods {
  margin-top: 10px;
}
// 有好货
.haveGood {
  background: #fff;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  // 有好货logo
  .haveGood-title {
    display: flex;
    img {
      width: 74px;
      height: 24px;
    }
    span {
      margin-left: 12px;
      line-height: 24px;
      color: #999;
    }
  }
  // 有好货商品展示
  .haveGood-show {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    li {
      &:hover > a h3 {
        color: #f40;
      }
    }
    li > a {
      display: flex;
      flex-direction: column;
      width: 180px;
      div,
      h3,
      p {
        padding-left: 4px;
        padding-right: 4px;
        overflow: hidden;
        max-height: 1.5em;
        font-size: 14px;
      }
      h3 {
        font-size: 16px;
        color: #3c3c3c;
        font-weight: 400;
      }
      p {
        margin-top: 6px;
        margin-bottom: 10px;
        color: #999;
      }
      div {
        color: #35b1ff;
        line-height: 21px;
      }
      span {
        font-size: 18px;
      }
    }
    img {
      width: 180px;
      height: 180px;
      margin-bottom: 12px;
      display: block;
      position: relative;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
}
// 主页向导
.homeGuide {
  width: 50px;
  position: absolute;
  right: -60px;
  top: 0;

  img {
    width: 30px;
    height: auto;
    display: block;
    margin: auto;
  }
  ul {
    margin-top: -7px;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .goTop {
      width: 50px;
      height: 53px;
      line-height: 40px;
      padding-bottom: 0;
      position: relative;
      span {
        display: block;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -17px;
        width: 34px;
        height: 40px;
        border-bottom: 1px solid rgb(228, 223, 223);
      }
    }
    li {
      padding: 8px;
      padding-bottom: 0;
      text-align: center;
      cursor: pointer;
      &:last-child > a {
        border-bottom: none;
      }
      box-sizing: border-box;
      &:nth-child(2),
      &:nth-child(4) {
        a {
          color: red;
        }
      }
      &:nth-child(3) {
        a {
          color: green;
        }
      }
      &:hover {
        .guideActive();
      }
    }
    a {
      font-size: 13px;
      height: 38px;
      display: block;
      border-bottom: 1px solid rgb(228, 223, 223);
      padding-bottom: 6px;
    }
    .guideActive {
      a {
        color: #fff;
        font-weight: 800;
        border-bottom: 1px solid #f40;
      }
      background: #f40;
    }
  }
}
// 向导标记
.homeGuideTag {
  width: 50px;
  height: 1px;
  position: absolute;
  top: -245px;
  right: -50px;
  background: rgba(255, 255, 255, 0);
}
// 有好货广告
.haveGoodAdv {
  margin: 10px auto;
  font-size: 0;
}
</style>