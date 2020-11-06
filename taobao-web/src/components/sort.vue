<!--
 * @Author: your name
 * @Date: 2020-10-16 20:21:23
 * @LastEditTime: 2020-10-20 16:22:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-taobao01\src\views\123.vue
-->
<template>
  <div class="gongcheng">
    <div id="content">
        <div class="main">
            <div class="sort">
                <div class="sortInformation">
                    <div class="sITop">
                        <!-- 商品排序销量信用价格左模块 -->
                        <div class="sITopLeft">
                            <ul class="sITopLeftOne">
                                <li><a href="">综合排序</a></li>
                                <li><a href="">销量</a></li>
                                <li><a href="">信用</a></li>
                                <li>
                                    <div class="link">
                                        <span>价格</span>
                                        <span class="iconfont icon-down"></span>
                                        <ul class="priceRanking">
                                        <li>
                                            <a href="">价格从低到高</a>
                                        </li>
                                        <li>
                                            <a href="">价格从高到低</a>
                                        </li>
                                        <li>
                                            <a href="">总价从低到高</a>
                                        </li>
                                        <li>
                                            <a href="">总价从高到低</a>
                                        </li>
                                    </ul>
                                    </div>
                                    
                                </li>
                            </ul>
                            <div class="sITopLeftTwo">
                                <div class="sTLTFrame">
                                    <ul>
                                        <li class="leftInput">
                                            <input type="text" placeholder="￥">
                                        </li>
                                        <li class=""> - </li>
                                        <li class="leftInput">
                                            <input type="text" placeholder="￥">
                                        </li>
                                    </ul>
                                </div>
                                <div class="priceRatio">
                                    <a href="">
                                        <img src="../img/bili.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- 发货地右模块 -->
                        <div class="sITopRight">
                            <div class="items">
                                <div class="itemsContent">
                                    <span>发货地</span>
                                    <span class="iconfont icon-down"></span>
                                    <ul class="regionList">
                                        <li>123123123213</li>
                                        <li>123123123213</li>
                                        <li>123123123213</li>
                                        <li>123123123213</li>
                                        <li>123123123213</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="styles">
                                <div class="network">
                                    <img src="../img/wanglong.png" alt="">
                                </div>
                                <div class="menuLogo">
                                     <img src="../img/caidan.png" alt="">
                                </div>
                            </div>
                            <div class="pager">
                                <span class="leftArrow"><a href=""><img src="../img/left.png" alt=""></a></span>
                                <span class="pagerContent">
                                    <span>{{$store.state.Search.listPage.current}}</span>
                                    <span>/</span>
                                    <span>{{$store.state.Search.listPage.page}}</span>
                                </span>
                                <span class="RightArrow"><a href=""><img src="../img/right.png" alt=""></a></span>
                            </div>
                        </div>
                        
                    </div>
                    <!-- 包邮赠送货到付款二手 -->
                    <div class="sIButtom">
                        <ul>
                            <li><img src="../img/checkbox.png"><p>包邮</p></li>
                            <li><img src="../img/checkbox.png"><p>赠送退货运费险</p></li>
                            <li><img src="../img/checkbox.png"><p>货到付款</p></li>
                            <li><img src="../img/checkbox.png"><p>新品</p></li>
                            <li><img src="../img/checkbox.png"><p>公益宝贝</p></li>
                            <li><img src="../img/checkbox.png"><p>二手</p></li>
                            <li><img src="../img/checkbox.png"><p>天猫</p></li>
                            <li><img src="../img/checkbox.png"><p>正品保障</p></li>
                            <li><img src="../img/checkbox.png"><p>7+天内退货</p></li>
                        </ul>
                        <div><span>更多</span><img src="../img/selectcheck.png"></div>
                        <span><a href="javascript:;">合并同款宝贝</a></span>
                    </div>
                </div>
            </div>
            <!-- 商品列表 start -->
            <div class="maintext">
                <div class="goodsList">
                    <div class="commodityInfo" v-for="(item, i) in $store.state.Search.list" :key='i'>
                        <!-- 商品图片 -->
                        <div class="goodspic">
                            <router-link :to="'/goods/'+item.id">
                                <img :src="item.imgs[0]" alt="" style="width:250px; height:250px">
                            </router-link>
                        </div>
                        <div class="goodsInfo">
                            <!-- 商品价格 -->
                            <div class="price">
                                <div class="priceLeft">
                                    <span>¥</span>
                                    <strong>{{item.price}}</strong>
                                    <div class="priceMiddle">包邮</div>
                                </div>
                                <div class="priceRight">{{item.pengJia}}人付款</div>
                            </div>
                            <!-- 商品描述 -->
                            <div class="details">
                                <a href="">{{item.name}}</a>
                            </div>
                            <!-- 商品店铺 -->
                            <div class="shopDetails">
                                <div class="sdLeft">
                                    <img src="../img/caidan.png" alt="">
                                    <div class="store"><a href="">jinpiao金飘旗舰店</a></div>
                                </div>
                                <div class="sdRight">浙江 月球</div>
                            </div>
                            <div class="tmallLogo">
                                <div class="tlLeft">
                                    <a href="">
                                        <img src="../img/tianmao.png" alt="">
                                    </a>
                                </div>
                                <div class="tlRight">
                                    <a href="">
                                        <img src="../img/aoliwangwang.png" alt="">
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@width:1350px;
@secondwidth:1070px;
     #top{
        height: 36px;
        width: 100%;
        background: red;
    }
    #search{
        height: 60px;
        width: @width;
        background: blue;
        margin: auto;
    }
    #content{
        width: @width;
        margin: auto;
        display: flex;
        .main{
        width: @secondwidth;
             .sort{
                height: 80px;
                width: @secondwidth;
                .sortInformation{
                    height: 80px;
                    width: @secondwidth;
                    margin-top: 10px;
                    .sITop{
                         width: 1068px;
                         height: 39px;
                         border: 1px solid  #e8e8e8;
                         background: #f5f5f5;
                         display: flex;
                         justify-content: space-between;
                         .sITopLeft{
                             min-width: 495px;
                             display: flex;
                            .sITopLeftOne{
                            display: flex;
                            position: relative;
                             li{
                                height: 39px;
                                line-height: 36px;
                                border-right: 1px solid  #f5f5f5;
                                a{
                                    padding: 0 19px;
                                    font-size: 12px;
                                    color: #797676;
                                }
                                .link{
                                    padding: 0 19px;
                                    font-size: 12px;
                                    .icon-down{
                                        margin-left: 2px;
                                        font-size: 12px;
                                    }
                                    &:hover{
                                        .priceRanking{
                                            display: block;
                                        }
                                    }
                                }
                                .priceRanking{
                                    display: none;
                                    position: absolute;
                                    top: -1px;
                                    left: 213px;
                                    width: 121px;
                                    height: 156px;
                                    background: white;
                                    border: 1px solid #ccc;
                                    box-shadow: 1px 4px 9px rgba(141, 140, 140, 0.233);
                                    li{
                                        a{
                                            color:  #797676;
                                            &:hover{
                                                color: orangered;
                                            }
                                        }
                                        
                                    }
                                }
                                &:first-child{
                                    background: white;
                                    border-color: #e5e5e5;
                                    a{
                                    color: orangered;
                                    }
                                
                                }
                                &:hover{
                                    background: white;
                                    border-color:  #e5e5e5;
                                    a{
                                        color: orangered;
                                        }
                                    }
                                }
                            }
                            .sITopLeftTwo{
                                display: flex;
                                .sTLTFrame{
                                    width: 130px;
                                    height: 39px;
                                    ul{
                                        width: 120px;
                                        height: 23px;
                                        padding: 8px 0 0 10px;
                                        display: flex;
                                        .leftInput{
                                            border: 1px solid #dfdfdf;
                                            input{
                                                width: 45px;
                                                height: 21px;
                                                padding: 0 4px;
                                            }
                                        }
                                        li{
                                            margin: 0 1px;
                                        }
                                    }
                                }
                                .priceRatio{
                                    width: 61px;
                                    height: 22px;
                                    margin: auto 0 auto 14px;
                                    a{
                                        display: inline-block;
                                        width: 15px;
                                        height: 22px;
                                        background: gray;
                                    }
                                }
                            }
                        }
                        .sITopRight{
                            max-width: 274px;
                            display: flex;
                            .items{
                                width: 88px;
                                height: 39px;
                                .itemsContent{
                                    margin: 10px 0 0 20px ;
                                    height: 39px;
                                    font-size: 12px;
                                    .icon-down{
                                        font-size: 12px;
                                    }
                                    .regionList{
                                        display: none;
                                        position: relative;
                                        top: 10px;
                                        left: -21px;
                                        background: white;
                                        width: 352px;
                                        height: 353px;
                                        border: 1px solid  #e8e8e8;
                                        border-top: none;
                                    }
                                }
                            &:hover{
                                background: white;
                                // border-left: 1px solid #e8e8e8;
                                .regionList{
                                    display: block;
                                    }
                                }
                                
                            }
                            
                            .styles{
                                display: flex;
                                
                                .network{
                                    border-left: 1px solid #e5e5e5;
                                    background: white;
                                    width: 42px;
                                    height: 39px;
                                    img{
                                        margin: 11px 12px;
                                    }
                                }
                                .menuLogo{
                                    border-left: 1px solid #e5e5e5;
                                    border-right: 1px solid #e5e5e5;
                                    width: 42px;
                                    height: 39px;
                                    img{
                                        margin: 11px 12px;
                                    }
                                    &:hover{
                                        background: white;
                                    }
                                }
                            }
                            .pager{
                                display: flex;
                                .leftArrow,.RightArrow{
                                    display: inline-block;
                                    width: 36px;
                                    height: 39px;
                                    img{
                                        width: 12px;
                                        height: 10px;
                                        margin: 15px 12px ;
                                    }
                                }
                                .pagerContent{
                                    line-height: 39px;
                                    font-size: 12px;
                                }
                            }
                        }
                         
                    }
                    .sIButtom{
                        width: 1068px;
                        height: 38px;
                        border: 1px solid #E8E8E8;
                        border-top: none;
                        display: flex;
                        align-items: center;
                        color: rgb(59, 59, 59);
                        font-size: 12px;
                        ul{
                            display: flex;
                            align-items: center;
                            li{
                                display: flex;
                                cursor: pointer;
                                img{
                                    width: 14px;
                                    height: 14px;
                                    background: #fff;
                                    margin-right: 5px;
                                    margin-left: 10px;
                                }
                                p{
                                    line-height: 14px;
                                }
                                &:hover{
                                    background-image: url('../img/xuanzhong.png');
                                    background-size: 14px 14px;
                                    background-repeat: no-repeat;
                                    background-position: 10px;
                                    
                                }
                                &:hover>img{
                                    background: rgba(0, 0, 0, 0);
                                }
                            }
                        }  
                        div{
                            margin-left: 80px;
                            border-right: 1px solid rgba(0, 0, 0, 0.164);
                            cursor: pointer;
                            img{
                                height: 12px;
                                padding-left: 5px;
                                padding-right: 6px;
                            }
                            
                        }
                        >span{
                            width: 84px;
                            height: 24px;
                            border: 1px solid rgba(0, 0, 0, 0.212);
                            border-radius: 6%;
                            margin-left: 190px;
                            line-height: 24px;
                            text-align: center;
                            cursor: pointer;
                        }
                    }
                }
            }
            .maintext{
                width: @secondwidth;
                background: rgb(74, 218, 105);
                .goodsList{
                    width: 1100px;
                    background: white;
                    display: flex;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    .commodityInfo{
                        width: 250px;
                        height: 390px;
                        background: white;
                        border: 1px solid #ededed;
                        margin: 22px 20px 0px 0px;
                        .goodspic{
                            width: 250px;
                            height: 250px;
                            background: blue;
                        }
                        .goodsInfo{
                            width: 250px;
                            height: 121px;
                            background: white;
                            .price{
                                width: 230px;
                                height: 22px;
                                padding: 0 10px;
                                margin-top: 11px;
                                background: white;
                                display: flex;
                                justify-content: space-between;
                                .priceLeft{
                                    display: flex;
                                    span{
                                        font-size: 18px;
                                        color: #F40;
                                        margin-right: 3px;
                                        line-height: 22px;
                                    }
                                    strong{
                                        font-size: 18px;
                                        color: #F40;
                                        font-weight: 500;
                                        letter-spacing: 0.8px;
                                        line-height: 22px;
                                    }
                                    .priceMiddle{
                                        width: 27px;
                                        height: 14px;
                                        background: red;
                                        color: white;
                                        font-size: 12px;
                                        line-height: 14px;
                                        margin: 4px 0 0 2px;
                                    }
                                }
                                .priceRight{
                                    color: #888;
                                    line-height: 22px;
                                }
                            }
                            .details{
                                width: 230px;
                                height: 36px;
                                padding: 0 10px;
                                margin-top: 6px;
                                background:white;
                                a{
                                    font-size: 12px;
                                    color: #3d3d3d;
                                    border-bottom: 1px solid  white;
                                    .H{
                                        color: #F40;
                                    }
                                &:hover{
                                        color: #F40;
                                        text-decoration:  #F40;
                                        border-bottom: 1px solid  #F40;
                                    }
                                }
                            }
                            .shopDetails{
                                width: 230px;
                                height: 22px;
                                padding: 0 10px;
                                margin-top: 5px;
                                background: white;
                                display: flex;
                                justify-content: space-between;
                                .sdLeft{
                                    line-height: 22px;
                                    display: flex;
                                    img{
                                        width: 11px;
                                        height: 12px;
                                        margin:6px 5px 0 0 ;
                                    }
                                    .store{
                                        a{
                                            color: #888;
                                            font-size: 12px;
                                            text-decoration: underline;
                                        &:hover{
                                            color: #F40;
                                            }
                                        }
                                    }
                                }
                                .sdRight{
                                    color: #888;
                                    line-height: 22px;
                                }
                            }
                            .tmallLogo{
                                width: 230px;
                                height: 20px;
                                padding: 0 10px;
                                margin-top: 10px;
                                display: flex;
                                justify-content: space-between;
                                img{
                                    width: 16px;
                                    height: 16px;
                                    margin-top: 2px;
                                }
                            }
                        }
                    &:hover{
                       border-color: #f40; 
                        }
                    }
                }
            }
            .page{
                height: 57px;
                width: @secondwidth;
                background: rgb(208, 247, 36);
            }
        }
        .advertise{
            flex-grow: 1;
            background: powderblue;
        }
    }  
    #buttomcontent{
        height: 442px;
        width: @width;
        background: royalblue;
        margin: auto;
    }
    #find{
        height: 55px;
        width: @width;
        background: saddlebrown;
        margin: auto;
    }
    #buttom{
        height: 248px;
        width: 100%;
        background: salmon;
    }
</style>