<template>
  <div id='main'>
    <div class="headers">
      <div class="myheader">
        <div class="myheader_bg"></div>
        <img :src="Head_portrait_bg" class="headimg_bg">
        <div class='myheader_content'>
          <img src="@/assets/mine/msg.png" style="width:20px;margin-left:5%;float:left;">
          <img src="@/assets/mine/setup.png" style="width:20px;margin-right:5%;float:right;">
          <h1 class="username">{{ username }}</h1>
        </div>
      </div>    
      <label class="imgbox" @click='showimg'>
        <img :src="Head_portrait">
        <!-- <input type="file"  id="file"  accept="image/*"  style="display:none;" /> -->
      </label>
      <div class="iconboxs">
        <div class="iconboxs-item" v-for="item in functions" :key='item.id' @click='other_login'>
          <div style="height:25px;margin-bottom:5px;"><img :src="item.url"></div>
          <span>{{item.project}}</span>
        </div>
      </div>
    </div>
    <div class="contents">
     <!--  <ul>
        <router-link tag='li' to="/#" v-for="item in functions" :key="item.id">
          <span style="float:left;margin-left:10%;color:#666;">{{item.project}}</span>
          <i class="iconfont icon-zuoyoujian" style="float:right;margin-right:10%;color:#ebeeff;font-size:20px;"></i>
        </router-link>
      </ul> -->
      <van-cell-group>
        <van-cell v-for="item in functions" :key="item.id" :title="item.project" :icon="item.icon" is-link 
        :to="item.path"/>
      </van-cell-group>
    </div>
    <TabBar />  
  </div>
</template>



<script>
import TabBar from '@/components/TabBar'
import { ImagePreview } from 'vant';


  export default {
    name: 'Mine',
    data() {
      return {
        Head_portrait:require('@/assets/mine/user_img.png'),
        Head_portrait_bg:require('@/assets/mine/user_img_bg.jpg'),
        username:'Nell Litoriya',
        functions:[
          {'project':'离线缓存','url':require('@/assets/mine/down.png'),'icon':'fire-o',path:'/patterns'},
          {'project':'我的会员','url':require('@/assets/mine/vip.png'),'icon':'location-o',path:'/patterns'},
          {'project':'我的收藏','url':require('@/assets/mine/likes.png'),'icon':'shopping-cart-o',path:'/patterns'},
          {'project':'本地视频','url':require('@/assets/mine/files.png'),'icon':'comment-o',path:'/patterns'},
          {'project':'我的积分','url':require('@/assets/mine/count.png'),'icon':'service-o',path:'/patterns'},
          {'project':'我的关注','url':require('@/assets/mine/focus.png'),'icon':'bag-o',path:'/patterns'},
        ],
      }
    },
    components:{
      TabBar
    },
    methods:{
      other_login(){
        this.$notify({
          message: 'sorry,我还没有此功能!',
          duration: 2000,
          background: 'rgba(168,180,248,.9)'
        });
      },
      showimg(){
        ImagePreview([this.Head_portrait_bg,this.Head_portrait]);
      },
    },
  };
</script>

<style scoped>
  .myheader{
    height: 165px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 0% 0% 40% 40%;
  }
  .myheader_bg{
    background: rgba(168,180,248,.9);
    height: 165px;
    width: 100%;
    position: absolute;
    z-index: 5;
  }
  .myheader>>>.headimg_bg{
    position: relative;
    z-index: 1;
    width: 100%;
    top: -50%;
  }
  .myheader_content{
    position: absolute;
    top: 20px;
    z-index: 6;
    height: 80px;
    width: 100%;
    /*border: 1px solid red;*/
    text-align: center;
  }
  .myheader_content>>>.username{
    font-size: 24px;
    font-weight: 100;
    color: #fff;
    margin-top:50px; 
  }
  .imgbox{
    background: url('../../assets/mine/img_box.png') no-repeat;
    width: 120px;
    height: 120px;
    position: absolute;
    top: 104px;
    left: 35%;
    z-index: 10;
    margin: 0 auto;
    text-align: center;
  }
  .imgbox >>> img{
    width: 114px;
    height: 114px;
    margin: 0 auto;
    margin-top: 3px;
  }
  .iconboxs{
    max-height: 250px;
    width: 90%;
    margin-left: 5%;
    padding-top: 75px;
    background: #fff;
  }
  .iconboxs-item{
    float: left;
    width:33.3%;
    min-height: 80px; 
    text-align: center;
  }
  .iconboxs-item >>> img{
    margin: 0 auto;
  }
  .contents{
    background: #ebeeff;
    padding-top: 10px;
    padding-bottom:10px;
    margin-bottom: 50px;
  }
  .contents>>>.van-cell__left-icon{
    margin-right: 15px;
  }
</style>