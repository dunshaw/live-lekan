export default {
  path : '/patterns',
  name:'patterns',
  component : resolve => require(["@/views/Patterns"] , resolve),
  // component : () => import("@/views/Patterns")
  meta:{
    keepAlive:true
  },
}