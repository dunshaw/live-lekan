<template>
  <div id='main'>
    <Header title="find"/>
    <TabBar />  
  </div>
</template>



<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

  export default {
    name: 'Find',
    data() {
      return {
        msg:'hello sumo mine',
      }
    },
    components:{
      TabBar,Header
    },
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