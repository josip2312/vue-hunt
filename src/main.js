import Vue from 'vue';
import App from './App.vue';
import router from './router';
import scrollAnimation from './directives/scrollAnimation';
import VueMeta from 'vue-meta';

Vue.directive('scrollanimation', scrollAnimation);

//make a seperate branch for deployment with all static assets
Vue.use(VueMeta, {
	// optional pluginOptions
	refreshOnceOnNavigation: true,
});
Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
