<!--
 * @Author: your name
 * @Date: 2020-10-23 17:09:24
 * @LastEditTime: 2020-10-24 17:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taobao-mobel\src\views\myChildren\myFavorite.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-10-23 17:09:24
 * @LastEditTime: 2020-10-24 10:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taobao-mobel\src\views\myFavorite\myFavorite.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-10-23 17:09:24
 * @LastEditTime: 2020-10-23 17:10:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taobao-mobel\src\views\myFavorite\myFavorite.vue
-->
<template>
  <div class="myFavorite">
    <div class="myFtcontent">
      <div class="myFtSeach">
        <img src="../../assets/MailListImg/myFavoriteZoom.webp" alt="" />
      </div>
      <div class="myFtmain">
        <div class="myFtNavbar" @click.stop="myFtNavbarClick">
          <ul>
            <li data-path="whole" :class="{ navabarcolor: navabarcolor.whole }">
              全部
            </li>
            <li
              data-path="havaDiscount"
              :class="{ navabarcolor: navabarcolor.havaDiscount }"
            >
              有优惠
            </li>
            <li
              data-path="Bought"
              :class="{ navabarcolor: navabarcolor.Bought }"
            >
              已买过
            </li>
          </ul>
          <ul>
            <li
              class="shaixuan"
              data-path="shaixuan"
              :class="{ navabarcolor: navabarcolor.shaixuan }"
            >
              筛选
            </li>
            <li>
              <img :src="myFtsrc" alt="" data-path="myFtmore" />
            </li>
            <li
              data-path="Administration"
              :class="{ navabarcolor: navabarcolor.Administration }"
            >
              {{ msg }}
            </li>
          </ul>
        </div>
      </div>
      <keep-alive>
        <component :is="myFtcpt" class="myFtcpt"></component>
      </keep-alive>
    </div>

    <!-- 筛选页面 -->
    <div class="screen" v-show="screenShow" data-show='screen' @click.stop="screenHide">
      <div :class="{screencontent:true,screencontentshow:boo}" ref="screencontent">
        <p>宝贝状态</p>
        <ul class="Babystatus">
          <li>有优惠</li>
          <li>低库存</li>
          <li>失效</li>
          <li>已买过</li>
        </ul>
        <p>收藏时间</p>
        <ul class="Babystatus">
          <li>7天内</li>
          <li>30天内</li>
          <li>90天内</li>
          <li>半年前</li>
          <li>一年前</li>
        </ul>
        <p>类目场景</p>
        <ul class="Babystatus">
          <li>女装1</li>
          <li>男装4</li>
          <li>美妆2</li>
          <li>设备配件1</li>
        </ul>
        <div class="screenBtn">
          <span>重置</span>
          <span>确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import whole from "../MyChildren/Whole";
import havaDiscount from "../MyChildren/HavaDiscount";
import Bought from "../MyChildren/Bought";
export default {
  data() {
    return {
      boo:false,
      screenShow:false,
      myFtsrc: require("../../assets/MailListImg/myFtmore.png"),
      msg: "管理",
      myFtcpt: "whole",
      navabarcolor: {
        whole: true,
        havaDiscount: false,
        Bought: false,
        shaixuan: false,
        Administration: false,
      },
    };
  },
  methods: {
    screenHide(ev){
      if(ev.target.dataset.show){
        let that = this
        setTimeout(() => {
          that.boo=false
        }, 0);
        setTimeout(() => {
          that.screenShow=false
        }, 500);
      }
    },
    myFtNavbarClick(ev) {
      let path = ev.target.dataset.path;
      if (path) {
        switch (path) {
          case "whole":
            this.myFtcpt = "whole";
            this.navabarcolor = {
              whole: true,
              havaDiscount: false,
              Bought: false,
              shaixuan: false,
              Administration: false,
            };
            break;
          case "havaDiscount":
            this.myFtcpt = "havaDiscount";
            this.navabarcolor = {
              whole: false,
              havaDiscount: true,
              Bought: false,
              shaixuan: true,
              Administration: false,
            };
            break;
          case "Bought":
            this.myFtcpt = "Bought";
            this.navabarcolor = {
              whole: false,
              havaDiscount: false,
              Bought: true,
              shaixuan: true,
              Administration: false,
            };
            break;
          case "shaixuan":
            this.screenShow=true
            console.log(this.$refs.screencontent);
            let that = this
            setTimeout(() => {
              that.boo=true
            }, 0);
            break;
          case "myFtmore":
            if (require("../../assets/MailListImg/myFtmore2.png") == this.myFtsrc) {
              this.myFtsrc = require("../../assets/MailListImg/myFtmore.png");
            } else {
              this.myFtsrc = require("../../assets/MailListImg/myFtmore2.png");
            }
            break;
          case "Administration":
            if (this.navabarcolor.Administration) {
              this.msg = "管理";
            } else {
              this.msg = "完成";
            }
            this.navabarcolor.Administration = !this.navabarcolor
              .Administration;
            break;
        }
      }
    },
  },
  components: {
    whole,
    havaDiscount,
    Bought,
  },
};
</script>

<style lang="less" scoped>
.myFavorite {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.myFtcontent {
  width: 110%;
  height: 100%;
  overflow-y: auto;
}
.myFtSeach {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  height: 2.5rem;
  background: #f7f7f7;
  z-index: 900;
  img {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 1rem;
    margin-top: 0.7rem;
  }
}
.myFtmain {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  margin-top: 2.5rem;
  background: #fff;
  .myFtNavbar {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    ul {
      display: flex;
      font-size: 0.8125rem;
      li {
        margin-right: 1.5rem;
      }
      &:nth-child(2) {
        margin-right: 0.9375rem;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
  .myFtcpt {
    width: 100%;
  }
}
// 添加选中状态
.navabarcolor {
  color: #ff5000;
}
// 筛选页面
.screen {
  z-index: 900;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  .screencontent {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: #fff;
    padding-top: 3.125rem;
    overflow: hidden;
    transition: .5s;
    p {
      color: #000;
      font-size: 0.875rem;
      padding: 0 0.75rem;
    }
    .Babystatus {
      display: flex;
      margin-top: 0.6875rem;
      flex-wrap: wrap;
      border-width: 0px 0px 1px;
      border-style: solid;
      border-color: black black rgb(238, 238, 238);
      border-image: initial;
      box-sizing: border-box;
      display: flex;
      -webkit-box-orient: horizontal;
      flex-flow: row wrap;
      place-content: flex-start;
      flex-shrink: 0;
      -webkit-box-pack: start;
      padding-left: 0.1875rem;
      margin-bottom: 1.125rem;
      width: 18.3125rem;
      -webkit-box-align: center;
      align-items: center;
      li {
        background-color: rgb(246, 246, 246);
        box-sizing: border-box;
        display: flex;
        flex-shrink: 0;
        width: 5.25rem;
        height: 2.5rem;
        padding: 0.75rem 0.1875rem;
        justify-content: center;
        align-items: center;
        border-radius: 0.1875rem;
        margin-bottom: 0.5625rem;
        margin-left: 0.5625rem;
        font-size: 0.75rem;
        color: #666;
        &:hover {
          border: 0.5px solid rgb(255, 80, 0);
          background-color: rgb(255, 246, 242);
        }
      }
    }
  }
  .screencontentshow{
    width: 18.3125rem;
  }
  .screenBtn{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    place-content: flex-start center;
    flex-shrink: 0;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 5.25rem;
    align-items: flex-start;
    span{
      white-space: pre-wrap;
      border: 0px solid black;
      box-sizing: border-box;
      display: block;
      flex-shrink: 0;
      font-size: 0.875rem;
      width: 7.375rem;
      height: 2.25rem;
      line-height: 2.25rem;
      text-align: center;
      align-items: center;
      color: rgb(255, 255, 255);
      background-image: linear-gradient(to right, rgb(255, 197, 0), rgb(255, 148, 2));
      &:nth-child(1){
        border-top-left-radius: 1.875rem;
        border-bottom-left-radius: 1.875rem;
      }
      &:nth-child(2){
        border-top-right-radius: 1.875rem;
        border-bottom-right-radius: 1.875rem;
      }
    }
  }
}
</style>