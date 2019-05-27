<template>
  <div id='main'>
    <img :src="BgImg" class="login_bg">
    <img :src="LogoImg" class="logo">
    <div class="contents">
      <mt-field label="" placeholder="用户名/邮箱/手机号" v-model="username" >
        
      </mt-field>
      <mt-field label="" placeholder="密码" v-model="userpwd" type='password'></mt-field>
      <a href="#" style="float:left;margin-left:5px;" @click='other_login'>注册</a>
      <a href="#" style="float:right;margin-right:5px;" @click='other_login'>忘记密码</a>

      <button class="loginBtn" @click='login'>登录</button>

      <div class="footer">
        <i class="iconfont icon-qq" @click='other_login'></i>
        <i class="iconfont icon-weixin" @click='other_login'></i>
        <i class="iconfont icon-weibo" @click='other_login'></i>
      </div>
    </div>
  </div>
</template>



<script>


  export default {
    name: 'Login',
    data() {
      return {
        BgImg:require('@/assets/login_bg.png'),
        LogoImg:require('../../assets/logo.png'),
        username:'',
        userpwd:'',
      }
    },
    methods:{
      login(){
        // 请求
        // this.$api.login({name:'thcpc',password:'123456'}).then(res=>{
        //     console.log(res)
        // })


        if(this.username && this.userpwd){
          this.$router.push('/home')
          this.$store.commit('changeLoginFlag',true)
          this.$store.commit('changeLoginName',this.username) 
        }else{
          this.$toast({
            message: '请输入账号和密码!',
            duration: 3000,
            className:'login-toast',
            iconClass:'iconfont icon-icon-test'
          });
        }
      },
      other_login(){
        this.$toast({
          message: 'sorry,我还没有此功能!',
          duration: 3000,
          className:'login-toast',
          iconClass:'iconfont icon-sorry'
        });
      },
    },
  };
</script>

<style scoped>
.login_bg{
  width: 100%;
  position: fixed;
  z-index: -1;
  background-image: no-repeat;
}
.logo{
  width: 30%;
  position: absolute;
  top: 16%;
  left: 35%;
}
.contents{
  width: 70%;
  /*border: 1px solid red;*/
  height: 300px;
  position: absolute;
  bottom: 10%;
  left: 15%;
  text-align: center;
}
.contents >>> input{
  width: 100%;
  height: 40px;
  margin: 0 auto;
  border-radius: 12px;
  background: rgba(0,0,0,.5);
  color: #fff;
  text-align: center;
  border:1px solid rgba(255,255,255,.6);
  margin-top:15px; 
  font-size: 22px;
}
.contents >>> a{
  text-decoration: none;
  color: #a9a9a9;
  font-size: 22px;
  margin-top: 5px;
}
a:active{
  color: #9facf7;
}
.loginBtn{
  width: 100%;
  height: 48px;
  border-radius: 12px;
  font-size: 28px;
  color: #fff;
  background:#9facf7;
  border: none;
  margin-top: 20px;
}
.loginBtn:active{
  background:#6476db;
}
.footer{
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;
}
.footer >>> i{
  font-size: 30px;
  color:rgba(171,171,171,.8);
  margin: 6%;
}



</style>