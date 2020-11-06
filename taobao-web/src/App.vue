<template>
  <div id="app">
    <Topbar v-show="showTopbar" />
    <router-view @lOrRActive='lOrRActiveClick'/>
  </div>
</template>
<script>
import Topbar from "@/components/Topbar.vue";


export default {
  components: { Topbar },
  data(){
    return {
      showTopbar:true
    }
  },
  
  methods:{
    lOrRActiveClick(flag){
      this.showTopbar = flag
    }
  },
  
};
</script>
<style lang="less">
@import url('//at.alicdn.com/t/font_2130964_pne02i0joho.css');
/**************************** CSS RESET  START************************************/ 
body{     font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif; color: #666; }
html,body,div,p, h1,h2,h3,h4,h5,h6,ul,ol,input,button{ padding: 0; margin: 0; }
ul,ol{ list-style: none; }
a{ text-decoration: none;  color: #333;}

input,button{ outline: none; border: none; }

.iconfont{ display: inline-block;}


/**************************** CSS RESET  END************************************/ 


/**************************** PUBLIC START************************************/ 
.container{
  width: 1190px; min-width: 1190px;
  margin: 0 auto;
}

/**************************** PUBLIC END************************************/ 





</style>
