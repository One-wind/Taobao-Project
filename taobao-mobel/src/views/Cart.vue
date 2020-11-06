<template>
  <div class="Signin">
      <div class="TopRe">
          <span>您需要登录才能继续访问</span>
          <router-link to="/"><span>关闭</span></router-link>
      </div>
      <div class="tb-login">
          <!-- 淘宝logo -->
            <div class="tb-logo"><img src="../assets/taobaologo.png" alt="热门图片" class="imgs"></div>
            <div class="tbSingin">
                <!-- 账号密码 -->
                <div class="singin-text">
                    <input type="text" placeholder="手机号/邮箱/会员名" v-model="singinphone">
                    <img src="../assets/shanchu.png" alt="删除">
                </div>
                <div class="singin-sub">
                    <input :type="lookpaswod" placeholder="请输入登录密码" v-model="singinpaswod">
                    <img src="../assets/shanchu.png" alt="删除" class="ss-del">
                    <img src="../assets/xianshimima.png" alt="显示密码" class="ss-xs" ref='xianshimima' @click="xianshimima" v-show="lookpaswod=='text'">
                    <img src="../assets/yincangmima.png" alt="隐藏密码" class="ss-yc" ref='yincangmima' @click="yincangmima" v-show="lookpaswod=='password'">                                     
                </div>
                <!-- 短信验证、免费登录 -->
                <div class="verification">
                    <a href="javascript:" @click="goVerification">短信验证登录</a>
                    <a href="javascript:"><router-link to="/WuRegister">免费注册</router-link></a>                   
                </div>
                <div class="signin-btn">
                    <button @click="cartlonk">登录</button>
                </div>
                
            </div>
      </div>    
  </div>
</template>

<script>
export default {
    data(){
        return{
            lookpaswod:'password',
            singinphone:'',
            singinpaswod:'',
            item:''
        }
    },
    methods:{
        goVerification(){
            this.$router.push('./Verification')
        },
        xianshimima(){
            this.lookpaswod = 'password'           
        },
        yincangmima(){
            this.lookpaswod = 'text'
        },
        cartlonk(){
            // 13245698751
            function getCookieAll(){
                let coo = document.cookie
                if (coo == '') {
                    return null
                }
                //清除空格
                coo = coo.replace(/\s+/g, '')
                let cArr = coo.split(';')
                let cookies = {}
                cArr.forEach((coo) => {
                    let c = coo.split('=')
                    cookies[c[0]] = unescape(c[1])
                })
                return cookies
            }
            this.item = new getCookieAll()
            if(this.singinphone.length==0){
                alert('账号不能为空')
            }else if(this.singinpaswod.length==0){
                alert('密码不能为空')
            }else if(this.singinphone != this.item.phonenumber){
                alert('账号不存在')
                return
            }else if(this.singinpaswod != this.item.phonenumber){
                alert('密码不正确')
                this.singinpaswod = ''
                return
            }else{
                this.$router.push('./y_shopcart')
            }
            
        }
    },

};
</script>

<style lang="less" scoped>
@color:'#757575';
html,body{   
    width: 100%;
    height:26.5625rem;  
    font-family: PingFang SC,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,Microsoft YaHei;
    .Signin{
        background: #fff;
    .TopRe{
        width: 100%;
        height: 3.25rem;
        background: rgb(238, 238, 238);
        display: flex;
        justify-content: space-around;
        span{
            height: 3.25rem;
            line-height: 3.25rem;
            color: rgb(51, 51, 51);
            
        }
        a{
            text-decoration: none;
            span{
                color: rgb(153, 153, 153);
            }
        }
    }
    .tb-login{
    width: 100%;
    background: #fff;
    overflow: hidden;
    border: 0.0625rem solid #fff;
        .tb-logo{
            height:7.5rem ;
            width: 20.9375rem;
            background: #fff;
            margin: 0.625rem auto;
            .imgs{padding: 20px 128px;}
            }
        .tbSingin{
            width: 20.9375rem;
            height: 13.8125rem;
            // background: gold;
            margin: -0.3125rem auto;
            position: relative;
            .singin-text{
                background: #fff;
                position: relative;
                >input{
                    padding: 0 0.3125rem;
                    height: 1.75rem;
                    width: 20.3125rem;
                    border:none;
                    outline:none;  
                    border-bottom:0.0625rem solid rgb(255,80,0);
                    color: @color;
                }
                // 隐藏删除图标 
                >img{
                    position: absolute;
                    top: 0.375rem;
                    right: 0.625rem;
                    background: @color; 
                    display: none;   
                }
            }
            .singin-sub{
                margin:1.875rem 0;
                background: #fff;
                position: relative;
                >input{
                    padding: 0 0.3125rem;
                    height: 1.75rem;
                    width: 20.3125rem;
                    border:none;
                    outline:none;  
                    border-bottom:0.0625rem solid rgb(255,80,0);
                    color: @color;
                }
                // 隐藏删除图标 
                .ss-del{
                    position: absolute;
                    top: 0.375rem;
                    right: 2.1875rem;
                    background: @color; 
                    display: none;   
                }
                // 密码隐藏
                .ss-yc{
                    position: absolute;
                    top: 0.3125rem;
                    right: 0.625rem;
                    background: @color; 
                    // display: none;   
                }
                // 密码显示
                .ss-xs{
                    position: absolute;
                    top: 0.3125rem;
                    right: 0.625rem;
                    background: @color; 
                    // display: none;   
                }
            }
            // 短信验证
            .verification{
                width: 100%;
                background: #fff;
                margin: -0.625rem 0;
                display: flex;
                justify-content:space-between;
                position: absolute;
                >a{
                    color: #555555;
                    font-size: 0.875rem;
        
                }              
            }
        .signin-btn{
            text-align: center;
            // background: blue;
            margin: 5rem 0;
            >button{
                height:2.8125rem ;
                width:20.9375rem;
                border: none;
                border-radius: 2.5rem;
                background-image:linear-gradient(to right,#ff8f00,#ff5200);
                color: #fff;
                font-size: 1rem;
                
            }
            


        }
        }      
    }
    }
}



</style>