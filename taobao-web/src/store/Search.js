export default{
    namespaced :true,
    state:{
        text:'',
        list:[],
        listPage:{
            page:0,
            start:0,
            end:20,
            current:1,
        }
    },
    mutations:{
        setText(state, args){
            state.text = args.text
        },
        setList(state, args){
            state.list = args.list
        },
        setListPage(state, args){
            state.listPage = args.page
        },


    },
    actions:{

    },
    getters:{

    }
}