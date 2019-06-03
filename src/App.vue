
<template>
  <div id="app">
    <!-- <div v-bind:title="title">
      点击
    </div> 
    <img :src="url" alt="">

    <br>
    <br>
    <br>
    <br>

    <div  :class = "{'red':flag}">
      我是一个红色的div
    </div>  
    
    <br>
    <div  :class= "{'red':!flag}">
      我是另一个div
    </div>


    <hr>
    <br>
    <br>



  <button @click="run">这是一个方法</button>

  <br>
  <br>
  <hr>
  <br><br> -->
<!-- 
  <button @click="requestDate">请求数据</button>
  <ul>
    <li v-for="item in list" v-bind:key="item">  
          {{item}}
    </li>
  </ul> -->


  <!-- <br>
  <br>
  <hr>
  <br><br>
  <button @click="evenfn($event)">点击获取事件值</button>

  <hr>
  <br>
  <br>  
  <br>
  <br>
  <br>


  
  <input type="text" v-model="todo" @keypress="addlist($event)">  -->
  <!-- <button @click="addlist($event)">Add</button> -->
  <!-- <hr>
  <br>
  <br>



  <h2>进行中</h2>
  <ul>
    <li v-if="!item1.checkbox" v-for="(item1,index) in list1"  :key="index" >
      <div >
         <input type="checkbox" v-model="item1.checkbox" @change="savelist">{{item1.title}}------ 
         <button @click="dllist(index)">删除</button>
      </div>
    </li>
  </ul>

  <hr>

  <h2>已完成</h2>
  <ul>
      <li v-if="item1.checkbox"  v-for="(item1,index) in list1"  :key="index">
          <div>
            <input type="checkbox" v-model="item1.checkbox">{{item1.title}}------ 
            <button @click="dllist(index)">删除</button>
          </div>
      </li>
  </ul>
 -->

   <!-- <h2>{{msg}}---this is 根组件</h2> -->
    <br>
    <router-link to="/home">Home</router-link>
    <br>
    <router-link to="/header">Header</router-link>
    <hr>
    <router-view></router-view>
    
   
  
</div>
</template>

<script>
import storage from './module/localstorage.js';


export default {
  name: 'app',
  methods: {
        run:function(){
          alert(this.msg);
        },
        requestDate(){
            for(var i =0 ;i<10;i++){
              this.list.push('我是第' + i+ '条数据');
            }
        },
        evenfn(e){
          e.srcElement.dataset;
          e.srcElement.style.background='red';
        },
        addlist(e){
          if(e.keyCode==13){
          this.list1.push({
            title:this.todo,
            checkbox:false,
          });
          this.todo='';
          }

          storage.set('list1',this.list1);

        },

        dllist(key){
          this.list1.splice(key,true);  //第二个值只要是正数就可以，表示可以删除
          storage.set('list1',this.list1);
        },

        savelist(){
          storage.set('list1',this.list1);
        },

      },
  mounted(){
      var list1 = storage.get('list1');
      if(list1){
        this.list1 = list1;
      }
  },
  data(){
    return{
      msg:"this is wz",
      list1:[
        {
          title:'nodejs work',
          checkbox:false,
        },
         {
          title:'nodejs finish',
          checkbox:true,
        }
      ],
      title:"123",
      url:"",
      obj:{
        name:'zhangsan'
      },
      flag:true,
      todo:' ',
    }
  },
  
}
</script>
   


<style>
  .red{
    color: red;
    font-size: 13;
  }
</style>
