<template>
	<div id="app">
		<Header />
		<Landing />
		<Gallery />
		<Locations />
		<Rent />
		<Contact />
		<!-- <router-view /> -->
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Landing from '@/views/Landing.vue';
import Gallery from '@/views/Gallery.vue';
import Locations from '@/views/Locations.vue';
import Rent from '@/views/Rent.vue';
import Contact from '@/views/Contact.vue';
export default {
	metaInfo: {
		title: 'Lovacka agencija Sljuka',
		titleTemplate: '%s - Prisoje',
		htmlAttrs: {
			lang: 'en',
			amp: true,
		},
	},
	components: {
		Header,
		Footer,
		Landing,
		Gallery,
		Locations,
		Rent,
		Contact,
	},
};
</script>

<style lang="scss">
@import 'assets/sass/base';
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.2s;
	transition-property: opacity;
	transition-timing-function: ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
