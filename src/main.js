import Vue from 'vue';
import App from './App.vue';
import router from './router';

//make a seperate branch for deployment with all static assets

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
