<template>
  <div class="menu-popup">
    <div class="menu-top">
      <h2>全部频道</h2>
      <van-icon name="cross" @click="changeflag"/>
    </div>
    <div class="menu-content">
      
    </div>
  </div>
</template>



<script>
export default {
  name:'menu-popup',
  data() {
    return {
      
    }
  },
  methods:{
    changeflag(){
      this.$store.commit('changeMenuPopupFlag',false)
    },
  },
};
</script>
<style scoped>
.menu-popup{
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  z-index: 151;
}
.menu-top{
  height: 80px;
  line-height: 50px;
  width: 96%;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
}
.menu-top h2{
  display: inline-block;
  margin-left: 5px;
  margin-top: 20px;
}
.menu-top .van-icon{
  font-size: 26px;
  display: inline-block;
  position: absolute;
  top: 32px;
  right: 15px;
  color: #666;
}
.menu-content{
  width: 96%;
}
</style>