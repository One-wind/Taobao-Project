<template>
  <div class="global">
    <!-- <span class="iconfont icon-shangyebaihuo"></span> -->
    <!-- 头部栏 -->
    <div class="headbar">
      <span class="iconfont icon-zuojiantou"></span>
      <div class="logo">
        <img src="../../assets/Globalselection/01.png" alt="" />
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="navigationBar">
      <ul class="navList" @click.stop="btnClick">
        <li :class="{ default: 'GlobalsOne' == liShow }" data-key="GlobalsOne">
          <span class="iconfont icon-quanqiu"></span>
          <span>进口特卖</span>
        </li>
        <li :class="{ default: 'GlobalsTwo' == liShow }" data-key="GlobalsTwo">
          <span class="iconfont icon-pinpai"></span>
          <span>品牌</span>
        </li>
        <li
          :class="{ default: 'GlobalsThree' == liShow }"
          data-key="GlobalsThree"
        >
          <span class="iconfont icon-shipin"></span>
          <span>食品</span>
        </li>
        <li :class="{ default: 'Globalsd' == liShow }" data-key="Globalsd">
          <span class="iconfont icon-muying"></span>
          <span>母婴</span>
        </li>
        <li :class="{ default: 'Globalse' == liShow }" data-key="Globalse">
          <span class="iconfont icon-meizhuang"></span>
          <span>美妆</span>
        </li>
        <li :class="{ default: 'Globalsf' == liShow }" data-key="Globalsf">
          <span class="iconfont icon-shangyebaihuo"></span>
          <span>百货</span>
        </li>
        <li :class="{ default: 'Globalsg' == liShow }" data-key="Globalsg">
          <span class="iconfont icon-baojian"></span>
          <span>保健</span>
        </li>
        <li :class="{ default: 'Globalsh' == liShow }" data-key="Globalsh">
          <span class="iconfont icon-dianqi"></span>
          <span>电器</span>
        </li>
        <li :class="{ default: 'Globalsi' == liShow }" data-key="Globalsi">
          <span class="iconfont icon-qita"></span>
          <span>其他</span>
        </li>
        <li :class="{ default: 'Globalsj' == liShow }" data-key="Globalsj">
          <span class="iconfont icon-icon-test"></span>
          <span>明日大牌</span>
        </li>
        <li :class="{ default: 'Globalsk' == liShow }" data-key="Globalsk">
          <span class="iconfont icon-icon-test"></span>
          <span>单品预告</span>
        </li>
      </ul>
    </div>
    <keep-alive max="11">
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import GlobalsOne from "../../components/Globals/GlobalsOne";
import GlobalsTwo from "../../components/Globals/GlobalsTwo";
import GlobalsThree from "../../components/Globals/GlobalsThree";
import Globalsd from "../../components/Globals/Globalsd";
import Globalse from "../../components/Globals/Globalse";
import Globalsf from "../../components/Globals/Globalsf";
import Globalsg from "../../components/Globals/Globalsg";
import Globalsh from "../../components/Globals/Globalsh";
import Globalsi from "../../components/Globals/Globalsi";
import Globalsj from "../../components/Globals/Globalsj";
import Globalsk from "../../components/Globals/Globalsk";
export default {
  data() {
    return {
      liShow: "GlobalsOne",
      componentId: "GlobalsOne",
    };
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("lOrRActive", true);
    next();
  },
  created() {
    this.$emit("lOrRActive", false);
  },
  methods: {
    btnClick(ev) {
      if ("LI" == ev.target.nodeName) {
        this.liShow = ev.target.dataset.key;
        this.componentId = ev.target.dataset.key;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth", //平滑过渡
        });
      } else if ("SPAN" == ev.target.nodeName) {
        this.liShow = ev.target.parentNode.dataset.key;
        this.componentId = ev.target.parentNode.dataset.key;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth", //平滑过渡
        });
      }
    },
  },
  components: {
    GlobalsOne,
    GlobalsTwo,
    GlobalsThree,
    Globalsd,
    Globalse,
    Globalsf,
    Globalsg,
    Globalsh,
    Globalsi,
    Globalsj,
    Globalsk,
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2154360_bctcgkcnlp.css");
* {
  margin: 0;
  padding: 0;
}
.global {
  // width: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
// 头部栏
.headbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 900;
  display: flex;
  height: 3.125rem;
  line-height: 3.125rem;
  background: #fff;
  > span {
    width: 2.5rem;
    height: 3.125rem;
    text-align: center;
    position: absolute;
    left: 0;
  }
  > .logo {
    display: flex;
    align-items: center;
    width: 6.25rem;
    height: 3.125rem;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
    }
  }
}
// 导航栏
.navigationBar {
  position: fixed;
  left: 0;
  right: 0;
  top: 3.125rem;
  z-index: 900;
  height: 3.75rem;
  overflow-x: auto;
  .navList {
    display: flex;
    align-items: center;
    width: 42rem;
    height: 3.75rem;
    background: #7c4dff;
    li {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 3.75rem;
      align-items: center;
      font-size: 0.75rem;
      font-weight: 600;
      color: #fff;
      max-width: 4rem;
      > .iconfont {
        font-size: 1.125rem;
        width: 1.75rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        margin: 0.3125rem 0 0.1875rem 0;
      }
    }
  }
}
.default {
  background: #704fae;
}

// img跳转
.imgJump {
  display: flex;
  // width: 100%;
  margin-top: 6.875rem;
  height: 9.625rem;
  img {
    width: 100%;
    height: auto;
  }
}
// 内容主题
.selectedContent {
  .contentTitle {
    height: 2.5rem;
    font-size: 0.875rem;
    background: #fff;
    line-height: 2.5rem;
    color: #6334e5;
    i {
      font-style: normal;
      &:last-child {
        font-size: 0.75rem;
        margin-left: 0.3125rem;
        font-weight: 400;
        color: #666;
      }
    }
  }
  .selectedContent {
    height: 50rem;
    background: #f7f2ef;
    .contentList {
      li {
        display: flex;
        height: 10rem;
        border-bottom: 1px solid rgb(236, 227, 227);
        position: relative;
        .ranking {
          position: absolute;
          top: 0;
          left: 0;
          width: 1.75rem;
          height: 2.0625rem;
          line-height: 2.0625rem;
          text-align: center;
          border-radius: 0.5625rem;
          color: #fff;
          font-weight: 700;
          background: rgb(235, 141, 141);
        }
        .contentListLeft {
          width: 10rem;
          height: 10rem;
          img {
            width: 10rem;
            height: 10rem;
          }
        }
        .contentListRight {
          height: 1.125rem;
          flex-grow: 1;
          padding: 0 0.625rem 0 0.3125rem;
          p {
            display: flex;
            align-items: center;
            margin: 1.1875rem 0 0.5rem 0;
            i {
              display: block;
              width: 7.375rem;
              height: 1.0625rem;
              background: url("../../assets/Globalselection/05.png") no-repeat;
              background-size: contain;
              background-position: center;
            }
            span {
              box-sizing: border-box;
              width: 5rem;
              height: 1.125rem;
              font-size: 0.75rem;
              border: 0.0625rem solid #704fae;
              border-radius: 0.5625rem;
              text-align: center;
              color: #704fae;
            }
          }
          h3 {
            font-size: 1rem;
            line-height: 1.0625rem;
            color: #000;
            font-weight: 300;
            margin-top: 0.625rem;
            height: 1.125rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          }
          h4 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-decoration: none;
            line-height: 1.125rem;
            font-size: 0.75rem;
            color: #666;
            margin: 0.5rem 0 0 0;
            padding: 0;
            height: 1.0625rem;
          }
          .sold {
            display: flex;
            justify-content: space-between;
            margin-top: 0.625rem;
            height: 1.875rem;
            line-height: 1.875rem;
            font-size: 0.75rem;
            span:first-child {
              text-decoration: line-through;
            }
            i {
              color: red;
            }
          }
          .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              font-size: 1.5rem;
              color: red;
              i {
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 600;
              }
              &:last-child {
                width: 3rem;
                height: 1.125rem;
                line-height: 1.125rem;
                color: #fff;
                background: red;
                font-size: 0.75rem;
                border-radius: 0.5625rem;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>