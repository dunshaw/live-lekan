<template>
  <div class="single-movie">
    <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight" v-show="isshow" :fixed='true' :z-index='100'>
      <van-icon name="share" slot="right" />
    </van-nav-bar>
    <section @touchstart='touchStart' @touchend='touchEnd'>
      <video id="myVideo" class="video-js">
        <source
            src="@/assets/movies/mv1.mp4"
            type="video/mp4"
        >
      </video>
      <div class="content" @touchstart='touchStart' @touchend='touchEnd'>
        ...
      </div>
    </section>
  </div>

</template>



<script>
export default {
  name:'moviedetails',
  data() {
    return {
      isshow:true,
    }
  },
  mounted(){
    this.touchEnd()
    this.initVideo()
  },
  methods: {
    onClickLeft() {
      console.log('返回');
      this.$router.back(-1);
    },
    onClickRight() {
      console.log('按钮');
    },
    touchStart(e){
      e = e || event;
      e.preventDefault()
      this.isshow = true
    },
    touchEnd(){
      let _this = this;
      setTimeout(function(){
        _this.isshow = false
      },3000);
    },
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "375px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px"
      });
    }
  },
};
</script>
<style scoped >
.van-nav-bar{
  background-color:transparent;
}
.van-nav-bar>>>i{
  color: #fff;
}
.content{
 height: 400px;
}
.video-js{
  width: 100%;
  height: 250px;
}

</style>