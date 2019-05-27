<template>
  <div id='main'>
    <Header title='member' />
    <TabBar />  
  </div>
</template>



<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

  export default {
    name: 'Mine',
    data() {
      return {
        msg:'hello sumo mine',
      }
    },
    components:{
      Header,TabBar
    },
  };
</script>

<style>
  

</style>