<template>
  <div class="about">
    <h1>注册</h1>
    <router-link to="/">home</router-link>

  </div>
</template>

<script>
export default {
  created(){
    console.log( 'hello' )
    this.$emit('lOrRActive', false)
  },
 
  beforeRouteLeave(to, from, next) {
    console.log( 'xxxxx' )
    this.$emit('lOrRActive', true)
    next()
  },
};
</script>
