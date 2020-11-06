<template>
  <div class="login">
    <div class="loginWindow">
        <h2>管理员登录</h2>
      <el-row class="inputGroup">
        <el-col class="lable" :span="6"><span>用户名：</span></el-col>
        <el-col :span="18">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-row>
      <el-row  class="inputGroup">
        <el-col class="lable" :span="6"><span>密码：</span></el-col>
        <el-col :span="18">
          <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
        </el-col>
      </el-row>

    <el-row  class="btns">
        <el-col :span="3" style='height:10px'> </el-col>
        <el-col :span="8" class="btnCol">
            <el-button>取消登录</el-button>
        </el-col>
        <el-col :span="2" style='height:10px'> </el-col>
        <el-col :span="8" class="btnCol">
            <el-button type="primary" @click.stop="loginClick">登录</el-button>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-alert
                :title="errorText"
                type="error" v-show="errorText">
            </el-alert>
        </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
      return {
          username:'admin',
          password:'admin',
          errorText:''
      }
  },
  methods: {
      loginClick(){
            const username = this.username.trim()
            const pwd  = this.password.trim()
            if(!username){
                this.errorText  = '请填写用户名'
                const h = this.$createElement;
                this.$notify({
                title: '错误！',
                 message: h('span', { style: 'color: teal'}, 
                 '请填写用户名'),
                  duration: 1000
                });
                return
            }else if(!pwd){
                this.errorText  = '请填写密码'
                const h = this.$createElement;
                this.$notify({
                title: '错误！',
                 message: h('span', { style: 'color: teal'}, 
                 '请填写用户密码'),
                  duration: 1000
                });
                return
            }
            
            this.errorText  = ''

            // 验证登录用户的信息
            this.$ajax({
                method:'post',
                url:this.$url+'/tbserver',
                data:{
                    flag:'login',
                    username:username,
                    pwd:pwd
                }
            }).then(res=>{
              
                if('success' == res.stateText){
                    if(1 == res.admin ){
                        let loginInfo =  JSON.stringify(res)
                        this.$cookie.add('login',loginInfo, 30)
                        this.$router.push('/')
                        return
                    }else{
                         this.$alert('非管理员用户验证不成功', '登录失败', {
                            confirmButtonText: '确定', callback: action => { }
                            });
                    }
                }else{
                    const h = this.$createElement;
                    this.$message({
                        message: h('p', null, [
                            h('span', { style: 'color: #F56C6C' }, '用户登录失败！ '),
                            h('i', { style: 'color: #F56C6C' }, '登录失败，请重试！')
                        ]),
                        duration: 3000,
                    });
                }

                this.$cookie.delByName('login')


            }).catch(err=>{
                console.log(err )
            })

          
      }
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  .loginWindow {
    box-sizing: border-box;
    width: 400px;
    height: 400px;
    padding: 20px;
    border: 1px solid#EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    >h2{
        text-align: center;
        padding: 20px 0;
    }
    .inputGroup{
        padding: 10px 0;
        .lable>span{
            display: block;
            height: 40px;
            line-height: 40px;
            text-align: right;
        }
    }
    .inputErrorAcrive{
        border-color: #F56C6C;
    }
    .btns{
        padding: 10px 0;
        text-align: center;
        .btnCol{
            
            button{
                width: 100%;
            }
        }
    }
  }
}
</style>
