<template>
	<div id="app">
		<TheHeader />
		<div class="wrap">
			<router-view />
		</div>
		<TheFooter />
	</div>
</template>
<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
	metaInfo: {
		title: 'Lovacka agencija Sljuka',
		titleTemplate: '%s - Prisoje',
		htmlAttrs: {
			lang: 'en',
			amp: true,
		},
		meta: [{ name: 'description', content: '' }],
	},
	components: {
		TheHeader,
		TheFooter,
	},
};
</script>

<style lang="scss">
@import '@/assets/sass/app.scss';

.wrap {
	min-height: 100vh;
}
</style>
