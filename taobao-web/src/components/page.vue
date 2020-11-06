<template>
  <div>
    <div class="page">
      <div class="paging">
        <ul class="pagingitem">
          <li @click.stop="pageBtuClick('prev')">
            <span class="pagingupdow"
              ><span class="leftpaging"><</span>上一页</span>
          </li>
          <li v-for="num in $store.state.Search.listPage.page" :key="'num'+num" @click="skipPage(num)"><span :class="['pagingnumber1',{number1:currentPage == num}]">{{num}}</span></li>
          <!-- <li><span :class="['pagingnumber1',{number1:currentPage == 1}]">1</span></li>
          <li><span :class="['pagingnumber1',{number1:currentPage == 2}]">2</span></li>
          <li><span :class="['pagingnumber1',{number1:currentPage == 3}]">3</span></li>
          <li><span :class="['pagingnumber1',{number1:currentPage == 4}]">4</span></li>
          <li><span :class="['pagingnumber1',{number1:currentPage == 5}]">5</span></li> -->
          <li><span class="spot">...</span></li>
          <li @click.stop="pageBtuClick('next')">
            <span class="pagingupdow"
              >下一页<span class="rightpaging">></span></span
            >
          </li>
          <span class="pagenumber1">共100页，</span>
          <span class="pagenumber2">到第</span>
          <input type="number" class="numbersmall"  v-model="skipTo" />
          <span class="pagenumber3">页</span>
          <button class="determine" @click="skipPage(skipTo)">确定</button>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log("hello");
    this.$emit("lOrRActive", false);
  },

  created(){
    this.$ajax({
        method: "post",
        url: this.$url + "/db",
        data: {
          flag: "findLikeAll",
          like: this.$store.state.Search.text,
          start: 0,
          end: 20,
        },
      })
        .then((res) => {
          this.currentPage =1
          console.log(res.count);
          // console.log( res.count/20 )
          this.$store.commit('Search/setList',{list:res.list})
          let pp = this.$store.state.Search.listPage
          pp.page = Math.ceil(res.count/20)
          this.$store.commit('Search/setListPage',{page:pp})

        })
        .catch((err) => {
          console.log(err);
        });
  },

  data(){
    return{
      currentPage:1,
      skipTo:1,
    }
  },
  methods: {
    skipPage(num){
      let searchData = this.$store.state.Search
      let currentPage = searchData.listPage.current
      let totalPage = searchData.listPage.page
      if ( num != currentPage && num>= 1 && num <= totalPage) {
        this.currentPage = num
        this.$ajax({
          method:"post",
          url:this.$url+"/db",
          data:{
            flag:"findLikeAll",
            like:searchData.text,
            start: (num-1)*20,
            end:20,
          },
        })
        .then(res=>{
          console.log('跳转'+num+'页面');
          this.$store.commit('Search/setList',{list:res.list})
          let pp = this.$store.state.Search.listPage
          pp.page = Math.ceil(res.count/20)
          pp.current = num
          this.$store.commit('Search/setListPage',{page:pp})
        })
      }
    },
    pageBtuClick(flag) {
      let searchData = this.$store.state.Search
    // 获取当前页
    let currentPage = searchData.listPage.current
    // 总页数
    let totalPage = searchData.listPage.page
    
    
  if('prev' == flag){ //上一页
    if(currentPage > 1){
      currentPage -= 1
      this.currentPage = currentPage
      this.$ajax({
        method: "post",
        url: this.$url + "/db",
        data: {
          flag: "findLikeAll",
          like: searchData.text,
          start: (currentPage-1)*20,
          end: 20,
        },
      })
      .then((res) => {
          
          console.log('上一页'+currentPage);
          console.log(res.count);
          // console.log( res.count/20 )
          this.$store.commit('Search/setList',{list:res.list})
          let pp = this.$store.state.Search.listPage
          pp.page = Math.ceil(res.count/20)
          pp.current = currentPage
          this.$store.commit('Search/setListPage',{page:pp})
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }else if('next' == flag){ //下一页
      
    if(totalPage > currentPage){
      
      this.$ajax({
        method: "post",
        url: this.$url + "/db",
        data: {
          flag: "findLikeAll",
          like: searchData.text,
          start: currentPage*20,
          end: 20,
        },
      })
        .then((res) => {
          currentPage += 1
          this.currentPage = currentPage
          console.log('下一页'+currentPage);
          console.log(res.count);
          // console.log( res.count/20 )
          this.$store.commit('Search/setList',{list:res.list})
          let pp = this.$store.state.Search.listPage
          pp.page = Math.ceil(res.count/20)
          pp.current = currentPage
          this.$store.commit('Search/setListPage',{page:pp})
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log("xxxxx");
    this.$emit("lOrRActive", true);
    next();
  },
};
</script>
<style lang="less" scoped>
@width: 1350px;
@secondwidth: 1070px;
.page {
  height: 57px;
  width: @secondwidth;
  background: white;
  overflow: hidden;
  .paging {
    width: 790px;
    // background: steelblue;
    margin: 0 auto;
    .pagingitem {
      display: flex;
      margin-top: 10px;
      .determine {
        width: 45px;
        height: 22px;
        margin-top: 5px;
        margin-left: 10px;
        background: white;
        color: rgb(61, 61, 61);
        border: 0.1px solid rgba(102, 102, 102, 0.185);
        &:hover {
          border: #f40 0.5px solid;
          color: #f40;
        }
      }
      .numbersmall {
        border: 1px solid rgba(102, 102, 102, 0.185);
        width: 37px;
        height: 23px;
        margin-top: 5px;
        margin-left: 5px;
        text-indent: 0.5em;
      }
      .pagenumber1 {
        height: 35px;
        padding-left: 5px;
        text-align: center;
        line-height: 35px;
      }
      .pagenumber2 {
        height: 35px;
        padding-left: 3px;
        text-align: center;
        line-height: 35px;
      }
      .pagenumber3 {
        width: 12px;
        height: 35px;
        padding-left: 10px;
        text-align: center;
        line-height: 35px;
      }
      .pagingup {
        cursor: pointer;
        width: 70px;
        height: 34.9px;
        display: block;
        text-align: center;
        line-height: 35px;
        color: #ccc;
        border: 0.1px solid rgba(102, 102, 102, 0.185);
      }
      .pagingnumber1 {
        cursor: pointer;
        width: 35px;
        height: 34.9px;
        border: 0.1px solid rgba(102, 102, 102, 0.185);
        display: block;
        text-align: center;
        line-height: 34.9px;
        color: #3d3d3d;
        &:hover {
          border: 0.1px solid #f40;
          color: #f40;
        }
      }
      .pagingupdow {
        cursor: pointer;
        width: 70px;
        height: 34.9px;
        display: block;
        text-align: center;
        line-height: 35px;
        border: 0.1px solid rgba(102, 102, 102, 0.185);
        &:hover {
          border: 0.1px solid red;
        }
      }
      .number1 {
        width: 35px;
        height: 35px;
        display: block;
        text-align: center;
        line-height: 35px;
        background: #ff4400;
        color: #fff;
        margin-left: 5px;
      }
      .spot {
        width: 24px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        display: block;
      }
    }
  }
}
</style>