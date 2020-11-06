<!--
 * @Author: your name
 * @Date: 2020-10-17 11:48:35
 * @LastEditTime: 2020-10-17 15:36:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-taobao\src\components\content.vue
-->
<template>
    <div class="advertise">
          <!-- 广告栏 -->
          <div class="advertise-te">
            <router-link to="/">
              <h3>掌柜热卖</h3>
            </router-link>
            <span>广告</span>
          </div>
          <!-- 广告内容 -->
          <ul class="advertise-ct">
            <li>
              <router-link to="/" >
                <img src="../img/gg.jpg" alt="" data-addr='addr'>
                <div>
                  <!-- 价格 -->
                  <div>
                    <img src="../img/tm.png" alt="">
                    <span>￥</span>
                    <span>179.00</span>
                  </div>
                  <!-- 销量 -->
                  <div>
                    <span>销量：</span>
                    <span>319</span>
                  </div>
                </div>
                 <div class="eem" > 
                  <div class="eem1" >
                    <span>喜欢</span>
                    <span>不喜欢</span>
                  </div>
                  <p>Carote麦饭石早餐锅三合一多功能料理平底煎</p>
                </div>
              </router-link>
            </li>
             <li>
              <router-link to="/" >
                <img src="../img/gg.jpg" alt="" data-addr='addr'>
                <div>
                  <!-- 价格 -->
                  <div>
                    <img src="../img/tm.png" alt="">
                    <span>￥</span>
                    <span>179.00</span>
                  </div>
                  <!-- 销量 -->
                  <div>
                    <span>销量：</span>
                    <span>319</span>
                  </div>
                </div>
                 <div class="eem" > 
                  <div class="eem1" >
                    <span>喜欢</span>
                    <span>不喜欢</span>
                  </div>
                  <p>Carote麦饭石早餐锅三合一多功能料理平底煎</p>
                </div>
              </router-link>
            </li>
          </ul>
          <router-link to="/">
          <samp class="more">更多热卖</samp>
          </router-link>
    </div>
    
</template>
<script>
export default {
    data() {
    return {
    }
  },
  methods:{
  }
}
</script>
<style lang="less">
    .advertise{
        background:#fff;
        padding-left: 8px;
        cursor: pointer;
        //广告栏
        .advertise-te{
          width: 100%;
          height: 44px;
          margin: 0 0 13px;
          padding: 9px 0 0 ;
          display: flex;
          justify-content: space-between;
          border-bottom: rgb(218, 211, 211) solid 1px;
          h3{
            height: 44px;
          line-height: 44px;
            font-size: 16px;
            color: #555555;
          }
          span{
            width: 26px;
            height: 16px;
            border: 1px solid #999;
            color: #999;
            text-align: center;
            font-size: 12px;
            margin-top: 14px;
          }
        }
        //广告内容
        .advertise-ct{
          list-style: none;
          li{
            width: 270px;
            height: 300px;
            border: rgb(218, 211, 211) solid 1px;
            margin-bottom: 10px;
            &:hover {
              border: #f40 solid 1px;
              .eem{
              display: block;

              }
            }
            img{
              width: 270px;
              height: 270px;
            }
            //价格和销量
            div{
              display: flex;
              justify-content: space-between;
              padding: 0 5px;
              div:nth-child(1){
                height: 18px;
                line-height: 18px;
                img{
                  width: 16px;
                  height: 16px;
                }
                span{
                  font-size: 18px;
                  color: #f40;
                }
              }
              div:nth-child(2){
                height: 18px;
                line-height: 18px;
                font-size: 12px;
                span:nth-child(1){
                  color: #999;
                }
                span:nth-child(2){
                  color: #555555;
                }
              }
            }
            //弹出栏
            .eem{
              display: none;
              padding: 0;
              z-index: 100;
              position: relative;
              top: -82px;
            //   display: block;
              .eem1{
                width: 100%;
                padding: 0;
                height: 24px;
                line-height: 24px;
                display: flex;
                justify-content: space-between;
                span{
                  width: 134px;
                  color: #454545;
                  font-size: 12px;
                  text-align: center;
                  background: rgba(255, 255, 255, 0.911);
                }
              }
              p{
                margin-top: 2px;
                display: block;
                height: 25px;
                color: #555;
                text-align: center;
                line-height: 15px;
                background: rgba(255, 255, 255, 0.911);
                font-size: 12px;
                padding-top: 10px;
                font-weight: 600;
              }
            }
          }
        }
        .more{
          width: 66px;
          height: 25px;
          line-height: 25px;
          background: #ff4400;
          color: #fff;
          font-size: 12px;
          text-align: center;
          float: right;
          &:hover{
            background: rgb(255, 30, 0);
          }
        }
    }
</style>