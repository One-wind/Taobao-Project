<template>
  <div class="cart">
    <div class="container">
      <div class="main">
        <ul class="goods">
          <li>全部商品<span>1</span></li>
          <li>降价商品<span>0</span></li>
          <li>库存紧张<span>0</span></li>
        </ul>
        <div class="partPrice">
          <span class="payText">已选商品（不含运费）</span>
          <span class="payNum">{{totalPrice}}</span>
          <a
            href="javascript:;"
            class="totalNum"
            @click.stop='submitOrderClick'
          >结算</a>
        </div>
      </div>
      <div class="catTable">
        <div class="checkBtn">
          <!-- 选择所有 -->
          <input type="checkbox" value="checkAll" name="selectAll"
            id="checkAll"  v-model='cAll' @change='checkAllChangeClick'/>
          <label for="checkAll">全选</label>
          <span>商品信息</span>
        </div>
        <ul class="">
          <li><span>&nbsp;</span></li>
          <li>单价</li>
          <li>数量</li>
          <li>金额</li>
          <li>操作</li>
        </ul>
      </div>
      <div class="shopInfo">
        <div class="shopName">
          <input
            type="checkbox"
            value="checkShop"
            name="select1"
            id="checkShop"
          >
          <label for="checkShop"></label>
          <span class="iconfont icon-jinpai1"></span>
          <span>店铺：<a href="#">香港轻奢男装店</a></span>
          <span class="iconfont icon-wangwang"></span>
        </div>
      </div>
      <div class="goodsInfo" v-for="(item,i) in goodsListData" :key="i">
        <div class="goodsName">
          <input type="checkbox"  value="checkGoods" name="select" id="checkGoods" 
            v-model="item.checked"  @change.stop='goodsChangeClick(item.id)'/>
          <label for="checkGoods" ></label>
          <div class="goodsImg">
            <a
              href="#"
              class="imgInfo"
            ><img class="goodsinfoPic"  :src="item.imgs[0]"></a>
            <div class="goodsText">
              <a
                href="javascript:;"
                class="imgInfo"
              >{{item.name}}</a>
              <span>&nbsp;</span>
              <span class="reputation">
                <img src="../assets/img001.png">
                <img src="../assets/img002.png">
                <img src="../assets/img003.jpg">
              </span>
            </div>
          </div>
          <div class="goodsColor">
            <span> 颜色：133黑色西服+西裤+马甲[（送领带+白衬衣+] </span>
            <span> 尺码：2XL </span>
          </div>
          <div class="goodsPrices">
            <span>{{item.goodsNum}}</span>
            <span>￥{{item.price}}</span>
          </div>
          <div class="goodsNumbers">
            <span>1</span>
          </div>
          <div class="goodsActive">
            <ul>
              <li>移入收藏夹</li>
              <li>删除</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container1">
      <div class="hotSeller">
        <ul>
          <li><span class="active">掌柜热卖</span></li>
          <span class="line"></span>
          <li><span>最近浏览过的</span></li>
          <span class="line"></span>
          <li><span>最近收藏的</span></li>
          <span class="line"></span>
          <li><span>猜你喜欢的</span></li>
        </ul>
        <router-link to="/">去我的足迹 &gt;&gt;</router-link>
      </div>
      <div class="container1 recommend">
        <swiper :options="swiperOptions">
          <swiper-slide class="slide1">
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i2/122963340/O1CN01KXNmkc1aXlTSr0OYM_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥26.8</span><s>￥98</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：40</span>
              <span class="discount">超值特惠</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i2/128915283/O1CN01S7W6iK1otf2ZxEuhF_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥36</span><s>￥39</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：470</span>
              <span class="discount">感恩回馈</span>
            </div>
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i3/30538088/O1CN01tCmgXH29cM05RwCs6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥39</span><s>￥59</s>
              <p>
                <router-link
                  to="/"
                  title="四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生"
                >四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生</router-link>
              </p>
              <span class="salesnum">销量：456</span>
              <span class="discount">热卖单品</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/13439057/O1CN01qEJvC32Gm9nRb7Qg6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥129</span><s>￥139</s>
              <p>
                <router-link
                  to="/"
                  title="飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白"
                >飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白</router-link>
              </p>
              <span class="salesnum">销量：452</span>
              <span class="discount">官方旗舰</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/2258006982/O1CN01LuXQls21Rntc9Y2KK_!!2258006982.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥9.9</span><s>￥58</s>
              <p>
                <router-link
                  to="/"
                  title="10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装"
                >10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装</router-link>
              </p>
              <span class="salesnum">销量：2345</span>
              <span class="discount">活动中</span>
            </div>
          </swiper-slide>
          <swiper-slide class="slide1">
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i2/122963340/O1CN01KXNmkc1aXlTSr0OYM_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥26.8</span><s>￥98</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：40</span>
              <span class="discount">超值特惠</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i2/128915283/O1CN01S7W6iK1otf2ZxEuhF_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥36</span><s>￥39</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：470</span>
              <span class="discount">感恩回馈</span>
            </div>
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i3/30538088/O1CN01tCmgXH29cM05RwCs6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥39</span><s>￥59</s>
              <p>
                <router-link
                  to="/"
                  title="四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生"
                >四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生</router-link>
              </p>
              <span class="salesnum">销量：456</span>
              <span class="discount">热卖单品</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/13439057/O1CN01qEJvC32Gm9nRb7Qg6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥129</span><s>￥139</s>
              <p>
                <router-link
                  to="/"
                  title="飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白"
                >飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白</router-link>
              </p>
              <span class="salesnum">销量：452</span>
              <span class="discount">官方旗舰</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/2258006982/O1CN01LuXQls21Rntc9Y2KK_!!2258006982.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥9.9</span><s>￥58</s>
              <p>
                <router-link
                  to="/"
                  title="10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装"
                >10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装</router-link>
              </p>
              <span class="salesnum">销量：2345</span>
              <span class="discount">活动中</span>
            </div>
          </swiper-slide>
          <swiper-slide class="slide1">
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i2/122963340/O1CN01KXNmkc1aXlTSr0OYM_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥26.8</span><s>￥98</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：40</span>
              <span class="discount">超值特惠</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i2/128915283/O1CN01S7W6iK1otf2ZxEuhF_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥36</span><s>￥39</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：470</span>
              <span class="discount">感恩回馈</span>
            </div>
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i3/30538088/O1CN01tCmgXH29cM05RwCs6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥39</span><s>￥59</s>
              <p>
                <router-link
                  to="/"
                  title="四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生"
                >四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生</router-link>
              </p>
              <span class="salesnum">销量：456</span>
              <span class="discount">热卖单品</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/13439057/O1CN01qEJvC32Gm9nRb7Qg6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥129</span><s>￥139</s>
              <p>
                <router-link
                  to="/"
                  title="飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白"
                >飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白</router-link>
              </p>
              <span class="salesnum">销量：452</span>
              <span class="discount">官方旗舰</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/2258006982/O1CN01LuXQls21Rntc9Y2KK_!!2258006982.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥9.9</span><s>￥58</s>
              <p>
                <router-link
                  to="/"
                  title="10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装"
                >10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装</router-link>
              </p>
              <span class="salesnum">销量：2345</span>
              <span class="discount">活动中</span>
            </div>
          </swiper-slide>
          <swiper-slide class="slide1">
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i2/122963340/O1CN01KXNmkc1aXlTSr0OYM_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥26.8</span><s>￥98</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：40</span>
              <span class="discount">超值特惠</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i2/128915283/O1CN01S7W6iK1otf2ZxEuhF_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥36</span><s>￥39</s>
              <p>
                <router-link
                  to="/"
                  title="太阳伞防晒防紫外线晴雨两用女折叠五折胶囊"
                >太阳伞防晒防紫外线晴雨两用女折叠五折胶囊</router-link>
              </p>
              <span class="salesnum">销量：470</span>
              <span class="discount">感恩回馈</span>
            </div>
            <div class="slide11">
              <img
                src="https://gma.alicdn.com/bao/uploaded/i3/30538088/O1CN01tCmgXH29cM05RwCs6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥39</span><s>￥59</s>
              <p>
                <router-link
                  to="/"
                  title="四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生"
                >四季通用春秋棉被冬被空调被子夏凉被芯夏季薄款双人宿舍单人学生</router-link>
              </p>
              <span class="salesnum">销量：456</span>
              <span class="discount">热卖单品</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/13439057/O1CN01qEJvC32Gm9nRb7Qg6_!!0-saturn_solar.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥129</span><s>￥139</s>
              <p>
                <router-link
                  to="/"
                  title="飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白"
                >飞利浦电动牙刷HX6730/HX6721成人充电声波震动电动牙刷智能净白</router-link>
              </p>
              <span class="salesnum">销量：452</span>
              <span class="discount">官方旗舰</span>
            </div>
            <div class="slide11">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/2258006982/O1CN01LuXQls21Rntc9Y2KK_!!2258006982.jpg_230x230.jpg"
                alt="recommend"
              >
              <span class="price">￥9.9</span><s>￥58</s>
              <p>
                <router-link
                  to="/"
                  title="10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装"
                >10支护手霜滋润保湿补水嫩白秋冬防干裂男女士小巧便携学生随身装</router-link>
              </p>
              <span class="salesnum">销量：2345</span>
              <span class="discount">活动中</span>
            </div>
          </swiper-slide>
        </swiper>
        <div
          class="swiper-pagination swiper-pagination-bullets"
          slot="pagination"
        ></div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cAll:false,
      goodsListData:[],
      totalPrice:0.00,
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        scrollbar: {
          el: "swiper-scollbar",
        },
      },
    };
  },

  created() {
    console.log( this.$store.state.UserInfo.info.cart)
    if(!this.$store.state.UserInfo.info.cart){
      this.$router.push('/login')
      return
    }

    let param = this.$route.params.goodsInfo
    
    try {
      let newCart = JSON.parse(decodeURI( param ))
      console.log( newCart )
      let oldCart = this.$store.state.UserInfo.info.cart
      // let cart = [newCart, ...oldCart]
      let cart = [...oldCart]
      let flag = false
      for(const i in cart){
        if(cart[i].id == newCart.id){
          cart[i].num += newCart.num
          flag = true
        }
      }
      if(!flag){

        cart = [newCart , ...cart]
      }

      //  同步数据到服务器
      this.updataUserCartInfo(cart)
      // 同步购物车数据到 vuex
      let info =  this.$store.state.UserInfo.info
      info.cart = cart
      this.$store.commit('UserInfo/setInfo',info)


      //  根据购物车从服务器中再次获取到商品结算相关信息
      let ids = []
      for(const i in cart){
        ids.push(cart[i].id)
      }
      this.getCartDetailInfo( encodeURI(  JSON.stringify( ids ) ))

    } catch (error) {
      
    }
  },
  methods: {
    submitOrderClick(){
      let orderList = []
      let cartList = []
      for(let i=0; i< this.goodsListData.length; i++){
        if(this.goodsListData[i].checked){
          // 要提交的数据
          orderList.push( {
            id:this.goodsListData[i].id,
            num:this.goodsListData[i].goodsNum
          } )
        }else{
          // 要重置回购物车中的数据
          cartList.push( {
            id:this.goodsListData[i].id,
            num:this.goodsListData[i].goodsNum
          } )
        }
      }

       // 提交定单到服务器
      //  返回定单ID

      // 同步数据 到VUEX
      let userInfo = this.$store.state.UserInfo.info
      userInfo.cart = cartList
      console.log( userInfo )
      this.$store.commit('UserInfo/setInfo', userInfo)
      // 同步数据到后台
     
      this.updataUserCartInfo(cartList)
      // 跳转到结算页面
      this.$router.push(`/settlement/${encodeURI(JSON.stringify(orderList))}`)

    },
    goodsChangeClick(id){
      this.cAll = false //取消全选
      this.totalPrice = 0
      for(let i=0; i<this.goodsListData.length; i++){
        if(this.goodsListData[i].checked){
          this.totalPrice += this.goodsListData[i].goodsNum * this.goodsListData[i].price
        }
      } 
      

    },
    checkAllChangeClick(){
      if(this.cAll){
        this.totalPrice = 0
        for(let i=0; i<this.goodsListData.length; i++){
          this.goodsListData[i].checked = true
          this.totalPrice += (this.goodsListData[i].goodsNum * this.goodsListData[i].price)
        }
      }else{
         for(let i=0; i<this.goodsListData.length; i++){
          this.goodsListData[i].checked = false
          this.totalPrice = 0 
        }
      }
    },
    getCartDetailInfo(ids){
        this.$ajax({
        url:this.$url+'/db',
        method:'post',
        data:{
          flag:'findGoodsByID',
          ids:ids,
        }
      }).then(res=>{
        let cart = this.$store.state.UserInfo.info.cart
        for(let i=0; i< res.length; i++  ){
          // 同步商品数量
          for(const key in cart){
            if(cart[key].id == res[i].id){
              res[i].goodsNum =  cart[key].num
              break
            }
          }
          // 商品未被选中
          res[i].checked = false
        }
      this.goodsListData = res
      console.log(res)
      }).catch(err=>{
        console.log( err )
      })
    },
    // 
    updataUserCartInfo(cart){
      let userId =  this.$store.state.UserInfo.info.id
      this.$ajax({
        url:this.$url+'/db',
        method:'post',
        data:{
          flag:'updataUserCartInfo',
          id:userId,
          cartInfo:JSON.stringify(cart)
        }
      }).then(res=>{
        console.log( res.changedRows == 1?"购物车同步成功":"购物车同步失败" )

      }).catch(err=>{
        console.log( err )
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    // console.log( 'xxxxx' )
    this.$emit("lOrRActive", true);
    next();
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1190px;
  margin: 0 auto;
  .main {
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;
    .goods {
      display: flex;
      height: 31px;
      line-height: 31px;
      li {
        padding-left: 15px;
        margin-bottom: -1px;
        span {
          padding-left: 5px;
          padding-right: 15px;
        }
        &:nth-child(2) {
          border-left: 1px solid rgba(128, 128, 128, 0.288);
          border-right: 1px solid rgba(168, 167, 167, 0.205);
        }
      }
    }
    .partPrice {
      width: 229px;
      height: 25px;
      display: flex;
      justify-content: space-between;
      .payText {
        width: 130px;
        font-size: 13px;
        color: #000;
      }
      .payNum {
        font-size: 13px;
        color: #f40;
      }
      .totalNum {
        width: 55px;
        height: 25px;
        color: #fff;
        background: #aaa;
        text-align: center;
        line-height: 25px;
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }
  .catTable {
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    color: #3c3c3c;
    display: flex;
    justify-content: space-between;
    .checkBtn {
      input {
        width: 80px;
      }
      span {
        width: 300px;
        padding-left: 90px;
      }
    }
    ul {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      li {
        padding-right: 50px;
        &:first-child {
          padding-left: 150px;
        }
      }
    }
  }
  .shopInfo {
    display: flex;
    // justify-content: space-between;
    .shopName {
      height: 38px;
      line-height: 38px;
      padding-left: 33px;
      a {
        font-size: 13px;
      }
      .icon-jinpai1 {
        color: #ffd101;
        font-size: 18px;
        padding: 0 5px;
      }
      .icon-wangwang {
        font-size: 16px;
        color: #1c9eff;
        padding: 0 10px;
      }
    }
  }
  .goodsInfo {
    padding: 10px 0;
    padding-left: 50px;
    border: 1px solid rgba(128, 128, 128, 0.315);
    .goodsName {
      display: flex;
      height: 130px;
      .goodsImg {
        display: flex;
        font-size: 13px;
        .imgInfo {
          margin-left: 15px;
        }
        .goodsText {
          width: 190px;
          margin: 0 30px;
          span {
            display: block;
            a {
              height: 36px;
            }
            &:nth-child(2) {
              height: 26px;
            }
            &:nth-child(3) {
              height: 24x;
            }
          }
        }
      }
      .goodsColor,
      .goodsPrices.goodsNumbers,
      .goodsActive {
        margin: 0 55px;
      }
    }
  }
}
.container1 {
  font-family: "Hiragino Sans GB", "Lantinghei SC", "Microsoft Yahei", SimSun;
  width: 1190px;
  margin: 0 auto;
  margin-top: 30px;
  .hotSeller {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(199, 199, 199);
    align-items: center;
    > a:hover {
      color: #f40;
      text-decoration: underline;
    }
    > ul {
      display: flex;

      > li {
        padding: 5px;
        cursor: pointer;
        border-bottom: 1px rgba(230, 230, 230, 0) solid;
        span {
          font-size: 14px;
          font-weight: 800;
          color: #3c3c3c;
        }
        &:hover {
          border-bottom: 1px solid red;
        }
      }
      .line {
        width: 1px;
        height: 15px;
        margin: 8px 5px 0;
        border-left: 1px solid rgba(196, 192, 192, 0.589);
      }
    }
  }
}
.recommend {
  height: 360px;
  // border: 1px solid grey;
  margin-top: 20px;
  .slide1{
    display: flex;
    justify-content: space-between;
    .slide11{
      width: 230px;
      height: 317px;
      border:1px solid grey;
      >p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 8px 0 8px 5px;
        a:hover{
          color: #f40;
          text-decoration: underline;
        }          
      }
      .price{
        margin-left: 5px;
        color:#f40;
        font-size: 16px;
        font-weight: 800;       
      }
      .salesnum{
        margin-left: 5px;
      }
      .iconfont{
        color: rgb(165, 49, 7);
      }
      .discount{
        margin-left: 110px;
        padding-left: 3px;
        padding-right: 3px;
        background:#05cc30;
        color:#fff;
      }
      &:hover{
        border: 1px solid #f40;
      }          
    }
    
  } 
  //  .swiper-pagination-bullet
   
   .swiper-pagination{
     width: 1190px;
     height: 30px;
     line-height: 30px;
     .swiper-pagination>.swiper-pagination-bullet{       
        width: 15px!important;
        height: 15px !important;
        display: inline-block!important;
        border-radius: 100%!important;
        background: #000!important;
        margin-left:10px !important;
        opacity: 0.2!important;
        margin-left: 10px!important;
     }
   }
}


.goodsinfoPic{
  width: 56px ;
  height: 80px;
}
</style>