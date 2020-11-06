<template>
  <div class="orderList" ref="odL" @scroll="listScroll">
    <MyTopBar></MyTopBar>
    <keep-alive>
      <component :is="this.$store.state.compX" @myScroll="jieshou" :num='listSn'></component>
    </keep-alive>
  </div>
</template>

<script>
import AllOrders from './orders/AllOrders.vue'
import ToBeDelivered from './orders/ToBeDelivered.vue'
import MyTopBar from './orders/MyTopBar.vue'
import WaitForPay from './orders/WaitForPay.vue'
import DaiShouHuo from './orders/DaiShouHuo'
import DaiPingJia from './orders/DaiPingJia.vue'

export default {
  name: "orderList",
  data() {
    return {
      compX:'AllOrders',
      bottomdiv:0,
      listSn:5,
    }
  },
  components:{
    AllOrders,ToBeDelivered,MyTopBar,WaitForPay,DaiShouHuo,DaiPingJia
  },
  methods:{
    listScroll(ev){
      let botlen=this.bottomdiv.getBoundingClientRect().top
      if(botlen -iH <10){
        this.listSn += 5
      }
    },
   
    jieshou(...args){
      this.bottomdiv=args[0];
    },
  },
}
</script>

<style lang="less" scoped>
// @import url('//at.alicdn.com/t/font_2136389_i6xcdcdf4ld.css');
.orderList{
  height: 100%;
  overflow-y: auto;
}
</style>
