<template>
  <div class="SearchInput" ref='search'>
    <div id="search">
      <!-- 搜索栏 -->
      <div class="searchArea">
        <div class="container">
          <!-- 淘宝logo -->
          <router-link to="/" class="logo">
            <span class="iconfont icon-taobaologo"></span>
          </router-link>
          <!-- 搜索输入 -->
          <div class="inputGroup">
            <!-- 宝贝/店铺选择 -->
            <div class="selectGroup">
              <div class="textGoods">
                <a href="javascript:;">宝贝</a>
                <img src="../img/select.png" />
              </div>
              <div class="textShop active"><a href="javascript:;">店铺</a></div>
            </div>
            <input type="text" :placeholder="searchText"  v-model="searchText"    @change='searchChangeClick(searchText)'/>
            <b class="iconfont icon-xiangji"></b>
            <span>搜 索</span>
          </div>
        </div>
      </div>
      <!-- 滑动后显示的搜索栏 -->
      <div :class="{searchAreaScroll:true,active:show}" >
        <div class="container">
          <!-- 淘宝logo -->
          <router-link to="/" class="logo">
            <span class="iconfont icon-taobaologo"></span>
          </router-link>
          <!-- 左侧大搜索输入 -->
          <div class="inputGroup">
            <!-- 宝贝/店铺选择 -->
            <div class="selectGroup">
              <div class="textGoods">
                <a href="javascript:;">宝贝</a>
                <img src="../img/select.png" />
              </div>
              <div class="textShop active"><a href="javascript:;">店铺</a></div>
            </div>
            <input type="text" :placeholder="searchText"  v-model="searchText" @change='searchChangeClick(searchText)'/>
            <b class="iconfont icon-xiangji"></b>
            <span>搜 索</span>
          </div>
          <!-- 右侧小搜索输入 -->
          <div class="inputGroupRight ">
            <p>在结果中排除</p>
            <input type="text" placeholder="请输入要排除的词" />
            <span>确定</span>
            <img src="../img/cha.png">
          </div>
        </div>
      </div>
      <!-- 右下角固定栏 -->
      <div class="topBack">
        <a href="javascript:;"><img src="../img/gotop.png" /></a>
        <a href="javascript:;"><img src="../img/gift.png" /></a>
        <a href="javascript:;"><img src="../img/pen.png" /></a>
        <a href="javascript:;"><img src="../img/why.png" /></a>
        <a href="javascript:;"><img src="../img/time.png" /></a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
   props:['searchChangeClick','searchText'],
  data(){
    return {
       show:true,
      //  searchText:'xxxxxxx',
    }
  },
  created(){
    this.searchText = this.$store.state.Search.text
  },
  mounted(){
    window.addEventListener('scroll',this.www);
  },
  methods: {
    www(){
        if(this.$refs&& this.$refs.search &&  this.$refs.search.getBoundingClientRect().top<=-70){
            this.show=false;
        }else{
            this.show=true;
        }
    }
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2130964_pne02i0joho.css");
// *****************************************

@width: 1350px;
@secondwidth: 1070px;
#top {
  height: 36px;
  width: 100%;
  background: red;
}

#search {
  height: 60px;
  width: @width;
  margin: auto;
  
  // **********************************
  @color: #f50;
  .topBack {
    position: fixed;
    right: 20px;
    bottom: 340px;
    display: flex;
    width: 46px;
    height: 46px;
    flex-wrap: wrap;
    a {
      border: 1px solid #e0e0e0;
      padding: 10px;
      margin: 5px;
      background: #fafafa;
      > img {
        width: 30px;
        height: 27px;
      }
      &:first-child {
        background: #ff4400;
      }
    }
  }
  .searchArea {
    width: 1070px;
  }
  .searchArea >.container {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .logo {
      color: @color;
      span {
        font-size: 35px;
      }
    }
    .inputGroup {
      display: flex;
      width: 811px;
      border: 2px solid #f50;
      align-items: center;
      height: 31px;
      .selectGroup {
        display: flex;
        width: 68px;
        height: 31px;
        flex-wrap: wrap;
        .textGoods,
        .textShop {
          width: 67px;
          height: 31px;
          display: flex;
          outline: hidden;
          align-items: center;
          background: #f5f5f5;
          border-right: 1px solid #e6e6e6;
          a {
            font-size: 12px;
            padding: 0 12px;
            color: #6b6b6b;
          }
          &.active {
            display: none;
          }
        }
        
      }
      input {
        border: none;
        display: block;
        flex-grow: 1;
        height: 28px;
        outline: none;
        text-indent: 1em;
        font-size: 14px;
        &::placeholder {
          color: #000;
        }
      }
      span {
        width: 80px;
        height: 100%;
        background: #f50;
        color: #fff;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
      }
      .iconfont {
        font-size: 20px;
        color: #999999ce;
        &.icon-xiangji {
          margin-right: 10px;
        }
      }
    }
  }
  .searchAreaScroll {
    width: 1350px;
    height: 60px;
    background: #fff;
    >.container {
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 5px;
      position: fixed;
      top: 0;
      background: #fff;
      .logo {
        color: @color;
        span {
          font-size: 28px;
          margin: 0 10px;
        }
      }
      .inputGroup {
        display: flex;
        width: 651px;
        border: 2px solid #f50;
        align-items: center;
        height: 31px;
        margin-left: 18px;
        .selectGroup {
          display: flex;
          width: 68px;
          height: 31px;
          flex-wrap: wrap;
          .textGoods,
          .textShop {
            width: 67px;
            height: 31px;
            display: flex;
            outline: hidden;
            align-items: center;
            background: #f5f5f5;
            border-right: 1px solid #e6e6e6;
            a {
              font-size: 12px;
              padding: 0 12px;
              color: #6b6b6b;
            }
            &.active {
              display: none;
            }
          }
        }
        input {
          border: none;
          display: block;
          flex-grow: 1;
          height: 28px;
          outline: none;
          color: #999;
          text-indent: 1em;
          font-size: 14px;
          &::placeholder {
            color: #000;
          }
        }
        span {
          width: 80px;
          height: 100%;
          background: #f50;
          color: #fff;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
        }
        .iconfont {
          font-size: 20px;
          color: #999999ce;
          &.icon-xiangji {
            margin-right: 10px;
          }
        }
      }
      .inputGroupRight {
        width: 281px;
        height: 49px;
        display: flex;
        align-items: center;
        background: rgb(236, 236, 236);
        margin-left: 12px;
        border-left: 1px solid rgb(233, 232, 232);
        font-size: 12px;
        p{
          padding: 0 10px;
        }
        input{
          height: 26px;
          width: 135px;
          border: 1px solid rgb(230, 227, 227);
          border-right: none;
          text-indent: 4px;
        }
        span{
          width: 44px;
          height: 26px;
          background: #f50;
          color: #fff;
          text-align: center;
          line-height: 26px;
          cursor:pointer;
        }
        img{
          height: 15px;
          width: 15px;
          background: #fff;
          position: absolute;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
    &.active {
      display: none;
    }
  }
}

// **********************************
#content {
  width: @width;
  /* height: 300px; */
  background: palegreen;
  margin: auto;
  display: flex;
  .main {
    /* height: 300px; */
    width: @secondwidth;
    background: pink;
    .maintop {
      height: 40px;
      width: @secondwidth;
      background: rgb(217, 235, 135);
    }
    .kind {
      height: 258px;
      width: @secondwidth;
      background: tomato;
    }
    .lastkind {
      height: 44px;
      width: @secondwidth;
      background: yellowgreen;
    }
    .sort {
      height: 80px;
      width: @secondwidth;
      background: rgb(205, 50, 122);
    }
    .maintext {
      height: 500px;
      width: @secondwidth;
      background: rgb(74, 218, 105);
    }
    .page {
      height: 57px;
      width: @secondwidth;
      background: rgb(208, 247, 36);
    }
  }
  .advertise {
    flex-grow: 1;
    background: powderblue;
  }
}
#buttomcontent {
  height: 442px;
  width: @width;
  background: royalblue;
  margin: auto;
}
#find {
  height: 55px;
  width: @width;
  background: saddlebrown;
  margin: auto;
}
#buttom {
  height: 248px;
  width: 100%;
  background: salmon;
}
</style>