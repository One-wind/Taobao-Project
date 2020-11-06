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
            <el-menu-item index="2">添加</el-menu-item>
            <el-menu-item index="3">退出登录</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main class="main container">
        <ul class="list">
          <li class="listItem" v-for="(item, i) in listData.list" :key='i'>
            <el-row>
              <el-col :span="2" class="id"><span>{{item.id}}</span></el-col>
              <el-col :span="8" class="name"><p>{{item.name}}</p></el-col>
              <el-col :span="8" class="imgs">
                <div v-for="(src, key) in item.imgs" :key="key"> <img :src="$url+'/'+src" alt=""/> </div>
               
              </el-col>
              <el-col :span="6" class="btns" >
                <div @click.stop='btnsClick( $event,item.id)'>
                  <span class="el-icon-search" data-key='find'>查看</span>
                  <span class="el-icon-setting" data-key='update'>更新</span>
                  <span class="el-icon-delete" data-key='del'>删除</span>
                </div>
              </el-col>
            </el-row>
          </li>
         
        </ul>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :page-size="20"
            prev-text='上一页'
            next-text='下一页'
            hide-on-single-page
            :total="listData.total?listData.total:0"
            @prev-click='pagination'
            @next-click='pagination'

          >
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeIndex: "1",
      listData: {},
    };
  },
  created() {
    let loginInfo = this.$cookie.get("login");
    // 没有登录，跳转到登录页面
    if (!loginInfo) {
      this.$router.push("/login");
      return;
    }
    this.getData(1);
  },
  methods: {
    // 导航栏点击
    navbarSelectClick(index){
      console.log(index)
      if(1 == index){ //主页

      }else if(2 == index){ //添加新数据
        this.$router.push('/add')
        console.log('sssssssss')
      }else if(3 == index){ //退出
        this.$cookie.delByName('login')
        this.$router.push("/login");
      }
    },
    // 数据的增删除改操作
    btnsClick(ev,id){
      console.log( id )
      if(ev.target.dataset.key){
        switch (ev.target.dataset.key) {
          case 'find':

            break;
          case 'update':
            this.$router.push(`/updata/${id}`)
            break;
          case 'del':
              this.delByID(id)
            break;
        }
      }
    },
    // 删除数据
    delByID(id){
      
      this.$confirm(`此操作将永久删除ID:${id}值为该数据, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log( '删除....',id )
          this.$ajax({
            url:this.$url+'/tbserver',
            method:'post',
            data:{
              flag:'delbyid',
              id:id
            }
          }).then(res=>{
            console.log( res )

            this.$message({ype: 'success', message: '删除成功!'});
            this.getData(1)
          }).catch(err=>{
            console.log( err )
          })


          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

    },
    // 分页
    pagination(pageNum){
      this.getData(pageNum)
    },
    // 获取数据
    getData(page) {
      this.$ajax({
        url: this.$url + "/tbserver",
        method: "post",
        data: {
          flag: "findall",
          start: page * 20 -20,
          num: 20,
        },
      })
        .then((res) => {
          if ("success" == res.stateText) {
            this.listData = res;
          } else {
            const h = this.$createElement;
            this.$message({
              message: h("p", { style: "color: #F56C6C" }, [
                h("span", { style: "color: #F56C6C" } , "服务离家出走中，请稍后再试 "),
                h("i", { style: "color: #F56C6C" }, ""),
              ]),
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style lang="less" scoped>
.header {
  background: rgb(84, 92, 100);
}
.main {
  .listItem {
    padding: 10px 0;
    .id {
      height: 84px;
      line-height: 84px;
      text-align: center;
      color: #303133;
    }
    .imgs {
      display: flex;
      img {
        width: 100%;
        height: autos;
      }
    }
    .btns {
      display: flex;
      height: 84px;
      justify-content: flex-end;
      align-items: center;
      span {
        padding: 5px 6px;
        &:hover {
          color: #409eff;
        }
      }
      cursor: pointer;
    }
    &:nth-child(odd) {
      background: #f2f6fc;
    }
  }

  .el-pagination {
    margin: 20px 0;
    text-align: center;
  }
}
</style>
