<template>
    <footer id="footer">
      <ul>
        <router-link tag='li' to="/home">
          <i class="iconfont icon-shipin-full"></i>
          <p>视频</p>
        </router-link>
        <router-link tag='li' to="/subscribe">
          <i class="iconfont icon-dingyue"></i>
          <p>订阅</p>
        </router-link>
        <router-link tag='li' to="/member">
          <i class="iconfont icon-huiyuan"></i>
          <p>会员</p>
        </router-link>
        <router-link tag='li' to="/find">
          <i class="iconfont icon-faxian"></i>
          <p>发现</p>
        </router-link>
        <router-link tag='li' to="/mine">
          <i class="iconfont icon-Icon_wode"></i>
          <p>我的</p>
        </router-link>
      </ul>
    </footer>
</template>



<script>
  export default {
    name:'tabbar',
    data() {
      return {

      }
    },
    methods:{
    },
  };
</script>
<style scoped>
  #footer{
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top:2px #ebe8e3 solid ;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  #footer ul{
    display: flex;
    text-align: center;
    height: 50px;
    align-items: center;
  }
  #footer ul li{
    flex: 1;height: 50px;
    text-align: center;
  }
  #footer ul li.router-link-active {background:rgba(116,132,224,.2);}
  #footer ul li.router-link-active i{color: #7484e0;} 
  #footer ul li.router-link-active p{color: #7484e0;}
  #footer ul i {font-size: 26px;color: #b8b8b8;}
  #footer ul p {font-size: 12px;line-height: 18px;color: #b8b8b8;}

</style>