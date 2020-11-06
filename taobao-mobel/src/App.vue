<template>
  <div id="app">
    <!-- <router-view class="main"/> -->
    <!-- <Navbar class="appNavbar"></Navbar> -->

    <router-view class="main" @lOrRActive="lOrRActiveClick" />
    <Navbar class="appNavbar" v-show="showTopbar"></Navbar>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{ Navbar },
  data() {
    return {
      showTopbar: true,
    };
  },
   methods: {
    lOrRActiveClick(flag) {
      console.log(flag);
      this.showTopbar = flag;
    },
  },
}
</script>
<style lang="less">
@import url('//at.alicdn.com/t/font_2152971_ju6g4jd1x3h.css');


@color:#999;

*{
  padding: 0; margin: 0;
}
ul,ol{
  list-style: none;
}
a{
  text-decoration: none;
  color: @color;
}


body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: @color;
  background: #f2f2f2;
}

#app{
  height: 100%;
  overflow-y: auto;
}

.main{
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // background: red;
  height: 100%;
}
.appNavbar{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}



</style>
