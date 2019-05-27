export default {
  path : '/home',
  name:'home',
  component : resolve => require(["@/views/Home"] , resolve),
  redirect:'/home/marvellous',
  meta:{
    keepAlive:true
  },
  children : [
    {
      path:'marvellous',
      // component:() => import('@/components/Marvellous'),
      component : resolve=> require(["@/components/Marvellous"],resolve),
      name:'marvellous',
      meta:{
        keepAlive:true
      },
    },
    {
      path:'movies',
      // component:()=>import('@/components/Movies'),
      component : resolve  => require(["@/components/Movies"],resolve),
      name:'movies',
      meta:{
        keepAlive:true
      },
    },
    {
      path:'dianshiju',
      component : resolve  => require(["@/components/Other"],resolve),
      // component:()=>import('@/components/Other'),
      name:'dianshiju',
      meta:{
        keepAlive:true
      },
    },
  ],
}