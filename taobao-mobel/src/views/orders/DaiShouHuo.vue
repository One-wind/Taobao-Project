<template>
    <div id="daiShouHuo" @scroll='myscroll'>
        <div id="daiShouHuoBox" v-for='(item,i) in daiSHList' :key='i' >
                <div class="daiShouHuoTop">
                    <div class="dSHTLeft"><img src="../../assets/orderimg/tianmao.png" alt=""/><span>天猫超市</span></div>
                    <div class="dSHTRight">仓库已发货</div>
                </div>
                <div class="daiShouHuoContent">
                    <div class="goodsImg"><img :src="item.url" alt=""></div>
                    <div class="dSHCRight">
                        <div class="dSHCRightTop">
                            <span>{{item.name}}</span>
                            <div class="dSHGoodsPrice">
                                <span>￥{{item.price}}</span>
                                <div class="goodsNumber">
                                    <span>x</span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div class="dSHCRightCenter">
                            <span>七天无理由退换</span>
                        </div>
                        <div class="dSHCRightBottom">
                            <span>已发货</span>
                        </div>
                    </div>
                </div>
                <div class="daiShouHuoBottom">
                    <div class="daiShouHuoZongJia">
                        <div>
                            <span>总价</span>
                            <span>￥{{item.price}}</span>
                        </div>
                        <div>
                            <span>实付款</span>
                            <span>￥{{item.price}}</span>
                        </div>
                    </div>
                    <div class="daiShouHuoMore">
                        <span>更多</span>
                        <span>申请发票</span>
                        <span>查看物流</span>
                        <span>确认收货</span>
                    </div>
                </div>
            </div>
        <div class="zW" ref='ZW'></div>
    </div>
   
</template>

<script>
export default {
    data(){
        return{
            daiSHList:[],
            num:'',
            length:''
        }
    },
    created(){
        console.log(`${this.$url}/oderlist`)
        this.$ajax({
            method:'post',
            url:"http://192.168.6.66:3000/oderlist",
            data:{
                username:'xiaoming',
                pwd:'123456'
            }
        }).then((res)=>{
            this.daiSHList=res.msg.send
            this.length =this.daiSHList.length
            this.num =  Math.floor(Math.random()*this.length)
            console.log(this.num)
        })
    }  ,
    methods:{
        myscroll(){
            let bottom = Math.floor(this.$refs.ZW.getBoundingClientRect().bottom)
            if(bottom==screen.availHeight){
                 this.$ajax({
                    method:'post',
                    url:"http://192.168.6.66:3000/oderlist",
                    data:{
                        username:'xiaoming',
                        pwd:'123456'
                    }
                }).then((res)=>{
                    this.daiSHList= this.daiSHList.concat(res.msg.send)
                    this.length =this.daiSHList.length
                    this.num =  Math.floor(Math.random()*this.length)
                })
            }
        }
    }

}
</script>

<style lang='less' scoped>
    body,html,#daiShouHuo{
        width: 100%;
        height: 100%;
    }
    #daiShouHuo{
        overflow-y: auto;
        >.zW{
            height: 0.5625rem;
            width: 100%;
        }
    }
    #daiShouHuoBox{
        background: #fff;
        width: 21.9375rem;
        margin: 0 auto;
        border-radius: 0.75rem;
        margin-bottom: 0.5625rem;
        .daiShouHuoTop{
            display: flex;
            .dSHTLeft{
                display: flex;
                align-items: center;
                text-align: right;
                width: 5rem;
                height: 2.9375rem;
                line-height: 2.9375rem;
                img{
                    width: 0.9375rem;
                    height:0.9375rem;
                    margin-left: 0.75rem;
                }
                span{
                    font-size: 0.75rem;
                    color: #000;
                    margin-left: 0.3125rem;
                }
            }

            .dSHTRight{
                flex-grow: 1;
                padding:1rem 0.75rem;
                color:rgb(255, 80, 0);
                font-size: 0.75rem;
                text-align: right;
            }
        }

        .daiShouHuoContent{
            height: 6.375rem;
            display: flex;
            .goodsImg{
                margin-left: 0.75rem;
                img{
                    width: 5.625rem;
                    height: 5.625rem;
                };
            }

            .dSHCRight{
                font-size: 0.75rem;
                margin-left: 0.75rem;
                width: 14.0625rem;
                height: 5.625rem;
                .dSHCRightTop{
                    font-size: 0.75rem;
                    display: flex;
                    justify-content: space-between;
                    >span{
                        display: flex;
                        width: 10.625rem;
                        height: 1.75rem;
                        color: #333;
                    }

                    .dSHGoodsPrice{
                        color: #333;
                        >span{
                            margin: 0.1875rem 0;
                            display: flex;
                        }
                        .goodsNumber{
                            color: #999;
                            margin: 0.1875rem 0;
                            display: flex;
                            justify-content: flex-end;
                        
                        }
                    }
                }

                .dSHCRightCenter{
                    span{
                        color: rgb(255, 80, 0);
                        background: rgb(255, 241, 235);
                        margin: 0.125rem;
                    }
                }

                .dSHCRightBottom{
                    margin-top: 0.75rem;
                    text-align: right;
                    span{
                        color: rgb(255, 159, 0);
                    }
                }
            }
        }

        .daiShouHuoBottom{
            display: flex;
            flex-direction: column;
            .daiShouHuoZongJia{
                margin:0.375rem 0 0.75rem;
                padding-right: 0.75rem;
                height: 2rem;
                display: flex;
                justify-content: flex-end;
                border-bottom: 1px solid #eee;
                div:first-child{
                    width: 4.1875rem;
                    margin-left: 0.75rem;
                    font-size: 0.75rem;
                    span{
                        color: #999;
                    }
                }
                div:last-child{
                    width: 4.9375rem;
                    margin-left: 0.75rem;
                    font-size: 0.75rem;
                    span{
                        color: #333;
                    }
            }
            }
        }

        .daiShouHuoMore{
            display: flex;
            justify-content: flex-end;
            span{
                width: 3.75rem;
                height: 1.75rem;
                margin-right: 0.5625rem;
                margin-bottom: 0.5625rem;
                font-size: 0.8125rem;
                color:#666;
                text-align: center;
                line-height: 1.75rem;
            }
            span:not(:first-child){
                width: 5rem;
                height: 1.75rem;
                border: 1px solid #666;
                border-radius: 0.9375rem;
            }
            span:last-child{
                border: 1px solid rgb(255, 80, 0);
                color: rgb(255, 80, 0);
            }
        }
    }
    #daiShouHuoBox:last-child{
        margin-bottom:3rem;
    }

</style>