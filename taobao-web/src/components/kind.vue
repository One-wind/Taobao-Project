<template>
    <div>
        <div class="maintop">
            <div class="maintoptext">
                <ul @click='funtmshow'>
                    <li data-key='every' :class="{navshow:'every'==tmshow}">所有宝贝</li>
                    <li data-key='tianmiao' :class="{navshow:'tianmiao'==tmshow}">天猫</li>
                    <li data-key='secondhand' :class="{navshow:'secondhand'==tmshow}">二手</li>
                </ul>
            </div>
        </div>
            <!--分类内容 START -->
        <div class="kind">
            <div class="kindtop">
                <ul class="ktop"><!--首行标题-->
                    <li><span>所以分类></span></li>
                    <li><span @click=show>收起筛选<span class="iconfont icon-shangbiao"></span></span></li>
                </ul>
                    <div class="kindmain" :class="{show1:totelshow}"><!--控制显示隐藏-->
                    <ul class="content"><!--第一行内容-->
                        <li><span>品牌:</span></li>
                            <li><span>南极人</span></li>
                            <li><span>韩幂</span></li>
                            <li><span>奕柔</span></li>
                            <li><span>艾绅纳</span></li>
                            <li><span>茜尔衣</span></li>
                            <li><span>纯ARFUAN/阿芙澜</span></li>
                            <li><span>芮丽娅</span></li>
                            <div>多选</div>
                    </ul>
                        <ul class="content"><!--第二行内容-->
                        <li><span>品牌:</span></li>
                            <li><span>南极人</span></li>
                            <li><span>韩幂</span></li>
                            <li><span>奕柔</span></li>
                            <li><span>艾绅纳</span></li>
                            <li><span>茜尔衣</span></li>
                            <li><span>纯ARFUAN/阿芙澜</span></li>
                            <li><span>芮丽娅</span></li>
                            <div>多选</div>
                    </ul>
                        <ul class="content"><!--第三行内容-->
                            <li><span>品牌:</span></li>
                            <li><span>南极人</span></li>
                            <li><span>韩幂</span></li>
                            <li><span>奕柔</span></li>
                            <li><span>艾绅纳</span></li>
                            <li><span>茜尔衣</span></li>
                            <li><span>纯ARFUAN/阿芙澜</span></li>
                            <li><span>芮丽娅</span></li>
                            <div>多选</div>
                    </ul>
                        <ul class="content"><!--第四行内容-->
                        <li><span>品牌:</span></li>
                            <li><span>南极人</span></li>
                            <li><span>韩幂</span></li>
                            <li><span>奕柔</span></li>
                            <li><span>艾绅纳</span></li>
                            <li><span>茜尔衣</span></li>
                            <li><span>纯ARFUAN/阿芙澜</span></li>
                            <li><span>芮丽娅</span></li>
                    </ul>
                        <ul class="content2" @mousemove='appear' @mouseout="invisable"><!--第五行内容-->
                            <li><span>筛选条件:</span></li>
                            <li><span>南极人</span><span class="iconfont icon-xiabiao"></span></li>
                            <li><span>韩幂</span><span class="iconfont icon-xiabiao"></span></li>
                            <li><span>奕柔</span><span class="iconfont icon-xiabiao"></span></li>
                            <li><span>艾绅纳</span><span class="iconfont icon-xiabiao"></span></li>
                            <li><span>茜尔衣</span><span class="iconfont icon-xiabiao"></span></li>
                            <li><span>纯ARFUAN/阿芙澜</span><span class="iconfont icon-xiabiao"></span></li>
                            <li><span>芮丽娅</span><span class="iconfont icon-xiabiao"></span></li>
                            <div :class="{show:true,menushow:menushow}"><!--弹出式菜单-->
                            <a href="">夏季衣服</a>
                            <a href="">夏季衣服</a>
                            <a href="">夏季衣服</a>
                            <a href="">夏季衣服</a>
                            <a href="">夏季衣服</a>
                            <a href="">夏季衣服</a>
                            </div>
                    </ul>
                    
                </div>
                <ul class="content3" ><!--底层内容-->
                            <li><span>您是不是想找:</span></li>
                            <li><span>南极人</span></li>
                            <li><span>韩幂</span></li>
                            <li><span>奕柔</span></li>
                            <li><span>艾绅纳</span></li>
                            <li><span>茜尔衣</span></li>
                            <li><span>纯ARFUAN/阿芙澜</span></li>
                            <li><span>芮丽娅</span></li>
                </ul>
            </div>
        </div>
        <!--分类内容 END -->        
    </div>
</template>
<script>

export default {
    data(){
        return {
            totelshow:false,
            menushow:false,
            tmshow:'every'
        }
    },
    methods: {
        show(){
            this.totelshow=!this.totelshow;
            console.log(this.totelshow);
        },
        appear(ev){
            if(('SPAN'==ev.target.nodeName||'LI'==ev.target.nodeName)&&'筛选条件:'!=ev.target.innerText){
               this.menushow=true;
            }
        },
        invisable(){
            this.menushow=false;
        },
        funtmshow(ev){
            if('LI'==ev.target.nodeName){
                this.tmshow=ev.target.dataset.key;
            }
        }
    },
}
</script>
<style lang='less' scoped>
@width:1350px;
@secondwidth:1070px;
    .maintop{
      margin-top: 15px;
      height: 40px;
      width: @secondwidth;
      .maintoptext{
          height: 40px;
          width: @secondwidth;
          border-bottom: rgb(255, 0, 0) 3px solid;
          box-sizing: border-box;
          >ul{
              display: flex;
              >li{
                  height: 38px;
                  text-align: center;
                  line-height: 38px;
                  padding: 0 20px;
                  cursor: pointer;
              }
          }
      }
    }
    #content{
        width: @width;
        margin: auto;
        display: flex;
        .main{
        width: @secondwidth;
        
        // background: pink;
            .maintop{
                height: 40px;
                width: @secondwidth;
                // background: rgb(217, 235, 135);
            }
            .show1{
                height: 0px !important;
                border:0 !important;
                overflow: hidden;
            }
            .kind{
                height: 258px;
                width: @secondwidth;
                // background: tomato;
               
                >.kindtop{
                    height: 258px; 
                    width: @secondwidth;
                    // background: red;
                    margin-top: 10px;
                    box-sizing: border-box;
                    
                    >.ktop{
                        display: flex;
                        justify-content: space-between;
                        // background: chartreuse;
                        margin-left: 20px;
                        box-sizing: border-box;
                        align-items: center;
                        >li{
                            font-size: 12px;
                            cursor: pointer;
                           
                        }
                         &>li:first-child{
                                margin-top: 4px;
                                >span{
                                    color: gray;
                                }
                            }
                        &>li:last-child{
                            background:#f6f6f6;
                            height: 26px;
                            width: 83px;
                            text-align: center;
                            >span{
                                line-height: 26px;
                                text-align: center;
                            }
                        }
                    }
                    .kindmain{
                        border: 1px solid rgba(128, 128, 128, 0.781);
                        height: 186px;
                        width: 1070px;
                        // background: chocolate;
                        margin-top: 5px;
                        box-sizing: border-box;
                        font-size: 14px;
                        transition: all .5s;
                        >.content{
                            display: flex;
                            align-items: center;
                            height: 36px;
                            // background: burlywood;
                            width: 1052px;
                            font-size: 12px;
                            position: relative;
                            margin: auto;
                            box-sizing: border-box;
                            border-bottom: 1px dashed black;
                            >li{
                                cursor:pointer;
                                padding:0 25px;
                                // background: rgb(217, 255, 0);
                                &:first-child{
                                    cursor: auto;
                                    color: gray;
                                    width: 60px;
                                    // background: red;
                                    padding-left: 10px;
                                }
                                
                            }
                            &>li:not(:first-child):hover{
                                    color: rgb(252, 2, 2);
                            }
                            >div{
                                align-items: center;
                                height: 18px;
                                border: 1px solid #dad9d9;
                                display: block;
                                position: absolute;
                                right: 150px;
                                cursor: pointer;
                                padding:0 6px;
                                &:hover{
                                    color: rgb(255, 17, 0);
                                }
                            }
                        }
                        >.content2{
                            display: flex;
                            align-items: center;
                            height: 36px;
                            // background: burlywood;
                            width: 1052px;
                            font-size: 12px;
                            position: relative;
                            margin: auto;
                            box-sizing: border-box;
                           
                            >li{
                                cursor:pointer;
                                padding:0 25px;
                                height: 36px;
                                line-height: 36px;
                                // background: rgb(217, 255, 0);
                                &:first-child{
                                    cursor: auto;
                                    color: gray;
                                    width: 60px;
                                    // background: red;
                                    padding-left: 10px;
                                }
                                .icon-xiabiao{
                                    font-size: 12px;
                                }
                            }
                            &>li:not(:first-child):hover{
                                   background: rgba(128, 128, 128, 0.733);
                            }
                            .show{
                                display: none;
                                background: #fff;
                                width:@secondwidth;
                                position: absolute;
                                padding: 12px 19px;
                                top: 36px;
                                left: -10px;
                                box-sizing: border-box;
                                >a{
                                    flex-grow: 1;
                                    margin-right: 40px;
                                }
                            }
                        }
                    }
                    .content3{
                            width: 1052px;
                            height: 30px;
                            // background: orchid;
                            margin-top: 2px;
                            margin: auto;
                            display: flex;
                            font-size: 12px;
                            box-sizing: border-box;
                            align-items: center;
                            >li{
                                cursor:pointer;
                                padding:0 25px;
                                // background: rgb(217, 255, 0);
                                &:first-child{
                                    cursor: auto;
                                    color: gray;
                                    width: 95px;
                                    padding: 0;
                                    padding-left: 10px;
                                    box-sizing: border-box;
                                }
                               
                            }
                            &>li:not(:first-child):hover span{
                                   color: rgb(247, 39, 39);
                                   text-decoration: underline;
                            }
                    }
                }
                
            }   
        }
    }  
    .menushow{
        display: block !important;
    }
    .navshow{
        background: #f40;
        color: #fff;
    }
</style>