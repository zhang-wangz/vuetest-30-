<template>
    <div>
        这是一个头部组件----{{title}}
    </div>
</template>



<script>

export default {

    data(){
        return{
            msg:'这是一个头部组件'
        }
    },
    props:['title'],
    
}
</script>

<style lang="scss" scoped>

</style>
