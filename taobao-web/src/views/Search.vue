
<template>
  <div id="all" >
    
    <search :searchChangeClick='searchChangeClick'
      :searchText='searchText'></search>
    <div id="content">
        <div class="main">
            <kind></kind>
            <sort></sort>
            <page></page>
        </div>
        <advertise></advertise>
    </div>
    <Register></Register>
    <find  :searchChangeClick='searchChangeClick' :searchText='searchText'></find>
    <buttom></buttom>
  </div>
</template>
<script>

import kind from '../components/kind'
import advertise from '../components/advertise'
import search from '../components/SearchInput'
import sort from '../components/sort'
import Register from '../components/Register'
import page from '../components/page'
import buttom from '../components/buttom'
import find from '../components/find'
export default {

  components:{
    kind,
    advertise,
    search,
    sort,
    Register,
    page,
    buttom,
    find
  },
  data() {
    return {
      searchText:'',
    }
  },
  created(){
    this.$store.commit('Search/setText',{text:this.$route.params.text})
    this.searchText = this.$route.params.text
  },
  methods:{
    searchChangeClick(searchText){
      this.$store.commit('Search/setText',{text:searchText})
      this.searchText = searchText

      this.$ajax({
        method:'post',
        url:this.$url+'/db',
        data:{
          flag:'findLikeAll',
          like: this.searchText,
          start:0,
          end:20
        }
      }).then(res=>{
        console.log( res.count/20 )
        this.$store.commit('Search/setList',{list:res.list})
        let pp = this.$store.state.Search.listPage
        pp.page = Math.ceil(res.count/20)
        this.$store.commit('Search/setListPage',{page:pp})
       
      }).catch(err=>{
        console.log( err )
      })
      
      
    }
  }


}
</script>

<style lang="less" >
@import url('//at.alicdn.com/t/font_2136438_ewy1jjr0bqi.css');
   @width:1350px;
   @secondwidth:1070px;
   #all,html,body{
     height: 100%;
     widows: 100%;
   }
    #top{
        height: 36px;
        width: 100%;
        background: red;
    }
   
    #content{
        width: @width;
        /* height: 300px; */
        // background: palegreen;
        margin: auto;
        display: flex;
        .main{
        /* height: 300px; */
        width: @secondwidth;
            
        }
       
    }  
    #buttomcontent{
        height: 442px;
        width: @width;
        margin: auto;
    }
    #find{
        height: 55px;
        width: @width;
        // background: saddlebrown;
        margin: auto;
        margin-bottom: 10px;
    }
    #buttom{
        height: 248px;
        width: 100%;
        background: salmon;
    }

</style>
