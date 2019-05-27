<template>
  <div>
    <swipes :imgdatas='bannerlist'/>
    <van-notice-bar class="consoles"
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      left-icon="volume-o"
    />
    <div class="main">
      <van-cell title="热点聚焦" icon="fire" is-link class='titles' />
      <van-row type="flex" justify="center">
        <van-col span="12">
          <img src="@/assets/home/main2.png">
          <van-cell title="独家·迪丽热巴封面曝光" label="变身花仙子·惊艳满分" />
        </van-col>
        <van-col span="12">
          <img src="@/assets/home/main1.png">
          <van-cell title='"年轻熟"·七周年' label="王源时尚杂志街拍" />
        </van-col>
      </van-row>
      <van-cell title="激情六月·恋爱" is-link class='titles' />
      <van-row type="flex" justify="center">
        <img src="@/assets/home/main3.png">
      </van-row>
      <van-row type="flex" justify="center" style="margin-top:6px;">
        <van-col span="12">
          <div class="item-van-col">
            <img src="@/assets/home/main4.png">
            <van-cell title="生化危机：终章" label="爱丽丝拯救世界" to="/patterns"/>
          </div>
          <div class="item-van-col">
            <img src="@/assets/home/main6.png">
            <van-cell title='欧巴是坏人' label="韩剧来袭" />
          </div>
        </van-col>
        <van-col span="12">
          <div class="item-van-col">
            <img src="@/assets/home/main5.png">
            <van-cell title='美女与野兽' label="迪士尼经典再现" to="/patterns"/>
          </div>
          <div class="item-van-col">
            <img src="@/assets/home/main7.png">
            <van-cell title='诛仙·青云志' label="热门小说改变" to="/patterns"/>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>

</template>



<script>
import swipes from '@/components/Swipes'

export default {
  name:'Marvellous',
  data() {
    return {
      bannerlist:[
        require('@/assets/home/swipe_img.png'),
        require('@/assets/home/swipe_img2.png'),
        require('@/assets/home/swipe_img3.png')
      ]
    }
  },
  components:{swipes},
};
</script>

<style scoped>
  .main{
    width: 98%;
    margin: 0 auto;
  }
  .consoles{
    font-size:12px;height:30px;
  }
  .titles{
    padding: 2px 5px 2px 5px;
    margin: 0 auto;
  }
  .titles .van-icon-fire{
    color: red;
    font-size: 20px;
  }
  .titles .van-icon-arrow{
    color: #9facf7;
    font-size: 20px;
  }
  .van-col img{
    margin: 0 auto;
  }
  .van-col span{
    font-size: 14px;
  }
  .van-col>>>.van-cell__label{
    margin: 0;
    line-height: 10px;
  }
  .van-cell{
    padding: 5px 12px;
  }
  .van-col>>>.item-van-col{
    margin-bottom: 5px;
  }
</style>