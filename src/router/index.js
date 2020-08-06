import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Landing',
		meta: {
			title: 'Lovacka agencija Sljuka',
			content: 'Pocetna stranica',
		},
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Landing.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
