<template>
  <div class="orderLis1t" >
    <div class="orderBox" v-for="(item ,i) in num" :key="i">
        <span>{{item}}</span>
        <div class="shopStatus">
            <router-link to='/' class="shopTittle">
                <span class="iconfont icon-tianmao"></span>
                <span class="shopName">奇妙旗舰店</span>
            </router-link>
            <router-link to="/">
                <span class="goodStatus">卖家已发货</span>
            </router-link>
        </div>
        <router-link to="/" class="orderState">
            <img src="../../assets/orderimg/good01.jpg" />
            <div class="goodDiscrib">
                <span class="goodTittle">蔓越莓曲奇饼干整箱夹心散装多口味办公室小包装零食小吃休...</span>
                <div class="priceAndNum">
                    <span>&yen;16.90</span>
                    <span>x1</span>
                </div>
                <span class="orderDiscribe">
                    曲奇饼干;蔓越莓曲奇+送同款400g(发800g/仅16.9元)
                </span>
                <span class="qiTian">七天无理由退换</span>
            </div>
        </router-link>
        <div class="insurance">保险服务</div>
        <div class="benefit">
            <span>总价&yen;16.90，优惠&yen;2.50</span>
            <span>实付款&yen;14.40</span> 
        </div>
        <div class="bottomBtn">
            <router-link to="/">更多</router-link>
            <button id="ticket">申请开票</button>
            <button id="logistic">查看物流</button>
            <button id="receive">确认收货</button>
        </div>
    </div>
    <div class="blank"  ref="odL"></div>
  </div>
</template>

<script>
export default {
  name: "AllOrders",
  props:['num'],

  mounted(){
      this.$emit('myScroll',this.$refs.odL,2)
  }
  
};
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_2136389_lj8zpciwnob.css');
.orderList{
    height: 100%;
    overflow-y: auto;
}
.orderBox{
    margin: 0.75rem;
    background-color: #fff;
    border-radius: 1rem;
    padding: 0.75rem 0.75rem 0 0.75rem;
    font-size: 0.75rem;
    .shopStatus{
        display: flex;
        justify-content: space-between;
        height: 2.9375rem;
        align-items: center;
        .shopTittle{
            display: flex;
            height: 2.9375rem;
            line-height: 2.9375rem;
            .icon-tianmao{
                font-size: 1.125rem;
                color: rgb(250, 119, 119);
            }
            .shopName{
                color: #000;
            } 
        }
        .goodStatus{
            color: #ff5000;
        }
    }
    .orderState{
        height: 6.1875rem;
        display: flex;
        >img{
          display: block;
          width: 5.625rem;  
          height: 5.625rem;
          border-radius: 0.3125rem;  
        }
        .goodDiscrib{
            margin-left: 0.75rem;
            .goodTittle{
                display: inline-block;
                color: #333;
                height: 1.75rem;
                width: 10.625rem;
                line-height: 0.875rem;
            }
            .priceAndNum{
                display:inline-block;
                margin-left: 0.5rem;
                >span{
                    display: block;
                    text-align: right;
                    &:first-child{
                        color: #333;
                    }
                }
            }
            .orderDiscribe{
                display: block;
                width: 13.5rem;
                height: 1.75rem;
                line-height: 0.875rem;
                margin: 0.3rem auto;
            }
            .qiTian{
                margin-top: 0.625rem;
                color: #ff5000;
                background-color: #ff510025;
            }
        }
    }
    .insurance{
        color: #333;
        padding-left: 6.375rem;
        height: 2.25rem;
        margin-bottom: 0.75rem;
    }
    .benefit{
        height: 2rem;
        text-align: right;
        border-bottom: 1px solid #f2f2f2;
        span:last-child{
            color: #333;
            margin-left: 0.75rem;
        }
    }
    .bottomBtn{
        height: 2.9375rem;
        line-height: 2.9375rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        >a{
            display: block;
            color: #666;
            font-size: 0.8125rem;
            width: 3.75rem;
            height: 1.75rem;
            margin-left: 0.5625rem;
            line-height: 1.75rem;
        }
        >button{
            display: block;
            height: 1.75rem;
            width: 5rem;
            font-size: 0.8125rem;
            color: #666;
            background-color: #fff;
            border: 1px solid #666;
            border-radius: 0.875rem;
        }
    }
}
.blank{
    height: 2.75rem;
}
</style>
