import Vue from 'vue';
import Router from 'vue-router';

Vue.use(VueRouter);

import App from './component/App.vue';

import routerConfig from './router/index.js';

import axios from 'axios';
axios.get('http:www.baidu.com').then(function(res){
    console.log(res);
});

new Vue({
    el:'#app',
    render: function (createElement) {
        return createElement(App);
    },
    router:new VueRouter(routerConfig)
});
