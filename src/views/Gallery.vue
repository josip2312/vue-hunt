<template>
	<section id="gallery">
		<div class="gallery">
			<img
				class="gallery-image"
				src="../assets/img/landing-image.png"
				alt=""
			/>
			<img class="gallery-image" src="../assets/img/1.jpg" alt="" />
			<img class="gallery-image" src="../assets/img/2.jpg" alt="" />
			<img
				class="gallery-image"
				src="../assets/img//landing-image.png"
				alt=""
			/>
			<img
				class="gallery-image"
				src="../assets/img/landing-image.png"
				alt=""
			/>
			<img
				class="gallery-image"
				src="../assets/img/landing-image.png"
				alt=""
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Landing',
	components: {},
};
</script>
<style lang="scss" scoped>
#gallery {
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: $primary;
	padding: 5rem 0;
}
.gallery {
	width: 85%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 3rem;

	@media only screen and(max-width:$bp-large) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}
	@media only screen and(max-width:$bp-smaller) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
	@media only screen and(max-width:$bp-smallest) {
		width: 90%;
	}
	.gallery-image {
		min-height: 25rem;
		@media only screen and(max-width:$bp-smaller) {
			min-height: 40rem;
		}
	}
	img {
		border-radius: 3px;

		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.2s;
		transform-origin: center;
	}
	@media only screen and(min-width:$bp-small) {
		img:hover {
			transform: scale(1.06);
		}
	}
}
</style>
