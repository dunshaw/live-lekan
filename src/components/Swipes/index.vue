<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in imgdatas" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>

</template>



<script>
export default {
  name:'swipes',
  data() {
    return {
     
    }
  },
  props:['imgdatas'],
};
</script>