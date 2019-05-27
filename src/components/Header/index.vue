<template>
  <div id="header">
    <slot>{{title}}</slot>
  </div>
</template>



<script>
  export default {
    name:'Header',
    data() {
      return {
        // homelogo:require('@/assets/homelogo.png'),
      }
    },
    props :['title'],
  };
</script>

<style scoped>
#header{
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #9facf7;
  position: fixed;
  top: 0;
  left: 0;
}
#header h1{
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  font-weight: normal;
  display: inline;
  color: #fff;
}
#header span{
  color: #f3f3f3;
  font-size: 16px;
}
#header >>> .right{
  position: absolute;
  bottom: 5px;
  right: 10px;
}
#header i{
  font-size: 26px;
  margin: 2px;
}
#header img{
  position: absolute;
  bottom: 5px;
  left: 10px;
}
.search{
  height: 28px;
  width:50%;
  border-radius:42px;
  border:none;
  background:#fff;
  transition:.3s linear;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 25%;
  color: #999;
  font-size: 16px;
}


</style>