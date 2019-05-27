export default {
  path : '/subscribe',
  name:'subscribe',
  component : ()=> import(/*webpack chunk name*/"@/views/Subscribe"),
  meta:{
    keepAlive:true
  },

}