<!--
 * @Author: your name
 * @Date: 2020-10-23 20:29:16
 * @LastEditTime: 2020-10-24 14:57:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taobao-mobel\src\views\MyChildren\whole.vue
-->
<template>
  <div class="whole">
    <div class="collected">
      <a href="javascript:;" class="collectedYwp">
        <img src="../../assets/MailListImg/clothes.jpg" alt="" />
        <div class="introduce">
          <ul class="introduceStyle">
            <li>
              长袖衬衫套装男韩版潮流帅气一套秋季休闲青少年衬衣搭配秋装男装
            </li>
            <li>500+人收藏</li>
            <li>
              <div>
                <span>￥</span>
                <span>68</span>
                <span>.00</span>
              </div>
            </li>
          </ul>
        </div>
      </a>
      <div class="timst">
          <div class="beSimilar">
              <a href="javascipt:;">
                  <img src="../../assets/MailListImg/beSimilar.webp" alt=""/>
              </a>
          </div>
      </div>
    </div>
    <div class="like">
        <img src="../../assets/MailListImg/like.png" alt="">
    </div>
    <div class="choice">
        <a href="javascript">
            <img src="../../assets/MailListImg/clothes.jpg" alt="">
            <div class="briefIntroduction">
                <span>长袖衬衫套装男韩版潮流帅气一套秋季休闲青少年衬衣搭配秋装男装</span>
                <div>
                  <span>￥</span>
                  <span>68</span>
                  <span>162人已购买</span>
                </div>
            </div>
        </a>
        <a href="javascript">
            <img src="../../assets/MailListImg/trousers.webp" alt="">
            <div class="briefIntroduction">
                <span>长袖衬衫套装男韩版潮流帅气一套秋季休闲青少年衬衣搭配秋装男装</span>
                <div>
                  <span>￥</span>
                  <span>68</span>
                  <span>162人已购买</span>
                </div>
            </div>
        </a>
        <a href="javascript">
            <img src="../../assets/MailListImg/shirt.webp" alt="">
            <div class="briefIntroduction">
                <span>长袖衬衫套装男韩版潮流帅气一套秋季休闲青少年衬衣搭配秋装男装</span>
                <div>
                  <span>￥</span>
                  <span>68</span>
                  <span>162人已购买</span>
                </div>
            </div>
        </a>
        <a href="javascript">
            <img src="../../assets/MailListImg/clothes.jpg" alt="">
            <div class="briefIntroduction">
                <span>长袖衬衫套装男韩版潮流帅气一套秋季休闲青少年衬衣搭配秋装男装</span>
                <div>
                  <span>￥</span>
                  <span>68</span>
                  <span>162人已购买</span>
                </div>
            </div>
        </a>
         <a href="javascript">
            <img src="../../assets/MailListImg/trousers.webp" alt="">
            <div class="briefIntroduction">
                <span>长袖衬衫套装男韩版潮流帅气一套秋季休闲青少年衬衣搭配秋装男装</span>
                <div>
                  <span>￥</span>
                  <span>68</span>
                  <span>162人已购买</span>
                </div>
            </div>
        </a>
        <a href="javascript">
            <img src="../../assets/MailListImg/shirt.webp" alt="">
            <div class="briefIntroduction">
                <span>长袖衬衫套装男韩版潮流帅气一套秋季休闲青少年衬衣搭配秋装男装</span>
                <div>
                  <span>￥</span>
                  <span>68</span>
                  <span>162人已购买</span>
                </div>
            </div>
        </a>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
.whole {
  height: 62.5rem;
  background: #fff;
  width: 23.4375rem;

  .collected {
    width: 21.9375rem;
    margin: 0 auto;

    .collectedYwp {
      display: flex;
      margin: 0 auto;

      > img {
        width: 8.75rem;
        height: 8.75rem;
        border-radius: 0.3125rem;
      }

      .introduce {
        width: 12.5625rem;
        height: 8.75rem;
        margin-left: 0.75rem;

        .introduceStyle {
          > li:nth-child(1) {
            font-size: 0.875rem;
            color: #333333;
          }

          > li:nth-child(2) {
            font-size: 0.8125rem;
            color: #999999;
            margin: 0.3125rem 0 0.25rem;
          }

          > li:nth-child(3) {
            > div {
              > span:nth-child(1) {
                color: #ff5500;
                font-size: 0.8125rem;
              }

              > span:nth-child(2) {
                color: #ff5500;
                font-size: 1.0625rem;
              }

              > span:nth-child(3) {
                color: #ff5500;
                font-size: 0.8125rem;
              }
            }
          }
        }
      }
    }
    .timst{
      position: relative;
      z-index: 100;
      >.beSimilar{
        position: absolute;
        z-index: 100;
        right: 0;
        bottom: 0;
    }
    

      img{
        width: 3.4375rem;
        height: auto;
      }
    }
  }
  .like{
      display: flex;
      padding: 0.75rem 0;
      width: 23.4375rem;

      img{
        width: 10.0625rem;
        height: auto;
        margin: 0 auto;
      }
  }

  .choice{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

    >a{
      margin: 0 0.375rem 0.9375rem;

      >img{
        width: 10.6875rem;
        height: auto;
        border-radius: 0.3125rem;
      }

      .briefIntroduction{
        box-sizing: border-box;
        padding: 0 0.5625rem 0 0.625rem;
        display: flex;
        width: 10.6875rem;
        flex-direction: column;
        align-content: flex-start;
        flex-shrink: 0;
        background: #fff;
        margin-top: 0.5625rem;
        overflow: hidden;
        color: #333;
        font-size: 0.8125rem;
        text-align: center;
        >span{
          text-align: left;
          height: 2.3125rem;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.15625rem;
          font-size: 0.8125rem;
          color: #333333;
        }

        >div{
          margin-top: 0.6875rem;
          text-align: left;
          >span:nth-child(1){
            color: #ff5500;
            font-size: 0.75rem;
            margin-right: 0.3125rem;
          }

          >span:nth-child(2){
            color: #ff5500;
            font-size: 0.875rem;
            margin-right: 0.3125rem;
          }

          >span:nth-child(3){
            color: #999999;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}
</style>