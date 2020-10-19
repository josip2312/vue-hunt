<template>
	<div id="app">
		<TheHeader />
		<Landing />
		<TheFooter />
	</div>
</template>
<script>
import Landing from '@/views/Landing';
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
		Landing,
	},
};
</script>

<style lang="scss">
@import '@/assets/sass/app.scss';

.wrap {
	min-height: 100vh;
}
</style>
