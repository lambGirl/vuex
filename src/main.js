import Vue from 'vue';
import App from './App.vue';
import store from './store/'; //默认加载store下的index文件
new Vue({
    store,
    el: '#app',
    render: h =>h(App)     //用于数据渲染
})