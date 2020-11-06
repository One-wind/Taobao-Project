<template>
  <div class="home">
    <el-container class="">
      <el-header class="header">
        <div class="container">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
             @select="navbarSelectClick"
          >
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2">数据更新</el-menu-item>
            <el-menu-item index="3">退出登录</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main class="main container">

          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="id">
                <el-input v-model="form.id" disabled></el-input>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="form.name" :minlength='5' :maxlength="16" 
                    clearable></el-input>
            </el-form-item>
            <el-form-item label="描述信息">
                <el-input type="textarea"  v-model="form.info"
                    :minlength='10' :maxlength="50" 
                    resize='none' show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="商品图片">
                <ul class="imgs">
                    <li v-for="(item, i) in form.imgs" :key='i'><img :src="$url+'/'+item" alt="图片加载失败"></li>
                </ul>
            </el-form-item>
            <el-form-item label="评价">
                <el-input v-model="form.pengJia" type="number"></el-input>
            </el-form-item>
            <el-form-item label="收藏">
                <el-input v-model="form.showCang" type="number"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.price" type="number"></el-input>
            </el-form-item>
            <el-form-item label="成交量">
                <el-input v-model="form.shouChu" type="number"></el-input>
            </el-form-item>
            
            <el-form-item label="类型" >
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="手机" value="1"></el-option>
                <el-option label="电脑1" value="2"></el-option>
                <el-option label="电脑2" value="3"></el-option>
                <el-option label="电脑3" value="4"></el-option>
                <el-option label="电脑4" value="5"></el-option>
                <el-option label="电脑5" value="6"></el-option>
                </el-select>
            </el-form-item>
           <el-form-item>
                <el-button type="primary" @click="onSubmit">更新</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex:"2",
             form: {}
        }
    },
    created(){
        let loginInfo = this.$cookie.get("login");
        // 没有登录，跳转到登录页面
        if (!loginInfo) {
        this.$router.push("/login");
        return;
        }
        // console.log(this.$route.params);
        this.getData(this.$route.params.id)
    },
    methods:{
        // 导航栏点击
        navbarSelectClick(index){
        if(1 == index){ //主页
             this.$router.push("/");
        }else if(3 == index){ //退出
            this.$cookie.delByName('login')
            this.$router.push("/login");
        }
        },
        onSubmit() {
            // 数据判断 。。。。


            this.$ajax({
                url:this.$url+'/tbserver',
                method:'post',
                data:{
                    flag:'updata',
                    id:this.form.id,
                    name:this.form.name,
                    info:this.form.info,
                    price:this.form.price,
                    pengJia:this.form.pengJia,
                    showCang:this.form.showCang,
                    type:this.form.type,
                    shouChu:this.form.shouChu,
                }
            }).then(res=>{
                if('updataSuccess' == res.stateText){
                    this.$message('修改数据成功')
                    this.$router.push('/')
                }
            }).catch(err=>{
                console.log( err )
            })


        },
        //   获取数据
        getData(id){
            this.$ajax({
                url:this.$url+'/tbserver',
                method:'post',
                data:{
                    flag:'findbyid',
                    id:id
                }
            }).then(res=>{
                console.log( res )
                if('success' == res.stateText){
                    this.form = res.data
                }

            }).catch(err=>{
                console.log( err )
            })
        }
    }
};
</script>


<style lang="less" scoped>
.header {
  background: rgb(84, 92, 100);
}
.imgs{
    display: flex;
    li{
        width: 200px;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}

</style>
