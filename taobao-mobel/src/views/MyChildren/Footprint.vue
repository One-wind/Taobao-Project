<!--
 * @Author: your name
 * @Date: 2020-10-23 17:37:28
 * @LastEditTime: 2020-10-26 09:13:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taobao-mobel\src\views\MyChildren\Footprint.vue
-->
<template>
  <div class="footprint" ref="footprint" @scroll="ftpScroll">
    <div class="allData">

      <!-- 日历收起部分 -->
      <div class="lessData" v-show="lessData">
        <ul class="week">
          <li v-for="(item, i) in week" :key="'i' + i">{{ item }}</li>
        </ul>
        <ul class="data" @click="dataTap">
          <li v-for="j in 7" :key="'j' + j">
            <p :data-key = '24 + j'
              :class="{
                active: activeNum == 24 + j && datas.indexOf(24 + j) > -1,
                getData: getTime == 24 + j,
              }"
            >
              {{ 24 + j }}
            </p>
            <div
              :class="['spot', { spActive: datas.indexOf(24 + j) > -1 }]"
            ></div>
          </li>
        </ul>
        <div class="lower" @click="lowerTap">
          <span class="iconfont icon-xia"></span>
        </div>
      </div>

      <!-- 日历展开部分 -->
      <div class="moreData" v-show="!lessData">

        <!-- 最新月份 -->
        <div class="newMonth" v-show="newMonthBoo">
          <p>
            <span class="iconfont icon-prev" @click="prevTap"></span>
            <strong>2020年10月</strong>
            <span class="iconfont icon-next pNdisabled"></span>
          </p>
          <ul class="week">
            <li v-for="(item, i) in week" :key="'i1' + i">{{ item }}</li>
          </ul>
          <ul class="data" @click="dataTap">
            <li class="old" v-for="j in 4" :key="'j1' + j">
              <p :data-key = '26 + j'
                :class="{
                  active: activeNum == 26 + j && datas.indexOf(26 + j) > -1,
                  getData: getTime == 26 + j,
                }"
              >
              <!-- <p> -->
                {{ 26 + j }}
              </p>
              <div
                :class="['spot', { spActive: datas.indexOf(26 + j) > -1 }]"
              ></div>
            </li>
            <li v-for="k in 31" :key="'k1' + k">
              <p :class="{ active: activeNum == k && datas.indexOf(k) > -1, getData: getTime == k }" :data-key = 'k'>
                {{ k }}
              </p>
              <div :class="['spot', { spActive: datas.indexOf(k) > -1 }]"></div>
            </li>
            <li class="old" v-for="l in 7" :key="'l1' + l">
              <p :class="{ active: activeNum == l && datas.indexOf(l) > -1, getData: getTime == l }"  :data-key = 'l'>
              <!-- <p> -->
                {{ l }}
              </p>
              <div :class="['spot', { spActive: datas.indexOf(l) > -1 }]"></div>
            </li>
          </ul>
          <div class="lower" @click="upperTap">
            <span class="iconfont icon-shang"></span>
          </div>
        </div>

        <!-- 上一个月份 -->
        <div class="oldMonth" v-show="!newMonthBoo">
          <p>
            <span class="iconfont icon-prev pNdisabled"></span>
            <strong>2020年9月</strong>
            <span class="iconfont icon-next" @click="nextTap"></span>
          </p>
          <ul class="week">
            <li v-for="(item, i) in week" :key="'i2' + i">{{ item }}</li>
          </ul>
          <ul class="data" @click="dataTap">
            <li class="old" v-for="j in 2" :key="'j2' + j">
              <p :data-key = '129 + j'
                :class="{
                  active: activeNum == 129 + j && datas.indexOf(129 + j) > -1,
                  getData: getTime == 129 + j,
                }"
              >
              <!-- <p> -->
                {{ 29 + j }}
              </p>
              <div
                :class="['spot', { spActive: datas.indexOf(129 + j) > -1 }]"
              ></div>
            </li>
            <li v-for="k in 30" :key="'k2' + k"  :data-key = '100 + k'>
              <p :class="{ active: activeNum == 100 + k && datas.indexOf(100 + k) > -1, getData: getTime == 100 + k }" :data-key = '100 + k'>
                {{ k }}
              </p>
              <div
                :class="['spot', { spActive: datas.indexOf(100 + k) > -1 }]"
              ></div>
            </li>
            <li class="old" v-for="l in 10" :key="'l2' + l">
              <p :class="{ active: activeNum == 100 + l && datas.indexOf(100 + l) > -1, getData: getTime == 100 + l }" :data-key = '100 + l'>
              <!-- <p> -->
                {{ l }}
              </p>
              <div
                :class="['spot', { spActive: datas.indexOf(100 + l) > -1 }]"
              ></div>
            </li>
          </ul>
          <div class="lower" @click="upperTap">
            <span class="iconfont icon-shang"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 足迹内容区 -->
    <div class="content" :style="{ marginTop: topNum + 'rem' }">
      <!-- <ul>
        <li v-for="i in 1000" :key="i">{{i}}</li>
      </ul> -->
      <Trace></Trace>
    </div>
    <!-- 回到顶部 -->
    <div class="goTop" @click="goTopTap" v-show="goTopShow">
      <img
        src="https://gw.alicdn.com/tps/TB1UhIvLXXXXXaRXpXXXXXXXXXX-60-66.png"
        alt=""
      />
      <p>顶部</p>
    </div>
    <!-- 无足迹提示消息 -->
    <div class="msg" v-show="messageShow">
      这一天没有足迹哦
    </div>
  </div>
</template>

<script>
import Trace from './Trace'
export default {
  name: "Footprint",
  components:{Trace},
  data() {
    return {
      lessData: true,
      activeNum: undefined,
      newMonthBoo: true,
      topNum: 6.875,
      getTime: undefined,
      goTopShow: false,
      messageShow: false,
      timer: null,
      week: ["日", "一", "二", "三", "四", "五", "六"],
      datas: [23,22,21,20,123],
    };
  },
  //  隐藏显示底部菜单
  beforeRouteLeave(to, from, next) {
    this.$emit("lOrRActive", true);
    next();
  },
  created(){
    let time = new Date()
    this.getTime = time.getDate();
    this.activeNum = time.getDate();
    this.$emit("lOrRActive", false);
  },
  methods: {
    // 我的足迹页面滚动事件
    ftpScroll(){
      // console.log(this.$refs.footprint.scrollTop - this.$refs.footprint.clientHeight);
      this.$refs.footprint.scrollTop > 50 ? this.goTopShow = true : this.goTopShow = false
    },
    // 日历点击响应
    dataTap(ev){
      if (ev.target.dataset.key) {
          // console.log(this.datas.indexOf(parseInt(ev.target.dataset.key)));
        if( this.datas.indexOf(parseInt(ev.target.dataset.key)) > -1 ){
          this.activeNum = ev.target.dataset.key
        }else{
          clearTimeout(this.timer)
          this.messageShow = true
          this.timer = setTimeout(() => {
            this.messageShow = false
          }, 1000);
        }
      }

    },
    // 日历展开
    lowerTap() {
      this.lessData = false;
      this.topNum = 21.25;
    },
    // 日历收起
    upperTap() {
      this.lessData = true;
      this.newMonthBoo = true;
      this.topNum = 6.875;
    },
    // 上一个月点击
    prevTap() {
      this.newMonthBoo = false;
    },
    // 下一个月点击
    nextTap() {
      this.newMonthBoo = true;
    },
    // 回到顶部
    goTopTap() {
      console.log();
      this.$refs.footprint.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2154524_1f96e7hlim8.css");

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footprint {
  height: 100%;
  overflow-y: auto;
  ul {
    .flex;
    li {
      width: 3.25rem;
      text-align: center;
      font-size: 0.9375rem;
      .getData {
        background: rgb(255, 152, 174);
      }
    }
  }
  .allData {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 800;
    // 日历收起部分
    .lessData {
      position: relative;
      padding-top: 0.3125rem;
      padding-bottom: 0.5rem;
      background: #fff;
      .week {
        li {
          height: 2.34375rem;
          line-height: 2.34375rem;
          color: #ccc;
        }
      }
      .data {
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 0.75rem;
          color: #333;
          p {
            width: 1.5625rem;
            height: 1.5625rem;
            border-radius: 50%;
            line-height: 1.5625rem;
            &.active {
              background: #ff0036;
              color: #fff;
            }
          }
          .spot {
            width: 0.25rem;
            height: 0.25rem;
            margin-top: 0.25rem;
            border-radius: 50%;
            &.spActive {
              background: #ff0036;
            }
          }
        }
      }
      .lower {
        position: absolute;
        bottom: -0.9375rem;
        right: 1.5625rem;
        width: 1.875rem;
        height: 1.875rem;
        text-align: center;
        line-height: 1.875rem;
        border-radius: 50%;
        background: #fff;
      }
    }

    //   日历展开部分
    .moreData {
      .newMonth,
      .oldMonth {
        position: relative;
        padding-top: 0.3125rem;
        padding-bottom: 0.5rem;
        background: #fff;
        > p {
          padding-top: 0.3125rem;
          height: 1.875rem;
          line-height: 1.875rem;
          color: #333;
          text-align: center;
          strong {
            margin: 0 1.25rem;
            font-weight: normal;
            font-size: 0.9375rem;
          }
          span {
            font-size: 0.625rem;
            &.pNdisabled {
              color: #999;
            }
          }
        }
        .week {
          li {
            height: 2.34375rem;
            line-height: 2.34375rem;
            color: #ccc;
          }
        }
        .data {
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 0.4375rem;
            color: #333;
            &.old {
              color: #999;
            }
            p {
              width: 1.5625rem;
              height: 1.5625rem;
              border-radius: 50%;
              line-height: 1.5625rem;
              &.active {
                background: #ff0036;
                color: #fff;
              }
            }
            .spot {
              width: 0.25rem;
              height: 0.25rem;
              margin-top: 0.25rem;
              border-radius: 50%;
              &.spActive {
                background: #ff0036;
              }
            }
          }
        }
        .lower {
          position: absolute;
          bottom: -0.9375rem;
          right: 1.5625rem;
          width: 1.875rem;
          height: 1.875rem;
          text-align: center;
          line-height: 1.875rem;
          border-radius: 50%;
          background: #fff;
        }
      }
    }
  }

  .goTop {
    position: fixed;
    bottom: 3.75rem;
    right: 0.78125rem;
    z-index: 900;
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(255, 255, 255, 0.699);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    img {
      width: 0.9375rem;
      height: 0.8125rem;
      margin: 0.3125rem 0.8125rem 0px;
    }
    p {
      margin-top: 0;
      color: #5f646e;
      font-size: 0.75rem;
      text-align: center;
    }
  }
  .msg{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 900;
    margin-top: -1.25rem;
    margin-left: -4.6875rem;
    width: 9.375rem;
    height: 2.5rem;
    background: rgba(0, 0, 0, 0.76);
    font-size: 0.875rem;
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
    border-radius: 0.25rem;

  }
  .content {
    width: 100%;
  }
}
</style>
