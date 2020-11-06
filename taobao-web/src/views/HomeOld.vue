<template>
  <div class="home">
    <!-- 广告区域 -->
    <div class="adv">
      <div class="container">
        <router-link to="/">
          <img src="http://192.168.6.48:3000/public/home/adv.jpg" alt="adv" />
        </router-link>
      </div>
    </div>
    <!-- 头部搜索区域 -->
    <div class="searchArea">
      <div class="container">
        <router-link to="/" class="logo">
          <span class="iconfont icon-taobaologo"></span>
        </router-link>
        <!-- 搜索输入 -->
        <div class="saGroup">
          <ul class="btns">
            <li class="btnActive">宝贝</li>
            <li>天猫</li>
            <li>店铺</li>
          </ul>
          <div class="inputGroup">
            <b class="iconfont icon-search" v-show="!searchInput.value"></b>
            <input
              type="text"
              v-model="searchInput.value"
              :placeholder="searchInput.placeholderValue"
            />
            <b class="iconfont icon-xiangji"></b>
            <span @click.stop="searchBtnClick">搜索</span>
          </div>
          <ul class="hotSearch">
            <li><router-link to="/">新款连衣裙</router-link></li>
            <li><router-link to="/">连衣裙</router-link></li>
            <li><router-link to="/">新款连</router-link></li>
            <li><router-link to="/">新款连</router-link></li>
            <li><router-link to="/">新款连</router-link></li>
            <li><router-link to="/">新款连衣裙</router-link></li>
            <li><router-link to="/">新款</router-link></li>
            <li><router-link to="/">新款连衣裙</router-link></li>
            <li><router-link to="/">新款连衣裙</router-link></li>
          </ul>
        </div>
        <!-- 二维码 -->
        <div class="qrcode" @click.stop="qrcodeIsShow = !qrcodeIsShow">
          <span class="iconfont icon-close" v-show="qrcodeIsShow"></span>
          <div v-show="qrcodeIsShow">
            <h4>手机淘宝</h4>
            <img :src="searchAreaQrcode" alt="qrcode" />
          </div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="navbar">
      <ul
        class="container"
        @mouseover.stop="navbarMouseover"
        @mouseout.stop="navbarMouseout"
      >
        <li>主题市场</li>
        <li><router-link to="/">天猫</router-link></li>
        <li><router-link to="/">聚划算</router-link></li>
        <li><router-link to="/">天猫超市</router-link></li>
        <span class="line"></span>
        <li><router-link to="/">淘抢购</router-link></li>
        <li><router-link to="/">电器城</router-link></li>
        <li><router-link to="/">司法拍卖</router-link></li>
        <li><router-link to="/">淘宝心选</router-link></li>
        <span class="line"></span>
        <li><router-link to="/">飞猪旅行</router-link></li>
        <li><router-link to="/">智能生活</router-link></li>
        <li><router-link to="/">苏宁易购</router-link></li>
      </ul>
      <i
        v-show="navbarWangLeft"
        class="iconfont icon-wang"
        :style="{ left: navbarWangLeft + 'px' }"
      ></i>
    </div>

    <div class="banner">
      <div class="container">
        <div class="left"></div>
        <div class="main">
          <div class="mainTop">
            <div class="swiper1">
              <swiper :options="swiperOptions" class="swiper1Content">
                <swiper-slide>
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/simba/img/TB1trZ9caNj0u4jSZFySutgMVXa.jpg"
                      alt=""
                    />
                  </router-link>
                </swiper-slide>
                <swiper-slide>
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/simba/img/TB1trZ9caNj0u4jSZFySutgMVXa.jpg"
                      alt=""
                    />
                  </router-link>
                </swiper-slide>
                <swiper-slide>
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/simba/img/TB1trZ9caNj0u4jSZFySutgMVXa.jpg"
                      alt=""
                    />
                  </router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
              <span class="swiper1prev">&gt;</span>
              <span class="swiper1next">&lt;</span>
            </div>

            <router-link to="/">
              <img
                src="https://img.alicdn.com/imgextra/i2/6000000002320/O1CN01Zd4TyD1T0bV8hsnuv_!!6000000002320-0-octopus.jpg_290x290q90.jpg_.webp"
                alt=""
              />
            </router-link>
          </div>
          <div class="mainBottom">
            <div class="swiper2">
              <swiper :options="swiper2Options" class="swiper2Content">
                <swiper-slide class="s2">
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/tps/i4/TB1MqCDPNv1gK0jSZFFSuv0sXXa.jpg_240x240q90.jpg"
                      alt=""
                    />
                  </router-link>
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/tps/i4/https://img.alicdn.com/tps/i4//TB13MgamA9l0K4jSZFKSutFjpXa.jpg_240x240q90.jpg"
                      alt=""
                    />
                  </router-link>
                </swiper-slide>
                <swiper-slide class="s2">
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/tps/i4/TB1MqCDPNv1gK0jSZFFSuv0sXXa.jpg_240x240q90.jpg"
                      alt=""
                    />
                  </router-link>
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/tps/i4/https://img.alicdn.com/tps/i4//TB13MgamA9l0K4jSZFKSutFjpXa.jpg_240x240q90.jpg"
                      alt=""
                    />
                  </router-link>
                </swiper-slide>
                <swiper-slide class="s2">
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/tps/i4/TB1MqCDPNv1gK0jSZFFSuv0sXXa.jpg_240x240q90.jpg"
                      alt=""
                    />
                  </router-link>
                  <router-link to="/">
                    <img
                      src="https://img.alicdn.com/tps/i4/https://img.alicdn.com/tps/i4//TB13MgamA9l0K4jSZFKSutFjpXa.jpg_240x240q90.jpg"
                      alt=""
                    />
                  </router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
              <span class="swiper2prev">&gt;</span>
              <span class="swiper2next">&lt;</span>
            </div>
            <router-link to="/">
              <img
                src="https://aecpm.alicdn.com/imgextra/i2/90895095/O1CN01aErwXB1nVYa7E4XMs_!!90895095-0-alimamazszw.jpg"
                alt=""
              />
            </router-link>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  name: "Home",
  data() {
    return {
      searchAreaQrcode: "",
      searchInput: {
        value: "",
        placeholderValue: "冬日爆款皮短裤",
      }, //
      navbarWangLeft: 0,
      qrcodeIsShow: true, // 显示 手机淘宝二维码

      swiperOptions: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper1next",
          prevEl: ".swiper1prev",
        },
      },
      swiper2Options: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper2next",
          prevEl: ".swiper2prev",
        },
      },
    };
  },
  methods: {
    navbarMouseout(ev) {
      if ("A" == ev.target.nodeName) {
        this.navbarWangLeft = 0;
      }
    },
    navbarMouseover(ev) {
      if ("A" == ev.target.nodeName) {
        let left = this.$element.getLeft(ev.target);
        let width = ev.target.getBoundingClientRect().width;
        this.navbarWangLeft = left + width / 2 - 15;
      }
    },
    searchBtnClick() {
      let search = "";
      if (this.searchInput.value) {
        search = this.searchInput.value;
      } else {
        search = this.searchInput.placeholderValue;
      }
      this.$router.push({ name: "search", params: { text: search } });
    },
  },
  created() {
    console.log(QRCode);
    QRCode.toDataURL("https://timeitself.cn/ti/#/blog", {
      width: 62,
      margin: 0,
      color: {
        dark: "#ff4400",
      },
    })
      .then((url) => {
        this.searchAreaQrcode = url;
      })
      .catch((err) => {
        console.error(err);
      });

    // if ("loginSuccess" == this.$cookie.get("loginState")) {
    //   console.log("登录成功");
    //   // 获取用户信息
    // } else {
    //   console.log("登录失败");
    // }
  },
};
</script>


<style lang="less" scoped>
@color: #f40;
.home {
  background: #f5f5f5;
}
.adv {
  background: #e71b1b;
  font-size: 0;
  img {
    width: 1190px;
    height: 70px;
  }
}
.searchArea {
  background: #fff;
}
.searchArea > .container {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .logo {
    color: @color;
    span {
      font-size: 48px;
    }
  }
  .saGroup {
    display: flex;
    flex-direction: column;
    width: 630px;
    .btns {
      display: flex;
      color: @color;
      font-size: 12px;
      padding-left: 20px;
      li {
        margin-right: 5px;
        cursor: pointer;
        padding: 2px 6px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        &.btnActive {
          background: @color;
          color: #fff;
        }
      }
    }
    .inputGroup {
      display: flex;
      border: 2px solid @color;
      align-items: center;
      height: 36px;
      border-radius: 30px;
      overflow: hidden;
      input {
        display: block;
        flex-grow: 1;
        height: 34px;
        outline: none;
        color: #999;
        text-indent: 1em;
        &::placeholder {
          color: rgba(153, 153, 153, 0.507);
        }
      }
      span {
        width: 74px;
        height: 100%;
        background: @color;
        color: #fff;
        text-align: center;
        line-height: 36px;
        cursor: pointer;
        font-size: 17px;
      }
      .iconfont {
        font-size: 16px;
        color: #999999ce;
        &.icon-search {
          margin-left: 10px;
        }
        &.icon-xiangji {
          margin-right: 20px;
        }
      }
    }
    .hotSearch {
      display: flex;
      margin-top: 5px;
      a {
        font-size: 12px;
        color: #666;
        display: block;
        margin-right: 4px;
        &:hover {
          color: @color;
        }
      }
    }
  }
  .qrcode {
    width: 90px;
    display: flex;
    > span {
      width: 14px;
      height: 14px;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #8080806c;
      border: 1px solid #8080806c;
      cursor: pointer;
      &:hover {
        color: #666;
      }
    }

    > div {
      border: 1px solid #8080806c;
      padding: 5px;
      h4 {
        font-size: 12px;
        color: @color;
        text-align: center;
        margin-bottom: 3px;
      }
      img {
        display: block;
      }
    }
  }
}
.navbar {
  position: relative;
  .icon-wang {
    font-size: 30px;
    color: @color;
    position: absolute;
    z-index: 100;
    top: -22px;
    left: 0;
  }
}
.navbar > .container {
  position: relative;
  display: flex;
  z-index: 900;
  background: linear-gradient(to right, orange, @color);
  li {
    text-align: center;
    font-size: 16px;
    &:first-child {
      width: 190px;
      background: @color;
      line-height: 30px;
      color: #fff;
    }
    a {
      display: block;
      height: 30px;
      line-height: 30px;
      color: #fff;
      font-size: 16px;
      padding: 0 6px;
    }
  }

  .line {
    height: 14px;
    width: 1px;
    background: #fff;
    margin-top: 8px;
  }
}

.banner {
  .container {
    display: flex;
    height: 522px;
    .left {
      width: 190px;
      height: 522px;
      box-sizing: border-box;
      background: red;
    }
    .main {
      box-sizing: border-box;
      height: 100%;
      flex-grow: 1;
      background: orange;
      padding: 6px;
      padding-bottom: 0;

      .mainTop {
        display: flex;
        justify-content: space-between;
        .swiper1 {
          position: relative;
          width: 520px;
          height: 280px;
          overflow: hidden;
          .swiper1Content {
            width: 100%;
            height: 100%;
          }
          font-size: 26px;
          .swiper1next {
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgba(128, 128, 128, 0.623);
            color: #fff;
            z-index: 900;
            top: 50%;
            left: -15px;
            margin-top: -40px;
            text-align: right;
            padding-right: 10px;
            line-height: 40px;
            border-radius: 40%;
          }
          .swiper1prev {
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgba(128, 128, 128, 0.623);
            color: #fff;
            z-index: 900;
            top: 50%;
            right: -15px;
            margin-top: -40px;
            text-align: left;
            padding-left: 10px;
            line-height: 40px;
            border-radius: 40%;
          }
        }
      }
    }
    .mainBottom {
      display: flex;
      justify-content: space-between;
      .swiper2 {
        position: relative;
        width: 520px;
        height: 201px;
        overflow: hidden;
        .swiper2Content {
          width: 100%;
          height: 100%;
        }
        .s2{
          display: flex;
          justify-content: space-between;
          img{
            width: 251px;
            height: 190px;
          }
        } 
        
        font-size: 26px;
        .swiper2next {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(128, 128, 128, 0.623);
          color: #fff;
          z-index: 900;
          top: 50%;
          left: -15px;
          margin-top: -40px;
          text-align: right;
          padding-right: 10px;
          line-height: 40px;
          border-radius: 40%;
        }
        .swiper2prev {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(128, 128, 128, 0.623);
          color: #fff;
          z-index: 900;
          top: 50%;
          right: -15px;
          margin-top: -40px;
          text-align: left;
          padding-left: 10px;
          line-height: 40px;
          border-radius: 40%;
        }
      }
    }
    .right {
      box-sizing: border-box;
      width: 290px;
      height: 100%;
      padding-top: 6px;
      background: blue;
    }
  }
}
</style>
