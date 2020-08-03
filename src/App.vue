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
</style>
