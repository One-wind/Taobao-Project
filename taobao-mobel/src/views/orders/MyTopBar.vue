<template>
    <div class="topBar">
        <ul @click.stop="orderClick" >
            <li data-name="AllOrders" :class="{clickActive:clickName == 'AllOrders'}">全部</li>
            <li data-name="WaitForPay" :class="{clickActive:clickName == 'WaitForPay'}">待付款</li>
            <li data-name="ToBeDelivered" :class="{clickActive:clickName == 'ToBeDelivered'}">待发货</li>
            <li data-name="DaiShouHuo" :class="{clickActive:clickName == 'DaiShouHuo'}">待收货</li>
            <li data-name="DaiPingJia" :class="{clickActive:clickName == 'DaiPingJia'}">待评价</li>
        </ul>
        <div class="searchBar">
            <div class="leftSearch">
                <span class="iconfont icon-sousuo"></span>
                <input type="text" placeholder="搜索全部订单" />
            </div>
            <button>搜索</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            clickName:'AllOrders',
        }
    },
    methods:{
        orderClick(ev){
            let compname = ev.target.dataset.name
            if(compname){
                this.clickName = compname
                this.$store.commit('setCompX',compname)
            }
        },
    }
}
</script>
<style  lang="less" scoped>
@import url('//at.alicdn.com/t/font_2136389_i6xcdcdf4ld.css');
.topBar{
    >ul{
        display: flex;
        height: 2.5rem;
        width: 100%;
        background-color: #fff;
        justify-content: space-around;
        align-items: center;
        font-size: 0.75rem;
        color: #000;
        position: fixed;
        top: 0;
        li{
            border-bottom: 2px solid #ff510000;
            height: 2.5rem;
            line-height: 2.5rem;
            box-sizing: border-box;
        }
        .clickActive{
            color: #ff5000;
            border-bottom: 2px solid #ff5100;
        }
    }
    >.searchBar{
        display: flex;
        width: 21.9375rem;
        height:1.625rem ;
        align-items: center;
        margin: 3.25rem 0.75rem 0.75rem 0.75rem;
        justify-content: space-between;
        .leftSearch{
            width: 15.5rem;
            height: 1.625rem;
            background-color: #fff;
            display: flex;
            align-items: center;
            border-radius: 0.8125rem;
            padding: 0 0.625rem;
            .icon-sousuo{
                font-size: 0.8125rem;
                color: #b2b2b2;
            }
            input{
                outline: none;
                flex-grow: 1;
                border: none;
                padding-left: 0.3125rem;
            }
        }
        button{
            border: none;
            background-color: #ff5000;
            width: 4.6875rem;
            height: 1.625rem;
            color: #fff;
            font-size: 0.875rem;
            border-radius: 0.8125rem;
        }
    }
}
</style>