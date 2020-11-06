<template>
    <div id="rmdp">
        <ul class="rmdp1">
            <span></span>
            <li>热卖单品</li> 
        </ul>
        <ul class='rmdp2'>
        <li><router-link to="/">香水</router-link></li>
        <li><router-link to="/">雪纺衫</router-link></li>
        <li><router-link to="/">玩具</router-link></li>
        <li><router-link to="/">帆布鞋</router-link></li>
        <li><router-link to="/">自行车</router-link></li>
        <li><router-link to="/">电动车</router-link></li>
        <li><router-link to="/">新款女装</router-link></li>
        <li><router-link to="/">平板电脑</router-link></li>
        <li><router-link to="/">女衬衫</router-link></li>
        <li><router-link to="/">鞋子</router-link></li>
        <li><router-link to="/">大码女装</router-link></li>
        <li><router-link to="/">口红</router-link></li>
        <li><router-link to="/">mac</router-link></li>
        <li><router-link to="/">卫衣男</router-link></li>
        <li><router-link to="/">连衣裙</router-link></li>
        <li><router-link to="/">女睡衣</router-link></li>
        <li><router-link to="/">女外套</router-link></li>
        <li><router-link to="/">耳机</router-link></li>
        <li><router-link to="/">耐克</router-link></li>
        <li><router-link to="/">牙膏</router-link></li>
        <li><router-link to="/">杯子</router-link></li>
        <li><router-link to="/">女袜</router-link></li>
        <li><router-link to="/">安踏</router-link></li>
        <img src="https://img.alicdn.com/tfs/TB13L7fbMoQMeJjy0FnXXb8gFXa-64-30.png" alt="">
        </ul>
        <ul class="rmdp3">
            <li class="bj"  v-for="(item,i) in list" :key='i' >
                <div class="bj1"><a href="/" :title=item.title ><img :src=item.tp alt=""></a></div>
                <div class="bj2"><a href="/" ><img src="https://img.alicdn.com/tfs/TB1APkObOIRMeJjy0FbXXbnqXXa-56-32.png" alt="" title="包邮">{{item.title}}</a></div>
                <div class="bj3"><a href="/" class="bj31">评价<span>{{item.pj}}</span></a><a href="/" class="bj32">收藏<span>{{item.sc}}</span></a></div>
                <div class="bj4">
                    <a href="/" class="bj41"><span>¥</span>{{item.jg}}</a>
                    <a href="/" class="bj42"><s>¥</s><s>{{item.yjg}}</s></a>
                    <a href="/" class="bj43">月销<span>{{item.yx}}</span>笔</a>
                </div>
            </li>
           
        </ul>
        <div class="advImg">
            <router-link to="/"><img src="https://gtms01.alicdn.com/tps/i1/TB12EhzIXXXXXbMXpXXDgwcQVXX-375-130.jpg" alt=""></router-link>
            <router-link to="/"><img src="https://gtms02.alicdn.com/tps/i2/TB1ZeJGIXXXXXcnXXXXDgwcQVXX-375-130.jpg" alt=""></router-link>
            <router-link to="/"><img src="https://gtms03.alicdn.com/tps/i3/TB197VzIXXXXXbJXpXXDgwcQVXX-375-130.jpg" alt=""></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'rmdp',
        data() {
            return {
                list:[
                    {tp:'http://192.168.6.42/tbtp01/img/1.jpg',title:'优雅毛呢大衣彰显气质名媛范',pj:'0',sc:'8350',jg:'238',yjg:'738',yx:'928'},
                    {tp:'http://192.168.6.42/tbtp01/img/2.jpg',title:'黑色毛呢外套女中长款2020秋冬季新款韩版赫本风呢子大衣百搭加厚',pj:'342',sc:'18390',jg:'89.9',yjg:'129',yx:'4137'},
                    {tp:'http://192.168.6.42/tbtp01/img/3.jpg',title:'风衣女中长款2020新款韩版宽松网红春秋外套',pj:'202',sc:'8946',jg:'183',yjg:'298',yx:'512'},
                    {tp:'http://192.168.6.42/tbtp01/img/4.jpg',title:'高端大气品牌风衣2020年新款中长款今年流行气质大衣英伦风外套',pj:'89',sc:'1986',jg:'137',yjg:'299',yx:'322'},
                    {tp:'http://192.168.6.42/tbtp01/img/5.jpg',title:'2020冬季新款棉衣女中长款韩版面包服宽松棉服时尚棉袄学生外套潮',pj:'3',sc:'628',jg:'158',yjg:'316',yx:'27'},
                    {tp:'http://192.168.6.42/tbtp01/img/6.jpg',title:'网红小西装外套女2020春秋韩版chic黑色西服',pj:'6096',sc:'108374',jg:'59.9',yjg:'69',yx:'13168'},
                    {tp:'http://192.168.6.42/tbtp01/img/7.jpg',title:'卡其色高端大气韩版宽松风衣2020新款中长款初秋外套气质流行大衣',pj:'44',sc:'858',jg:'89',yjg:'199',yx:'351'},
                    {tp:'http://192.168.6.42/tbtp01/img/8.jpg',title:'连帽棉衣2020新款冬季中长款外套棉服学生棉',pj:'0',sc:'122',jg:'158',yjg:'316',yx:'6'},
                    {tp:'http://192.168.6.42/tbtp01/img/9.jpg',title:'韩版中长款风衣外套小个子卡其色2019春秋新',pj:'6035',sc:'235182',jg:'128',yjg:'256',yx:'17442'},
                    {tp:'http://192.168.6.42/tbtp01/img/10.jpg',title:'韩版2020秋冬时尚连帽大毛领宽松中长款ins',pj:'0',sc:'506',jg:'168',yjg:'336',yx:'12'}
                  ]
            }
        },
    methods:{
       
        }
    
        
    }

</script>

<style lang="less" scoped>
@color:orangered;

    #rmdp{
        background: #fff;
        margin: 0 auto;
        width: 1190px;
        // height:802px;
        border-bottom-color: white;
        .rmdp1{
            margin: 17px 18px;
            display: flex;
            flex-wrap: wrap;   
            align-items: center;
            span{
                width: 4px;
                height: 16px;
                background: @color;
                margin-right: 8px;
            }
            li{
                font-size: 20px;
                color: @color;
            }
        }
        .rmdp2{
            padding-bottom: 13px;
            display: flex;
            justify-content: flex-start;
            list-style: none;
            li{
                a{
                    text-decoration: none;
                    cursor: pointer;
                    color: #999;
                    font-size: 12px;
                    margin-left: 16px;
                    &:hover{
                        color: #f40;
                    }
                }
               
            }
            img{
                width: 32px;
                height: 15px;
                margin-top: 2px;
                margin-left: 36px;
            }
        }
        .rmdp3{
            border-top: 1px solid #f4f4f4;
            border-bottom: 1px solid white;
            list-style: none;
            width: 100%;
            // height: 703px;
            display: flex;
            flex-wrap: wrap ;
         
            .bj{
               line-height: 14px;
                width: 238px;
                // height: 334px;
                box-sizing: border-box;
                border: 1px solid #eee;
                padding: 20px;
               border-top-color: white;
               border-left-color: white;
                &:hover{
                    border: 1px solid red;
                }
                .bj1{
                    margin:8px 0;
                    a{
                        width: 206px;
                       img{
                           width: 197px;
                           height: 197px;
                       }
                    }
                }
                .bj2{
                    margin:8px 0;
                    width: 206px;
                    height: 40px;
              
                    margin-left: -1px;
                    display: flex;
                    justify-content: center;
                    a{
                        width: 100%;
                        text-decoration: none;
                        font-size: 14px;
                        color: #666;
                        img{
                            width: 28px;
                            height: 16px;
                           margin-right: 8px;
                        }
                    }
                }
                .bj3{
                    width: 260px;
                    height: 18px;
                    margin-left: -1px;
                   
                    .bj31{
                        text-decoration: none;
                        color:#999;
                        font-size: 12px;
                        margin-right: 10px;
                        span{
                            margin-left: 4px;
                        }
                    }
                    .bj32{
                       
                        text-decoration: none;
                        color:#999;
                        font-size: 12px;
                        margin-right: 10px;
                     
                        span{
                            margin-left: 4px;
                        }
                    }

                }
                .bj4{
                    width: 280px;
                    height: 22px;
                    margin-top: 12px;
                    margin-left: -1px;
                    .bj41{
                         text-decoration: none;
                        color:#ff5000;
                        font-size: 20px;
                         margin-right: 10px;
                        span{
                           font-size: 12px; 
                        }
                        span{
                            margin-left: 1px;
                        }
                    }
                    .bj42{
                         text-decoration: none;
                        color:#999;
                        font-size: 12px;
                         margin-left: -6px;
                       
                        span{
                            margin-left: 1px;
                        }
                    }
                    .bj43{
                         text-decoration: none;
                        color:#999;
                        font-size: 12px;
                         margin-left:70px;
                       
                       span{
                           margin-right: 2px;
                       }
                    }

                }
            }

        }
        .advImg{
            display: flex;
            padding: 18px;
            align-items: center;
            justify-content: space-between;
            img{
                border: 2px solid transparent;
            }
            img:hover{
                border: 2px solid #f40;
            }
        }
    }

    
</style>