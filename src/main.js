import Vue from 'vue';
import App from './App.vue';
import router from './router';
import scrollAnimation from './directives/scrollAnimation';
import lazyLoad from './directives/lazyLoad';
import VueMeta from 'vue-meta';

Vue.directive('scrollanimation', scrollAnimation);
Vue.directive('lazyload', lazyLoad);

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
