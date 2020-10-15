<template>
	<main id="showcase">
		<div class="showcase-info ">
			<div class="contact-1">
				<img src="@/assets/img/icons/phone2.svg" alt="Phone icon" />
				<span>063-132-823</span>
			</div>
			<div class="contact-2">
				<img src="@/assets/img/icons/phone2.svg" alt="Phone icon" />
				<span>063-213-321</span>
			</div>

			<a href="#contact" class="email">
				<img src="@/assets/img/icons/email2.svg" alt="Email icon" />
				<span>name.lastname@gmail.com</span>
			</a>
		</div>
		<div class="hero">
			<div class="showcase-title spacer">
				<h1 class="heading-1">Lovacka agencija Sljuka</h1>
				<p>Uzivaj u prirodi lorem ipsum dolor sit amet.</p>
				<a href="#contact" class="btn">Lovi s nama</a>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Showcase',
};
</script>
<style lang="scss" scoped>
#showcase {
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

#showcase::after {
	z-index: -1;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;

	background-image: url('../../assets/img/showcase-image.png');
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
	opacity: 0.7;
}
.showcase-info {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: absolute;
	top: 12.5vh;
	left: 7.5%;
	font-size: 1.4rem;
	color: $font-p;

	animation: left 1s forwards ease-in-out;

	& > * {
		display: flex;
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

	width: 85%;
	max-width: 70rem;
	p {
		font-size: 1.8rem;
	}
	@media only screen and(max-width:$v-5) {
		.heading-1 {
			line-height: 1.2;
		}
		text-align: center;
	}
	margin-top: -7.5rem;
	.showcase-title {
		display: block;
		width: 100%;

		animation: down 1s forwards ease-in-out;

		p {
			color: $grey;
		}
	}
}
</style>
