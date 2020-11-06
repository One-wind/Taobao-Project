<template>
    <div class="bod">
        <div class="regist">
            <!-- 顶部标题 -->
            <div class="hello">
                <p>手机号注册</p>
                <p>亲，欢迎注册淘宝账号</p>
            </div>
            <!-- 手机号验证码输入组 -->
            <div class="ipt">
                <div class="phoneNum" @click="phonSelet">
                    <span data-sel='sel'>+{{phoneReg}}</span>
                    <span class="iconfont icon-down" data-sel='sel'></span>
                    <input type="number" placeholder="请输入你的手机号码" @input="iptChange" v-model="phonenumber" />
                    <div class="addr" v-show="seletShow">
                        <div>
                            <span @click="phonSeletN">取消</span>
                            <span @click="phonSeletY">确定</span>
                        </div>
                        <div class="scrol" @scroll="seletScroll">
                            <ul >
                                <li ref="86">中国大陆 +86</li>
                                <li ref="886">中国台湾 +886</li>
                                <li ref="852">中国香港 +852</li><div></div>
                                <li ref="60">马来西亚 +60</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="vCode">
                    <input type="number" placeholder="请输入校验码" @input="iptChange" v-model="yzmnumber" />
                    <span @click="getVcode" v-cloak>{{verificationtext}}</span>
                </div>
                <div class="yzm" v-show="verificationtext!='获取验证码'">
                    <div><img src="../../assets/yes.png" alt=""></div>
                    <span>短信验证码已发送，可能会有延后请耐心等待</span>
                </div>
                
            </div>
            <!-- 提交按钮 -->
            <div  class="btn" @click="btnok" :style="{background: isChangeBg ? 'linear-gradient(to right , #ff9800 , #ff5301)' : 'linear-gradient(to right, #ffcc80 , #ffa980)' }">
                <span>同意并注册</span>
            </div>
            <!-- 声明文本 -->
            <div class="text">
                <span>已阅读并同意以下协议
                    <a href="javascript:;">淘宝平台服务协议</a>、
                    <a href="javascript:;">隐私权政策</a>、
                    <a href="javascript:;">法律声明</a>、
                    <a href="javascript:;">支付宝及客户端服务协议</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            seletShow:false,
            phoneReg:86,
            seletY:86,
            isChangeBg:false,
            phonenumber:'',
            yzmnumber:'',
            timeNumber:60,
            verificationtext:'获取验证码',
            flag:false
        }
    },
    methods:{
        btnok(){
            let re = /^1[3456789]\d{9}$/g             
            if(this.phonenumber.length==0){
                alert('请输入手机号')
            }else if(!re.test(this.phonenumber)){
                alert('手机号输入错误，请重新输入')
            }else if(this.yzmnumber.length==0){
                alert('请输入验证码')
            }else if(this.yzmnumber.length!=6){
                alert('请输入6位验证码')
            }else{
                function setCookie(name, value, minute){
                    let va = escape(value)
                    let data = new Date()
                    if (minute) {
                        data.setTime(data.getTime() + 1000 * 60 * minute)
                        document.cookie = `${name}=${va};expires=${data.toUTCString()}`
                    } else {
                        document.cookie = `${name}=${va}` //当前会话关闭就超时
                    }
                }
                setCookie('phonenumber',this.phonenumber,60*24)
                setCookie('yzmnumber',this.yzmnumber,60*24)
                alert('注册成功')
                this.$router.push('/Cart')
            }
        },
        phonSelet(ev){
            if(ev.target.dataset.sel){
                this.seletShow = true
            }
        },
        phonSeletN(){
            this.seletShow = false
        },
        seletScroll(ev){
            let selBottom1 = this.$refs['86'].getBoundingClientRect().bottom
            let selBottom2 = this.$refs['886'].getBoundingClientRect().bottom
            let selBottom3 = this.$refs['852'].getBoundingClientRect().bottom
            let selBottom4 = this.$refs['60'].getBoundingClientRect().bottom
            if( selBottom1>550 && selBottom1<580){
                this.seletY = 86
            }
            else if( selBottom2>550 && selBottom2<580){
                this.seletY = 886
            }
            else if( selBottom3>550 && selBottom3<580){
                this.seletY = 852
            }else if( selBottom4>550 && selBottom4<580){
                this.seletY = 60
            }
        },
        phonSeletY(){
            this.seletShow = false
            this.phoneReg = this.seletY
        },
        getVcode(){
            let re = /^1[3456789]\d{9}$/g
            if(this.phonenumber.length==0){
                alert('请输入手机号码')
            }else if(!re.test(this.phonenumber)){
                alert('手机号输入错误，请重新输入')
            }else if(this.timeNumber!=60){
                alert('请勿重复操作')
                return
            }else{
                // 验证码倒计时  13254784512
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
            }
            this.flag = true
        },
        iptChange(){
            if(this.phonenumber && this.yzmnumber){            
                this.isChangeBg = true
            }else{
                this.isChangeBg = false
            }
        },    
           
    },
    watch :{
        yzmnumber(){
            if(this.flag==false){
                this.yzmnumber=''
                alert('请先获取验证码')
                return             
            }           
        },
    }
}
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_2154319_eiwbfjr43es.css');
[v-clock]{
    display: none;
}
.bod{
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
}
.regist{
    background: #fff;
    padding-top: 60px;
    padding-left: 1.25rem;
    //顶部标题
    .hello{
        font-size: 1.875rem;
        color: #333;
        p{
            display: flex;
        }
        :last-child{
            font-size: 1rem;
            color: #999;
            margin: 0.625rem 0 0;
        }
    }
    //手机号验证码输入组
    .ipt{
        margin-top: 3.125rem;
        .yzm{
            color: red;
            font-size: 12px;
            display: flex;

        }
        //手机号输入框
        .phoneNum{
            font-size: 1rem;
            color: #000;
            margin: 0.625rem 0;
            margin-top: 3.4375rem;
            border-bottom: 1px solid #999;
            width: 20rem;
            display: flex;
            align-items: center;
            >span{
                width: 30px;
                padding-left: 5px;
            }
            .iconfont{
                font-size: 0.75rem;
                color: #000;
                margin-left: 0.3125rem;
            }
            input{
                outline: none;
                border: none;
                font-size: 1rem;
                line-height: 3rem;
                margin-left: 0.9375rem;
                &::placeholder{
                    font-size: 16px;
                    color: #999;
                }
            }
            .addr{
                width: 100%;
                // height: 14.875rem;
                background:#fff;
                position: absolute;
                left: 0;
                bottom: 0;
                div{
                    font-size: 1rem;
                    color: #ff5000;
                    line-height: 2.625rem;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #ececec;
                    span{
                        padding: 0 0.9375rem;
                    }
                }
                .scrol{
                    width: 100%;
                    height: 14.875rem;
                    overflow-y: auto;
                }
                ul{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 14.875rem;
                    position: relative;
                    li{
                        text-align: center;
                        color: #999;
                        z-index: 200;
                        &:first-child{
                            margin-top: 100px;
                        }
                        &:last-child{
                            margin-bottom: 100px;
                        }
                        
                    }
                    div{
                        width: 100%;
                        height: 40px;
                        border-top: 1px solid #dcdcdc;
                        border-bottom: 1px solid #dcdcdc;
                        position: fixed;
                        bottom: 100px;
                        z-index: 100;
                    }
                }
            }
        }
        //验证码输入框
        .vCode{
            font-size: 1rem;
            color: #ff5000;
            margin: 0.625rem 0;
            border-bottom: 1px solid #999;
            width: 20rem;
            input{
                outline: none;
                border: none;
                font-size: 1rem;
                line-height: 3rem;
                margin-left: 0.625rem;
                width: 13.75rem;
                &::placeholder{
                    font-size: 16px;
                    color: #999;
                }
                
            }
            span{margin-right: 0;}
        }
    }
    //提交按钮
    .btn{
        width: 20rem;
        height: 2.8125rem;
        background: linear-gradient(to right, #ffcc80 , #ffa980);
        // background: linear-gradient(to right, #ff9800 , #ff5301);
        border-radius: 1.875rem;
        text-align: center;
        line-height: 2.8125rem;
        font-size: 1.125rem;
        color: #fff;
        margin-top: 28px;
        .changeBg{
            background: linear-gradient(to right, #ff9800 , #ff5301);
        }
    }
    //声明文档
    .text{
        width: 20rem;
        margin-top: 1.875rem;
        font-size: 0.75rem;
        color: #999;
        a{color: #ff5000;}
    }
    
}

</style>