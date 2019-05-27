import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import Mint from 'mint-ui'
import api from './api'
Vue.use(Mint)

import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

import { Cell,CellGroup,Notify,Icon,Tab,Tabs,NavBar,Swipe, SwipeItem,NoticeBar,Row,Col} from 'vant';

Vue.use(Cell).use(CellGroup).use(Notify).use(Icon).use(Tab).use(Tabs).use(NavBar).use(Swipe).use(SwipeItem).use(NoticeBar)
.use(Row).use(Col);


Vue.prototype.$api = api; // 将api挂载到vue的原型上复制代码
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
