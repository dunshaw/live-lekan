export default {
  path : '/member',
  name:'member',
  component : resolve => require(["@/views/Member"] , resolve),
  // component : () => import("@/views/Member")
  meta:{
    keepAlive:true
  },
}