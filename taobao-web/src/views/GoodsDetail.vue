<template>
    <div class="goodsDetail">
        <!-- 搜索栏 -->
        <div class="qGoodsDetails" id="topSearch">
            <div class="GoodsLogoGrounp">
              <div class="logoPart" >
                <router-link to="/"><img src="../assets/taobaologo.png" alt=""></router-link>
                <span @mouseover.stop='mygoodsmouseover' @mouseout.stop='mygoodsmouseout'>
                  更多市场
                 <img src="../assets/down.jpg" alt="" class="rotate" v-if='showdown'>
                 <img src="../assets/down.jpg" alt="" class="rotate rotate1" v-if='showdown1'>
                  <ul class="moreselect" v-if='moreselect1' @mouseover.stop='mygoodsmouseover1' @mouseout.stop='mygoodsmouseout1'>
              <li>
                <router-link to="/">淘宝发现</router-link>
                <router-link to="/">淘宝女人</router-link>
                <router-link to="/">淘宝男人</router-link>
                <router-link to="/">生活家</router-link>
                <router-link to="/">情侣</router-link>
              </li>
              <li>
                <router-link to="/">男女服饰</router-link>
                <router-link to="/">女装</router-link>
                <router-link to="/">新品</router-link>
                <router-link to="/">裙子</router-link>
                <router-link to="/">男装</router-link>
                <router-link to="/">T恤</router-link>
                <router-link to="/">休闲</router-link>
              </li>
              <li>
                <router-link to="/">箱包市场</router-link>
                <router-link to="/">女包</router-link>
                <router-link to="/">男包</router-link>
                <router-link to="/">双肩包</router-link>
                <router-link to="/">旅行箱</router-link>
                <router-link to="/">钱包</router-link>
              </li>
              <li>
                <router-link to="/">女鞋市场</router-link>
                <router-link to="/">靴子</router-link>
                <router-link to="/">单鞋</router-link>
                <router-link to="/">男鞋</router-link>
                <router-link to="/">休闲</router-link>
                <router-link to="/">商务</router-link>
                <router-link to="/">帆布</router-link>
              </li>
              <li>
                <router-link to="/">内衣配饰</router-link>
                <router-link to="/">新品</router-link>
                <router-link to="/">文胸</router-link>
                <router-link to="/">睡衣</router-link>
                <router-link to="/">内裤</router-link>
                <router-link to="/">帽子</router-link>
                <router-link to="/">皮带</router-link>
              </li>
              <li>
                <router-link to="/">运动市场</router-link>
                <router-link to="/">跑步鞋</router-link>
                <router-link to="/">球鞋</router-link>
                <router-link to="/">运动夹克</router-link>
                <router-link to="/">运动套装</router-link>
              </li>
              <li>
                <router-link to="/">户外市场</router-link>
                <router-link to="/">山地车</router-link>
                <router-link to="/">垂钓用品</router-link>
                <router-link to="/">广场舞</router-link>
                <router-link to="/">冲锋衣</router-link>
                <router-link to="/">轮滑</router-link>
              </li><li>
                <router-link to="/">配饰市场</router-link>
                <router-link to="/">饰品</router-link>
                <router-link to="/">珠宝</router-link>
                <router-link to="/">手表</router-link>
                <router-link to="/">眼镜</router-link>
                <router-link to="/">Zippo军刀</router-link>
              </li>
              <li>
                <router-link to="">数码市场</router-link>
                <router-link to="">手机</router-link>
                <router-link to="">平板电脑</router-link>
                <router-link to="">相机/摄像</router-link>
                <router-link to="">笔记本</router-link>
              </li><li>
                <router-link to="">家电市场</router-link>
                <router-link to="">大家电</router-link>
                <router-link to="">厨房电器</router-link>
                <router-link to="">生活电器</router-link>
              </li><li>
                <router-link to="">美妆市场</router-link>
                <router-link to="">护肤</router-link>
                <router-link to="">彩妆</router-link>
                <router-link to="">香氛</router-link>
                <router-link to="">男士</router-link>
                <router-link to="">美发功效</router-link>
              </li><li>
                <router-link to="">母婴市场</router-link>
                <router-link to="">童装</router-link>
                <router-link to="">童鞋</router-link>
                <router-link to="">奶粉</router-link>
                <router-link to="">用品</router-link>
                <router-link to="">玩具</router-link>
              </li>
              <li>
                <router-link to="">家居家纺</router-link>
                <router-link to="">四件套</router-link>
                <router-link to="">窗帘</router-link>
                <router-link to="">摆件</router-link>
                <router-link to="">花瓶</router-link>
                <router-link to="">沙发</router-link>
              </li>
              <li>
                <router-link to="">家装建材</router-link>
                <router-link to="">厨房卫浴</router-link>
                <router-link to="">灯饰</router-link>
                <router-link to="">建材</router-link>
                <router-link to="">五金</router-link>
                <router-link to="">瓷砖</router-link>
              </li>
              <li>
                <router-link to="">日用百货</router-link>
                <router-link to="">热门</router-link>
                <router-link to="">餐具</router-link>
                <router-link to="">饮具</router-link>
                <router-link to="">收纳</router-link>
                <router-link to="">清洁</router-link>
              </li>
              <li>
                <router-link to="">阿里汽车</router-link>
                <router-link to="">行车记录仪</router-link>
                <router-link to="">脚垫</router-link>
                <router-link to="">安全座椅</router-link>
                <router-link to="">轮胎</router-link>
              </li>
              <li>
                <router-link to="">花鸟市场</router-link>
                <router-link to="">猫狗</router-link>
                <router-link to="">水族</router-link>
                <router-link to="">奇宠</router-link>
                <router-link to="">鲜花</router-link>
                <router-link to="">园艺</router-link>
              </li>
              <li>
                <router-link to="">文娱市场</router-link>
                <router-link to="">古筝</router-link>
                <router-link to="">萨克斯</router-link>
                <router-link to="">吉它</router-link>
                <router-link to="">电钢琴</router-link>
              </li>
              <li>
                <router-link to="">婚庆市场</router-link>
                <router-link to="">钻戒</router-link>
                <router-link to="">婚纱</router-link>
                <router-link to="">喜帖</router-link>
                <router-link to="">床品</router-link>
                <router-link to="">喜糖</router-link>
              </li>
              <li>
                <router-link to="">特色市场</router-link>
                <router-link to="">腔调</router-link>
                <router-link to="">老中年</router-link>
              </li>
                </ul>
          </span>
         
        </div>
        <div class="searchpart">
            <span class="searchgrounp">
              <input type="text" name="" id="">
              <router-link to="/"> 搜淘宝</router-link>
            </span>
            <router-link to="/">搜本店</router-link>
        </div>
      </div>
        </div>
        <!-- 店铺广告广告栏 -->
        <div class="aderTisement">
            <div class="aderTisementbox">
              <div class="aderTisementLogo">
                  <div class="guanzhuGroup">
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                  </div>
                  <div class="guanzhubottom">
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                    <router-link to="/" ></router-link>
                  </div>
              </div>
            </div>
        </div>
        <!-- 右侧信息栏 -->
        <div class="rightFixedNavbar" @mouseover='rFNomouseover' @mouseout='rFNomouseout'>
            <div class="rFNZhanwei"></div>
            <div class='rFNZcontent'>
                <div class="wwpart">
                  <router-link to="/" class="wwpartWW" :class={bg:RFNshow.show1}  data-key='show1'>
                    <img src="../assets/ww.jpg" alt="" data-key='show1'>
                    <span class="RFNwindow1" v-if='RFNshow.show1'  @mouseover='rFNomouseover1' @mouseout='rFNomouseout1' data-key='show1'>客服</span>
                  </router-link>
                  <router-link to="/" class="wwpartGWC" :class={bg:RFNshow.show2}  data-key='show2'>
                    <img src="../assets/GWC.jpg" alt="" data-key='show2'>
                    <span :class={color:RFNshow.show2} data-key='show2'>购物车</span>
                    <span>{{$store.state.UserInfo.info.cart? $store.state.UserInfo.info.cart.length : 0}}</span>
                  </router-link>
                  <router-link to="/"> <span class="RFNwindow2" v-if='RFNshow.show2' @mouseover='rFNomouseover1' @mouseout='rFNomouseout1' data-key='show2'>我的购物车</span></router-link>
                </div>
                <div class="fankuipart">
                  <router-link to="/" class="fankui" :class={bg:RFNshow.show3} data-key='show3'>
                    <img src="../assets/pen.jpg" alt="" data-key='show3'>
                    <span class="RFNwindow3" v-if='RFNshow.show3' @mouseover='rFNomouseover1' @mouseout='rFNomouseout1' data-key='show3'>反馈</span>
                  </router-link>
                  <a @click.stop='gotoTop' href="javascfript:;" class="fanhui" :class={bg:RFNshow.show4} data-key='show4'>
                    <img src="../assets/fanhui.jpg" alt="" data-key='show4'>
                    <span class="RFNwindow4" v-if='RFNshow.show4' @mouseover='rFNomouseover1' @mouseout='rFNomouseout1' data-key='show4'>返回顶部</span>
                  </a>
                </div>
      </div>
        </div>
        <!-- 商品图片、价格、店铺信息 -->
        <div class="goodsIntro">
            <div class="goodPic">
                <a href="#">
                    <img :src="goodsDetailData.imgs?goodsDetailData.imgs[activeNum]:''">
                </a>
                <ul class="picList" @mouseover.stop="selectPic">
                    <li>
                        <div class="vidioplay" v-show="playVidio" @mouseover.stop="vidioStart" @mouseout="vidioEnd">
                            <video src="http://192.168.6.48:3000/public/test.mp4"
                              muted  autoplay  controls  style="width:400px; height:400px">
                                <source src="http://192.168.6.48:3000/public/test.mp4" type="video/mp4">
                                <source src="http://192.168.6.48:3000/public/test.mp4" type="video/webm">
                                <p>Your browser doesn't support HTML5 video. </p>
                              </video>
                        </div>
                        <a href="#" @mouseover.stop="vidioClick" @mouseout="stopVidio">这是视频</a>
                    </li>
                    <li v-for="(item, i) in goodsDetailData.imgs" :key="i" >
                        <a href="#" :data-picnum="i"><img :src="item"></a>
                    </li>
                </ul>
                <div class="collectGoods">
                  <span class="iconfont iconshoucang"></span>
                  <router-link to="/">收藏宝贝(1553人气)</router-link>
                </div>
            </div>
            <div class="goodPrice">
                <h3>{{goodsDetailData.name}}</h3>
                <div class="price">
                    <span>价格</span>
                    <h2>&yen;{{goodsDetailData.price}}</h2>
                    <div class="comment">
                        <router-link to="/">{{goodsDetailData.pengJia}}</router-link>
                        <span>累计评论</span>
                    </div>
                    <div class="trade">
                        <span>3</span>
                        <span>交易成功</span>
                    </div>
                </div>
                <div class="discount">
                    <span>优惠</span>
                    <div>
                        <img src="../assets/taojinbi.png">
                        <span>
                            淘金币可抵11.94元
                        </span>
                    </div>
                </div>
                <div class="sendAddress">
                    <span>配送</span>
                    <div>
                        <span>浙江湖州</span>
                        <span>至</span>
                        <span>广东深圳</span>
                        <span>快递 免运费</span>
                        <span>付款15天后发货</span>
                    </div>
                </div>
                <div class="goodSize">
                    <span>尺码</span>
                    <ul class="sizeList" @click="sizeClick">
                        <li :data-sizenum="1" :class="{sizeActive:selectSize == 1}">160/84B(M)</li>
                        <li :data-sizenum="2" :class="{sizeActive:selectSize == 2}">165/88B(L)</li>
                        <li :data-sizenum="3" :class="{sizeActive:selectSize == 3}">170/92B(XL)</li>
                    </ul>
                </div>
                <div class="goodColor">
                    <span>颜色分类</span>
                    <ul class="colorList" @click="colorClick">
                        <li ><img src="https://img.alicdn.com/imgextra/i1/144183500/O1CN01OZzf7v1bj2piYtxXJ_!!144183500.jpg" :data-colornum="1" :class="{colorActive:selectColor == 1}"></li>
                        <li ><img src="https://img.alicdn.com/imgextra/i1/144183500/O1CN01OZzf7v1bj2piYtxXJ_!!144183500.jpg" :data-colornum="2" :class="{colorActive:selectColor == 2}"></li>
                    </ul>
                </div>
                <div class="goodNum">
                    <span>数量</span>
                    <div class="inputNum">
                        <button @click="deClick">-</button>
                        <span v-text="selectNum"></span>
                        <button @click="addClick">+</button>
                        <p>件(库存{{maxNum}}件)</p>
                    </div>
                </div>
                <div class="huabeiStage">
                    <span>花呗分期</span>
                    <ul @click="fenqiClick">
                        <li :data-fenqinum="1" :class="{fenqiActive:selectFenqi == 1}">&yen;135.71x3期<br>(含手续费)</li>
                        <li :data-fenqinum="2" :class="{fenqiActive:selectFenqi == 2}">&yen;135.71x6期<br>(含手续费)</li>
                        <li :data-fenqinum="3" :class="{fenqiActive:selectFenqi == 3}">&yen;135.71x12期<br>(含手续费)</li>
                        <li :data-fenqinum="4" :class="{fenqiActive:selectFenqi == 4}">&yen;135.71x24期<br>(含手续费)</li>
                    </ul>
                </div>
                <div class="buyBtns" @click = 'buyBtnsClick'> 
                    <button id="fenqiBuy">分期购买</button>
                    <button id="addCart" ><img src="../assets/gouwuche.png" />加入购物车</button>
                </div>
                <div class="buyPromise">
                  <span>承诺</span>
                  <span class="iconfont icontian"></span>
                  <router-link to="/">7天无理由</router-link>
                </div>
                <div class="buyPay">
                  <span>支付</span>
                  <ul>
                    <li>
                      <span class="iconfont iconhuabei"></span>
                      <router-link to="/">蚂蚁花呗</router-link>
                    </li>
                    <li>
                      <span class="iconfont iconxinyongka"></span>
                      <router-link to="/">信用卡</router-link>
                    </li>
                    <li>
                      <span class="iconfont iconjifenbao"></span>
                      <router-link to="/">集分宝</router-link>
                    </li>
                  </ul>
                </div>
            </div>
            <div class="shopIntro">
                <div class="shoptop">
                  <div class="tophead">
                    <img src="../assets/dianpu.png">
                    <div>
                        <span class="iconfont icondianpu"></span>
                        <span>11年老店</span>
                    </div>
                  </div>
                  <div class="shopInfo">
                    <ul>
                      <li><router-link to="/" class="impokey">执着真丝</router-link></li>
                      <li><span>信誉：</span><span class="iconfont iconV"></span><span class="iconfont iconV"></span></li>
                      <li><span>掌柜：</span><router-link to="/" class="bosss">gongzhu112008</router-link></li>
                      <li><span>联系：</span><span class="iconfont iconaliwangwang"></span><router-link to="/" class="contact">和我联系</router-link></li>
                      <li><span>资质：</span><span class="iconfont iconzizhi"></span><router-link to="/" class="money">5000元</router-link></li>
                    </ul>
                  </div>
                  <div class="shopMark">
                    <ul>
                      <li>描述<br><router-link to="/" class="describe">4.7<span class="iconfont iconxia"></span></router-link></li>
                      <li>服务<br><router-link to="/" class="service">4.8<span class="iconfont icondenghao"></span></router-link></li>
                      <li>物流<br><router-link to="/" class="logistic">4.7<span class="iconfont iconshang"></span></router-link></li>
                    </ul>
                  </div>
                  <div class="option">
                    <button>进入店铺</button>
                    <button>收藏店铺</button>
                  </div>
                </div>
                <div class="shopAdvertise">
                  <h3>看了又看</h3>
                  <ul>
                    <li>
                      <router-link to="/">
                        <img src="http://img.alicdn.com/bao/uploaded/O1CN01Q0geNd1bj2qVNq4Ti_!!144183500-0-lubanu-s.jpg_80x80.jpg">
                      </router-link>
                      <p>&yen;168.00</p>
                    </li>
                    <li>
                      <router-link to="/">
                        <img src="http://img.alicdn.com/bao/uploaded/O1CNA1b4CSdy1bj2qbNkDNv_!!144183500-0-psf.jpg_80x80.jpg">
                      </router-link>
                      <p>&yen;168.00</p>
                    </li>
                    <li>
                      <router-link to="/">
                        <img src="http://img.alicdn.com/bao/uploaded/O1CN01Ffbrar1bj2kL8Rj9y_!!144183500.jpg_80x80.jpg">
                      </router-link>
                      <p>&yen;138.00</p>
                    </li>
                    <li>
                      <router-link to="/">
                        <img src="http://img.alicdn.com/bao/uploaded/O1CN018qg1H91bj2okkgkD8_!!144183500.jpg_80x80.jpg">
                      </router-link>
                      <p>&yen;248.00</p>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
        <!-- 商品图文详情、评论详情 -->
        <div class="goodsShow" @scroll="goodsNavScroll">
        <div class="goodsNav" ref="goodsNav" id="goodsNav">

      <!-- 搜索框 -->
        <div class="goodsNavSearch">
          <input type="text" placeholder="搜本店"/>
          <router-link to="/"><span><img  src="../assets/search.png" class="img" alt=""/></span></router-link>
        </div>

      <!-- 宝贝详情 累计评论 专享服务导航栏 -->
      <ul class="goodsDetails" @click.stop='goodsContentClick'>
        <li :class="{goodsActive:goodsInfo.isGoodsActive1}" id="xq" ><p>宝贝详情</p></li>
        <li :class="{goodsActive:goodsInfo.isGoodsActive2}" id="pl" ><p>累计评论<span>132</span></p></li>
        <li :class="{goodsActive:goodsInfo.isGoodsActive3}" id="zx" ><p>专享服务</p></li>
      </ul>

      <!-- 宝贝详情 -->
      <div :class="{goodsDetailsCon:goodsInfo.isGoodsActive1}" v-show="goodsInfo.isGoodsActive1">
        <div class="hello" >
          <div class="xiangqing">
            <div class="shang">产品详情</div>
            <div class="zhong">
              <p v-html="err"></p>
              <p class="tu1">
                <img src="../assets/tu11.jpg" />
                <img src="../assets/tu12.jpg" />
                <img src="../assets/tu13.gif" />
              </p>
              <p><span>面料：桑蚕丝 真丝 香云纱</span></p>
              <p v-html="err"></p>
              <p v-html="err"></p>
              <p class="tu2">
                <img src="../assets/tu21.jpg" />
                <img src="../assets/tu22.jpg" />
                <img src="../assets/tu23.jpg" />
                <img src="../assets/tu24.jpg" />
              </p>
              <p class="tu3">
                <img src="../assets/tu31.jpg" />
              </p>
              <div class="tu3biaoge1">尺码表格1</div>
              <p v-html="err"></p>
              <div class="tu3biaoge2">尺码表格2</div>
              <p v-html="err"></p>
              <p v-html="err"></p>
              <p class="tu4">
                <img src="../assets/tu41.jpg" />
                <img src="../assets/tu42.jpg" />
                <img src="../assets/tu43.jpg" />
                <img src="../assets/tu44.jpg" />
                <img src="../assets/tu45.jpg" />
                <img src="../assets/tu46.jpg" />
                <img src="../assets/tu47.jpg" />
                <img src="../assets/tu48.jpg" />
                <img src="../assets/tu49.jpg" />
                <img src="../assets/tu49.jpg" />
                <img src="../assets/tu49.jpg" />
                <img src="../assets/tu49.jpg" />
                <img src="../assets/tu49.jpg" />
              </p>
              <p class="tu5">
                <img src="../assets/tu51.jpg" />
                <img src="../assets/tu52.jpg" />
                <img src="../assets/tu53.jpg" />
                <img src="../assets/tu54.jpg" />
              </p>
              <p v-html="err"></p>
            </div>
            <div class="xia">
              <div class="xia1">
                <h3>价格说明</h3>
                <ul>
                  <li>
                    <p>划线价格</p>
                    <p>
                      指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，<span>并非原价</span>，仅供参考。
                    </p>
                  </li>
                  <li>
                    <p>未划线价格</p>
                    <p>
                      指商品的<span>实时标价</span>，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。
                    </p>
                  </li>
                  <li>
                    <p></p>
                    <p>
                      商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。
                    </p>
                  </li>
                  <li>
                    <p></p>
                    <p>
                      此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。
                    </p>
                  </li>
                </ul>
              </div>
              <div class="xia2">
                <div class="xia2s">
                  <h3>邻家好货</h3>
                  <span>2/6</span>
                  <div class="zuo"></div>
                  <div class="you"></div>
                </div>
                <div class="xia2x">
                  <ul>
                    <li>
                      <a href="">
                        <img src="../assets/hh1.jpg" />
                        <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                      </a>
                      <p>
                        <span>
                          <b>¥</b>
                          <strong>138.00</strong>
                        </span>
                        <span>
                          <b>¥</b>
                          <s>138.00</s>
                        </span>
                      </p>
                    </li>
                    <li>
                      <a href="">
                        <img src="../assets/hh2.jpg" />
                        <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                      </a>
                      <p>
                        <span>
                          <b>¥</b>
                          <strong>138.00</strong>
                        </span>
                        <span>
                          <b>¥</b>
                          <s>138.00</s>
                        </span>
                      </p>
                    </li>
                    <li>
                      <a href="">
                        <img src="../assets/hh3.jpg" />
                        <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                      </a>
                      <p>
                        <span>
                          <b>¥</b>
                          <strong>138.00</strong>
                        </span>
                        <span>
                          <b>¥</b>
                          <s>138.00</s>
                        </span>
                      </p>
                    </li>
                    <li>
                      <a href="">
                        <img src="../assets/hh4.jpg" />
                        <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                      </a>
                      <p>
                        <span>
                          <b>¥</b>
                          <strong>138.00</strong>
                        </span>
                        <span>
                          <b>¥</b>
                          <s>138.00</s>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="xia3">
                <div class="xia3s">
                  <h4>安全提示：</h4>
                  <ul>
                    <li>
                      <p>
                        交易中请勿使用<span>阿里旺旺</span>以外的聊天工具沟通，不要接收<span>可疑文件</span>和不要点击<span>不明来源</span>的链接，支付前核实好域名和支付详
                        情。淘宝不会以订单有问题，让您提供任何<span>银行卡</span>、<span>密码</span>、<span>手机验证码</span>！遇到可疑情况可在钱盾“诈骗举报”中进行举报,<a
                          href="#"
                          >安全推荐</a
                        >
                      </p>
                      <p>
                        推荐安全软件：
                        <span
                          ><img src="../assets/qian.png" /><a href="">钱盾</a></span
                        >
                        <span
                          ><img src="../assets/uc.png" /><a href="">UC浏览器</a></span
                        >
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="xia3x">
                  <h4>内容申明：</h4>
                  <ul>
                    <li>
                      <p>
                        淘宝为第三方交易平台及互联网信息服务提供者，淘宝（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。淘宝提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；淘宝存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向淘宝举报并提供有效线索。
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="dibu">
            <a href=""><img src="../assets/wangpu.png" /></a>
          </div>
        </div>
      </div>
      <!-- 累计评论 -->
      <div :class="{goodsCommentsCon:goodsInfo.isGoodsActive2}" v-show="goodsInfo.isGoodsActive2">
        <div class="home">
      <div class="box">
          <div class="remark">
            <div class="remarkList">
              <ul class="remarkGoods">
                <li class="first-remark">宝贝评论</li>
              </ul>
              <div class="impression">
                <div class="impression-a">
                  <p>大家印象：</p>
                  <ul class="impression-list">
                    <li><a href="#">面料一级棒 (6)</a></li>
                    <li><a href="#">配色一流 (5)</a></li>
                    <li><a href="#">穿着效果棒 (4)</a></li>
                    <li><a href="#">穿着很舒适 (4)</a></li>
                    <li><a href="#">版型超赞 (4)</a></li>
                    <li><a href="#">领子设计差 (2)</a></li>
                  </ul>
                  
                </div>
                <div class="impression-qb">
                    <ul class="qb-list">
                      <li>
                        <input type="radio"/>
                        <a href="#">全部</a>
                      </li>
                      <li>
                        <input type="radio"/>
                        <a href="#">图片<span>(6)</span></a>
                      </li>
                      <li>
                        <input type="radio"/>
                        <a href="#">好评</a>
                      </li>
                      <li>
                        <input type="radio"/>
                        <a href="#">中评</a>
                      </li>
                      <li>
                        <input type="radio"/>
                        <a href="#">差评</a>
                      </li>
                    </ul>
                    <div class="sort">
                      <span>推荐排序</span>
                      <!-- <div class="popWindow"
                      v-show="rightPopdow"
                      @mouseover.stop="rightPopWinowIn"
                      @mouseout.stop="rightPopWinowOut"
                      >
                      <p>推荐排序</p>
                      <p>最近评价</p>
                      </div> -->
                      <img src="../assets/xiala.png">
                    </div>
                  </div>
                <div class="evaluate">
                  <ul class="evaluate-list">
                    <li class="pl" v-for="(item,i) in list" :key=i>
                      <div class="portrait">
                        <img :src="item.src">
                        <p class="name">{{item.name}}</p>
                        <img src="../assets/zuanshi.gif">
                      </div>
                      <div class="content">
                      <div class="content-top">{{item.content}}
                      </div>
                      <div class="content-bottom">
                        <div class="data">{{item.data}}
                        </div>
                        <div>
                          <span class="left">有用</span>
                          <span class="right">(0)</span>
                        </div>
                      </div>
                      </div>
                    </li>
                  </ul>
                  <div class="page">
                    <ul>
                      <li class="before-page">
                        <router-link to="/">上一页</router-link>
                      </li>
                      <li class="page1">
                        <router-link to="/">1</router-link>
                      </li>
                      <li class="page2">
                        <router-link to="/">2</router-link>
                      </li>
                      <li class="next-page">
                        <router-link to="/">下一页</router-link>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          <div class="priceDescription"></div>
          <div class="goodsList"></div>

        </div>
      </div>
        </div>
        <div class="xia">
          <div class="xia1">
            <h3>价格说明</h3>
            <ul>
              <li>
                <p>划线价格</p>
                <p>
                  指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，<span>并非原价</span>，仅供参考。
                </p>
              </li>
              <li>
                <p>未划线价格</p>
                <p>
                  指商品的<span>实时标价</span>，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。
                </p>
              </li>
              <li>
                <p></p>
                <p>
                  商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。
                </p>
              </li>
              <li>
                <p></p>
                <p>
                  此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。
                </p>
              </li>
            </ul>
          </div>
          <div class="xia2">
            <div class="xia2s">
              <h3>邻家好货</h3>
              <span>2/6</span>
              <div class="zuo"></div>
              <div class="you"></div>
            </div>
            <div class="xia2x">
              <ul>
                <li>
                  <a href="">
                    <img src="../assets/hh1.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
                <li>
                  <a href="">
                    <img src="../assets/hh2.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
                <li>
                  <a href="">
                    <img src="../assets/hh3.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
                <li>
                  <a href="">
                    <img src="../assets/hh4.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="xia3">
            <div class="xia3s">
              <h4>安全提示：</h4>
              <ul>
                <li>
                  <p>
                    交易中请勿使用<span>阿里旺旺</span>以外的聊天工具沟通，不要接收<span>可疑文件</span>和不要点击<span>不明来源</span>的链接，支付前核实好域名和支付详
                    情。淘宝不会以订单有问题，让您提供任何<span>银行卡</span>、<span>密码</span>、<span>手机验证码</span>！遇到可疑情况可在钱盾“诈骗举报”中进行举报,<a
                      href="#"
                      >安全推荐</a
                    >
                  </p>
                  <p>
                    推荐安全软件：
                    <span
                      ><img src="../assets/qian.png" /><a href="">钱盾</a></span
                    >
                    <span
                      ><img src="../assets/uc.png" /><a href="">UC浏览器</a></span
                    >
                  </p>
                </li>
              </ul>
            </div>
            <div class="xia3x">
              <h4>内容申明：</h4>
              <ul>
                <li>
                  <p>
                    淘宝为第三方交易平台及互联网信息服务提供者，淘宝（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。淘宝提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；淘宝存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向淘宝举报并提供有效线索。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dibu">
          <a href=""><img src="../assets/wangpu.png" /></a>
        </div>
      </div>
      <!-- 专享服务 -->
      <div :class="{goodsServerCon:goodsInfo.isGoodsActive3}" v-show="goodsInfo.isGoodsActive3">
        <div class="xia">
          <div class="xia1">
            <h3>价格说明</h3>
            <ul>
              <li>
                <p>划线价格</p>
                <p>
                  指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，<span>并非原价</span>，仅供参考。
                </p>
              </li>
              <li>
                <p>未划线价格</p>
                <p>
                  指商品的<span>实时标价</span>，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。
                </p>
              </li>
              <li>
                <p></p>
                <p>
                  商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。
                </p>
              </li>
              <li>
                <p></p>
                <p>
                  此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。
                </p>
              </li>
            </ul>
          </div>
          <div class="xia2">
            <div class="xia2s">
              <h3>邻家好货</h3>
              <span>2/6</span>
              <div class="zuo"></div>
              <div class="you"></div>
            </div>
            <div class="xia2x">
              <ul>
                <li>
                  <a href="">
                    <img src="../assets/hh1.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
                <li>
                  <a href="">
                    <img src="../assets/hh2.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
                <li>
                  <a href="">
                    <img src="../assets/hh3.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
                <li>
                  <a href="">
                    <img src="../assets/hh4.jpg" />
                    <p>丝丝入扣手工珠子扣贵气中式上衣真丝丝绒改良唐装女衬衫</p>
                  </a>
                  <p>
                    <span>
                      <b>¥</b>
                      <strong>138.00</strong>
                    </span>
                    <span>
                      <b>¥</b>
                      <s>138.00</s>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="xia3">
            <div class="xia3s">
              <h4>安全提示：</h4>
              <ul>
                <li>
                  <p>
                    交易中请勿使用<span>阿里旺旺</span>以外的聊天工具沟通，不要接收<span>可疑文件</span>和不要点击<span>不明来源</span>的链接，支付前核实好域名和支付详
                    情。淘宝不会以订单有问题，让您提供任何<span>银行卡</span>、<span>密码</span>、<span>手机验证码</span>！遇到可疑情况可在钱盾“诈骗举报”中进行举报,<a
                      href="#"
                      >安全推荐</a
                    >
                  </p>
                  <p>
                    推荐安全软件：
                    <span
                      ><img src="../assets/qian.png" /><a href="">钱盾</a></span
                    >
                    <span
                      ><img src="../assets/uc.png" /><a href="">UC浏览器</a></span
                    >
                  </p>
                </li>
              </ul>
            </div>
            <div class="xia3x">
              <h4>内容申明：</h4>
              <ul>
                <li>
                  <p>
                    淘宝为第三方交易平台及互联网信息服务提供者，淘宝（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。淘宝提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；淘宝存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向淘宝举报并提供有效线索。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dibu">
          <a href=""><img src="../assets/wangpu.png" /></a>
        </div>
      </div>

      <!-- 手机支付 -->
      <div class="phonePay">
        <span class="phone" @mouseover="qrcodeShow" @mouseout="qrcodeUnShow" :style="{background:phoneColor}">手机购买
          <img class="minQrcode" src="http://img.alicdn.com/tps/TB1_FJkOpXXXXXQXpXXXXXXXXXX-13-13.png" alt="">
          <img class="dir" :src="dirimg" alt="">
        </span>
        <!-- 二维码 -->
        <div class="phonePayQrcode" v-show="qrcodeflag" @mouseover="qrcodeWinIn" @mouseout="qrcodeWinOut">
          <img :src="searchAreaQrcode"  alt="qrcode" />
        </div>
      </div>
    </div>

    <!-- 侧边栏 -->
    <div id="Sidebar">
        <router-link to="/"><img src="https://gdp.alicdn.com/imgextra/i2/144183500/TB24x1gsmXlpuFjy0FeXXcJbFXa_!!144183500.jpg" alt="" /></router-link>
        <!-- 宝贝分类-->
        <div class="SidebarBox">
            <h3>
                <!-- :class="{'icon-test':!iconBox.p1,'icon-jian':iconBox.p1}" @click='iconClick' data-key='p1' -->
                <span class="iconfont icon-star"></span>
                <span>宝贝分类</span>
                <span class="iconfont icon-service"></span>
            </h3>
            <ul class="SidebarSort">
                <li class="allBady">
                    <div>
                        <span class="iconfont" :class="{'icon-test':!iconBox.p1,'icon-jian':iconBox.p1}" @click='iconClick' data-key='p1'></span>
                        <router-link to="/">查看所有宝贝</router-link>
                    </div>
                    <div v-show="iconBox.p1">
                        <router-link to="/">按销量</router-link>   
                        <router-link to="/">按新品</router-link>
                        <router-link to="/">按价格</router-link>
                        <router-link to="/">按收藏</router-link>
                    </div>
                </li>
                <li>
                    <span class="iconfont icon-dian"></span>
                    <router-link to="/">连衣裙</router-link>
                </li>
                <li class="wool">
                    <div>
                        <span class="iconfont" :class="{'icon-jian':iconBox.p2,'icon-test':!iconBox.p2}" @click='iconClick' data-key='p2'></span>
                        <router-link to="/">针织羊毛系列</router-link>
                    </div>
                    <ul class="SidebarSortList"  v-show="iconBox.p2">
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">羊绒</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">羊毛</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">兔绒</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">马海毛</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">开衫</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">套头罩衫</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="iconfont icon-dian"></span>
                    <router-link to="/">衬衫</router-link>
                </li>
                <li>
                    <span class="iconfont" :class="{'icon-jian':iconBox.p3,'icon-test':!iconBox.p3}" @click='iconClick' data-key='p3'></span>
                    <router-link to="/">裤装</router-link>
                    <ul class="SidebarSortList"  v-show="iconBox.p3">
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">休闲裤</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">打底裤</router-link>
                        </li>
                    </ul>
                </li>
                <li v-for="(val,index2) in leftList1" :key='index2+10'>
                    <span class="iconfont icon-dian"></span>
                    <router-link to="/">{{val}}</router-link>
                </li>
                <li>
                    <div>
                        <span class="iconfont" :class="{'icon-jian':iconBox.p4,'icon-test':!iconBox.p4}" @click='iconClick' data-key='p4'></span>
                        <router-link to="/">文胸内裤</router-link>
                    </div>
                    <ul class="SidebarSortList"  v-show="iconBox.p4">
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">文胸</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">内裤</router-link>
                        </li>
                    </ul>
                </li>
                <li v-for="(val,index1) in leftList2" :key='index1+1'>
                    <span class="iconfont icon-dian"></span>
                    <router-link to="/">{{val}}</router-link>
                </li>
                <li>
                    <div>
                        <span class="iconfont" :class="{'icon-jian':iconBox.p5,'icon-test':!iconBox.p5}" @click='iconClick' data-key='p5'></span>
                        <router-link to="/">套装</router-link>
                    </div>
                    <ul class="SidebarSortList"  v-show="iconBox.p5">
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">时尚套装</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">职业女裙套装</router-link>
                        </li>
                        <li>
                            <span class="iconfont icon-dakai"></span>
                            <router-link to="/">休闲运动套装</router-link>
                        </li>
                    </ul>
                </li>
                <li v-for="(val,index3) in leftList3" :key='index3+100'>
                    <span class="iconfont icon-dian"></span>
                    <router-link to="/">{{val}}</router-link>
                </li>
            </ul>
        </div>
        <!-- 客服中心-->
        <div class="serviceContent">
             <h3>
                 <span class="iconfont icon-star"></span>
                 <span>客服中心</span>
             </h3>
             <div class="workTime">
                <h4>工作时间</h4>
                <p>周一至周五：8:00-24:00</p>
                <p>周六至周日：8:00-24:00</p>
             </div>
             <span></span>
             <div class="onlineConsult">
                 <h4>在线咨询</h4>
                 <div>
                    <span>客服中心</span>
                    <router-link to="/">
                        <img src="https://amos.alicdn.com/online.aw?groupid=0&v=2&site=cntaobao&s=1&charset=utf-8&uid=gongzhu112008" alt="">
                    </router-link>
                 </div>
             </div>
        </div>
        <!-- 宝贝排行榜-->
        <div class="badyRanking">
             <h3>
                 <span class="iconfont icon-star"></span>
                 <span>宝贝排行榜</span>
             </h3>
             <div class="badyRankingTop">
                 <span @mouseover="RankingOver" data-id='Ranking1' :class="{spanBg:badyRanking1}">销售量</span>
                 <span @mouseover="RankingOver" data-id='Ranking2' :class="{spanBg:badyRanking2}">收藏量</span>
             </div>
             <!-- 收藏数列表-->
             <ul v-show="badyRanking1">
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i1/144183500/TB2aZfrblDH8KJjy1zeXXXjepXa_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>清新优雅桑蚕丝淡蓝</p>
                            <p>198.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>40172</span>
                                <span>笔</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i4/144183500/O1CN014jrlGW1bj2oWgOAu8_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>真丝缎面背心女2020</p>
                            <p>118.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>38986</span>
                                <span>笔</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i1/144183500/TB20FlygxSYBuNjSspjXXX73VXa_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>还有这么便宜的真</p>
                            <p>29.80</p>
                            <p>
                                <span>已收藏</span>
                                <span>30480</span>
                                <span>笔</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i1/144183500/O1CN01orFWy11bj2nkRBe53_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>丝丝入扣手工珠子扣</p>
                            <p>138.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>25416</span>
                                <span>笔</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i4/144183500/O1CN01RRcX8n1bj2p2SQJEv_!!144183500-0-lubanu-s.jpg_120x120.jpg" alt="">
                        <div>
                            <p>法国刺绣绉感桑蚕丝</p>
                            <p>198.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>24816</span>
                                <span>笔</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
             </ul>
            <!-- 销售数列表 -->
             <ul v-show="badyRanking2">
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i1/144183500/TB2aZfrblDH8KJjy1zeXXXjepXa_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>执着真丝 邮费专拍</p>
                            <p>￥1.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>545</span>
                                <span>件</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i4/144183500/O1CN014jrlGW1bj2oWgOAu8_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>一眼沉醉 美到无法呼</p>
                            <p>￥198.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>385</span>
                                <span>件</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i1/144183500/TB20FlygxSYBuNjSspjXXX73VXa_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>真丝缎面背心女2020</p>
                            <p>￥118.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>325</span>
                                <span>件</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i1/144183500/O1CN01orFWy11bj2nkRBe53_!!144183500.jpg_120x120.jpg" alt="">
                        <div>
                            <p>轻奢Lady囤三条！真</p>
                            <p>￥25.80</p>
                            <p>
                                <span>已收藏</span>
                                <span>233</span>
                                <span>件</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
                 <li>
                     <router-link to="/">
                        <img src="https://img.alicdn.com/bao/uploaded//i4/144183500/O1CN01RRcX8n1bj2p2SQJEv_!!144183500-0-lubanu-s.jpg_120x120.jpg" alt="">
                        <div>
                            <p>法国刺绣绉感桑蚕丝</p>
                            <p>198.00</p>
                            <p>
                                <span>已收藏</span>
                                <span>24816</span>
                                <span>件</span>
                            </p>
                        </div>
                    </router-link>
                 </li>
             </ul>
             <router-link to="/">查看更多宝贝</router-link>
        </div>
    </div>

    <!-- 移出屏幕显示区域事固定的导航栏 -->
    <div class="goodsNav" v-show="isGoodsNav" ref="goodsNav2">
      <div class="goodsNavSearch">
        <input type="text" placeholder="搜本店"/>
        <router-link to="/"><span><img  src="../assets/search.png" class="img" alt=""/></span></router-link>
      </div>
      <ul class="goodsDetails" @click.stop='goodsContentClick' >
        <li :class="{goodsActive:goodsInfo.isGoodsActive1}" id="xq"  ><p>宝贝详情</p></li>
        <li :class="{goodsActive:goodsInfo.isGoodsActive2}" id="pl" ><p>累计评论<span>132</span></p></li>
        <li :class="{goodsActive:goodsInfo.isGoodsActive3}" id="zx"  ><p>专享服务</p></li>
      </ul>
      <div :class="{goodsDetailsCon:goodsInfo.isGoodsActive1}"></div>
      <div :class="{goodsCommentsCon:goodsInfo.isGoodsActive2}"></div>
      <div :class="{goodsServerCon:goodsInfo.isGoodsActive3}"></div>
      <div class="phonePay ">
        <span class="phone" @mouseover="qrcodeShow" @mouseout="qrcodeUnShow" :style="{background:phoneColor}">手机购买
          <img class="minQrcode" src="http://img.alicdn.com/tps/TB1_FJkOpXXXXXQXpXXXXXXXXXX-13-13.png" alt="">
          <img class="dir" :src="dirimg" alt="">
        </span>
        <div class="phonePayQrcode" v-show="qrcodeflag" @mouseover="qrcodeWinIn" @mouseout="qrcodeWinOut">
          <img :src="searchAreaQrcode"  alt="qrcode" />
        </div>
      </div>
    </div>
        </div>
    </div>
</template>
<script>
import QRCode from "qrcode";

export default {
    data(){
        return{
            //搜索栏数据
            moreselect1:false,
            showdown:true,
            showdown1:false,
            RFNshow:{
              show1:false,
              show2:false,
              show3:false,
              show4:false,
            },
            T1:null,
            T2:null,
            //商品图片价格栏等数据
            activeNum:0,
            selectColor:1,
            selectSize:1,
            selectNum:1,
            maxNum:10,
            selectFenqi:0,
            playVidio:true,
            vidiot1:null,
            imgsrc:[
                {isrc:"https://img.alicdn.com/imgextra/i1/144183500/O1CN01OZzf7v1bj2piYtxXJ_!!144183500.jpg"},
                {isrc:"https://img.alicdn.com/imgextra/i2/144183500/O1CN01lyY6fA1bj2piPu088_!!144183500.jpg"},
                {isrc:"https://img.alicdn.com/imgextra/i4/144183500/O1CN01maHcXq1bj2plC0UhP_!!144183500.jpg"},
                {isrc:"https://img.alicdn.com/imgextra/i2/144183500/O1CN013fH7GQ1bj2pmt8iWk_!!144183500.jpg"},
                {isrc:"https://img.alicdn.com/imgextra/i3/144183500/O1CN0143qnEA1bj2pZxJiiz_!!144183500.jpg"},
            ],
            // 导航栏数据
            searchAreaQrcode: "",
            qrcodeflag:false,
            qrcodeTime:null,
            phoneColor:'',
            dirimg:require('../assets/xia.png'),
           
            goodsInfo:{
              isGoodsActive1:true,
              isGoodsActive2:false,
              isGoodsActive3:false,
            },
            
            left:0,
            isGoodsNav:false,

            // 侧边栏数据
            badyRanking1:true,
            badyRanking2:false,
            iconBox:{
                p1:true,
                p2:false,
                p3:false,
                p4:false,
                p5:false,
            },
            leftList1:['T恤','半身裙','背心/吊带','香云纱','丝绵/绢丝 清仓款','会员专区','毛衣清仓',
              '毛呢外套','毛衣','短外套','卫衣/绒衫','风衣','性价比真丝','毛针织衫','围巾/丝巾'],

            leftList2:['外套/披肩','真丝针织','睡裙/衬裙','羽绒服'],

            leftList3:['针织内裤吊带文胸','毛衣gj','新势7区','新势力新品','9.9划算节新品折扣区',
                    '9.9划算节2件8折,3件7折专区','2.3.GM','新品羊毛单件9折2件8折专区','新势力半价款式',
                    '新势力真丝2件8折,3件7折区','新势力新品单件9.5折区'],

            err: "&nbsp;",

            // 评论数据
            list:[
              {
              name:"t***1", 
              content:"这款衣服太喜欢了，又帮嫂子买一件。大V领简约大气，舒服、把脸能视觉效果上拉长一些、配项链也出彩。是真香云纱，上身滑、润、凉、爽，穿上肩膀看上去薄而窄，非常非常显瘦、藏肚子。谢谢商家。多出此款，有其它花我还要买！买！买。（我超级喜欢这种大V领）",
              data:"2020年09月26日 19:12颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
              src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"t***1",
                content:"整体评价：超级好！值得购买，领子好看舒服大气。材质滑、润、凉、爽，色彩高贵，裙子穿上特别显瘦。是我淘到最喜欢的一款。",
                data:"2020年09月26日 19:20颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"陈***8",
                content:"真是高大上，很好 ，穿着真舒服，就是有点小小色差，不过也好看。好评",
                data:"2020年09月14日 20:46颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"s***碟",
                content:"棒棒的 有档次",
                data:"2020年09月02日 18:21颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"陈***2",
                content:"质量很好",
                data:"2020年09月04日 19:24颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"陈***3",
                content:"显肤白，合适",
                data:"2020年08月12日 15:30颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"t***6",
                content:"裙子非常好看，性价比非常高",
                data:"2020年08月11日 14:22颜色分类：棕黄印花V领香云纱  尺码：165/88B(L)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"韩***妹",
                content:"布料乃真香云纱，款式大方休闲，颜色艳丽，具有皇家风范！花色古朴典雅！我之前买过的香云纱裙都颜色偏暗显老气，直到遇到此裙眼前一亮，果渐下手，收到货后更加欣喜，有一条带花的细腰带点缀既显身材又起到画龙点睛的作用！还会观顾此店，己买过好几次这家的衣服了！",
                data:"2020年07月07日 21:33颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"龚***3",
                content:"衣服面料做工都还行，就是色差太大，简直让人怀疑是否发错货了，懒得折腾了",
                data:"2020年08月30日 16:12颜色分类：棕黄印花V领香云纱  尺码：165/88B(L)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"吴***9(匿名)",
                content:"面料薄了一些，做工还行，颜色还算可以，退货麻烦，不打算再关注了",
                data:"2020年08月29日 23:22颜色分类：棕黄印花V领香云纱  尺码：165/88B(L)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"a***e",
                content:"描述如实，非常中意。选错了型号，店家解决给换大号。花型面料都是杠杠的。喜欢咯！好评哦！",
                data:"2020年07月16日 18:12颜色分类：棕黄印花V领香云纱  尺码：160/84B(M)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"1***奶",
                content:"宝贝与描述的一致，颜色比图片的暗些，却是我喜欢的。面料是纯真丝的，图案华丽富贵，非常喜欢。 对客服小闵非常满意，服务周到，耐心细致，对所提问题一一解答，赞👍。还要说的是，发货迅速，是当天，而不是15天内。",
                data:"2020年07月19日 15:47颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"i***1",
                content:"大爱香云纱！面料不错，款式喜欢，大小合适，漂亮!",
                data:"2020年08月03日 18:25颜色分类：棕黄印花V领香云纱  尺码：170/92B(XL)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"宫***8",
                content:"整体评价：挺好 面料材质：舒适 版型风格：修身",
                data:"2020年08月01日 21:51颜色分类：棕黄印花V领香云纱  尺码：160/84B(M)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"t***1",
                content:"买给姐姐穿的，走秀也很好看。",
                data:"2020年07月21日 10:18颜色分类：棕黄印花V领香云纱  尺码：160/84B(M)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"l***8",
                content:"腰带设计太好了",
                data:"2020年07月17日 20:06颜色分类：棕黄印花V领香云纱  尺码：160/84B(M)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"静***1",
                content:"很漂亮，面料也很好，样式也很好看，确定是香云纱",
                data:"2020年06月23日 06:35颜色分类：棕黄印花V领香云纱  尺码：165/88B(L)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"w***0",
                content:"很舒服凉爽，是香云纱，颜色款式都喜欢。",
                data:"2020年06月30日 06:04颜色分类：棕黄印花V领香云纱  尺码：160/84B(M)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"q***9",
                content:"买了几件她加的衣服了",
                data:"2020年06月23日 22:33颜色分类：棕黄印花V领香云纱  尺码：160/84B(M)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              },
              {
                name:"仅***8",
                content:"习惯好评，一般般吧，我收到的衣服Ⅴ字领的一边是半朵大红花的，所以感觉怪怪的，另外与图片色差也很大，沒有图片显靓，因为手快剪了标牌，不能退了。",
                data:"2020年08月02日 16:37颜色分类：棕黄印花V领香云纱  尺码：165/88B(L)",
                src: this.dirimg=require('../assets/touxiang1.jpg')
              }, 
          ],
        
            goodsDetailData:{},
        }
    },
    methods:{
      // 购买商品按键
      buyBtnsClick(ev){
        let target = null
        if('IMG' == ev.target.nodeName){
          target = ev.target.parentNode
        }else if('BUTTON' == ev.target.nodeName){
          target = ev.target
        }
        // 添加到购物车
        if(target && 'addCart' === target.id){
          // 检查当前登录用户
          // console.log( this.$store.state.UserInfo.info.username  )

          if( ! this.$store.state.UserInfo.info.username){
            this.$router.push('/login')
            reutrn
          }

          // 跳转到购物车页面
          let param =  JSON.stringify({
            num:this.selectNum,
            id:this.goodsDetailData.id
          })
          param =  encodeURI(param)
          this.$router.push({name:'Cart',params:{goodsInfo: param}})
        }

      },
      // 获取商品详情
      getGoodsDetail(){
         this.$ajax({
           method:'post',
           url:this.$url+'/db',
           data:{
             flag:'findById',
             id:this.$route.params.id
           }
         }).then(res=>{
          //  console.log( res )
           this.goodsDetailData = res
         }).catch(err=>{
          //  console.log( err )
         })
      },
      // 回到顶部栏
      gotoTop(){
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth' //平滑过渡
        })
      },
      /* ****************搜索栏方法END******************************************** */
      mygoodsmouseover(ev){
          if(this.T1){
          clearTimeout(this.T1)
        }
          if(ev.target.nodeName=='SPAN'){
            this.moreselect1=true
          }
      },

      mygoodsmouseout(ev){
     setTimeout(()=>{
      this.showdown1 =true
      this.showdown = false
     },100)
       if(ev.target.nodeName=='SPAN'){
        this.T1= setTimeout(()=>{
            this.moreselect1=false
         },200)
        }
    },

      mygoodsmouseover1(ev){
      if(this.T1){
        clearTimeout(this.T1)
      }
      if(ev.target.nodeName=='A'){
          this.moreselect1=true
        }
    },

      mygoodsmouseout1(ev){
       if(ev.target.nodeName=='UL'||ev.target.nodeName=='LI'){
        this.showdown1 =false
        this.showdown = true
     }
        this.T1= setTimeout(()=>{
            this.moreselect1=false
         },200)
    },

      rFNomouseover(ev){
      if(this.T2 &&ev.target.dataset.key){
        clearTimeout(this.T2)
      }
      if(ev.target.nodeName=='A'){
         this.RFNshow={
        show1:false,
        show2:false,
        show3:false,
        show4:false,
      }
      this.RFNshow[ev.target.dataset.key] = true
      }
    },

      rFNomouseout(ev){
     this.T2 = setTimeout(() => {
       this.RFNshow[ev.target.dataset.key] = false
      }, 200);
    },

      rFNomouseover1(ev){
       if(this.T2){
        clearTimeout(this.T2)
      }
      this.RFNshow[ev.target.dataset.key] = true
    },

      rFNomouseout1(ev){
      this.RFNshow[ev.target.dataset.key] = false
    },
  /* ****************搜索栏方法END******************************************** */

  /* ****************商品图片价格等事方法START*********************************** */
      selectPic(ev){
            if(ev.target.dataset.picnum){
              this.activeNum = ev.target.dataset.picnum
            }
        },
      sizeClick(ev){
            if(ev.target.dataset.sizenum){
              this.selectSize = ev.target.dataset.sizenum
            }
        },
      colorClick(ev){
            if(ev.target.dataset.colornum){
              this.selectColor = ev.target.dataset.colornum
            }
        },
      deClick(){
            if(this.selectNum > 0){
              this.selectNum -= 1
            }
        },
      addClick(){
            if(this.selectNum <10){
              this.selectNum += 1
            }
        },
      fenqiClick(ev){
            if(ev.target){
              this.selectFenqi = ev.target.dataset.fenqinum
            }
        },
      vidioClick(){
      if(this.vidiot1){
        clearTimeout(this.vidiot1)
      }
      this.playVidio =true
    },
      stopVidio(){
          this.vidiot1 = setTimeout(()=>{
            this.playVidio = true
          },400)
        },
      vidioStart(){
          if(this.vidiot1){
            clearTimeout(this.vidiot1)
          }
        },
      vidioEnd(){
          this.vidiot1 = setTimeout(()=>{
            this.playVidio = true
          },400)
        },
    /* ****************商品图片价格等方法END************************************* */

    /* ****************导航栏方法START************************************* */ 
      qrcodeShow(){
      this.dirimg=require('../assets/shang.png');
      this.phoneColor='#e5e5e5';
      if(this.qrcodeTime){
        clearTimeout(this.qrcodeTime)
      }
      this.qrcodeflag=true;
    },

      qrcodeUnShow(){
      this.dirimg=require('../assets/xia.png');
      this.phoneColor='';
      this.qrcodeTime = setTimeout( () =>{
        this.qrcodeflag=false;
      },200)
    },

      qrcodeWinIn(){
      this.phoneColor='#e5e5e5';
      if(this.qrcodeTime){
        clearTimeout(this.qrcodeTime)
      }
      this.qrcodeflag=true;
    },

      qrcodeWinOut(){
      this.phoneColor='';
      this.qrcodeTime = setTimeout( () =>{
        this.qrcodeflag=false;
      },200)
    },

    goodsContentClick(ev){
      let target = null
      if('LI' == ev.target.nodeName){
          target = ev.target

      }else if('P' == ev.target.nodeName){
        target = ev.target.parentNode
      }
      if(target){
        this.goodsInfo = {
          isGoodsActive1:false,
          isGoodsActive2:false,
          isGoodsActive3:false,
        }
        switch (target.id) {
          case 'xq':  
            this.goodsInfo.isGoodsActive1 = true
            break;
          case 'pl':
            this.goodsInfo.isGoodsActive2 = true
             break;
          case 'zx':
            this.goodsInfo.isGoodsActive3 = true
             break;
        }
        let top = this.$element.getTop(target)
        if(top<10){
          return
        }
        window.scroll({
          top:top,
          left:0
        })


      }

    },

      goodsNavScroll(){

        this.left= this.$refs.goodsNav.getBoundingClientRect().left;
        if(this.$refs.goodsNav.getBoundingClientRect().top<0){
          // console.log(this.$refs.goodsNav.getBoundingClientRect().top)
          this.isGoodsNav=true;
          this.$refs.goodsNav2.style.position = 'fixed';
          this.$refs.goodsNav2.style.top = 0;
          this.$refs.goodsNav2.style.left = this.left;
        }
        if(this.$refs.goodsNav.getBoundingClientRect().top>0){
          // console.log(this.$refs.goodsNav.getBoundingClientRect().top)
          this.$refs.goodsNav2.style.position = 'relative';
          this.isGoodsNav = false
        }
        
      },
    /* ****************导航栏方法END************************************* */ 

    /* ****************侧边栏方法START************************************* */ 
      iconClick(ev){
            let name=ev.target.dataset.key
            this.iconBox[name] = !this.iconBox[name]
        },
      RankingOver(ev){
        let name = ev.target.dataset.id 
        // console.log(ev.target.nodeName)
        // console.log(name)
        if('Ranking1' == name){
            if(!this.badyRanking1){
                this.badyRanking2 = false
                this.badyRanking1 = true
                return
            }
            return
        }
        if('Ranking2' == name){
            if(!this.badyRanking2){
                this.badyRanking1 = false
                this.badyRanking2 = true
                return
            }
            return
        }
    }
    /* ****************侧边栏方法END************************************* */ 
  },
    created(){
      console.clear()
      console.log( this.$store.state.UserInfo.info.cart )
      //  获取商品详情
      this.getGoodsDetail()
      window.addEventListener('scroll',this.goodsNavScroll);

      QRCode.toDataURL("https://timeitself.cn/ti/#/blog", {
        width: 147,
        margin: 0,
        color: {
          dark: "#000000",
        },
      })
        .then((url) => {
          this.searchAreaQrcode = url;
        })
        .catch((err) => {
        console.error(err);
      });
  },
  beforeDestroy(){
      window.removeEventListener('scroll',this.goodsNavScroll);
  },
      
}
</script>
<style  lang="less" scoped>
@import url("//at.alicdn.com/t/font_2136389_czhh5n1eam.css");

/************************搜索栏，店铺广告栏START**********************************/ 
.bg{
  background: #fff;
}
.rightFixedNavbar .rFNZcontent .wwpart .wwpartGWC span.color{
  color: #f40;
}
a{
  text-decoration: none;
}
  .qGoodsDetails{
    height:60px;
    padding-top:10px;
    .GoodsLogoGrounp{
      display: flex;
      justify-content: space-between;
      width:1140px;
      height:60px;
      margin:0 auto;
      box-sizing: border-box;
      .logoPart{
        // position: relative;
        display: flex;
        justify-content: space-between;
        a{
            img{
              width: 96px;
              height:38px;
              margin-top: 5px;
            }
        }
       
       >span{
          cursor: pointer;
         align-items: center;
         display: flex;
         width: 72px;
         height: 20px;
         box-sizing: border-box;
         padding-left: 8px;
         font-size: 12px;
         color:#666;
         border: 1px solid #e2e2e2;
         background: #fff;
         margin: 14px 20px;
          &:hover .rotate{
            transform: rotate(180deg);
          }
          &:hover{
         border-bottom: 1px solid #fff;

          }

          .rotate{
            width: 8px;
            height: 8px;
            margin-left: 2px;
            transition:transform 1.5s;
          }
          .rotate1{
             transform: rotate(180deg);
            transition:transform 200ms;
          }

           ul{
         background: #fff;
         position: absolute;
         width: 290px;
         top: 79px;
         left: 498px;
         border: 1px solid #eee;
         li{
           display: flex;
             height: 28px;
             border-top: 1px solid rrgba(224, 218, 218, 0);
             border-bottom: 1px solid rrgba(224, 218, 218, 0);
             padding-left: 10px;
             &:first-child{
               z-index: 1000;
               position: relative;
             }
             &:first-child::before{
                content: '';
                display: block;
                width: 72px;
                height: 1px;
                background: #fff;
                position: absolute;
                top: -1px;
                left:1px;
             }
             &:hover{
               background: #eee;
                border-top: 1px solid rrgb(224, 218, 218);
                border-bottom: 1px solid rrgb(224, 218, 218);
             }
           a{
             text-align: center;
             line-height: 28px;
             height: 28px;
             margin: 0px 4px;
             font-size: 12px;
             color: #666;
             &:hover{
               text-decoration: underline;
             }
             &:first-child{
               font-weight: bold;
             }
           }
         }
       }
        }

      
      }

      .searchpart{
        display: flex;
        align-items: center;
        .searchgrounp{
          display: inline-block;
          overflow: hidden;
          border: 2px solid #f40;
          height: 26px;
          input{
            width: 279px;
            height: 26px;
            box-sizing: border-box;
            outline: none;
            border: none;
            text-indent: 10px;
          }
          >a{
            text-align: center;
            line-height: 26px;
            display: inline-block;
            text-decoration: none;
            width: 72px;
            height:26px;
            box-sizing: border-box;
            padding: 0px;
            margin: 0;
            background: #f40;
            color: #fff;
            font-size: 12px;
            border: none;
            outline: none;
            &:hover{
              cursor: pointer;
              background: #f22b00;
            }
          }

        }

        >a{
          text-align: center;
          line-height: 30px;
          text-decoration: none;
          width:72px;
          height:30px;
          border: 1px solid #ffb086;
          padding: 0;
          background: #ffe4d0;
          font-size: 12px;
          color:#f40;
          margin-left: 3px;
          outline: none;
          &:hover{
            background: #ffd9b3;
            cursor: pointer;
          }
        }


      }
    }
}

  .aderTisement{
    background: url(../assets/aderTisement.jpg) no-repeat center center;
    .aderTisementbox{
        width: 1140px;
        height:150px;
        margin:0 auto ;
        .aderTisementLogo{
          width: 950px;
          height:150px;
          margin: 0 auto;
          background: url(../assets/aderTisement1.jpg);
          .guanzhuGroup{
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            height: 90px;
            a{
              margin:0 3px;
              &:first-child{
                width: 72px;
                height:27px;
              }

               &:nth-child(2){
                width: 95px;
                height:32px;
              }

               &:last-child{
                width: 82px;
                height:28px;
              }
            }
          }

          .guanzhubottom{
            display: flex;
            align-items: flex-end;
            height: 60px;
            a{
                flex-grow: 1;
                width:36px;
                height:30px;
                margin-bottom: 6px;

                &:nth-child(2){
                  width:66px;
                  height:23px;
                }

                &:nth-child(6){
                  width:60px;
                  height:26px;
                }

                &:nth-child(9){
                  width:50px;
                  height:27px;
                }

                 &:nth-child(10){
                  width:60px;
                  height:28px;
                }

                &:nth-child(11){
                  width:70px;
                  height:25px;
                }

                 &:nth-child(12){
                  width:72px;
                  height:30px;
                }

                 &:nth-child(14){
                  width:86px;
                  height:26px;
                }

                 &:nth-child(15){
                  width:53px;
                  height:21px;
                }

            }
          }
        }
      }
  }

  .rightFixedNavbar{
    width: 35px;
    min-width: 35px;
    height: 100%;
    position: fixed;
    right: 0px;
    top: 0px;
    background:#eee;

    .rFNZhanwei{
      height: 243px;
    }

    .rFNZcontent{
      width: 35px;
      display: flex;
      height: 100%;
      flex-direction: column;
      .wwpart{
        position: relative;
        display: flex;
        flex-direction: column;
        .wwpartWW{
          position: relative;
          height: 46px;
          width: 34px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left:1px solid #eee;
            img{
              width: 26px;
              height:31px;
            }
            .RFNwindow1{
              position: absolute;
              top: 9px;
              left: -83px;
              text-align: center;
              line-height: 30px;
              background: #f40;
              color: #fff;
              width: 82px;
              height: 30px;
              font-size: 12px;
            }
        }

        .wwpartGWC{
          box-sizing: border-box;
          position: relative;
          width:34px;
          height: 105px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          border-left:1px solid #eee;

           img{
              width: 20px;
              height:25px;
              margin-bottom: 6px;
            }
            span{
              width: 20px;
              text-align: center;
              font-size: 12px;
              color:#666;
              margin-bottom:6px;
              &:nth-child(3){
                border-radius: 100%;
                background: #f40;
                color: #fff;
              }
            }
        }
        .RFNwindow2{
            text-align: center;
            line-height: 30px;
            background: #f40;
            color: #fff;
            position: absolute;
            top: 58px;
            left: -83px;
            background: red;
            width: 82px;
            height: 30px;
            font-size: 12px;
          }
      
      }

      .fankuipart{
        height: 100%;
        display: flex;
        padding-bottom: 286px;
        flex-direction: column;
        justify-content:flex-end;
        .fankui{
          position: relative;
          width: 34px;
          height:46px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left:1px solid #eee;

          img{
              width: 18px;
              height:16px;
          }
        .RFNwindow3{
              text-align: center;
              line-height: 30px;
              background: #f40;
              color: #fff;
              position: absolute;
              top: 9px;
              left: -83px;
              background: red;
              width: 82px;
              height: 30px;
              font-size: 12px;
            }
        }

          .fanhui{
            position: relative;
          width: 34px;
          height:46px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left:1px solid #eee;

          img{
              width: 17px;
              height:20px;
          }

             .RFNwindow4{
              text-align: center;
              line-height: 30px;
              background: #f40;
              color: #fff;
              position: absolute;
              top: 9px;
              left: -83px;
              font-size: 12px;
              background: red;
              width: 82px;
              height: 30px;
            }
        }


      }

     
    }
  }
/* *************************搜索栏，店铺广告栏END***************************** */


/* **************************商品图片价格简介等、店铺信息START******************* */
.goodsIntro{
    width: 1140px;
    height: 598px;
    border: 1px solid rgb(223, 222, 222);
    margin: 20px auto;
    display: flex;
    .goodPic{
        width: 420px;
        height: 549px;
        padding: 20px 0 20px 20px;
        >a{
            display: block;
            width: 400px;
            height: 400px;
            text-align: center;
            >img{
                width: 300px;
                height: 400px;
                margin: 0 auto;
            }
        }
        .picList{
        display: flex;
        position: relative;
          .vidioplay{
              width: 400px;
              height: 400px;
              background-color: rgb(233, 233, 233) ;
              position: absolute;
              top: -400px;
          }
          a{
              display: block;
              width:48px;
              height: 50px;
              margin-right: 5px;
              padding: 0 5px;
              text-align: center;
              border: 2px solid rgba(255, 68, 0, 0);
              margin-top: 10px;
              img{
                  width: 38px;
                  height: 50px;
              }
               &:hover{
                  border: 2px solid orangered;
              }
          }
        }
        .collectGoods{
          margin-top: 20px;
          display: flex;
          align-items: center;
          a{
            color: #666;
          }
          .iconshoucang{
            color: orange;
            margin-right: 6px;
          }
        }
    }
    .goodPrice{
        width: 480px;
        padding: 20px 0;
        >h3{
            font-size: 16px;
            color:#3C3C3C
        }
        >.price{
            width: 480px;
            height: 45px;
            background-color: #FFF2EB;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 0 10px;
            margin-top: 16px;
            >h2{
                font-size: 24px;
                color: #F40;
                margin-left: 30px;
            }
            .comment{
                margin-left: 180px;
                display: flex;
                padding-right: 10px;
                flex-direction: column;
                font-size: 0;
                text-align: center;
                border-right: 1px solid #fae1d3;
                >a{
                    font-size: 18px;
                    color: #3C3C3C;
                    &:hover{
                        color: #F40;
                    }
                }
                >span{
                    font-size: 12px;
                }
            }
            .trade{
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                font-size: 0;
                text-align: center;
                >span{
                    &:first-child{
                        font-size: 18px;
                    }
                    font-size: 12px;
                }
            }
        }
        >.discount{
            width: 100%;
            height: 35px;
            background-color: #FFF9F5;
            display: flex;
            align-items: center;
            >span{
                margin-left: 10px;
            }
            >div{
                margin-left: 30px;
                font-size: 0;
                display: flex;
                >img{
                    display: inline-block;
                    width: 18px;
                }
                >span{
                    font-size: 12px;
                }
            }
        }
        .sendAddress{
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        span{
            margin-left: 10px;
        }
        >div{
            margin-left: 30px;
        }
        }
        .goodSize{
        height: 40px;
        display: flex;
        margin-left: 10px;
        padding-top: 10px;
        border-top: 1px dotted rgb(209, 209, 209);
        .sizeList{
            display: flex;
            margin-left: 3em;
            li{
                display: block;
                border: 1px solid rgb(206, 205, 205);
                margin-right: 14px;
                height: 2em;
                padding: 0 5px;
                line-height: 2em;
                cursor: pointer;
            }
            .sizeActive{
                border: 1px solid #F40;
            }
        }
        }
        .goodColor{
        display: flex;
        >span{
            margin-left: 10px;
        }
        >.colorList{
            display: flex;
            img{
                width: 36px;
                height: 36px;
                margin-left: 1em;
                border: 1px solid rgb(209, 209, 209);
                cursor: pointer;
            }
            .colorActive{
                border:1px solid #F40; 
            }
        }
        }
        .goodNum{
        display: flex;
        margin: 10px 10px;
        .inputNum{
            margin-left: 3em;
            display: flex;
            align-items: center;
            >button{
                padding: 0 5px;
                border: 1px solid  rgb(209, 209, 209);
                width: 28px;
                height: 28px;
                font-size: 18px;
                background-color: rgb(241, 240, 240);
                cursor: pointer;
            }
            >span{
                display: inline-block;
                text-align: center;
                width: 40px;
                height: 28px;
                line-height: 28px;
                box-sizing: border-box;
                border-top: 1px solid  rgb(209, 209, 209);
                border-bottom: 1px solid  rgb(209, 209, 209);
            }
            >p{
                margin-left: 10px;
            }
        }
        }
        .huabeiStage{
            display: flex;
            margin-left: 10px;
            >ul{
                display: flex;
                margin-left: 1em;
                >li{
                    margin-right: 10px;
                    border: 1px solid  rgb(209, 209, 209);
                    padding: 3px 4px;
                    text-align: center;
                    cursor: pointer;
                }
                .fenqiActive{
                    color:  #F40;
                    border: 1px solid #F40;
                }
            }
        }
        .buyBtns{
            margin-left: 10px;
            margin-top: 40px;
            display: flex;
            #fenqiBuy{
                width: 136px;
                height: 40px;
                background-color: #FFe4D0;
                color: #E5511D;
                font-size: 16px;
                border: 1px solid  #fadbc3;
                border-radius: 2px;
                margin-right: 10px;
                cursor: pointer;
                &:hover{
                    background-color: #f1d4be;
                }
            }
            #addCart{
                width: 182px;
                height: 40px;
                background-color: #F40;
                color: #fff;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 2px;
                cursor: pointer;
                img{
                    display: inline-block;
                    width: 16px;
                    margin-right: 10px;
                }
                &:hover{
                    background-color: rgb(224, 64, 5);
                }
            }
        }
        .buyPromise{
          margin-left: 10px;
          margin-top: 30px;
          display: flex;
          align-items: center;
          .icontian{
            margin-left: 30px;
            margin-right: 6px;
            color: rgb(73, 230, 133);
          }
        }
        .buyPay{
          margin-left: 10px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          >ul{
            display: flex;
            margin-left: 30px;
            li{
              display: flex;
              align-items: center;
            }
            .iconhuabei{
              color: rgb(116, 186, 243);
              margin-right: 6px;
            }
            .iconxinyongka{
              color: orange;
              margin-left: 18px;
              margin-right: 6px;
            }
            .iconjifenbao{
              color: rgb(26, 180, 90);
              margin-left: 18px;
              margin-right: 6px;
            }
          }
        }
    }
    .shopIntro{
        width: 200px;
        margin-left: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        >.shoptop{
          height: 333px;
          border: 1px solid rgb(247, 212, 100);
          .tophead{
            border-bottom: 1px solid rgb(247, 212, 100);
             >div{
            font-size: 14px;
            width: 90px;
            height: 30px;
            margin: 0 auto;
            border-top: 1px solid rgb(247, 212, 100);
            line-height: 30px;
            span:first-child{
                color: orange;
            }
            color: #E26204;
            }
          }
          .shopInfo{
            >ul{
              height:100px;
              padding: 20px;
              .impokey{
                color: #3C3C3C;
                font-weight: 600;
              }
              .iconV{
                color: #f0c654;
                font-size: 16px;
              }
              .iconaliwangwang{
                color: rgb(90, 196, 238);
              }
              .iconzizhi{
                color: rgb(96, 150, 172);
              }
              .contact{
                font-size: 12px;
                font-weight: 400;
                color: orange;  
              }
              .money{
                display: inline-block;
                margin-left: 3px;
                color: rgb(103, 185, 103);
              }
            }
          }
          .shopMark{
            >ul{
              display: flex;
              width: 168px;
              margin: 0 auto;
              border-top: 1px dotted rgb(211, 211, 211);
              padding-top: 10px;
              justify-content: space-around;
              >li{
                border-right: 1px dotted rgb(211, 211, 211);
                padding: 0 10px;
                &:last-child{
                  border: none;
                }
                .describe{
                  color: #00BA97;
                }
                .service,.logistic{
                  color: #F40;
                }
              }
            }
          }
          .option{
            display: block;
            margin-left: 20px;
            margin-top: 10px;
            >button{
              height: 30px;
              width: 76px;
              background-color: #FAFAFA;
              border: 1px solid rgb(219, 219, 219);
              color: #3C3C3C;
              cursor: pointer;
              &:last-child{
                margin-left: 6px;
              }
            }
          }
        }
        >.shopAdvertise{
          border-left: 1px solid  rgb(233, 233, 233);
          flex-grow: 1;
          padding: 17px 12px 0 15px;
          >h3{
            font-size: 12px;
          }
          ul>{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            >li{
              margin-top: 8px;
              text-align: center;
              img{
                 border: 1px solid rgba(255, 68, 0, 0);
                &:hover{
                   border: 1px solid #F40;
                }
              }
              p{
                color: #F40;
              }
            }
          }
        }

    }
    
}
/* **************************商品图片价格简介等、店铺信息END*************************** */

/* **************************导航栏样式START******************* */
  .goodsShow{
    width: 1140px;
    // height: 3000px;
    margin: 0 auto;
    .goodsNav{
      position: relative;
      display: flex;
      .goodsNavSearch{
        width: 190px;
        height: 44px;
        background: #F4F4F4;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #E5E5E5;
        border-right: none;
        input{
            width: 135px;
            height:24px;
            border: 1px solid #C5C5C5;
            border-right: none;
            font-size: 12px;
            color: #666;
            text-indent: 1em;
        }
        a{
            width: 30px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            background: #ff4400;;
            span{
              height: 100%;
              color: #fff;
              display:flex;
              align-items: center;
              justify-content: center;
              img{
                width: 16px;
                height: auto;
              }
            }
        }
    }

    .goodsDetails{
        display: flex;
        height: 46px;
        background: #f6f6f6;
        font-size: 14px;
        .goodsActive{
          border-top: 2px solid #f40;
          border-bottom: none;
          background: white;
          p{
            color: #f40;
          }
        }
        li{
          padding: 0 10px;
          text-align: center;
          min-width: 110px;
          height: 44px;
          line-height: 16px;
          border: 1px solid #E5E5E5;
          border-right: none;
          // margin-top: -1px;
          p{
            height: 44px;
            display: block;
            padding: 0;
            color: #3C3C3C;
            outline: 0;
            line-height: 44px;
            font-size: 14px;

          }
          span{
            font-weight: 700;
            color: #f40;
            margin-left: 5px;
          }
        }
    }

    .goodsDetailsCon{
      width: 760px;
      position: absolute;
      top: 46px;
      left: 192px;
    }
    .goodsCommentsCon{
      width: 760px;
      position: absolute;
      top: 46px;
      left: 192px;
            .xia {
        // background-color: #eeeeee50;
        margin: 50px 0 30px;
        .xia1 {
          height: 229px;
          h3 {
            font-size: 16px;
            border-bottom: 1px solid #eeeeee;
            margin-bottom: 15px;
          }
          ul {
            font-size: 12px;
            color: #666;
            li {
              margin-bottom: 15px;
              p {
                margin: 0;
                span {
                  color: #333;
                  font-weight: 600;
                }
                &:nth-child(1) {
                  color: #fe702f;
                }
              }
            }
          }
        }
        .xia2 {
          height: 278px;
          margin-bottom: 20px;
          .xia2s {
            display: flex;
            align-items: center;
            font-size: 12px;
            h3 {
              flex-grow: 1;
              font-size: 16px;
              border-left: 5px solid #fe7e01;
              padding-left: 7px;
            }
            span {
              padding: 0 5px;
            }
            div {
              width: 16px;
              height: 14px;
              cursor: pointer;
            }
            .zuo {
              background: url(../assets/fx1.gif) no-repeat 0 -14px;
            }
            .you {
              background: url(../assets/fx2.gif) no-repeat 0 -14px;
            }
          }
          .xia2x {
            font-size: 12px;
            ul {
              display: flex;
              li {
                width: 172px;
                height: 220px;
                margin: 15px 8px 20px;
                a {
                  display: block;
                  img {
                    border: 1px solid #ccc;
                  }
                }
                p {
                  width: 160px;
                  margin: 0;
                  padding: 4px 0;
                  b {
                    color: #999;
                    margin-right: 2px;
                  }
                  strong {
                    color: #ff2900;
                    margin-right: 2px;
                  }
                }
              }
            }
          }
        }
        .xia3 {
          height: 214px;
          font-size: 12px;
          border: 1px solid #ffc7b2;
          background-color: #fffbf1;
          padding: 10px;
          line-height: 2;
          p {
            margin: 0;
          }
          h4 {
            flex-grow: 1;
          }
          .xia3s {
            display: flex;
            ul {
              width: 663px;
              margin-bottom: 20px;
              li {
                p {
                  &:nth-child(1) {
                    span {
                      color: #f40;
                    }
                  }
                  &:nth-child(2) {
                    span {
                      margin-right: 10px;
                      img {
                        vertical-align: middle;
                        margin-right: 3px;
                        a:hover {
                          text-decoration-line: underline;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .xia3x {
            display: flex;
            ul {
              width: 663px;
            }
          }
        }
      }
      .dibu {
        display: flex;
        justify-content: center;
      }
    }
    .goodsServerCon{
      width: 760px;
      position: absolute;
      top: 46px;
      left: 192px;
      .xia {
        // background-color: #eeeeee50;
        margin: 50px 0 30px;
        .xia1 {
          height: 229px;
          h3 {
            font-size: 16px;
            border-bottom: 1px solid #eeeeee;
            margin-bottom: 15px;
          }
          ul {
            font-size: 12px;
            color: #666;
            li {
              margin-bottom: 15px;
              p {
                margin: 0;
                span {
                  color: #333;
                  font-weight: 600;
                }
                &:nth-child(1) {
                  color: #fe702f;
                }
              }
            }
          }
        }
        .xia2 {
          height: 278px;
          margin-bottom: 20px;
          .xia2s {
            display: flex;
            align-items: center;
            font-size: 12px;
            h3 {
              flex-grow: 1;
              font-size: 16px;
              border-left: 5px solid #fe7e01;
              padding-left: 7px;
            }
            span {
              padding: 0 5px;
            }
            div {
              width: 16px;
              height: 14px;
              cursor: pointer;
            }
            .zuo {
              background: url(../assets/fx1.gif) no-repeat 0 -14px;
            }
            .you {
              background: url(../assets/fx2.gif) no-repeat 0 -14px;
            }
          }
          .xia2x {
            font-size: 12px;
            ul {
              display: flex;
              li {
                width: 172px;
                height: 220px;
                margin: 15px 8px 20px;
                a {
                  display: block;
                  img {
                    border: 1px solid #ccc;
                  }
                }
                p {
                  width: 160px;
                  margin: 0;
                  padding: 4px 0;
                  b {
                    color: #999;
                    margin-right: 2px;
                  }
                  strong {
                    color: #ff2900;
                    margin-right: 2px;
                  }
                }
              }
            }
          }
        }
        .xia3 {
          height: 214px;
          font-size: 12px;
          border: 1px solid #ffc7b2;
          background-color: #fffbf1;
          padding: 10px;
          line-height: 2;
          p {
            margin: 0;
          }
          h4 {
            flex-grow: 1;
          }
          .xia3s {
            display: flex;
            ul {
              width: 663px;
              margin-bottom: 20px;
              li {
                p {
                  &:nth-child(1) {
                    span {
                      color: #f40;
                    }
                  }
                  &:nth-child(2) {
                    span {
                      margin-right: 10px;
                      img {
                        vertical-align: middle;
                        margin-right: 3px;
                        a:hover {
                          text-decoration-line: underline;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .xia3x {
            display: flex;
            ul {
              width: 663px;
            }
          }
        }
      }
      .dibu {
        display: flex;
        justify-content: center;
      }
    }

    .phonePay{
      border: 1px solid #E5E5E5;
      position:relative;
      width: 556px;
      background: #f6f6f6;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      .phone{
        width: 147px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: right;
        padding-right: 20px;
        color: #3C3C3C;
        outline: 0;
        line-height: 44px;
        font-size: 14px;
        .minQrcode{
          margin-left: 5px;
          vertical-align: middle;
          text-align: right;
          color: #3C3C3C;
          line-height: 44px;
          font-size: 14px;
        }
        .dir{
          margin-left: 10px;
          text-align: right;
        }
    }
    .phonePayQrcode{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background: #fff;
      border:  1px solid #E5E5E5;
      width: 165px;
      height: 165px;
      top: 45px;
    }
    }
    }
  }
/* **************************导航栏样式END***************************** */

/* **************************侧边栏样式START************************ */
  @import url('//at.alicdn.com/t/font_2136401_my5dvkdtvj.css');
  h3,h4,p,ul{
      padding: 0;
      margin: 0;
  }
  ul{list-style: none;}
  a{text-decoration: none;color: #333;}
  input{
      border:none;
      outline-style: none;
  }
  .h3(){
          height: 30px;
          line-height: 30px;
          font-weight: 600;
          border-bottom: 1px solid #eee;
          span{
              font-size:14px;
              color:#333;
              vertical-align:middle;
          }
          .icon-service{
              font-size: 12px;
              color: rgba(153, 153, 153, 0.13);
              margin-left:30px;
          }
          .icon-star{
              font-size: 16px;
              color: #666;
              padding: 0 7px;
          }
      }
  #Sidebar{
      width: 190px;
      font-size: 0;
      user-select: none;
      .SidebarBox{
          margin-top: 10px;
          border: 1px solid #eee;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;        
          h3{
              .h3()
          }
          .SidebarSort{
              padding: 10px;
              >li{
                  background: url(https://gdp.alicdn.com/L1/142/442276331/modules/tshop-pbsm-shop-item-cates/assets/images/cbg.gif);
                  margin-bottom: 5px;
                  overflow: hidden;
                  text-overflow: ellipsis; 
                  >*{
                      vertical-align: middle;
                  }
                  span,a{
                      font-size: 14px;
                      color: #333;
                      font-weight: 700;
                      line-height: 28px;
                  }
                  span{
                      font-size: 16px;
                      padding: 0 6px;
                  }
                  .icon-dian{
                      font-size: 13px;
                  }
                  ul{
                      background: #fff;
                      margin-top: 5px;
                      li{
                          background: #fff;
                          height:32px;
                          span{
                              font-size: 12px;
                              color:#666;
                              padding: 0 6px;
                          }
                          a{
                              font-size: 12px;
                              color:#666;
                          }
                          a:hover{
                              color: #000;
                          }
                      }
                      
                  }
              }
              .allBady{
                  div:last-child{
                      height: 30px;
                      line-height: 30px;
                      background: #fff;
                      margin-top: 5px;
                      a{
                          font-size: 12px;
                          color: #666;
                          margin-left: 5px;
                      }
                  }
              }
          }
      }
      .serviceContent{
          margin-top: 5px;
          border: 1px solid #eee;
          font-size: 12px;
          color: #666;
          h3{
              .h3();
              height:38px;
              line-height: 38px;
              background: linear-gradient(to right,#fff,#f5f5f5);
          }
          .workTime{
              padding: 6px 6px 8px;
              h4{
                  height:30px;
                  line-height: 30px;
              }
              p{
                  margin-left: 10px;
              }
          }
          >span{
              display: block;
              margin: 0 10px;
              width: 168px;
              height: 1px;
              background: #eee;
          }
          .onlineConsult{
              padding: 6px 6px 20px;
              h4{
                  height:30px;
                  line-height: 30px;
              }
              >div{
                  >*{
                      vertical-align: middle;
                  }
                  >span{
                      margin-left: 10px;
                      margin-right: 15px;
                  }
              }
          }
      }
      .badyRanking{
          color:#666;
          font-size: 12px; 
          border: 1px solid #eee;
          margin-top: 5px;
          h3{
              .h3()
          } 
          .badyRankingTop{
              display: flex;
              justify-content: space-between;
              padding: 5px 6px 0;
              >span{
                  font-size: 14px;
                  width: 80px;
                  height: 27px;
                  line-height: 27px;
                  border: 1px solid #EEE;
                  border-bottom-color:#fff ;
                  background: #f5f5f5;
                  text-align: center;
                  margin-bottom: -1px;
                  cursor: pointer;
              }
              .spanBg{
                  background: #fff;
                  color: #000;
                  font-weight: 900;
              }
          }
          ul{
              padding: 0 10px 13px;
              border-top: 1px solid #eee;
              li{
                  height: 60px;
                  display: flex;
                  align-items: center;
                  border-bottom: 1px solid #eee;
                  margin-top: 15px;
                a{
                      display: flex;
                      justify-content: space-between;
                      img{
                          width: 42px;
                          height:42px;
                          margin-right: 10px;
                      }
                      img:hover{
                          transform:scale(1.5)
                      }
                      p{
                          color: #666;
                          height: 19px;
                          span:nth-child(2){
                              color: #000;
                              font-weight: 600;
                          }
                      }
                      p:nth-child(2){
                          color: #000;
                          font-weight: 600;
                      }
                  }
              }
          }
          >a{
              display: block;
              width: 102px;
              height:29px;
              line-height: 29px;
              text-align: center;
              border: 1px solid #eee;
              background: #f9f9f9;
              margin: 12px auto 20px;
          }
      }
  }
/* **************************侧边栏样式END**************************** */

/* **************************宝贝详情样式START****************************** */
.hello {
  width: 750px;
  margin: auto;
  .xiangqing {
    width: 750px;
    .shang {
      height: 144px;
      background-color: #eeeeee50;
      padding: 10px 0;
      border-bottom: 1px solid #eeeeee;
      margin-bottom: 10px;
    }
    .zhong {
      // background-color: hotpink;
      // font-size: 0;
      p {
        text-align: center;
        span {
          font-size: 24px;
        }
      }
      .tu3biaoge1 {
        height: 120px;
        background-color: #eeeeee50;
      }
      .tu3biaoge2 {
        height: 273px;
        background-color: #eeeeee50;
        border: 1px solid #000;
      }
      .tu4 {
        img {
          margin-bottom: 10px;
        }
      }
    }
    .xia {
      // background-color: #eeeeee50;
      margin: 50px 0 30px;
      .xia1 {
        height: 229px;
        h3 {
          font-size: 16px;
          border-bottom: 1px solid #eeeeee;
          margin-bottom: 15px;
        }
        ul {
          font-size: 12px;
          color: #666;
          li {
            margin-bottom: 15px;
            p {
              margin: 0;
              span {
                color: #333;
                font-weight: 600;
              }
              &:nth-child(1) {
                color: #fe702f;
              }
            }
          }
        }
      }
      .xia2 {
        height: 278px;
        margin-bottom: 20px;
        .xia2s {
          display: flex;
          align-items: center;
          font-size: 12px;
          h3 {
            flex-grow: 1;
            font-size: 16px;
            border-left: 5px solid #fe7e01;
            padding-left: 7px;
          }
          span {
            padding: 0 5px;
          }
          div {
            width: 16px;
            height: 14px;
            cursor: pointer;
          }
          .zuo {
            background: url(../assets/fx1.gif) no-repeat 0 -14px;
          }
          .you {
            background: url(../assets/fx2.gif) no-repeat 0 -14px;
          }
        }
        .xia2x {
          font-size: 12px;
          ul {
            display: flex;
            li {
              width: 172px;
              height: 220px;
              margin: 15px 8px 20px;
              a {
                display: block;
                img {
                  border: 1px solid #ccc;
                }
              }
              p {
                width: 160px;
                margin: 0;
                padding: 4px 0;
                b {
                  color: #999;
                  margin-right: 2px;
                }
                strong {
                  color: #ff2900;
                  margin-right: 2px;
                }
              }
            }
          }
        }
      }
      .xia3 {
        height: 214px;
        font-size: 12px;
        border: 1px solid #ffc7b2;
        background-color: #fffbf1;
        padding: 10px;
        line-height: 2;
        p {
          margin: 0;
        }
        h4 {
          flex-grow: 1;
        }
        .xia3s {
          display: flex;
          ul {
            width: 663px;
            margin-bottom: 20px;
            li {
              p {
                &:nth-child(1) {
                  span {
                    color: #f40;
                  }
                }
                &:nth-child(2) {
                  span {
                    margin-right: 10px;
                    img {
                      vertical-align: middle;
                      margin-right: 3px;
                      a:hover {
                        text-decoration-line: underline;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .xia3x {
          display: flex;
          ul {
            width: 663px;
          }
        }
      }
    }
  }
}
.dibu {
  display: flex;
  justify-content: center;
}
/* **************************宝贝详情样式END****************************** */

/* **************************累计评论样式START****************************** */
.box{
        width:760px;
        height: 2000px;
        border-right:1px solid #e5e5e5;
        margin-left:4px;
      .remarkList{
        width:752px;
        background:#fafafa;
          .remarkGoods{
            width:750px;
            height:42px;
            margin-top:8px;
            border-bottom:1px solid #e5e5e5;
            padding-left:12px;
            .first-remark{
              font-size:14px;
              color:#333;
              width:170px;
              height:42px;
              background:#fff;
              text-align: center;
              line-height:42px;
              border:1px solid #e5e5e5;
              border-bottom:none;
            }
          }
          .impression{
            width:750px;
            height:112px;
            border:1px solid #e5e5e5;
            margin-top:10px;
            background:#fafafa;
            .impression-a{
              width:700px;
              height:82px;
              display:flex;
              padding:10px 0;
              margin-left:25px; 
              >p{
                display:flex;
                color:#000;
                font-size:12px;
                font-weight:400;
                padding-left:30px;
                }
              .impression-list{
                  display:flex;
                  width:550px;
                  height:72px;
                  margin-left:10px;
                  flex-wrap:wrap;
                  li{
                    display:block;
                    color:#fff;
                    width:100px;
                    height:26px;
                    background:#f88c19;
                    border:2px solid rgb(248,137,22);
                    margin-right:5px;
                    box-shadow:1px 1px 0 0 #d4d4d4;
                    text-align:center;
                    line-height:26px;
                  }
                  li:hover{
                    background:#fff;
                    color:#404040;
                  }
                  li:last-child{
                    background:#a4a4a4;
                  }
                  li:last-child:hover{
                    background:#fff;
                    color:#404040;
                  }
                }
            }
            .impression-qb{
              display:flex;
              width:750px;
              height:46px;
              border:1px solid #e5e5e5;
              margin-top:20px;
              background:#fcfcfc;
              justify-content: space-between;
              .qb-list{
                width:270px;
                height:100%;
                display:flex;
                margin-left:10px;
                align-items:center;
                justify-content: space-between;
                >li{
                  display:flex;
                  align-items:center;
                  font-size:12px;
                  color:#404040;
                }
              }
              .sort{
                display:flex;
                width:90px;
                height:24px;
                border:1px solid #ccc;
                background:#f3f3f3;
                margin-top:10px;
                margin-right:10px;
                >span{
                  font-size:14px;
                  width:69px;
                  height:100%;
                  border-right:1px solid #ccc;
                  text-align:center;
                  line-height:24px;
                }
              }
            }
          .evaluate{
            width:750px;
            height:100%;
            .evaluate-list li{
              display:flex;
              width:750px;
              border-bottom:1px solid #e5e5e5;
              margin-top:10px;
              .portrait{
                width:100px;
                height:76px;
                text-align:center;
                p{
                  color:#404040;
                }
              }
              .content{
                width:630px;
                .content-top{
                  font-size:14px;
                  line-height:1.4;
                  color:#3f3f3f;
                }
                .content-bottom{
                  margin-top:6px;
                  display:flex;
                  justify-content: space-between;
                  .content-bottom .data{
                    font-size:12px;
                    color:#b0b0b0;
                  }
                  .left{
                    color:#3366cc;
                  }
                  .right{
                    color:#aaa;
                  }
                }
              }
            }
            .page{
              width:750px;
              height:48px;
              // border:1px solid #ccc;
              ul{
                display:flex;
                justify-content: flex-end;
                margin-top:20px;
                .before-page{
                  width:58px;
                  height:26px;
                  border:1px solid #eee;
                  font-size:12px;
                  color:#bbb;
                  text-align:center;
                  line-height:26px;
                }
                .next-page{
                  width:58px;
                  height:26px;
                  border:1px solid #eee;
                  font-size:12px;
                  color:#333;
                  text-align:center;
                  line-height:26px;
                }
                .page1{
                  width:28px;
                  height:26px;
                  text-align:center;
                  line-height:26px;
                  color:#fff;
                  background:#f40;
                  border:1px solid #eee;
                }
                .page2{
                  width:28px;
                  height:26px;
                  text-align:center;
                  line-height:26px;
                  color:#333;
                  border:1px solid #eee;
                }
              }
            }
          }  
        }
      }
    }
/* **************************累计评论样式END****************************** */
</style>