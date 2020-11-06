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
      <el-main class="main container" :file-list="fileList">

          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="名称">
                <el-input v-model="form.name" :minlength='5' :maxlength="16" 
                    clearable></el-input>
            </el-form-item>
            <el-form-item label="描述信息">
                <el-input type="textarea"  v-model="form.info" :minlength='10' :maxlength="50" 
                    resize='none' show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="商品图片" class="uploadPic">
                <div class="uploadPicArea" 
                @dragenter='dragClick("in")'
                @dragleave='dragClick("out")'
                @dragover.prevent ='' 
                @drop.prevent='uploadDropClick' >{{uploadPicTip}}</div>
                <!--  -->
                <ul class="pics" @click.stop="delImgClick" >
                    <li class="pic" v-for="(path,jj) in form.imgs" :key="jj" >
                        <img  :src="$url+'/'+path" />
                        <span :data-path='path' class='el-icon-delete-solid'></span>
                    </li>
                </ul>
                
            </el-form-item>
            <el-form-item label="商品图片">
               
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.price" type="number" clearable></el-input>
            </el-form-item>
            
            <el-form-item label="类型" >
                <el-select v-model="form.type" placeholder="请选择活动区域">
                <el-option label="手机" value="1"></el-option>
                <el-option label="电脑1" value="2"></el-option>
                <el-option label="电脑2" value="3"></el-option>
                <el-option label="电脑3" value="4"></el-option>
                <el-option label="电脑4" value="5"></el-option>
                <el-option label="电脑5" value="6"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
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
            form: {
               name:'', //名称
               info:'', //描述
               type:1, //类型
               price:0, //价格
               imgs:[], //图片
            },
            fileList:'',
            uploadPicTip:'拖拽图片上传',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
        }
    },
    created(){
        let loginInfo = this.$cookie.get("login");
        // 没有登录，跳转到登录页面
        if (!loginInfo) {
        this.$router.push("/login");
        return;
        }
    },
    methods:{
        //删除图片
        delImgClick(ev){
            const path = ev.target.dataset.path
            if(path){
               
                this.$ajax({
                    url:this.$url+'/delpic',
                    method:'post',
                    data:{
                        path:path
                    }
                }).then(res=>{
                    if('delSuccess' == res.stateText){
                        let i = this.form.imgs.indexOf(path)
                        this.form.imgs.splice(i,1)
                    }
                }).catch(err=>{
                    console.log( err )
                })
            }
        },
        //拖拽图片悬停
        dragClick(flag){
            if('in' == flag){
                this.uploadPicTip = '松开上传图片'
            }else if('out' === flag){
                this.uploadPicTip = '拖拽图片上传'  
            }
        },
        // 拖拽图片上传
        uploadDropClick(ev){
            this.uploadPicTip = '图片上传中...'
            const files = ev.dataTransfer.files
            //检查上传的是否是图片
            for(let i=0 ; i<files.length; i++ ){
                const re = /image/gi
                if(!re.test(files[i].type)){
                    this.uploadPicTip = '请选择图片'
                    this.$message('上传的不是图片！');
                    return
                }
            }
            if(files.length>5){
                this.$message('最多只能上传5张图片');
                return
            }
            let data={}
            for(let i=0 ; i<files.length; i++ ){
                data[`pic${i}`] = files[i]
            }
            // 上传图片
            this.$ajax({
                url:this.$url+ '/uploadimgs',
                method:'post',
                data:data,
            }).then(res=>{
                if('uploadSuccess' == res.stateText){
                    this.form.imgs = res.imgPath
                }
            }).catch(err=>{
                console.log( err )
            })
        },

        // 图片上传el


        // 导航栏点击
        navbarSelectClick(index){
            if(1 == index){ //主页
                this.$router.push('/')
            }else if(2 == index){ //添加新数据
            }else if(3 == index){ //退出
                this.$cookie.delByName('login')
                this.$router.push("/login");
            }
        },
        // 提交数据保存
        onSubmit() {
            // 验证数据是否正确
            if(!this.form.name){
                 this.$message('名称不能为空');
                 return
            }else if(!this.form.info){
                this.$message('描述不能为空' );
                 return
            }else if(!this.form.imgs.length){
                this.$message('请上传图片');
                 return
            }

            // 添加到数据库
            console.log( this.form )
            this.$ajax({
                url:this.$url+'/tbserver',
                method:'post',
                data:{
                    flag:'add',
                    name:this.form.name,
                    info:this.form.info,
                    type:this.form.type,
                    price:this.form.price,
                    imgs:JSON.stringify(this.form.imgs)
                }
            }).then(res=>{
                console.log( res )
                if('addSuccess' == res.stateText){
                    this.form = {
                        name:'', //名称
                        info:'', //描述
                        type:1, //类型
                        price:0, //价格
                        imgs:[], //图片
                    }
                    this.$message('数据添加成功！');
                }
            }).catch(err=>{
                console.log( errs )
            })

        },
        
    }
};
</script>


<style lang="less" scoped>
.header {
  background: rgb(84, 92, 100);
}

.uploadPic{
    .uploadPicArea{
        // width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        border: 1px solid #EBEEF5;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        font-size: 50px;
        color: #C0C4CC;
    }
    .pics{
        display: flex;
        .pic{
            width: 200px;
            height: 200px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            >span{
                position: absolute;
                top: 10px;
                right: 10px;
                color: #fff;
                cursor: pointer;
                background: #F56C6C;
                padding: 10px;
                border-radius: 3px;
                &:hover{
                    background: #fff;
                    color: #F56C6C;
                }
            }
        }
    }
    
}

</style>
