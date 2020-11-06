<template>
    <div id="toBeDelivered">
        <!-- 无带发货订单时样式 -->
        <div class="noOrder" v-show="noContent">
            <img src="https://img.alicdn.com/tfs/TB1vJ_.vTqWBKNjSZFxXXcpLpXa-330-330.png">
            <p>您还没有相关的订单</p>
            <p>可以去看看有哪些想买的</p>
            <router-link to="/">随便逛逛</router-link>
        </div>
        <!-- 有待发货时样式 -->
        <div class="isOrder" >
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
            <div class="orderContainer">
                <div class="orderTop">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/tps/i1/TB1PsTiHVXXXXcXXXXXsYU.HpXX-55-64.png_50x50_.webp" alt="">
                        <span>运动世家体育正品店</span>
                    </router-link>
                    <span>买家已付款</span>
                </div>
                <div class="orderContent">
                    <router-link to="/">
                        <img src="https://img.alicdn.com/imgextra/i3/2491473391/O1CN01kmfXMu1av7fw26T7f_!!2491473391.jpg_200x200.jpg" alt="">
                        <div class="orderContentLeft">
                            <div>
                                <p>Adidas阿迪达斯三叶草女鞋男鞋运动鞋金标贝壳头休闲鞋小白板鞋</p>
                                <div>
                                    <p>￥419.00</p>
                                    <span>x1</span>
                                </div>
                            </div>
                            <p>新款贝壳头/金标/建议拍小半码/;36</p>
                            <span>发货时间48小时内发货</span>
                        </div>
                    </router-link>
                    <div class="totalPrice">
                        <span>总价￥419.00,优惠￥160.22</span>
                        <span>实付款￥258.78</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            noContent:false
        }
    },
}
</script>

<style lang="less" scoped>
*{
    padding: 0;
    margin:0;
}
#toBeDelivered{
    .noOrder{
        padding-top: 7.5rem;
        background: #f5f5f5;
        text-align: center;
        img{
            width: 5.125rem;
            height: 5.125rem;
        }
        p{
            font-size: 1rem;
            color: #333;
            margin: 0.375rem;
            &:nth-child(3){
                font-size: 0.75rem;
                color: #999;
            }
        }
        >a{
            display: block;
            width: 6.125rem;
            height: 2rem;
            line-height: 2rem;
            background-image: linear-gradient(to right, #fd9126, #ff5000);
            color: #fff;
            margin: 0 auto;
            border-radius: 1.0625rem;
            margin-top: 3.125rem;
        }
    }
    .isOrder{
        padding:0 0.75rem;
        .orderContainer{
            padding: 0 0.75rem 0.75rem;
            margin-bottom: 0.9375rem;
            background: #fff;
            border-radius: 0.75rem;
            .orderTop{
                height: 2.9375rem;
                line-height: 2.9375rem;
                display: flex;
                justify-content: space-between;
                a{
                    >*{
                        vertical-align: middle;
                    }
                    img{
                        width: 0.8125rem;
                        height: 0.9375rem;
                    }
                    span{
                        margin-left: 0.3125rem;
                        color: #000;
                        font-size: 0.75rem;
                    }
                }
                >span{
                    color:#ff5000;
                    font-size: 0.75rem;
                }
            }
            &:last-child{
                margin-bottom: 4.0625rem;
            }
        }
        .orderContent{
            a{
                display: flex;
                >img{
                    width: 5.625rem;
                    height: 5.625rem;
                    border-radius: 10%;
                }
                .orderContentLeft{
                    font-size: 0.75rem;
                    margin-left: 12px;
                    >div{
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 0.3125rem;
                        width: 100%;
                        >p{
                            width: 10.625rem;
                            height: 1.9375rem;
                            font-size: 0.75rem;
                            color: #333;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        >div{
                            text-align: right;
                            font-size: 0.75rem;
                            color: #333;
                            flex-grow: 1;
                            padding-left: 0.3125rem;
                        }
                    }
                    >p{
                        font-size: 0.75rem;
                        margin-bottom: 0.3125rem;
                    }
                    >span{
                        color: rgb(255, 159, 0);
                    }   
                }
            }
            .totalPrice{
                text-align: right;
                margin-top: 1.25rem;
                span{
                    font-size: 0.75rem;
                    &:first-child{
                        color: #999;
                    }
                    &:last-child{
                        color: #333;
                        margin-left: 0.75rem;
                    }
                }
            }
        }

    }
    .house{
        .topList{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 2.5rem;
            background: #fff;
            display: flex;
            align-items: center;
            li{
                flex-grow: 1;
                text-align:center;
                color: #000;
                font-size: 0.875rem;
            }
        }
    }
}
</style>