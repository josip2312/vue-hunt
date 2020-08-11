<template>
	<div class="picture" @click="$emit('close')" @keyup="closeModal">
		<div class="img-container">
			<img class="x-icon" src="../assets/img/icons/x.svg" alt="Close" />
			<img :src="makeUrl(mainFile)" alt="" @click.stop="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'GalleryModal',
	props: ['mainFile'],
	methods: {
		makeUrl(filename) {
			return require(`../assets/img/${filename}`);
		},
		closeModal(e) {
			if (e.keyCode === 27) {
				this.$emit('close');
			}
		},
	},
	mounted() {
		window.addEventListener('keyup', this.closeModal);
	},
	destroyed() {
		window.removeEventListener('keyup', this.closeModal);
	},
};
</script>

<style lang="scss" scoped>
.picture {
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 100;

	background-color: rgba(0, 0, 0, 0.7);

	.img-container {
		position: relative;
		margin: 0 auto;
		width: 85%;
		max-width: 75rem;

		.x-icon {
			position: absolute;
			top: -4rem;
			right: -4rem;
			width: 4rem;
			height: 4rem;
			padding: 0.8rem;
			border-radius: 50%;
			background-color: $primary;
			cursor: pointer;
			@media only screen and(max-width:$bp-smallest) {
				top: -3.5rem;
				right: -2.5rem;
			}
		}
	}
	img {
		border-radius: 3px;
		z-index: 10;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
