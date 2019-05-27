<template>
    <div id='main'>
      <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
        <MenuPopup v-if="MenuPopupFlag" class="animated fast" />
      </transition>
      <Header title='home' >
        <img :src="homelogo">
        <input type="text" placeholder="复仇者联盟4" class="search">
        <div class="right">
        <i class="iconfont icon-shijian"></i>
        <i class="iconfont icon-xiazai"></i></div>
      </Header>
      <div class="content">
        <div class="content-tab">
          <van-tabs title-active-color="#7484e0" color="#7484e0" @change='onClick'>
            <van-tab :title="item.name" v-for="item in routes"></van-tab>
          </van-tabs>
          <div class="menu_icon" @click='changeFlag'>
            <van-icon name="wap-nav" />
          </div>
        </div>
        <keep-alive>
          <transition :name="transitionName">
            <router-view class="view-box"/> 
          </transition> 
        </keep-alive>
      </div>
      <TabBar />  
    </div>
</template>



<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import MenuPopup from '@/components/MenuPopup'

import {mapState} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {
        homelogo:require('@/assets/homelogo.png'),
        transitionName: 'slide-left',
        pathList:[],
        routes:[
          {'name':'精选',path:'/home/marvellous',icon:'fire-o'},
          {'name':'电影',path:'/home/movies',icon:'video-o'},
          {'name':'电视剧',path:'/home/dianshiju',icon:'tv-o'},
          {'name':'综艺',path:'/home/dianshiju',icon:'star-o'},
          {'name':'演唱会',path:'/home/dianshiju',icon:'music-o'},
          {'name':'体育',path:'/home/dianshiju',icon:'gem-o'},
          {'name':'动漫',path:'/home/dianshiju',icon:'gem-o'},
          {'name':'美剧',path:'/home/dianshiju',icon:'gem-o'},
        ],
      }
    },
    components:{
      Header,TabBar,MenuPopup
    },
    computed:{
      ...mapState({
          MenuPopupFlag:state => state.MenuPopupFlag,
      }),
    },
    methods:{
      onClick(index,title){
        console.log(index,title)
        let pagename = this.routes[index].name
        let pagepath = this.routes[index].path
        this.$router.push({
          path:pagepath,
          query:{"pagename":pagename}
        })
      },
      changeFlag(){
        this.$store.commit('changeMenuPopupFlag',true)
      },
    },
    watch:{
      '$route'(to,from){
        console.log(from.path)
        if(this.pathList.includes(to.path))
        {

            const index = (this.pathList.findIndex(()=>{
                return from.path
            }))
            this.pathList.splice(index,1)
            console.log(index)
            this.$router.isBack=true;
        }
        else
        {
            this.pathList.push(to.path)
            this.$router.isBack=false;
        }
        if(to.path=='/home')  // 'start'为首页
        {
            this.$router.isBack=true;
            this.pathList = []
        }
        let isBack = this.$router.isBack
        console.log(isBack)
         console.log(this.pathList)
        if (isBack) {
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = 'slide-right'
        }

        this.$router.isBack = false
        }
    },
  };
</script>

<style scoped>
  .content{
    position: absolute;
    top: 60px;
    width: 100%;
  }
  .content .van-tabs{
    width: 84%;
  }
  .content .menu_icon{
    width: 15%;
    font-size: 30px;
    line-height: 44px;
    text-align: center;
    display: inline-block;
    color: #7484e0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 150;
    background: #fff;
  }
  .view-box{
    height: 510px;
    overflow-y:scroll;
  }
.slide-left-enter-active {

  transition: all .8s ease;
}
.slide-left-leave-active {
  transition: all .5s ease  ;
}
.slide-left-enter, 
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to{
 transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all .8s ease;
}
.slide-right-leave-active {
  transition: all .5s ease  ;
}
.slide-right-enter, 
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to{
    transform: translateX(100%);
    opacity: 0;
}
</style>