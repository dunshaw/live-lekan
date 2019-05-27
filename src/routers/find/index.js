export default {
  path : '/find',
  name:'find',
  component : resolve => require(["@/views/Find"] , resolve),
  meta:{
    keepAlive:true
  },
}