<template>
  <div>
    <!-- img跳转 -->
    <router-link to="/" class="imgJump">
      <img src="../../assets/Globalselection/02.jpg" alt="" />
    </router-link>
    <!-- 内容主题 -->
    <div class="selectedContent">
      <h2 class="contentTitle">
        <i class="iconfont icon-huo"></i>
        <span>TOP榜单</span>
        <i>热卖爆款 剁手不手软</i>
      </h2>
      <div class="selectedContent">
        <ul class="contentList">
          <li v-for="(val, i) in selected" :key="i">
            <div class="ranking">{{ val.ranking }}</div>
            <div class="contentListLeft">
              <img :src="val.img" alt="" />
            </div>
            <div class="contentListRight">
              <p>
                <!-- <img src="../../assets/Globalselection/05.png" alt="" /> -->
                <i></i>
                <span>{{ val.region }}</span>
              </p>
              <h3>{{ val.Goods }}</h3>
              <h4>{{ val.introduce }}</h4>
              <div class="sold">
                <span>￥{{ val.originalPrice }}</span>
                <span
                  ><i>{{ val.Sold }}</i
                  >件已售</span
                >
              </div>
              <div class="price">
                <span><i>￥</i>{{ val.price }}</span>
                <span>马上抢</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [
        {
          ranking: 1,
          img: require("../../assets/Globalselection/03.jpg"),
          region: "上海自贸区",
          Goods: "滋润保湿",
          introduce: "Soap Glory滋养黄油身体乳 500ml",
          originalPrice: "189",
          Sold: "11122",
          price: "80",
        },
        {
          ranking: 2,
          img: require("../../assets/Globalselection/06.jpg"),
          region: "上海自贸区",
          Goods: "宁波保税区",
          introduce: "Dove多芬长效保湿滋润身体乳*2",
          originalPrice: "169",
          Sold: "115522",
          price: "960",
        },
        {
          ranking: 3,
          img: require("../../assets/Globalselection/03.jpg"),
          region: "上海自贸区",
          Goods: "滋润保湿",
          introduce: "Soap Glory滋养黄油身体乳 500ml",
          originalPrice: "189",
          Sold: "11122",
          price: "80",
        },
        {
          ranking: 4,
          img: require("../../assets/Globalselection/06.jpg"),
          region: "上海自贸区",
          Goods: "宁波保税区",
          introduce: "Dove多芬长效保湿滋润身体乳*2",
          originalPrice: "169",
          Sold: "115522",
          price: "960",
        },
        {
          ranking: 5,
          img: require("../../assets/Globalselection/03.jpg"),
          region: "上海自贸区",
          Goods: "滋润保湿",
          introduce: "Soap Glory滋养黄油身体乳 500ml",
          originalPrice: "1289",
          Sold: "11122",
          price: "88",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
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
              border: 1px solid #704fae;
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