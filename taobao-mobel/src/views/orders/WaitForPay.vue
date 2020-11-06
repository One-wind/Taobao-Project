<template>
  <div class="waitforpay" >
    <div class="payList"  v-for="(item, i) in num" :key="i" >
      <div class="store">
        <div class="storeName">
          <img src="../../assets/orderimg/tianmao.webp" alt="">
          <span>ChaLi旗舰店</span>
        </div> 
        <div class="payText">
          <span>等待买家付款</span>
        </div>
      </div>
      <div class="content">
        <div class="goodsImg">
          <img src="../../assets/orderimg/goods.jpg" alt="">
        </div>
        <div class="goodsText">
          <div class="goodsText1">ChaLi茶里三角红茶包桂花乌龙绿茶菊花茶普洱袋泡茶玫瑰花...</div>
          <div class="goodsText2">ChaLi茶里玖包茶【第2件半价】</div>
          <div class="goodsText3"><span>七天无理由退换</span></div>
        </div>
        <div class="goodsPrice">
          <span>￥34.90</span>
          <span>x1</span>
        </div>
      </div>
      <div class="price">
        <div>
          <span>总价￥34.90</span>
          <span>需付款￥34.90</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="option">
        <div class="more"><span>更多</span></div>
        <div class="address"><span>修改地址</span></div>
        <div class="cancelOrder"><span>取消订单</span></div>
        <div class="payBtn"><span>付款</span></div>
      </div>
    </div>
    <div class="bottomDiv" ref="bottomDiv"></div>
  </div>
</template>

<script>
export default {
  name: "waitforpay",
  props:['num'],
  mounted(){
      this.$emit('myScroll',this.$refs.bottomDiv)
  }
};
</script>

<style lang="less" scoped>
  .waitforpay{
    width: 100%;
    height: 100%;
    // overflow-y: auto;
    .payList{
      width: 21.9375rem;
      height: 14.25rem;
      margin: 0 0.75rem 0.75rem 0.75rem;
      background: #fff;
      border-radius: 0.75rem;
      .store{
        width: 21.9375rem;
        height: 2.9375rem;
        display: flex;
        justify-content: space-between;
        .storeName{
          display: flex;
          >img{
            margin-left: 0.75rem;
            width: 0.9375rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            height: 0.9375rem;
          }
          >span{
            align-items: center;
            height: 0.875rem;
            line-height: 0.875rem;
            font-size: 0.75rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            margin-left: 0.3125rem;
            color: #000;
          }
        }
        .payText{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          >span{
            font-size: 0.75rem;
            color: rgb(255, 80, 0);
            margin: 1rem 0.75rem;
          }
        }
      }
      .content{
        width: 21.9375rem;
        height: 5.625rem;
        margin-bottom: 0.75rem;
        display: flex;
        justify-content: space-between;
        .goodsImg{
          >img{
            width: 5.625rem;
            height: 5.625rem;
            margin-left: 0.75rem;
            border-radius: 0.375rem;
          }
        }
        .goodsText{
          width: 10.625rem;
          height: 5.3125rem;
          display: flex;
          flex-direction: column;
          .goodsText1{
            width: 10.625rem;
            color: rgb(51, 51, 51);
            font-size: 0.75rem;
            margin-bottom: 0.3125rem;
            line-height: 0.875rem;
            text-overflow: ellipsis;
          }
          .goodsText2{
            color: rgb(153, 153, 153);
            margin-bottom: 0.3125rem;
            line-height: 0.875rem;
            font-size: 0.75rem;
          }
          .goodsText3{
            margin-right: 0.25rem;
            margin-bottom: 0.3125rem;
            width: 100%;
            

            >span{
              background-color: rgb(255, 241, 235);
              padding: 0.125rem;
              color: rgb(255, 80, 0);
              line-height: 0.75rem;
              font-size: 0.75rem;
              border-radius: 0.25rem;
            }
          }
        }
        .goodsPrice{
          display: flex;
          flex-direction: column;
          margin-right: 0.75rem;
          :first-child{
            margin-top: 0.1875rem;
            margin-bottom: 0.1875rem;
            font-size: 0.75rem;
            text-align: end;
            color: rgb(51, 51, 51);
          }
          :last-child{
            margin-top: 0.1875rem;
            margin-bottom: 0.1875rem;
            font-size: 0.75rem;
            text-align: end;
            color: rgb(153, 153, 153);
          }
        }
      }
      .price{
        display: flex;
        justify-content: flex-end;
        height: 2rem;
        width: 21.9375rem;
        >div{
          display: flex;
          justify-content: flex-end;
          margin-top: 0.375rem;
          margin-bottom: 0.75rem;
          margin-right: 0.75rem;
          :first-child{
            line-height: 0.875rem;
            margin-left: 0.75rem;
            font-size: 0.75rem;
            color: rgb(153, 153, 153);
          }
          :last-child{
            margin-left: 0.75rem;
            font-size: 0.75rem;
            color: rgb(51, 51, 51);
            line-height: 0.875rem;
            color: rgb(51, 51, 51);
          }
        }
      }
      .line{
        width: 100%;
        background-color: rgb(248, 248, 248);
        height: 0.0625rem;
      }
      .option{
        display: flex;
        margin-left: 0.9375rem;
        .more{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5625rem;
          height: 1.75rem;
          width: 3.75rem;
          margin-right: 0.5625rem;
          >span{
            line-height: 1rem;
            color: rgb(102, 102, 102);
            font-size: 0.8125rem;
          }
        }
        .address,.cancelOrder{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5625rem;
          margin-bottom: 0.5625rem;
          height: 1.75rem;
          margin-right: 0.5625rem;
          width: 5rem;
          border-radius: 0.9375rem;
          box-shadow: rgb(153, 153, 153) 0px 0px 0px 0.0625rem inset;
          >span{
            line-height: 1rem;
            color: rgb(102, 102, 102);
            font-size: 0.8125rem;
          }
        }
        .payBtn{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5625rem;
          margin-bottom: 0.5625rem;
          height: 1.75rem;
          margin-right: 0.5625rem;
          width: 5rem;
          border-radius: 0.9375rem;
          box-shadow: rgb(255, 80, 0) 0px 0px 0px 0.0625rem inset;
          >span{
            line-height: 1rem;
            color: rgb(255, 80, 0);
            font-size: 0.8125rem;
          }
        }
      }
    }
  }
  .bottomDiv{
    height: 0px;
    background: chocolate;
  }
</style>
