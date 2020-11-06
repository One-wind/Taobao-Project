export default{
    install(Vue, opt){
        Vue.prototype.$ajax = function (reqData) {
            return new Promise((resolve,reject)=>{
                let method = reqData.method.toLowerCase()
                if(method == 'get' || method == 'post'){
                    
                }else{
                    reject(new Error('method err'))
                    return
                }
                let url = reqData.url.trim()
                if(!url){
                    reject(new Error('url err'))
                    return
                }

                let xhr = new XMLHttpRequest()
                let fd = null
                
                if('post' == method && reqData.data){
                    fd = new FormData()
                    for(const key in reqData.data){
                        fd.append(key, reqData.data[key])
                    }
                }else{
                    url += '?'
                    for(const key in reqData.data){
                        url += `${key}=${reqData.data[key]}&`
                    } 
                }
                
                xhr.open(method,url)
                xhr.send(fd)
                xhr.onreadystatechange=function(){
                    if(4 == this.readyState && 200 == this.status){
                        try {
                            resolve( JSON.parse(this.responseText) )
                        } catch (error) {
                            resolve( this.responseText )
                        }
                    }
                }

            })
          }

        Vue.prototype.$url='http://192.168.7.56:3000'
    }
}