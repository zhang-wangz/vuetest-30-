<template>
<!-- 懒得写在news里面了，偷个懒在Header里面进行编写操作 -->
    <div>
        <h2>这是一个头部组件----{{msg}}</h2>
        <button @click="getnewsinfo()">获取</button>
        <ul>
            <li v-for="(item,key) in list" :key="key">
                <!-- 以a标签的形式出现，所以可以进行关联-->
                <!-- //加冒号是为了动态绑定 -->
                <router-link :to="'/Content/' +key">{{item.time}}---{{item.title}}</router-link> 
            </li>
        </ul>


    <br>
    <!-- <p>{{this.$route.params.aid}}</p> -->
    </div>
    
</template>



<script>
//import Axios from 'axios';
export default {

    data(){
        return{
            msg:'Header',
            list:[],
        }
    },
    //props:['title'],
    methods:{
        getnewsinfo(){
            var api='https://api.jisuapi.com/news/search?keyword=手机&appkey=7a71ec014cde2842';
            //关注跨域问题，jsonp相关好像和跨域相关= = 
            this.$http.jsonp(api).then((response)=>{
                //console.log(response);
                this.list = response.body.result.list;
                // this.list1 = response.body.result.list;
            },err=>{
                //console.log(err);
                alert(err);
            })
        }
    },
    mounted(){
        //有了自己的api的时候可以测试，up主的api次数不够了= =
        this.getnewsinfo();
        this.$root.eventHub.$emit('headernewsinfo', this.list);

    },
    
}
</script>

<style lang="scss" scoped>

</style>
