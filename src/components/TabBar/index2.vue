<template>
    <footer id="footer">
      <mt-tabbar v-model="selected" swipeable='true'>
        <mt-tab-item id="movie">
          <img slot="icon" :src="movie" v-if="selected=='movie'">
          <img slot="icon" :src="movie" v-else>
          视频
        </mt-tab-item>
        <mt-tab-item id="subscribe">
          <img slot="icon" :src="subscribe">
          订阅
        </mt-tab-item>
        <mt-tab-item id="member">
          <img slot="icon" :src="member">
          会员
        </mt-tab-item>
        <mt-tab-item id="find">
          <img slot="icon" :src="find">
          发现
        </mt-tab-item>
        <mt-tab-item id="mine">
          <img slot="icon" :src="find">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </footer>
</template>



<script>
  export default {
    name:'tabbar',
    data() {
      return {
        selected:'',
        movie:require('@/assets/movie.png'),
        subscribe:require('@/assets/subscribe.png'),
        member:require('@/assets/member.png'),
        find:require('@/assets/find.png'),
        mine:require('@/assets/mine.png'),
      }
    },
    watch:{
      selected(val,old){
        console.log(val,old);
        this.jump()
      }
    },
    methods:{
      jump(){
        this.$router.push('/'+this.selected)
      },
    },
  };
</script>
<style scoped>
  #footer{
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top:2px #ebe8e3 solid ;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .mint-tabbar{
    text-align: center;
  }
  .mint-tab-item{
    float: left;
    width: 20%;
    text-align: center;
  }
  .mint-tab-item >>> img{
    margin: 0 auto;
  }
</style>