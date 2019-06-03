<template>
    <div>
        <p>这是一个内容组件</p>
        <!-- 获取Header传过来的值 -->
        <!-- {{this.$route.params}}  -->
        <hr>
        <br>
        <ul>
                <!-- 以a标签的形式出现，所以可以进行关联-->
                <!-- //加冒号是为了动态绑定 -->
                <h3>{{list}}</h3>
                <!-- <div >{{list[0].content}}</div> -->

        </ul>
        

    </div>
</template>



<script>

export default {
    data(){
        return{
            list:[],
        }
    },
    methods:{

        // getData(aid){
        //     var url = "https://tran.news.so.com/ctranscode?title="+aid;
        //     this.$http.get(url).then(res=>{
        //         console.log(res);
        //         this.list = res;
        //     },()=>{
        //         alert('error');
        //     })
        // }
    },
    mounted(){
        this.$root.eventHub.$on('headernewsinfo', (data)=>{
            this.list = data;
        })
    }
}
</script>



<style lang="scss">
    
</style>