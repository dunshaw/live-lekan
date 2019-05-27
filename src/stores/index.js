import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //是否登录成功
    isLoginFlag:false,

    //username
    isLoginName:'',

    // 菜单栏浮层
    MenuPopupFlag:false,

  },
  mutations: {
    changeLoginName: (state, status) => {
        state.isLoginName = status
    },

    changeLoginFlag(state, status){
        state.isLoginFlag = status
    },

    changeMenuPopupFlag(state, status){
        state.MenuPopupFlag = status
    },
  },
  actions: {

  }
})
