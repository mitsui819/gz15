import 'normalize.css';
import './less/index.less';


import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk.index.css'

Vue.use(VueRouter);
Vue.use(ElementUI);

import App from './component/App.vue';

import routerConfig from './router/index.js';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8899';
Vue.prototype.$http = axios;
import api from './js/api-config.js';
Vue.prototype.$api = api;

new Vue({
    el:'#app',
    render: function (createElement) {
        return createElement(App);
    },
    router:new VueRouter(routerConfig)
});
