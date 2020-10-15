<template>
	<div class="picture" @click="$emit('close')" @keyup.esc="$emit('close')">
		<div class="picture-container">
			<img class="x-icon" src="@/assets/img/icons/x.svg" alt="Close" />
			<img class="image" :src="source" alt="" @click.stop="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'GalleryModal',
	props: {
		source: {
			type: String,
			required: true,
		},
	},
	methods: {
		makeUrl(filename) {
			return require(`@/assets/img/${filename}`);
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

	background-color: rgba(0, 0, 0, 0.8);

	.picture-container {
		position: relative;
		margin: 0 auto;
		width: 85%;
		max-width: 75rem;

		.x-icon {
			position: absolute;
			top: -3.5rem;
			right: -3.5rem;
			width: 3.5rem;
			height: 3.5rem;
			padding: 0.8rem;
			border-radius: 50%;
			background-color: $primary;
			cursor: pointer;
			@media only screen and(max-width:$v-5) {
				top: -3.5rem;
				right: -2.5rem;
			}
		}
		.image {
			border-radius: 3px;
			z-index: 10;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
