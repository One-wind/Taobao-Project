<template>
<div>
    <div id="buttomcontent">
      <div class="buttomcontenthand">   
        <div>
          <ul class="buttomcontenthandleft">
            <router-link to="/" class="buttomcontenthandhot"><b>掌柜热卖</b><div class="boomtt"></div></router-link>
            <li><router-link to="/">华为手机</router-link></li>
            <li><router-link to="/">连衣裙</router-link></li>
            <li><router-link to="/">剃须刀</router-link></li>
            <li><router-link to="/">大码女装</router-link></li>
            <li><router-link to="/">笔记本</router-link></li>
            <li><router-link to="/">外套</router-link></li>
            <li><router-link to="/">女包包</router-link></li>
            <li><router-link to="/">拖鞋</router-link></li>
          </ul>
        </div>   
        <div class="buttomcontenthandright">
          <img src="../img/advertisement.png" alt="">
          <router-link to="/">我也要出现在这里</router-link>
        </div>           
      </div>
      <div class="buttomcontentdetailsall">
        <div class="buttomcontentdetails firstbuttom">
          <div class="detailsimg">
            <img src="../img/Leathergirl1.jpg" alt="">
            <div class="like">
              <div>喜欢</div>
              <div>不喜欢</div>
            </div>
          </div>
          <div class="detailsPrice">          
            <div class="Pricermb">
              ¥31.88
            </div>          
            <del class="Pricedel"><span class="rmbspan">¥</span>36.00</del>                  
            <div class="freeshipping">
              包邮
            </div>
          </div>
          <div class="detailsintroduce">
            显瘦黑色短裤宽松阔腿长裤外穿皮裤百搭裤子
          </div>
          <div class="detailsname">
            <div class="detname">       
              sun孙孙酸
            </div>
            <div class="salesvolume">销量: 11</div>
          </div>
          <div class="Shopkeeperhot">掌柜热卖</div>
        </div>
        <div class="buttomcontentdetails">
          <div class="detailsimg">
            <img src="../img/Leathergirl1.jpg" alt="">
            <div class="like">
              <div>喜欢</div>
              <div>不喜欢</div>
            </div>
          </div>
          <div class="detailsPrice">          
            <div class="Pricermb">
              ¥31.88
            </div>          
            <del class="Pricedel"><span class="rmbspan">¥</span>36.00</del>                  
            <div class="freeshipping">
              包邮
            </div>
          </div>
          <div class="detailsintroduce">
            显瘦黑色短裤宽松阔腿长裤外穿皮裤百搭裤子
          </div>
          <div class="detailsname">
            <div class="detname">       
              sun孙孙酸
            </div>
            <div class="salesvolume">销量: 11</div>
          </div>
          <div class="Shopkeeperhot">掌柜热卖</div>
        </div>
        <div class="buttomcontentdetails">
          <div class="detailsimg">
            <img src="../img/Leathergirl1.jpg" alt="">
            <div class="like">
              <div>喜欢</div>
              <div>不喜欢</div>
            </div>
          </div>
          <div class="detailsPrice">          
            <div class="Pricermb">
              ¥31.88
            </div>          
            <del class="Pricedel"><span class="rmbspan">¥</span>36.00</del>                  
            <div class="freeshipping">
              包邮
            </div>
          </div>
          <div class="detailsintroduce">
            显瘦黑色短裤宽松阔腿长裤外穿皮裤百搭裤子
          </div>
          <div class="detailsname">
            <div class="detname">       
              sun孙孙酸
            </div>
            <div class="salesvolume">销量: 11</div>
          </div>
          <div class="Shopkeeperhot">掌柜热卖</div>
        </div>
        <div class="buttomcontentdetails">
          <div class="detailsimg">
            <img src="../img/Leathergirl1.jpg" alt="">
            <div class="like">
              <div>喜欢</div>
              <div>不喜欢</div>
            </div>
          </div>
          <div class="detailsPrice">          
            <div class="Pricermb">
              ¥31.88
            </div>          
            <del class="Pricedel"><span class="rmbspan">¥</span>36.00</del>                  
            <div class="freeshipping">
              包邮
            </div>
          </div>
          <div class="detailsintroduce">
            显瘦黑色短裤宽松阔腿长裤外穿皮裤百搭裤子
          </div>
          <div class="detailsname">
            <div class="detname">       
              sun孙孙酸
            </div>
            <div class="salesvolume">销量: 11</div>
          </div>
          <div class="Shopkeeperhot">掌柜热卖</div>
          </div>
        <div class="buttomcontentdetails">
          <div class="detailsimg">
            <img src="../img/Leathergirl1.jpg" alt="">
            <div class="like">
              <div>喜欢</div>
              <div>不喜欢</div>
            </div>
          </div>
          <div class="detailsPrice">          
            <div class="Pricermb">
              ¥31.88
            </div>          
            <del class="Pricedel">¥36.00</del>                  
            <div class="freeshipping">
              包邮
            </div>
          </div>
          <div class="detailsintroduce">
            显瘦黑色短裤宽松阔腿长裤外穿皮裤百搭裤子
          </div>
          <div class="detailsname">
            <div class="detname">       
              sun孙孙酸
            </div>
            <div class="salesvolume">销量: 11</div>
          </div>
          <div class="Shopkeeperhot">掌柜热卖</div>
          </div>         
      </div>           
      <div class="morehotpayas">
        <router-link to="/" class="morehotpayrl">更多热卖</router-link>       
      </div>
    </div>
</div>

</template>

<script>
export default {
  created(){
    console.log( 'hello' )
    this.$emit('lOrRActive', false)
  },
 
  beforeRouteLeave(to, from, next) {
    console.log( 'xxxxx' )
    this.$emit('lOrRActive', true)
    next()
  },
};
</script>

<style lang="less" scoped>
@width:1350px;
@secondwidth:1070px;
    #buttomcontent{
        height: 442px;
        width: @width;
        // background: royalblue;
        margin: auto;
        border: 1px solid #ededed; 
        .buttomcontentdetailsall{
          display: flex;
          justify-content: space-between;
        }           
        .buttomcontenthand{
          height: 35px;
          background: #f5f5f5;
          display: flex;
          line-height: 35px;
          justify-content: space-between;
          .buttomcontenthandleft{
            display: flex;
            li{    
              // width: 48px;
              height: 14px;         
              padding-left: 30px;
              >a:hover{
                color: #ff4400;
              }
            }
            .buttomcontenthandhot{
              padding-left: 10px;
              width: 64px;
              height: 18px;
              font-size: 15px;
              color: #ff4400;   
              .boomtt{
                width: 84px;
                height: 2px;
                background: #ff4400; 
                position: relative;
                top: -2px;
                right: 10px;
              }          
            }           
          }
          .buttomcontenthandright{
            img{
              position: relative;
              top: 3px;
              right: 8px;
            }
          }
        }       
        .buttomcontentdetails{
          position: relative;
          height: 350px;
          width: 250px;
          border: 1px solid rgb(211, 210, 210);
          background: white;
          margin: 10px 13px 0 0;        
          &:hover{   
            .like>div{
              display: block;
            }               
            border: 1px solid #f40;                
          }
          img{
            width: 250px;
            height: 220px;
            cursor: pointer            
          }
          
          .like{
            position: absolute;
            font-size: 18px;
            top: 196px;
            display: flex;
            flex: left;
            div{
              display: none;
              cursor: pointer;
              width: 124px;
              height: 24px;
              color: #454545;
              line-height: 24px;
              text-align: center;
              background: rgba(255, 255, 255, 0.8);             
            } 
            div:nth-child(1){
              margin-right: 2px;
            }   
          }
          .detailsPrice{
            width: 230px;
            height: 18px;
            display: flex;    
            justify-content: space-between;   
            padding: 0 5px ;           
            .Pricermb{
              cursor: pointer;
              width: 58px;
              height: 18px;
              font-size: 18px;
              color: #f40;
              margin-left: 5px;
            }
            .Pricedel{
              cursor: pointer;
              width: 46px;
              height: 14px;
              font-size: 12px;
              color: #AAAAAA;
              margin-right: 80px;
              margin-top: 5px;
              
            }
            .freeshipping{
              width: 27px;
              height: 14px;
              background: #ff4400;
              color: white;
              text-align: center;
              line-height: 14px;
              margin-left: 5px;
              margin-top: 6px;
            }
          }
          .detailsintroduce{
            padding-top: 10px;
            padding-bottom: 5px;
            width: 230px;
            height: 30px;
            padding-left: 10px;
            color: #3D3D3D;
            &:hover{
              cursor: pointer;
              color: #f40;
              text-decoration: underline;
                            
            }
          }
          .detailsname{
            width: 230px;
            height: 18px;
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            .detname{
              cursor: pointer;
            }
            .salesvolume{
              cursor: pointer;
            }
          }
          .Shopkeeperhot{
            cursor: pointer;
            margin-left: 10px;
            width: 50px;
            height: 16px;
            background: #f40;
            color: white;
            text-align: center;
            line-height: 16px;
          }
        }
        .firstbuttom{
          margin-left: 13px;
        }
        .morehotpayas{
          width: 66px;
          height: 25px;
          background: #f40;
          line-height: 25px;
          text-align: center;
          cursor: pointer;
          margin-top: 15px;
          position: absolute;
          right: 288px;
          .morehotpayrl{
            color: white;
          }
        }
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
