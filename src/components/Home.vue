
<template>
    <div>
    <h2>这是一个首页组件</h2>
    <v-header :title="title"></v-header>
    <button  @click="getDate()"> 获取api数据</button>
    </div>
</template>

<script>
import Axios from 'axios';
//import Header from './Header.vue'

export default {
    data(){
        return{
            title:'首页11'

        }
    },
    methods: {
        getDate(){
            var api='https://www.sojson.com/open/api/weather/json.shtml?city=%s';
            Axios.get(api).then((response)=>{
                alert(response);
            }).catch((err)=>{
                alert(err);
            })
        }
        
    },
    // components:{
    //     'v-header':Header,
    // }
    
}
</script>




<style  lang= 'scss' scoped>
/*局部作用域 */
    h2{
        color:red,
    }

</style>
