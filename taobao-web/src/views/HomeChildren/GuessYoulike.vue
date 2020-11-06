<template>
  <div>
    <section class="guessYoulike container">
      <h3>猜你喜欢</h3>
      <ul class="likeList">
        <li v-for="(item, i) in likeGoodsInfo" :key="i">
          <router-link :to="'/goods/'+item.id">
            <img :src="item.img" alt="">
            <h4>{{item.name}}</h4> 
          </router-link>
          <router-link to="/">
            <div class="findMore" title="发现更多相似宝贝" :data-type='item.type'>
              <h5>❤找相似</h5>
              <b>发现更多相似宝贝&gt;</b>
            </div>
          </router-link>
          <div class="price">
            <div class="priceLeft">
              <em>&yen;</em>{{item.price}}
            </div>
            <span v-show="item.shouChu">销量：{{item.shouChu}}</span>
          </div>  
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        advInfo:['防晒霜','女包','外套','项链女','手表','睡衣','卫衣','手机壳','新款外套','零食','充电宝','无线耳机','女手表','耐克','iphone','牛仔裤','男拖鞋','dior','手链','床垫','女内衣','新款女装','男鞋'],
        likeGoodsInfo: [], 
      }
    },

    created(){
      this.initData()
      // this.$ajax({
      //   method: 'post',
      //   url: 'http://192.168.6.144/ajax/server2.php',
      //   data: {
      //     name: 'youlike'
      //   }
      // }).then((res)=>{
      //   this.likeGoodsInfo = res
      // })
    },

    methods:{
      initData(){
        this.getLikeData()
      },
      getLikeData() {
        this.$ajax({
          method: "post",
          url: this.$url + "/db",
          data: {
            flag: "findLike",
            like:2,
            start:0,
            end:25,
          },
        })
          .then((res) => {
            for(const i in res){
              res[i].imgs = JSON.parse(res[i].imgs)
              res[i].img = res[i].imgs[Math.floor(Math.random()*4) ]
            }
            console.log(res)
            this.likeGoodsInfo = res
          })
          .catch((err) => {
            console.log(err);
          });
      },
    }
  }
</script>

<style lang="less" scoped>
  // 猜你喜欢样式
  .guessYoulike{
    background: #fff;
    margin-top: 10px;
    h3{
      height: 48px;
      line-height: 48px;
      padding-left: 32px;
      margin-top: 5px;
      font-size: 20px;
      color: #ff9f00;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 4px;
        height: 16px;
        top: 16px;
        left: 16px;
        background: #ff9f00;
      }
    }
    .likeList{
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid #f4f4f4;
      li{
        position: relative;
        width: 238px;
        height: 334px;
        color: #6c6c6c;
        font-size: 14px;
        padding: 20px;
        padding-bottom: 0;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-right-color: #f4f4f4;
        border-bottom-color:#f4f4f4;
        transition: border-color 0.3s ;
        img{
          width: 197px;
          height: 197px;
          opacity: 0.9;
        }
        h4{
          margin-top: 7px;
          line-height: 22px;
          height: 44px;
          font-size: 14px;
          overflow: hidden;
        }
        .price{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 22px;
          height: 24px;
          font-size: 20px;
          color: #f40;
          em{
            font-size: 16px;
          }
          span{
            color: #9ca0aa;
            font-size: 12px;
          }
        }
        .findMore{
          display: none;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 236px;
          height: 82px;
          color: #fff;
          background: #ff5000;
          text-align: center;
          h5{
            width: 120px;
            margin: 15px auto;
            margin-bottom: 0;
            font-size: 18px;
            border-bottom: 1px solid #FE964A;
          }
          b{
            font-weight: normal;
            font-size: 12px;
          }
        }
        &:hover{
          cursor: pointer;
          border: 1px solid #f40;
        }
        &:hover .findMore{
          display: block;
        }
        &:hover img{
          opacity: 1;
        }
      }
    }
  }
</style>