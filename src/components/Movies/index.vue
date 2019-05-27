<template>
  <div>
    <!-- {{$route.query.pagename}} -->
    <swipes :imgdatas='bannerlist'/>
    <van-row type="flex" justify="center" style="margin-top:6px;">
      <van-col span="12">
        <div class="item-van-col">
          <img src="@/assets/movies/m1.png">
          <van-cell title="超级战舰" label="人类与外星人的战斗" to="/patterns"/>
        </div>
        <div class="item-van-col">
          <img src="@/assets/movies/m2.png">
          <van-cell title='悲惨世界' label="安妮·海瑟薇经典影片" />
        </div>
      </van-col>
      <van-col span="12">
        <div class="item-van-col" @click='moviedetails'>
          <img src="@/assets/movies/m3.png">
          <van-cell title='魔兽世界' label="来自暴雪的呼唤"/>
        </div>
        <div class="item-van-col">
          <img src="@/assets/movies/m4.png">
          <van-cell title='生化危机' label="生化危机大结局" to="/patterns"/>
        </div>
      </van-col>
    </van-row>
  </div>

</template>



<script>
import swipes from '@/components/Swipes'

export default {
  name:'movies',
  data() {
    return {
      bannerlist:[
        require('@/assets/movies/banner3.png'),
        require('@/assets/movies/banner2.png'),
        require('@/assets/movies/banner1.png'),
      ]
    }
  },
  components:{swipes},
  methods:{
    moviedetails(){
      this.$router.push({
        name:'moviedetails',
        path:'/MovieDetails',
      })
    },
  },
};
</script>
<style  scoped>
  .van-col img{
    margin: 0 auto;
  }
  .van-col span{
    font-size: 14px;
  }
  .van-col>>>.van-cell__label{
    margin: 0;
    line-height: 10px;
  }
  .van-cell{
    padding: 5px 12px;
  }
  .van-col>>>.item-van-col{
    margin-bottom: 5px;
  }
</style>