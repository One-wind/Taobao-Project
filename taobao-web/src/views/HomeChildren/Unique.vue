<template>
    <div class="unique">
        <div class="content">
            <!-- 每日好店start -->
            <div class="shop">
                <div class="shopLeft">
                    <p>
                        <img src="../../assets/images/yixin/haodian.png" alt="">
                        <span>发现深藏的好店</span>
                    </p>
                    <div class="shopLeftMian">
                        <router-link to="/">
                            <h4>万能事集</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/monkey.png" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/monkey.png" alt="">
                                    <img src="../../assets/images/yixin/monkey.png" alt="">
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/">
                            <h4>淘宝江湖</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/chuangdan.jpg" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/chuangdan.jpg" alt="">
                                    <img src="../../assets/images/yixin/chuangdan.jpg" alt="">
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/" class="">
                            <h4>深藏不漏</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/pidai.jpg" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/pidai.jpg" alt="">
                                    <img src="../../assets/images/yixin/pidai.jpg" alt="">
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/">
                            <h4>高手林立</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/hua.jpg" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/hua.jpg" alt="">
                                    <img src="../../assets/images/yixin/hua.jpg" alt="">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="shopRight">
                    <p>
                        <img src="../../assets/images/yixin/zhobo.png" alt="">
                        <span>你的爱豆直播等你哟！</span>
                    </p>
                    <div class="shopRightMian">
                        <router-link to="/">
                            <h4>晴天时尚妈妈装</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/yifu.jpg" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/yifu.jpg" alt="">
                                    <img src="../../assets/images/yixin/yifu.jpg" alt="">
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/">
                            <h4>塑身腰封内衣店</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/wenxiong.jpg" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/wenxiong.jpg" alt="">
                                    <img src="../../assets/images/yixin/wenxiong.jpg" alt="">
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/" class="">
                            <h4>卡路里家居服饰</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/mote.jpg" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/mote.jpg" alt="">
                                    <img src="../../assets/images/yixin/mote.jpg" alt="">
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/">
                            <h4>艾伦带你选鞋子</h4>
                            <div class="photo">
                                <img src="../../assets/images/yixin/xiezi.jpg" alt="">
                                <div class="photoRight">
                                    <img src="../../assets/images/yixin/xiezi.jpg" alt="">
                                    <img src="../../assets/images/yixin/xiezi.jpg" alt="">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- 每日好店end -->
            <!-- 特色好物start -->
            <div class="goods">
                <div class="goodsLeft">
                    <h2><span></span>特色好物</h2>
                    <div class="goodsMain">
                        <router-link to="/">
                            <h4>拍卖</h4>
                            <p>一元起拍捡漏</p>
                            <img src="../../assets/images/yixin/watch.jpg" alt="">
                        </router-link>
                        <router-link to="/">
                            <h4>淘小铺</h4>
                            <p>每月多赚1000元</p>
                            <img src="../../assets/images/yixin/shenxianshui.jpg" alt="">
                        </router-link>
                        <router-link to="/">
                            <h4>造点新货</h4>
                            <p>全球创意众筹平台</p>
                            <img src="../../assets/images/yixin/zhinengg.png" alt="">
                        </router-link>
                        <router-link to="/">
                            <h4>淘宝心选</h4>
                            <p>美好而有用</p>
                            <img src="../../assets/images/yixin/pack.png" alt="">
                        </router-link>
                    </div>
                </div>
                <div class="goodsRight">
                    <img src="../../assets/images/yixin/jinshuiqi.jpg" alt="">
                </div>
            </div>
            <!-- 特色好物end -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
@colorBig : #333333;
@colorSmall:#999999;
// 每日好店内容复用样式
.shopMian{
    display: flex;
                flex-wrap: wrap;
               
                a{
                    margin-top: 7px;
                    h4{
                    height: 42px;
                    line-height: 42px;
                    font-size: 16px;
                    color: @colorBig;
                    font-weight: 400;   
                    display: flex;
                    }
                    &:hover>h4{
                        color: red;
                    }
                    div.photo{
                        display: flex;
                        margin-bottom: 20px;
                        >img{
                            width: 180px;
                            height: 180px;
                        }
                        div.photoRight{
                            img{
                                display: block;
                                width: 89px;
                                height: 89px;
                                margin: 0 6px 2px 2px;
                            }
                        }
                    }
                }
}
.unique{
    background: #f4f4f4;
}
div.content{
    border: 1px solid #f4f4f4;

    // 每日好店内容
    div.shop{
        width: 1190px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;

        >*{
            width: 556px;
            height: 522px;
            background: #fff;
            padding: 18px 14px 0 20px;
        }
        // 每日好店左侧内容
        .shopLeft{

            p{
                height: 24px;
                >*{
                    vertical-align: middle;
                }

                img{height: 24px;width: 81px;}
                span{margin-left: 12px;color:@colorSmall}
            }
            .shopLeftMian{
               .shopMian
            }
        }
        // 每日好店右侧
        .shopRight{

            p{
                height: 24px;
                >*{
                    vertical-align: middle;
                }

                img{height: 21px;width: 102px;}
                span{margin-left: 12px;color:@colorSmall}
            }
            .shopRightMian{
               .shopMian
            }
        }
    }
    // 特色好物内容
    div.goods{
        width: 1190px;
        display: flex;
        height: 290px;
        margin: 0 auto;
        justify-content: space-between;

        div.goodsLeft{
            width: 835px;
            background: #fff;

            h2{
                margin-top: 5px;
                padding-left: 20px;
                height: 48px;
                font-size: 20px;
                color: #ad45df;
                display: flex;
                align-items: center;

                span{
                    height: 20px;
                    background: #ad45df;
                    width: 3px;
                    margin-right: 10px;
                    
                }
            }
            .goodsMain{
                margin: 0 -1px;
                display: flex;
                a{
                    border: 1px solid #f4f4f4;
                    flex-grow: 1;
                    height: 236px;
                    padding-left: 20px;

                    &:hover{
                        border: 1px solid red;
                    }
                    h4{
                        margin-top: 17px;
                        font-size: 18px;
                        height: 26px;
                        line-height: 26px;
                        color:@colorBig;
                    }
                    p{
                        height: 22px;
                        line-height: 22px;
                        color: @colorSmall;
                    }
                    img{
                        display: block;
                        margin: 12px 0 0 6px;
                        height: 150px;
                        width: 150px;
                    }
                }
            }
            
        }
        div.goodsRight{
            width: 340px;
            background: #fff;
            border: 1px solid #fff;

            &:hover{border: 1px solid red;}
            img{
                display: block;
                margin: 20px;
            }
        }
    }
}
</style>