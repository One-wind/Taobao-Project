<template>
  <div class="login">
    <div>
      <div class="container top">
        <router-link to="/">
          <span class="iconfont icon-taobaologo"></span>
        </router-link>
        <router-link to="/loginupata">
          <span class="iconfont icon-msg-o"></span>
          <span>"登录页面"改进建议</span>
        </router-link>
      </div>

      <div class="loginMain">
        <img class="loginBg" :src="imgAddr" alt="" />
        <div class="container">
          <router-link to="/" class="bgA"></router-link>
          <!-- 登录信息 -->
          <div class="loginWindow">
            <ul class="loginBtns">
              <li class="loginBtnsActive"><span>密码登录</span></li>
              <li><span>短信登录</span></li>
            </ul>
            <div class="usernameLogin">
              <div
                class="inputgroup"
                :class="{ inputError: inputError.username }"
              >
                <span class="iconfont icon-user"></span>
                <input
                  type="text"
                  placeholder="用户名/邮箱/手机号"
                  v-model="loginInfo.username"
                />
              </div>
              <div class="inputgroup" :class="{ inputError: inputError.pwd }">
                <span class="iconfont icon-lock"></span>
                <input
                  type="password"
                  placeholder="请输入登录密码"
                  v-model="loginInfo.pwd"
                />
              </div>
              <button class="loginBtn" @click="loginClick">登录</button>
              <div class="otherLogin">
                <router-link to="/"
                  ><span class="iconfont icon-weibo1"></span
                  >微博登录</router-link
                >
                <router-link to="/"
                  ><span class="iconfont icon-zhifubao"></span
                  >支付宝登录</router-link
                >
              </div>
              <ol class="otherBtns">
                <li><router-link to="/">忘记密码</router-link></li>
                <li><router-link to="/">忘记用户名</router-link></li>
                <li><router-link to="/register">免费注册</router-link></li>
              </ol>
            </div>
            <div class="phone"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgAddr: "http://192.168.6.48:3000/public/login/img1.png",
      loginInfo: {
        username: "xiaoming",
        pwd: "123456",
      },
      inputError: {
        username: false,
        pwd: false,
      },
    };
  },
  methods: {
    loginClick() {
      if (!this.loginInfo.username) {
        this.inputError.username = true;
        return;
      } else if (!this.loginInfo.pwd) {
        this.inputError.pwd = true;
        return;
      }
      // 重置出错误提示
      this.inputError = {
        username: false,
        pwd: false,
      };

      this.$ajax({
        method: "post",
        url: "http://192.168.6.48:3000/login",
        data: {
          username:this.loginInfo.username,
          pwd: this.loginInfo.pwd,
        },
      })
        .then((res) => {
          if('success' ==  res.state){
            // 清空用户输入
             this.loginInfo={
               username:'',
               pwd:''
             }
             console.log( res )
              this.$store.commit('UserInfo/setInfo',res.msg)
              // 存放登录状态到cookie中
              this.$cookie.add('loginState','loginSuccess')
              // 跳转到主页
              this.$router.push('/')
          }else{
            this.$cookie.add('loginState','loginError')     
          }
        })
        .catch((err) => {
          console.log(err);
          this.$cookie.add('loginState','loginError') 
        });
    },
  },
  created() {
    this.$emit("lOrRActive", false);
  },

  beforeRouteLeave(to, from, next) {
    this.$emit("lOrRActive", true);
    next();
  },
};
</script>

<style lang="less" scoped>
@logoColor: #f40;

.login {
  .top {
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon-taobaologo {
      font-size: 38px;
      color: @logoColor;
    }
    .icon-msg-o {
      color: @logoColor;
      margin-right: 6px;
    }
    a:hover {
      color: @logoColor;
    }
  }
  .loginMain {
    height: 600px;
    position: relative;
    overflow: hidden;
    .loginBg {
      height: 100%;
      position: absolute;
      top: 0;
      left: -33%;
    }
    .container {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -595px;
      height: 600px;
      display: flex;
      justify-content: space-between;
      .bgA {
        width: 630px;
        height: 440px;
        margin-top: 75px;
      }
      .loginWindow {
        width: 350px;
        height: 350px;
        padding: 25px;
        box-sizing: border-box;
        background: #e9e9f2;
        margin-top: 120px;
        margin-right: 30px;

        .loginBtns {
          font-size: 16px;
          color: #3c3c3c;
          font-weight: bold;
          display: flex;
          li {
            margin-right: 10px;
          }
          &Active {
            border-bottom: 2px solid #3c3c3c;
          }
        }
        .usernameLogin {
          margin-top: 20px;
          .inputgroup {
            width: 100%;
            display: flex;
            margin-bottom: 20px;
            span {
              height: 40px;
              width: 40px;
              background: red;
              text-align: center;
              line-height: 40px;
              background: #ccc;
              color: #fff;
            }
            input {
              height: 40px;
              flex-grow: 1;
              text-indent: 0.5em;
              font-size: 14px;
              color: #666;
            }

            &.inputError {
              border: 1px solid @logoColor;
              box-shadow: 0 0 8px rgba(255, 68, 0, 0.534);
            }
          }
          .loginBtn {
            width: 100%;
            height: 40px;
            background: @logoColor;
            color: #fff;
            font-size: 14px;
          }
          .otherLogin {
            margin: 10px 0;
            a {
              font-size: 12px;
              color: #6c6c6c;
              &:first-child > span {
                color: @logoColor;
                margin-right: 6px;
              }
              &:last-child > span {
                margin-left: 10px;
                margin-right: 6px;
                color: rgb(0, 0, 216);
              }
            }
          }
          .otherBtns {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            li {
              margin-left: 10px;
              a {
                color: #6c6c6c;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
