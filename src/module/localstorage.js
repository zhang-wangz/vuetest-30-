
var storage={
   set(list,value){
        localStorage.setItem(list,JSON.stringify(value));
   } ,
   get(list){
        return JSON.parse(localStorage.getItem(list));
   },
   remove(key){
        localStorage.removeItem(key);
   }
}

export default storage;