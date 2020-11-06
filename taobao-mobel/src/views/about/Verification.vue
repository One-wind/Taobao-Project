<template>
  <div class="verification">
      <div class="TopRe">
          <span>您需要登录才能继续访问</span>
          <router-link to="/"><span>关闭</span></router-link>
      </div>
      <div class="dd">
        <img src="../../assets/V-logo.png" alt="">
      </div>
      <div class="yanz">
          <select>
            <option value ="volvo">+86</option>
            <option value ="saab">+568 </option>
            <option value="opel">+878</option>
            <option value="audi">+456</option>
          </select>
          <input type="number" placeholder="请输入手机号" v-model="textzhao" />
      </div>
      <div class="yans">
          <input type="number" placeholder="请输入验证码" v-model="textmm" />
          <span @click="verification">{{verificationtext}}</span>
      </div>
      <div class="yzm" v-show="verificationtext!='获取验证码'">
          <div><img src="../../assets/yes.png" alt=""></div>
          <span>短信验证码已发送，可能会有延后请耐心等待</span>
        </div>
      <div class="zc"><span><router-link to="/WuRegister">免费注册</router-link></span></div>
      <div class="dl" @click="getverification">登录</div>
      <div class="zh"><router-link to="/Cart">账号密码登录</router-link></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            textzhao:'',
            textmm:'',
            timeNumber:60,
            verificationtext:'获取验证码',
            flag:false,
            item:''
        }
    },
    methods:{  
        verification(){
            let re = /^1[3456789]\d{9}$/g 
            if(this.textzhao.length==0){
                alert('请输入手机号码')
                return
            }else if(!re.test(this.textzhao)){
                alert('手机号码格式不正确，请重新输入')          
            }else if(this.timeNumber!=60){
                alert('请勿重复操作')
                return
            }else{
                // 验证码倒计时 13254789661
                let timeout = setInterval(() => {
                    if(this.timeNumber==0){
                        this.verificationtext = '请重新发送'  
                        this.timeNumber = 60                   
                        clearInterval(timeout)
                        return
                    }
                    this.verificationtext = `${this.timeNumber}秒后重发`
                    this.timeNumber--             
                }, 1000);
                console.log(timeout)
                this.flag = true
            }        

        },
        getverification(){
            // 获取cooki的全部数据
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
                console.log(cookies)
                return cookies
            } 
            this.item = new getCookieAll()     
            if(this.textzhao.length==0){
                alert('请输入手机号码')
            }else if(this.verificationtext=='获取验证码'){
                alert('请先发送短信验证码')
            }else if(this.textzhao.length!=11){
                alert('手机号码格式不正确，请重新输入')
            }else if(this.textmm.length!=6){
                alert('请输入6位数短信验证码')          
            }else if(this.textzhao != this.item.phonenumber){
                alert('账号不存在')
                return
            }else{ 
                // 清空文本框
                this.textmm = ''
                this.textzhao = '' 
                this.$router.push('/y_shopcart')
            }
               
                      
        }
    },
    watch:{
        textmm(){
            if(this.flag==false){              
                this.textmm='' 
                alert('请先获取验证码')
                return
            }
        }
    },
};
</script>

<style lang="less" scoped>
.verification{
    background: #fff;
    .yzm{
        color: red;
        font-size: 12px;
        display: flex;
        margin: 0 auto;
        margin-left: 1.25rem;
        margin-bottom: 0.625rem;
        // display: none;
    }
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
    .dd{
        display: flex;
        justify-content: center;
        img{
        width: 5rem;
        height: 5rem;
        }
    }
    .yanz{
        width: 20.9375rem;
        height: 1.875rem;
        margin: 2.5rem auto;
        display: flex;
        border-bottom: 1px solid #f40;
        select{
            border: none;
        }
        input{
            flex-grow: 1;
            border: none;
            font-size: 1rem;
            outline: none;
            border: none;
        }
    }
    .yans{
        width: 20.9375rem;
        height: 1.875rem;
        margin: 0.5rem auto;
        display: flex;
        border-bottom: 1px solid #f40;
        input{
            flex-grow: 1;
            border: none;
            font-size: 1rem;
            outline: none;
            border: none;
        }
        span{
            height: 1.875rem;
            line-height: 1.875rem;
            font-size: 1rem;
            color: #f50;
        }
    }
    .zc{
        width: 20.9375rem;
        margin: 0 auto;
        span{
            font-size: 0.875rem;
            color: #555;
        }
    }
    .dl,.zh{
        width: 20.9375rem;
        height: 2.8125rem;
        margin: 0.9375rem auto;
        border-radius: 2.1875rem;
        border: 1px solid #f50;
        text-align: center;
        line-height: 2.8125rem;
        font-size: 1rem;
    }
    .dl{
        background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
        color: #fff;
    }
    .zh{
        color: #f50;
    }
}


</style>
