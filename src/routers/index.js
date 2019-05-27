import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from './home'
import MineRouter from './mine'
import SubscribeRouter from './subscribe'
import Login from './login'
import MemberRouter from './member'
import FindRouter from './find'
import PatternRouter from './patterns'
import MovieDetailsRouter from './moviedetails'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    Login,
    HomeRouter,
    MineRouter,
    SubscribeRouter,
    MemberRouter,
    FindRouter,
    PatternRouter,
    MovieDetailsRouter,
    {
      path:'/*',
      redirect:'/login',
    },

  ]
})

router.beforeEach((to,from,next)=>{
  // console.log(to.name,from.name)
  if(to.name=='login'){
    next()
  }
  next()
})

export default router