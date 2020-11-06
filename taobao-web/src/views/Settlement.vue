<!--
 * @Author: your name
 * @Date: 2020-10-17 16:40:37
 * @LastEditTime: 2020-10-20 11:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \teacher-taobao\src\views\Settlement.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-10-16 19:12:23
 * @LastEditTime: 2020-10-17 22:32:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \teacher-taobao\src\views\Settlement.vue
-->
<template>
  <div class="settlement">
    <div>
      <!-- 天猫，5步骤 -->
      <div class="totalWidth jiHeadBar">
        <s></s>
        <ul class="jiList1">
          <li>
            <div class="listColor">1</div>
            <span>查看购物车</span>
          </li>
          <li>
            <div>2</div>
            <span>拍下商品</span>
          </li>
          <li>
            <div>3</div>
            <span>付款到支付宝</span>
          </li>
          <li>
            <div>4</div>
            <span>确认收货</span>
          </li>
          <li>
            <div class="di5">5</div>
            <span>评价</span>
          </li>
        </ul>
      </div>
      <!-- 收货栏 -->
      <div class="totalWidth jiAddress">
        <h3>选择收货地址</h3>
        <ul class="jiList2">
          <li :class="{ bgDefault: list }" data-li="li1">
            <div class="setDefault">默认地址</div>
            <span>广东深圳</span>
            <div>深圳市 南山区 粤海街道深南花园C栋旁负一楼15778644819</div>
            <a href="">修改</a>
          </li>
          <li data-li="li2">
            <div class="setDefault">默认地址</div>
            <span>广东深圳</span>
            <div>深圳市 南山区 粤海街道深南花园C栋旁负一楼15778644819</div>
            <a href="">修改</a>
          </li>
          <li data-li="li3">
            <div class="setDefault">默认地址</div>
            <span>广东深圳</span>
            <div>深圳市 南山区 粤海街道深南花园C栋旁负一楼15778644819</div>
            <a href="">修改</a>
          </li>
          <li data-li="li4">
            <div class="setDefault">默认地址</div>
            <span>广东深圳</span>
            <div>深圳市 南山区 粤海街道深南花园C栋旁负一楼15778644819</div>
            <a href="">修改</a>
          </li>
        </ul>
        <div class="addressManagement">
          <a href="">显示全部地址</a>
          <a href="">管理收货地址</a>
        </div>
      </div>
      <!-- 菜鸟驿站服务 -->
      <div class="totalWidth greenHand">
        <!-- 菜鸟驿站头部 -->
        <div class="greenHandTop">
          <div>
            <span>菜鸟驿站服务</span>
            <span>免费</span>
            <span class="iconfont icon-iconset0143"></span>
          </div>
          <div class=""></div>
        </div>
        <!-- 菜鸟驿站底部 -->
        <div class="greenHandBottom">
          <div class="top">
            <span></span>
            <span class="iconfont icon-yizhan_jihuo"></span>
            <span
              >[菜鸟驿站]广东省 深圳市 南山区
              粤海街道深南花园C栋旁负一楼(电话:18027656305)</span
            >
          </div>
          <div class="bottom">修改驿站</div>
        </div>
      </div>
    </div>
    <div class="wgNavbar smContainer">
      <h5>确认订单信息</h5>
      <ul>
        <li>店铺宝贝</li>
        <li>商品属性</li>
        <li>单价</li>
        <li>数量</li>
        <li>优惠方式</li>
        <li>小计</li>
      </ul>
    </div>
    <!-- 店铺列表 -->
    <ul class="wgCellClass smContainer">
      <li v-for="(item, index) in cellList" :key="index">
        <p class="cell">
          <span class="iconfont icon-taobao"></span>
          <strong>店铺:</strong>
          <router-link to="">{{item.cellClass}}</router-link>
          <strong class="cellName">卖家:</strong>
          <router-link to=""
            >{{item.cellName}}<span class="iconfont icon-wangwang"></span
          ></router-link>
        </p>
        <div>
          <!-- 商品列表 -->
          <ul class="wgShopClass">
            <li v-for="(items, index1) in item.shopingList" :key="index1">
              <!-- 店铺宝贝 -->
              <div class="details">
                <img
                  :src="items.imgSrc"
                  alt=""
                />
                <div class="shoping">
                  <router-link to=""
                    >{{items.title}}</router-link
                  >
                  <div>
                    <span class="iconfont icon-7"></span>
                    <span class="iconfont icon-xinyongqia"></span>
                    <span class="iconfont icon-9"></span>
                  </div>
                  <p>{{items.time}}</p>
                </div>
              </div>
              <!-- 商品属性 -->
              <p class="describe">
                {{items.describe}}
              </p>
              <!-- 原价 -->
              <div class="unitPrice">
                <span>{{items.unitPrice}}</span>
              </div>
              <!-- 数量 -->
              <span class="amount">{{items.amount}}</span>
              <!-- 优惠方式 -->
              <div class="discount">
                <select v-model="discount">
                  <option value="">{{items.discount.noDiscount}}</option>
                  <option value="">已省{{items.discount.discount}}元:抢购价</option>
                </select>
                <span class="iconfont icon-text"></span>
              </div>
              <!-- 结算价格 -->
              <div class="actualPrice">
                <span>{{items.price}}</span>
              </div>
            </li>
          </ul>
          <!-- 留言 -->
          <div class="text">
            <div class="message">
              <strong>给卖家留言:</strong>
              <textarea></textarea>
            </div>
            <div class="textRight">
              <div class="textRightTop">
                <div>
                  <strong>运送方式:</strong>
                  <em>普通配送 快递 免邮</em>
                </div>
                <span class="price">0.00</span>
              </div>
              <div class="textRightBottom">
                <div class="textRightBottomLeft">
                  <strong>运费险:</strong>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <label for="">
                      <span class="bggreen">运费险</span>
                      卖家赠送，退换货可赔
                    </label>
                    <span class="iconfont icon-text1"></span>
                    <span class="iconfont icon-help"></span>
                  </div>
                </div>
                <span class="price">0.00</span>
              </div>
            </div>
          </div>
          <div class="totalPrice">
            <em>店铺合计(含运费)</em>
            <span class="price">￥10.80</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="waitingForPay">
      <!-- 淘金币 -->
      <div class="taoGolds">
        <div class="checkboxGroup">
          <input type="checkbox" id="next-checkbox-input" />
          <label for="next-checkbox-input">使用473淘金币抵扣4.73元</label>
          <p>(你有437个，可用437个)</p>
        </div>
        <div class="favorable">
          <span>￥</span>
          <span>0.00</span>
        </div>
      </div>
      <!-- 淘金币 end -->

      <!-- 支付方式 -->
      <div class="payMethods">
        <div class="methods">
          <div>
            <input type="checkbox" id="friendPay" />
            <label for="friendPay">朋友代付</label>
          </div>
          <div>
            <input type="checkbox" id="anonPay" />
            <label for="anonPay">匿名购买</label>
          </div>
          <div>
            <input type="checkbox" id="followerPay" />
            <label for="followerPay">花呗分期(最高3期免息)</label>
            <span class="iconfont icon-icon_message"></span>
          </div>
        </div>
      </div>
      <!-- 支付方式 end -->

      <!-- 订单信息的确认 -->
      <div class="order-confirm">
        <div class="payInfo">
          <div class="finaPrice">
            <span class="realPay-title">实付款 : </span>
            <span class="moneyLogo"> ￥</span>
            <span class="realPrice">9999999.99</span>
          </div>
          <div class="postAddress">
            <span class="realPay-title">寄送至 : </span
            ><span>广东省 深圳市 南山区 粤海街道 大冲国际中心13楼</span>
          </div>
          <div class="receiveMan">
            <span class="realPay-title">收货人 : </span>
            <span> jackeylove </span>
            <span> 182xxxxxxxx</span>
          </div>
        </div>
      </div>
      <!-- 订单信息的确认 -->
      <div class="submitOrder-container">
        <div class="submitOrder">
          <div class="goBack">
            <i class="iconfont icon-goback"></i>
            <a href="">返回购物车</a>
          </div>
          <router-link to="/" class="goSubmit">提交订单</router-link>
        </div>
      </div>
      <!-- 订单信息的确认 end -->

      <!-- 仔细阅读提示 -->
      <div class="orderTips-container">
        <div class="orderTips">
          <span class="tipsText">
            <i class="iconfont icon-dengpao"></i>
            请仔细阅读“海外购物须知”，提交订单表示您已同意相关条款
            <a href="" class="iconfont icon-question"></a>
          </span>
        </div>
      </div>
      <!-- 仔细阅读提示 end -->
    </div>
    <div>
      <div class="LPButtom">
        <ul>
          <li>
            <a href="">
              <img src="../assets/Settlement/you1.jpg" alt="" />
              <div>
                <h3>品质保障</h3>
                <p>品质护航 购物无忧</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/Settlement/qi2.jpg" alt="" />
              <div>
                <h3>七天无理由退换货</h3>
                <p>为您提供售后无忧保障</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/Settlement/te3.jpg" alt="" />
              <div>
                <h3>特色服务体验</h3>
                <p>为您呈现不一样的服务</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/Settlement/bang4.jpg" alt="" />
              <div>
                <h3>帮助中心</h3>
                <p>您的购物指南</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="LPButtomShop">
        <ul>
          <li>
            <p>购物指南</p>
            <div><a href="">免费注册</a></div>
            <div><a href="">开通支付宝</a></div>
            <div><a href="">支付宝充值</a></div>
          </li>
          <li>
            <p>天猫保障</p>
            <div><a href="">发票保障</a></div>
            <div><a href="">售后规则</a></div>
            <div><a href="">缺货赔付</a></div>
          </li>
          <li>
            <p>支付方式</p>
            <div><a href="">快捷支付</a></div>
            <div><a href="">信用卡</a></div>
            <div><a href="">余额宝</a></div>
            <div><a href="">蚂蚁花呗</a></div>
            <div><a href="">货到付款</a></div>
          </li>
          <li>
            <p>商家服务</p>
            <div><a href="">天猫规则</a></div>
            <div><a href="">商家入驻</a></div>
            <div><a href="">商家中心</a></div>
            <div><a href="">天猫智库</a></div>
            <div><a href="">物流服务</a></div>
            <div><a href="">喵言喵语</a></div>
            <div><a href="">运营服务</a></div>
          </li>
        </ul>
        <div>
          <h2>天猫手机</h2>
          <div><img :src="LPButtomQRcode" alt="" /></div>
        </div>
      </div>
    </div>

    <div class="ywpBotton">
      <img src="../assets/Settlement/tianmao.png" alt="" class="box" />
      <div class="tmallinfo ywpGg">
        <a href="">关于天猫</a>
        <a href="">帮助中心</a>
        <a href="">开放平台</a>
        <a href="">诚聘英才</a>
        <a href="">联系我们</a>
        <a href="">网站合作</a>
        <a href="">法律声明</a>
        <a href="">隐私权政策</a>
        <a href="">知识产权</a>
        <a href="">廉正举报</a>
      </div>
      <div class="otherlink ywpGg">
        <a href="">阿里巴巴集团</a>
        <span>|</span>
        <a href="">淘宝网</a>
        <span>|</span>
        <a href="">天猫</a>
        <span>|</span>
        <a href="">聚划算</a>
        <span>|</span>
        <a href="">全球速卖通</a>
        <span>|</span>
        <a href="">阿里巴巴国际交易市场</a>
        <span>|</span>
        <a href="">1688</a>
        <span>|</span>
        <a href="">阿里妈妈</a>
        <span>|</span>
        <a href="">飞猪</a>
        <span>|</span>
        <a href="">阿里云计算</a>
        <span>|</span>
        <a href="">AliOS</a>
        <span>|</span>
        <a href="">阿里通信</a>
        <span>|</span>
        <a href="">万网</a>
        <span>|</span>
        <a href="">高德</a>
        <span>|</span>
        <a href="">UC</a>
        <span>|</span>
        <a href="">友盟</a>
        <span>|</span>
        <a href="">虾米</a>
        <span>|</span>
        <a href="">钉钉</a>
        <span>|</span>
        <a href="">支付宝</a>
        <span>|</span>
        <a href="">阿里安全</a>
      </div>
      <div class="copy ywpGg">
        <span class="copy-left">
          <span>增值电信业务经营许可证：</span>
          <a href="">浙B2-20110446</a>
        </span>
        <span class="copy-in">市场名称登记证：工商网市字3301004119号</span>
        <span class="cop-yright"
          >出版物网络交易平台服务经营备案证： 新出发浙备字第001号</span
        >
      </div>
      <div class="footer ywpGg">
        <ul class="footsize">
          <li>
            互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com
          </li>
          <li>
            医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号
          </li>
          <li>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</li>
          <li class="footsize1">© 2003-2020 TMALL.COM 版权所有</li>
        </ul>
        <a href="">12318举报</a>
        <ul class="footzho">
          <li>互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005</li>
          <li>互联网药品交易服务资格证书：国A20150001</li>
        </ul>
        <div class="footRiget">
          <a href="" class="footRiget1">
            <img src="../assets/Settlement/police.png" alt="" />
            <span>浙公网安备 33010002000120号</span>
          </a>
        </div>
      </div>
      <ul class="accident">
        <li>buy2033005071027.center.na610</li>
        <li>buy2033005071027.center.na610 7169a81716029004214827564e</li>
      </ul>
    </div>

    <div class="xzwpage">
      <div class="xzw" v-if="xzwSwitch">
        <div class="xzwPopup" ref="getHeight">
          <div class="xzwTop">
            <p>淘宝/天猫确认订单页面意见反馈</p>
            <span class="iconfont icon-close2" @click="closeClick"></span>
          </div>

          <div class="xzwDescribe">
            <div class="xzwProblem">
              <span>*</span>
              <p>问题描述：</p>
            </div>
            <textarea class="xzwText" placeholder="至少5个字。"></textarea>
          </div>

          <div class="xzwScreenshot">
            <p>屏幕截图：</p>
            <div class="xzwImg"></div>
          </div>

          <button class="xzwBtn">提交</button>
        </div>
      </div>

      <img @click="imgClick" src="../assets/Settlement/pachong.png" alt="点击反馈意见" />
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  data() {
    return {
      LPButtomQRcode: "",
      //弹窗显示隐藏
      xzwSwitch: false,
      list: "t",
      cellList: [],
      // 优惠数据
      discount:""
    };
  },
  created() {
    QRCode.toDataURL("https://www.tmall.com/wow/portal/act/app-download", {
      width: 105,
    })
      .then((url) => {
        console.log(url);
        this.LPButtomQRcode = url;
      })
      .catch((err) => {
        console.error(err);
      });

    let params =  JSON.parse( decodeURI(this.$route.params.orderid) ) 
    // 
    console.clear( )
      console.log( params )
      let ids = []
      for(let i=0; i<params.length; i++){
        ids.push(params[i].id)
      }
      ids = encodeURI(JSON.stringify(ids))
      console.log(  ids )
      this.$ajax({
        method:'post',
        url:this.$url+'/db',
        data:{
          flag:'findGoodsByID',
          ids:ids,
        }
      }).then(res=>{
        console.log( res )
      }).catch(err=>{
        console.log( err )
      })
    this.$ajax({
        method: "post",
        url: 'http://192.168.6.75/goulew/server.php',
        data: {
          name: 'cellList',
        },
      })
        .then((res) => {
          this.cellList = res
        })
        .catch((err) => {
          console.log(err);
        })
  },
  methods: {
    imgClick() {
      this.xzwSwitch = true;
    },
    closeClick() {
      this.xzwSwitch = false;
    },
  },
  
};

</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_2136437_cpi9b7zv2e7.css');
@import url("//at.alicdn.com/t/font_2136841_wekol9jhv0q.css");
@import url("//at.alicdn.com/t/font_2136701_ghm0nqrqeao.css");
@import url("//at.alicdn.com/t/font_2133443_zb767pt2wti.css");
@spancolor: #ff4400;
@color: #333;
.flex() {
  display: flex;
  justify-content: space-between;
}

.totalWidth {
  width: 990px;
  margin: 0 auto;
}
// 头部栏
.jiHeadBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 89px;
  //   天猫背景图
  > s {
    width: 198px;
    height: 28px;
    background: url("../assets/Settlement/01.png") no-repeat;
  }
  //   查看购物车5步
  > .jiList1 {
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 714px;
    height: 64px;
    li {
      display: flex;
      width: 100px;
      height: 64px;
      justify-content: center;
      flex-direction: column;
      margin-left: 50px;
      div {
        box-sizing: border-box;
        position: relative;
        width: 32px;
        height: 32px;
        margin: 0 auto;
        line-height: 32px;
        text-align: center;
        color: #666;
        border: 1px solid #666;
        border-radius: 50%;
        margin-bottom: 5px;
        &::after {
          position: absolute;
          top: 50%;
          left: 45px;
          content: "";
          width: 94px;
          height: 1px;
          background: #666;
        }
      }
      .di5::after {
        display: none;
      }
      //   li中选中div变颜色
      .listColor {
        border: 1px solid red;
        background: red;
        color: #fff;
      }
      //   li下面的字体
      > span {
        width: 100px;
        height: 20px;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
// 收货地址
.jiAddress {
  box-sizing: border-box;
  height: 238px;
  padding: 30px 0;
  > h3 {
    height: 25px;
    line-height: 25px;
    margin-bottom: 3px;
    font-size: 14px;
  }
  .jiList2 {
    display: flex;
    justify-content: space-between;
    li {
      box-sizing: border-box;
      position: relative;
      z-index: 500;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      white-space: pre-wrap;
      width: 237px;
      height: 105px;
      padding: 11px 15px;
      background: url("../assets/Settlement/03.png") no-repeat;
      cursor: pointer;
      // 设为默认
      .setDefault {
        position: absolute;
        top: -4px;
        right: 0;
        width: 48px;
        height: 18px;
        background: #ccc;
        color: #fff;
        padding: 0 2px;
      }
      & span:first-child {
        height: 24px;
        border-bottom: 1px solid #eee;
      }
      > div {
        margin-top: 5px;
        margin-bottom: 3px;
      }
      a {
        text-align: left;
        color: #c97;
        &:hover {
          color: red;
        }
      }
      // 鼠标进入变背景
      &:hover {
        background: url("../assets/Settlement/02.png") no-repeat;
      }
    }
  }
  .addressManagement {
    display: flex;
    justify-content: space-between;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    margin-top: 20px;
    a {
      color: #c97;
      &:hover {
        color: red;
      }
    }
  }
}
// 选中给的背景图
.jiAddress ul .bgDefault {
  background: url("../assets/Settlement/02.png") no-repeat;
}
// 菜鸟驿站服务
.greenHand {
  box-sizing: border-box;
  height: 126px;
  border: 2px solid #eee;
  // 菜鸟驿站服务头部
  .greenHandTop {
    display: flex;
    & > div:first-child {
      box-sizing: border-box;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 152px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      padding: 0 12px;
      cursor: pointer;
      &::before {
        position: absolute;
        top: 0;
        left: 3px;
        content: "";
        width: 100%;
        height: 2px;
        background: red;
      }
      & span:nth-child(2) {
        background: red;
        height: 16px;
        line-height: 16px;
        box-sizing: border-box;
        padding: 0 2px;
        color: #fff;
      }
      & .icon-iconset0143 {
        color: #c97;
        &:hover {
          color: red;
        }
      }
    }
    > div:last-child {
      flex-grow: 1;
      height: 24px;
      border-bottom: 1px solid #eee;
    }
  }
  // 菜鸟驿站底部
  .greenHandBottom {
    height: 50px;
    padding: 15px 5px 5px 15px;
    > .top {
      display: flex;
      align-items: center;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      cursor: pointer;
      & > span:first-child {
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 1px solid #eee;
        border-radius: 3px;
      }
      .icon-yizhan_jihuo {
        margin: 0 6px;
        color: red;
      }
      &:hover span:first-child {
        border: 1px solid rgb(98, 180, 228);
        background: #eee;
      }
    }
  }
  .bottom {
    font-size: 12px;
    color: #c97;
    cursor: pointer;
    margin: 14px 0 0 24px;
    &:hover {
      color: red;
    }
  }
}

.smContainer {
  width: 990px;
  margin: 0 auto;
}
.wgNavbar {
  height: 64px;

  h5 {
    font-size: 14px;
    color: @color;
    line-height: 25px;
  }

  ul {
    margin-top: 12px;
    .flex;
    li {
      font-size: 12px;
      color: #6c6c6c;
      line-height: 24px;
      text-align: center;
      height: 24px;
      margin-left: 1px;
      border-bottom: 3px solid #b2d1ff;

      &:nth-child(1) {
        width: 255px;
        margin-left: 0;
      }

      &:nth-child(2) {
        width: 180px;
      }
      &:nth-child(3) {
        width: 120px;
      }
      &:nth-child(4) {
        width: 120px;
      }
      &:nth-child(5) {
        width: 180px;
      }
      &:nth-child(6) {
        width: 130px;
      }
    }
  }
}

.wgCellClass {
  a {
    display: block;
    &:hover {
      color: @spancolor;
    }
  }
  span.price{
    font-size: 14px;
    font-weight: 600;
    color: @spancolor;
  }
  .cell {
    display: flex;
    align-items: center;
    margin-top: 25px;
    padding-bottom: 5px;
    border-bottom: 1px dotted #80b2ff;
    > strong {
      margin-right: 5px;
      font-weight: 500;
      &.cellName {
        margin-left: 60px;
      }
    }
    .icon-taobao {
      margin-right: 6px;
      color: @spancolor;
    }
    .icon-wangwang {
      color: rgb(34, 144, 235);
      margin-left: 6px;
      font-size: 16px;
    }
  }
  .wgShopClass {
    li {
      padding-top: 10px;
      height: 75px;
      background: rgb(251, 252, 255);
      border-bottom: 1px dotted rgb(221, 221, 221);
      .flex;
      > * {
        margin-right: 1px;
      }
      > .details {
        padding: 0 0 10px 10px;
        width: 255px;
        box-sizing: border-box;
        .flex;
        > img {
          display: block;
          width: 50px;
          height: 50px;
        }
        > .shoping {
          margin-left: 10px;
          > * {
            height: 18px;
            line-height: 18px;
          }
        }
      }
      .describe {
        padding: 0 2px;
        width: 180px;
        text-align: left;
      }
      .unitPrice {
        width: 120px;
        text-align: center;
      }
      .amount {
        width: 120px;
        text-align: center;
      }

      .discount {
        width: 180px;
      }
      .actualPrice {
        width: 130px;
        margin-right: 0;
        padding-right: 5px;
        line-height: 18px;
        font-size: 14px;
        color: @spancolor;
        text-align: right;
        font-weight: bold;
      }
    }
  }
  .text {
    background-color: rgb(242, 247, 255);
    .flex;
    .message {
      padding: 10px;
      width: 495px;
      border-right: 1px solid rgb(255, 255, 255);
      border-top: 1px solid rgb(255, 255, 255);
    }
    .textRight {
      flex-grow: 1;
      .textRightTop,
      .textRightBottom {
        padding: 5px;
        border-top: 1px solid rgb(255, 255, 255);
        .flex;
      }
      .textRightTop {
        > * {
          line-height: 39px;
        }
      }
      .textRightBottom {
        .textRightBottomLeft{
          .flex;
        }
        span.bggreen{
          display: inline-block;
          height: 14px;
          margin-right: 5px;
          font-size: 12px;
          line-height: 14px;
          color: #fff;
          background: #36ab67;
        }
      }
    }
  }
  .totalPrice {
    height: 51px;
    background-color: rgb(242, 247, 255);
    border-top: 1px solid rgb(255, 255, 255);
    text-align: right;
    line-height: 51px;
    .price{
      margin-left: 6px;
    }
    em{
      font-style: normal;
    }
  }
}

.waitingForPay {
  padding: 15px 0 15px 10px;
  margin-bottom: 100px;
}

// 淘金币
.taoGolds {
  width: 980px;
  height: 43px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  font-size: 12px;
}
.checkboxGroup {
  margin-right: 100px;
}

// 支付方式
.payMethods {
  box-sizing: border-box;

  .methods {
    width: 990px;
    height: 48px;
    line-height: 48px;
    border-top: 1px dotted gray;
    border-bottom: 1px dotted gray;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    > div {
      margin-left: 50px;
      font-size: 12px;
      display: flex;
      align-items: center;
      .icon-icon_message {
        color: skyblue;
      }
    }
  }
}

// 订单确认
.order-confirm {
  width: 990px;
  height: 125px;
  margin: 0 auto;
  text-align: end;
  box-sizing: border-box;
  .payInfo {
    border: 1px solid red;
    height: 125px;
    min-width: 230px;
    margin-top: 15px;
    text-align: right;
    box-sizing: border-box;
    font-size: 12px;
    padding: 20px 0;
    .finaPrice {
      margin-bottom: 15px;
      .moneyLogo {
        font-size: 26px;
        margin-right: 4px;
        color: #999;
      }
      .realPrice {
        font: 700 26px tahoma;
        color: rgb(255, 80, 0);
      }
    }
    .realPay-title {
      font-weight: 700;
      color: #333;
    }
  }
}

// 提交订单按钮
.submitOrder-container {
  .submitOrder {
    width: 990px;
    height: 44px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    .goBack {
      a {
        color: #36c;
        text-decoration: none;
        margin-right: 50px;
        line-height: 34px;
        font-size: 12px;
      }
      color: #36c;
    }
    .goSubmit {
      display: inline-block;
      width: 182px;
      height: 39px;
      color: #fff;
      position: relative;
      vertical-align: middle;
      line-height: 39px;
      cursor: pointer;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      background: rgb(255, 80, 0);
    }
  }
}

// 确认订单前的提示
.orderTips-container {
  .orderTips {
    width: 990px;
    margin: 0 auto;
    text-align: end;
    .tipsText {
      margin-right: 10px;
      border: 1px solid #f1f1f1;
      padding: 3px;
      background-color: #fcfcfc;
      color: #666;
      border-radius: 2px;
      font-size: 12px;
      .icon-dengpao {
        font-size: 18px;
        color: orange;
      }
      .icon-question {
        font-size: 12px;
        color: skyblue;
      }
    }
  }
}

.LPButtom {
  border-top: 1px solid #eee;
  margin-bottom: 25px;
  ul {
    width: 1190px;
    margin: 0 auto;
    padding-left: 52px;
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      width: 297px;
      height: 100px;
      & > a {
        display: flex;
        align-items: center;
        div {
          margin-left: 5px;
        }
        h3 {
          color: #333;
          font-size: 16px;
        }
        p {
          color: rgba(153, 153, 153, 0.692);
          margin-top: 3px;
        }
      }
    }
  }
}
.LPButtomShop {
  width: 1190px;
  margin: 0 auto;
  padding-top: 22px;
  padding-left: 52px;
  border-top: 1px solid #eee;
  display: flex;
  //   justify-content: space-between;
  ul {
    display: flex;
    li {
      &:nth-child(1) {
        padding: 0;
      }
      padding-left: 52px;
      width: 186px;
      p {
        height: 30px;
        line-height: 30px;
        font-weight: 600;
        color: #646464;
      }
      > div {
        font-size: 12px;
        a {
          height: 20px;
          line-height: 20px;
          color: #8b8b8b;
        }
      }
    }
  }
  > div {
    margin-left: 50px;
    h2 {
      color: #646464;
      font-size: 16px;
      margin-left: 5px;
    }
  }
}

.ywpBotton {
  margin-top: 50px;
  border-top: 2px solid #ff0036;
  background: #000000;
  position: relative;

  ul,
  ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  .box {
    position: absolute;
    top: -27px;
    left: 130px;
    width: 68px;
    height: auto;
  }

  .ywpGg {
    width: 1190px;
    margin: 0 auto;
    padding: 5px 0;
  }

  .tmallinfo {
    a {
      color: #fff;
      font-size: 12px;
      margin-right: 6px;
    }
  }

  .otherlink {
    a {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
    }

    span {
      color: #fff;
      margin: 0 5px;
      font-size: 9px;
    }
  }

  .copy {
    font-size: 12px;
    color: #a4a4a4;

    a {
      margin-right: 65px;
      color: #a4a4a4;
    }

    .copy-in {
      margin-right: 65px;
    }
  }

  .footer {
    display: flex;
    font-size: 12px;
    color: #a4a4a4;

    .footsize {
      .footsize1 {
        color: #686868;
      }
    }

    a {
      color: #a4a4a4;
      position: relative;
      top: 30px;
      right: 12px;
    }

    .footzho {
      margin-right: 65px;
    }

    .footRis {
      position: relative;
      bottom: 30px;
      .footRiget1 {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .accident {
    font-size: 12px;
    color: #000000;
  }
}

// 反馈页面
.xzw{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(128, 128, 128, 0.212);
}
//弹窗
.xzwPopup{
    width: 540px;
    min-height: 300px;
    font-size: 16px;
    background: #fff;
    box-shadow: 1px 1px  rgb(209, 208, 208);
    position: fixed;
    left: 50%;
    text-indent: 5px;
    top: 50%;
    transform: translate(-50%,-50%);
//弹窗顶部
    .xzwTop{
        display: flex;
        height: 48px;
        line-height: 48px;
        position: relative;
        p{
            color: #333;
            padding-left: 12px;
        }
        span{
            position: absolute;
            right: 18px;
        }
        .icon-close2{
            color: #999;
        }
        .icon-close2:hover{
            color: #000;
        }
    }
//弹窗问题描述
    .xzwDescribe{
        width: 500px;
        height: 110px;
        font-size: 12px;
        margin: 0 auto;
        padding-top: 20px;
        color: #666;
        .xzwProblem{
            display: flex;
            span{
                color: #ff3000;
                margin-right: 5px;
            }
        }
        .xzwText{
            margin-top: 10px;
            outline: none;
            border: 1px solid #c4c6cf;
            border-radius: 5px;
            width: 500px;
            height: 82px;
            resize: none;
            padding: 4px 8px;
            box-sizing: border-box;
        }
    }
//弹窗屏幕截图
    .xzwScreenshot{
        padding-top: 20px;
        font-size: 12px;
        margin-bottom: 16px;
        p{
            height: 15px;
            line-height: 15px;
            padding-left: 20px;
        }
        //截图的宽高
        .xzwImg{
            max-height: 400px;
            min-height: 50px;
            width: 150px;
            margin-left: 20px;
        }
    }
//提交按钮
    .xzwBtn{
        background:#3e71f7;
        font-size: 12px;
        padding:0 12px;
        height: 28px;
        line-height: 26px;
        color:#fff;
        border-radius: 3px;
        margin-bottom: 16px;
        margin-left: 20px;
    }
    
}
//小蟑螂
.xzwpage{
    img{   
    width: 30px;
    height: 30px;
    position: fixed;
    margin-left: -15px;
    left: 98%;
    margin-top: -15px;
    top: 90%;
    }
}
</style>
