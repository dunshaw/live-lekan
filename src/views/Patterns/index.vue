<template>
  <div id='main'>
    <van-nav-bar
      title="子页面"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    {{msg}}
  </div>
</template>



<script>

  export default {
    name: 'patterns',
    data() {
      return {
        msg:'这是一个模块的子页面',
      }
    },
    methods: {
      onClickLeft() {
        console.log('返回');
        this.$router.back(-1);
      },
      onClickRight() {
        console.log('按钮');
      }
    }
  };
</script>

<style>
  

</style>