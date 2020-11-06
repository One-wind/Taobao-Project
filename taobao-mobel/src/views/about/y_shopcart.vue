<template>
    <div class="gouwu">    
        <div id="shopTop">
            <div class='cartTop'>
                <div class="cartCount">购物车<span>({{Count}})</span></div>
                <div class="Manage" @click="manage">{{Manage}}</div>
            </div>
            <div class="Count">
                <div>共{{Count}}件宝贝</div>
            </div>
        </div>
        <div id="welfare" v-if="weldisplay">
            <div class="welfaretext">您有90元现金红包待领取，速领!</div>
            <div class="weldel" @click="welshow">X</div>
        </div>
        <div id="Context">
            <div class="Market" >
                <div class="iconfont" :class='[change=="dagou"?"icon-dagou":"icon-quan"]' @click="qiehuan"></div>
                <img src="../../assets/tianmao.webp">
                <div class="tianmaoMarket">天猫超市&gt;</div>
            </div>
            <div class="chouDan" >
                <div class="chouLeft">
                    <img src="../../assets/choudang.png">
                    <div>以下商品满88元包邮</div>
                </div>
                <div class="chouRight">
                    <div>去凑单 &gt;</div>
                </div>
            </div>
            <div class="Milk">
                <div class="iconfont goodsBtn" :class='[change1=="dagou"?"icon-dagou":"icon-quan"]' @click="qiehuan1"></div>
                <div class="milkPic">
                    <img src="../../assets/xieling.jpg">
                </div>
                <div class="milkContext">
                    <div class="goodsTitle">百草味零食大礼包580g 网红肉干休闲麻辣味小吃充饥...</div>
                    <div class="goodsLimit">限购100件</div>
                    <div class="goodsPrice">
                        <div class="Price">￥{{totel}}<span>{{weight}}kg</span></div>
                        <div class="goodsCount">
                        <div class="sub" @click="sub">&minus;</div>
                        <div class="count">{{goodscount}}</div>
                        <div class="add" @click="add">+</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
         <div id="Context">
            <div class="Market" >
                <div class="iconfont" :class='[change=="dagou"?"icon-dagou":"icon-quan"]' @click="qiehuan"></div>
                <img src="../../assets/tianmao.webp">
                <div class="tianmaoMarket">天猫超市&gt;</div>
            </div>
            <div class="chouDan" >
                <div class="chouLeft">
                    <img src="../../assets/choudang.png">
                    <div>以下商品满88元包邮</div>
                </div>
                <div class="chouRight">
                    <div>去凑单 &gt;</div>
                </div>
            </div>
            <div class="Milk">
                <div class="iconfont goodsBtn" :class='[change1=="dagou"?"icon-dagou":"icon-quan"]' @click="qiehuan1"></div>
                <div class="milkPic">
                    <img src="../../assets/xieling.jpg">
                </div>
                <div class="milkContext">
                    <div class="goodsTitle">百草味零食大礼包580g 网红肉干休闲麻辣味小吃充饥...</div>
                    <div class="goodsLimit">限购100件</div>
                    <div class="goodsPrice">
                        <div class="Price">￥{{totel}}<span>{{weight}}kg</span></div>
                        <div class="goodsCount">
                        <div class="sub" @click="sub">&minus;</div>
                        <div class="count">{{goodscount}}</div>
                        <div class="add" @click="add">+</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="Foot">
            <div class="allSelect">
                <div class="iconfont" :class='[change=="dagou"?"icon-dagou":"icon-quan"]' @click="qiehuan();reckon()"></div>
                <div class="Select">全选</div>
            </div>
            <div class="settle" v-show="Manage=='管理'">
                <div class="addto">合计:</div>
                <div class="num">￥{{rockon}}</div>
                <div class="check" ref="check" @click=goSettlement>结算(1)</div>
            </div>
            <div class="settle" v-show="Manage=='完成'">
                <div class="clear"><span class="iconfont icon-shandian"></span>清理</div>
                <div class="collect">移入收藏夹</div>
                <div class="delete">删除</div>
            </div>
        </div>
    </div>
</template>
<script>
// 先获取 可视区域的宽高 
var iw = document.documentElement.clientWidth;
var iH = document.documentElement.clientHeight;
// 对于小于320px的逻辑像素宽 则 卡住 不缩放啦不适配啦
iw = iw < 320 ? 320 : iw;
//获取 html元素
// cssrem 插件  比如 以ihone4 / 5为基准开发  320逻辑像素宽/20  16px
document.querySelector('html').style.fontSize = iw / 23.4375 + 'px';
// 把 body的高度撑开
document.querySelector('body').style.height = iH + 'px';
export default {
    data(){
        return {
            Count:1,
            Manage:"管理",
            Manageshow:false,
            change:'quan',
            change1:'quan',
            price:95,
            totel:95,
            weight:0.7,
            goodscount:1,
            rockon:0,
            weldisplay:true,
            getcookie:''
        }
    },
    created(){

        function getCookieAll(){
            let coo = document.cookie
            if (coo == '') {
                return null
            }
            //清除空格
            coo = coo.replace(/\s+/g, '')
            let cArr = coo.split(';')
            let cookies = {}
            cArr.forEach((coo) => {
                let c = coo.split('=')
                cookies[c[0]] = unescape(c[1])
            })
            console.log(cookies)
            return cookies
        }
        this.getcookie = new getCookieAll()
        
        if(this.getcookie.www == 111){
            console.log('11');
            this.weldisplay=false;
        }
    },
    methods:{
        welshow(){
            function setCookie(name, value, minute){
                let va = escape(value)
                let data = new Date()
                if (minute) {
                    data.setTime(data.getTime() + 1000 * 60 * minute)
                    document.cookie = `${name}=${va};expires=${data.toUTCString()}`
                } else {
                    document.cookie = `${name}=${va}` //当前会话关闭就超时
                }
            }
            setCookie('www','111',60*24)
            this.weldisplay=false;
        },
        manage(){
            if(this.Manageshow){
                this.Manageshow=!this.Manageshow;
                this.Manage='完成'
            }else{
                this.Manageshow=!this.Manageshow;
                this.Manage='管理'
            }
        },
        reckon(){
            if(this.change=='quan'){
                this.rockon=0;
                this.rockonshow=!this.rockonshow;
            }else{
                this.rockon=this.totel;
                this.rockonshow=!this.rockonshow;
            }   
        },
        qiehuan(){
           
            if(this.change=="quan"){
                this.change='dagou';
                this.change1='dagou';
                 this.$refs.check.style.color='#fff';
            }else{
                this.change='quan';
                this.change1='quan';
                 this.$refs.check.style.color='';
            }
            if(this.change=='quan'){
                this.rockon=0;
                this.rockonshow=!this.rockonshow;
            }else{
                this.rockon=this.totel;
                this.rockonshow=!this.rockonshow;
            }   
        },
         qiehuan1(){
            if(this.change1=="quan"){
                this.change1='dagou';
            }else{
                this.change1='quan';
            }
        },
        goSettlement(){
            console.log(111)
            if(this.change!="quan"){
               this.$router.push('/Settlement'); 
               console.log(222)
            }        
        },
        add(){
            this.goodscount++;
            if(this.goodscount==1){
                this.price=95;
            }
            this.totel=this.price+((this.goodscount-1)*this.price);
        },
        sub(){
            if(this.goodscount==0){
                this.price=0;
                return
            }
            this.goodscount--;
            this.totel=this.price+((this.goodscount-1)*this.price);
        }
    },
}
</script>
<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_2154543_3fa6v5bu7m6.css');
*{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.gouwu{
    background: #f2f2f2;
    #Context:nth-of-type(2){
        margin-top: -80px;
        
    }
}
#welfare{
    
    width: 21.9375rem;
    height: 2.8125rem;
    background: rgb(255 248 244);
    margin:auto;
    margin-bottom: 1.25rem;
    border-radius: 0.625rem;
    position: relative;
    overflow: hidden; 
    margin-top: -6.25rem;
    .welfaretext{
        font-size: 13px;
        line-height: 2.8125rem;
        margin-left: 0.625rem;
        color:#f40;
    }
    .weldel{
        position: absolute;
        top: -0.6875rem;
        right: -0.75rem;
        width: 1.875rem;
        height: 1.875rem;
        background: rgba(153, 153, 153, 0.664);
        padding-top: 0.8125rem;
        padding-left: 0.1875rem;
        box-sizing: border-box;
        border-radius: 0.625rem;
        color: #fff;
    }
}
#shopTop{
    background: linear-gradient(to bottom right,#ff8300,#ff5100 );
    height: 11.0625rem;
    .cartTop{
    height: 3.25rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.625rem 0 0.75rem;
    // background: red;
        .cartCount{
            color: #fff;
            font-size: 1.25rem;
            font-weight: bold;

        }
        .Manage{
            color: #fff;
            font-size: 0.9375rem;
        }
    }
    .Count{
        color: #fff;
        font-size: 12px;
        padding-left: 0.75rem;
    }
}
#Context{
    width: 21.9375rem;
    height: 33.1875rem;
    background: rgb(255, 255, 255);
    margin:auto;
    border-radius: 0.625rem;
    margin-bottom: 2.5rem;
    .Market{
        height: 2.75rem;
        width: 100%;
        // background: rgba(132, 0, 255, 0.644);
        display: flex;
        align-items: center;
        padding-left: 0.625rem;
        box-sizing: border-box;
       
        >img{
            flex-shrink: 1;
            height: 1.25rem;
            margin-left: 0.625rem;
            margin-right: 0.625rem;
        }
        >.tianmaoMarket{
            font-size: 12px;
        }
    }
    .chouDan{
        width: 100%;
        height: 2.75rem;
        // background: blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .chouLeft{

            display: flex;
            align-items: center;
            height: 1.25rem;
            padding-left: 2.625rem;
            >img{
                height: 0.75rem;
                width: 1.5rem;
                color: #f40;
                padding-right: 0.625rem;
            }
            >div{
                font-size: 13px;
            }
        }
        .chouRight{
            color: rgb(255, 80, 0);
            font-size: 13px;
            margin-right: 0.9375rem;
        }
    }
    .Milk{
        height: 8.3125rem;
        // background: rgb(4, 255, 59);
        display: flex;
        align-items: center;
        margin-bottom: 1.25rem;
        .goodsBtn{
            height: 5.625rem;
            width: 2.8125rem;
            // background: red;
            flex-shrink: 0;
            text-align: center;
            line-height: 5.625rem;
        }
        .milkPic{
            margin: 0 0.3125rem;
            >img{
                height: 5.625rem;
                width: 5.625rem;
            }
        }
        .milkContext{
            font-size: 14px;
            .goodsLimit{
                color:#ff5000;
                margin: 0.625rem 0;
            }
            .goodsPrice{
                display: flex;
                justify-content: space-between;
                .Price{
                    color: #ff5000;
                    >span{
                        color:black;
                        margin: 0 0 0 0.3125rem;
                        font-size: 12px;
                    }
                }
                .goodsCount{
                    display: flex;
                    .sub,.add{
                        height: 1.5625rem;
                        width: 1.375rem;
                        border: 1px solid  #b1b4b983;
                        text-align: center;
                        line-height: 1.375rem;
                        cursor: pointer;
                    }
                    .count{
                        border: 1px solid  #b1b4b983;
                        border-left: none;
                        border-right: none;
                        height: 1.5625rem;
                        width: 2.5rem;
                        // background: chartreuse;
                        line-height: 1.5625rem;
                        text-align: center;
                        color:#333
                    }
                }
            } 
            

        }
    }
}
#Foot{
    width: 100%;
    height: 3.375rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    position: fixed;
    bottom: 2.6875rem;
    left: 0;
    border-bottom: 1px solid gray;    
    .allSelect{
        margin-left: 0.3125rem;
        display: flex;
        .Select{
            margin-left: 0.3125rem;
            font-size: 12px;
        }
    }
    .settle{
        display: flex;
        .addto{
            font-size: 14px;
        }
        .num{
            color: #ff5000;
            margin-right: 0.3125rem;
        }
        .check{
            width: 5.3125rem;
            height: 1.875rem;
            background: linear-gradient(to bottom right,#ff8300,#f40 );
            border-radius: 1.875rem;
            text-align: center;
            line-height: 1.875rem;
            font-size: 0.875rem;
            color: rgb(204, 190, 190);
            cursor: pointer;
        }

        .clear{
            font-size: 13px;
            line-height: 1.5625rem;
        }
        .collect{
            font-size: 13px;
            height: 1.5625rem;
            width: 5.3125rem;
            background: #fff;
            border-radius: 1.5625rem;
            margin:0 0.625rem;
            border: 1px solid #f40;
            text-align: center;
            line-height: 1.5625rem;
            color: #f40;
        }
        .delete{
            font-size: 13px;
            height: 1.5625rem;
            width: 3.375rem;
            border: 1px solid #f40;
            background: #fff;
            border-radius: 1.5625rem;
            text-align: center;
            line-height: 1.5625rem;
            color: #f40;
        }
        .icon-shandian{
            text-align: right;
        }
    }
}
.icon-dagou{
    color: orange;
    font-size: 21px ;
}
.icon-quan{
    font-size: 21px;
}
</style>