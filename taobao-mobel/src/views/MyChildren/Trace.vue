<!--
 * @Author: your name
 * @Date: 2020-10-23 17:41:12
 * @LastEditTime: 2020-10-24 14:56:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \codec:\Users\Administrator.USER-20190809OQ\Desktop\taobao-mobel\src\components\Trace\Trace.vue
-->
<template>
  <div class="trace" v-cloak>
    <!-- <div class="data"><span>10月23日</span></div> -->
    <ul class="goodsList" v-for="(items,j) in list" :key="j">
    <div class="data"><span>{{items[0].day}}</span></div>

      <li v-for="(item, i) in items" :key="i">
        <div>
          <router-link to=""
            ><img class="goodsImg" :src="$url + '/' + item.img" alt=""
          /></router-link>
        </div>
        <div class="price">
          <router-link to=""
            ><span>¥</span><span>{{ item.price }}</span></router-link
          ><span class="iconfont icon-gengduo"></span>
        </div>
      </li>
    </ul>
    <!-- <div class="data"><span>10月22日</span></div>
    <ul class="goodsList">
      <li v-for="(item, i) in items" :key="i">
        <div>
          <router-link to=""
            ><img class="goodsImg" :src="$url + '/' + item.img" alt=""
          /></router-link>
        </div>
        <div class="price">
          <router-link to=""
            ><span>¥</span><span>{{ item.price }}</span></router-link
          ><span class="iconfont icon-gengduo"></span>
        </div>
      </li>
    </ul>
    <div class="data"><span>10月21日</span></div>
    <ul class="goodsList">
      <li v-for="(item, i) in items" :key="i">
        <div>
          <router-link to=""
            ><img class="goodsImg" :src="$url + '/' + item.img" alt=""
          /></router-link>
        </div>
        <div class="price">
          <router-link to=""
            ><span>¥</span><span>{{ item.price }}</span></router-link
          ><span class="iconfont icon-gengduo"></span>
        </div>
      </li>
    </ul>
    <div class="data"><span>10月20日</span></div>
    <ul class="goodsList">
      <li v-for="(item, i) in items" :key="i">
        <div>
          <router-link to=""
            ><img class="goodsImg" :src="$url + '/' + item.img" alt=""
          /></router-link>
        </div>
        <div class="price">
          <router-link to=""
            ><span>¥</span><span>{{ item.price }}</span></router-link
          ><span class="iconfont icon-gengduo"></span>
        </div>
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: "Trace",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getData("2020-10-23", "2020-10-24");
    this.getData("2020-10-22", "2020-10-23");
    this.getData("2020-10-21", "2020-10-22");
    this.getData("2020-10-20", "2020-10-21");
  },
  methods: {
    getData(stime, etime) {
      this.$ajax({
        method: "post",
        url: this.$url + "/trace",
        data: {
          flag: "findByData",
          stime: stime,
          etime: etime,
          // time:{stime:"2020-10-21",etime:"2020-10-22"},
        },
      })
        .then((res) => {
          console.log(res);
          for (const key in res) {
            res[key].img = JSON.parse(res[key].img);
          }
          // res[0].img = JSON.parse(res[0].img);
          this.list.push (res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_2154642_ap4kuwdi8vs.css');
.data{
  width: 22.8125rem;
  height: 2rem;
  line-height: 2rem;
  margin-left: 0.625rem;
  span{
    font-size: 0.75rem;
  }
}
.trace {
  position: relative;
  .goodsList {
    width: 23.4375rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      background: #ffffff;
      border: 1px solid #f4f4f4;
      .goodsImg {
        margin-right: 1px;
        width: 122px;
        height: 122px;
      }
      .price {
        width: 7.65625rem;
        height: 3.125rem;
        line-height: 3.125rem;
        display: flex;
        justify-content: space-around;
        a {
          font-size: 0.8125rem;
          color: rgb(255, 0, 90);
        }
      }
    }
  }
}
</style>