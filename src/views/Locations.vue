<template>
	<section id="locations">
		<h2 class="heading-2 dark">
			Lokacije
		</h2>
		<article class="location-article" v-scrollanimation>
			<div class="location-image">
				<img src="../assets/img/gal-1-big.jpg" alt="Nature photo" />
			</div>
			<div class="location-textbox">
				<div class="location-text">
					Nalazimo se u Prisoju, lijepom mjestu koje leži na Buskom
					jezeru.
				</div>
				<button href="#rent" class="btn btn-sec">Vidi smjestaj</button>
			</div>
		</article>
		<article class="location-article reverse" v-scrollanimation>
			<div class="location-textbox">
				<div class="location-text">
					Lov se odvija u Bosanskom Grahovu.
				</div>
				<button href="#contact" class="btn btn-sec">Lovi</button>
			</div>
			<div class="location-image">
				<img src="../assets/img/gal-2-big.jpg" alt="Nature photo" />
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: 'Locations',
	components: {},
};
</script>
<style lang="scss" scoped>
#locations {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	min-height: 90vh;
	background-color: $secondary;
	padding: 5rem 0;
	position: relative;
}
.heading-2 {
	@include absHeading;
}
.location-article {
	display: flex;
	justify-content: center;

	width: 85%;
	background-color: $primary;
	border-radius: 3px;

	@media only screen and(max-width:$bp-medium) {
		flex-direction: column;
	}

	@media only screen and(max-width:$bp-smallest) {
		width: 90%;
	}

	&:not(:first-child) {
		margin-top: 5rem;
	}

	.location-image {
		flex: 1;

		img {
			overflow: hidden;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		@media only screen and(max-width:$bp-small) {
			flex-direction: column;
		}
	}
	.location-textbox {
		flex: 1;
		align-self: center;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		text-align: center;
		height: 100%;

		.location-text {
			width: 75%;
			font-size: 2rem;
			color: $font-p;
			margin-bottom: 2.5rem;
		}

		@media only screen and(max-width:$bp-medium) {
			padding: 3rem 0;
			justify-content: center;
			align-items: center;
		}
	}
}
.reverse {
	@media only screen and(max-width:$bp-medium) {
		flex-direction: column-reverse;
	}
}
</style>
