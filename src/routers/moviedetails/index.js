export default {
  path : '/MovieDetails',
  name:'moviedetails',
  component : resolve => require(["@/views/MovieDetails"] , resolve),
  meta:{
    keepAlive:false
  },
}