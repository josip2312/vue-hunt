<template>
	<div class="landing">
		<AppShowcase />
		<AppGallery />
		<AppLocations />
		<AppRent />
		<AppContact />
	</div>
</template>

<script>
import AppShowcase from '@/components/landing/AppShowcase.vue';
import AppGallery from '@/components/landing/AppGallery.vue';
import AppLocations from '@/components/landing/AppLocations.vue';
import AppRent from '@/components/landing/AppRent.vue';
import AppContact from '@/components/landing/AppContact.vue';
export default {
	name: 'Landing',
	components: {
		AppShowcase,
		AppGallery,
		AppLocations,
		AppRent,
		AppContact,
	},
};
</script>
<style lang="scss" scoped></style>
