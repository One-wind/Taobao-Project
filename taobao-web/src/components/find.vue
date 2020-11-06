
<template>
  <div>
    <div id="find">
      <div class="context">
        <input type="text" class="search" :placeholder="searchText"  
            v-model="searchText"   @change='searchChangeClick(searchText)'/>
        <div class="btn">搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['searchChangeClick', 'searchText'],
    
    data() {
        return {
            // searchText:''
        }
    },
  created() {
      this.searchText = this.$store.state.Search.text
  },
};
</script>
<style lang="less" scoped>
#find {
  position: relative;
  .context {
    margin: auto;
    display: flex;
    position: absolute;
    left: 50%;
    top: 35%;
    margin: 0 0 0 -273px;
    .search {
      height: 35px;
      width: 519px;
      outline: none;
      border: 2px solid #f40;
      box-sizing: border-box;
      text-indent: 1em;
      &::placeholder {
        color: black;
      }
    }
    .btn {
      height: 35px;
      width: 80px;
      background: #f40;
      cursor: pointer;
      color: #fff;
      font-weight: bold;
      text-align: center;
      line-height: 35px;
    }
  }
}
</style>