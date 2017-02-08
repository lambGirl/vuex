import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//导入事件用于直接修改state
import mutations from './mutations';
//导入事件调用mutations中的事件
import actions from './actions';
export default new Vuex.Store({
    modules:{
        mutations   //这个里面包含了state 还有事件
    },
    actions //直接导出事件用于调用
})