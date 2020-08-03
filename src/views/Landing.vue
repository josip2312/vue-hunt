<template>
	<main id="landing">
		<div class="hero">
			<div class="landing-title">
				<h1 class="heading-1">Lovacka agencija Sljuka</h1>
				<h2 class="heading-2">Uzivaj u prirodi</h2>
				<a href="#contact" class="btn">Lovi s nama</a>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Landing',
	components: {},
};
</script>
<style lang="scss" scoped>
#landing {
	height: 100vh;
	width: 100%;
	display: block;
	background-color: #000;
	position: relative;
	z-index: 0;
	top: 0;
}

#landing::after {
	z-index: -1;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;

	background-image: url(../assets/img/landing-image.png);
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	opacity: 0.7;
}

.hero {
	display: block;
	.landing-title {
		display: block;
		position: absolute;
		top: 40%;
		left: 40%;
		transform: translate(-40%, -40%);

		@media only screen and(max-width:$bp-medium) {
			left: 50%;
			transform: translate(-50%, -40%);
		}
		@media only screen and(max-width:$bp-smallest) {
			width: 75%;
		}

		h1 {
			padding: 2rem 0;
		}
		h2 {
			margin-bottom: 3.5rem;
		}
	}
}
</style>
