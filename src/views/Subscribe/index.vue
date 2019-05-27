<template>
  <div id='main'>
    <Header title="subscribe"/>
    <TabBar />  
  </div>
</template>



<script>
import TabBar from '@/components/TabBar'
import Header from '@/components/Header'

  export default {
    name: 'Subscribe',
    data() {
      return {
        msg:'hello sumo cinema',
        title:'订阅/更新'
      }
    },
    components:{
      TabBar,Header
    }
  };
</script>

<style scoped>
  .myheader{
    width: 100%;
    height: 60px;
    color: #fff;
    background-color: #9facf7;
    position: fixed;
    top: 0;
    left: 0;
  }

</style>