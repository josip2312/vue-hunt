<template>
	<main id="landing">
		<div class="landing-info">
			<div class="contact-1">
				<img src="../assets/img/icons/phone2.svg" alt="Phone icon" />
				<span>063-132-823</span>
			</div>
			<div class="contact-2">
				<img src="../assets/img/icons/phone2.svg" alt="Phone icon" />
				<span>063-213-321</span>
			</div>

			<a href="#contact" class="email">
				<img src="../assets/img/icons/email2.svg" alt="Email icon" />
				<span>saric.brane@gmail.com</span>
			</a>
		</div>
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
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100vh;
	width: 100%;
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
.landing-info {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: absolute;
	top: 12.5vh;
	left: 7.5%;
	font-size: 1.4rem;
	color: $font-p;
	transition: all;
	animation: left 1s forwards ease;
	a {
		text-decoration: none;
		color: $font-p;
	}
	& > * {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 1rem;

		img {
			width: 2rem;
			height: 2rem;
			margin-right: 1.5rem;
		}
	}
}
.hero {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 50vw;
	@media only screen and(max-width:$bp-small) {
		width: 65vw;
	}
	@media only screen and(max-width:$bp-smallest) {
		width: 70vw;
	}
	margin-top: -7rem;
	.landing-title {
		display: block;
		width: 100%;

		animation: drop 1s forwards ease;

		h1 {
			padding: 2rem 0;
		}
		h2 {
			margin-bottom: 3.5rem;
		}
	}
}
</style>
