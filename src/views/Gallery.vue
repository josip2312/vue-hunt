<template>
	<section id="gallery">
		<h2 class="heading-2">
			Galerija
		</h2>
		<div class="gallery">
			<img
				v-scrollanimation
				v-for="(photo, index) in photos"
				:key="index"
				class="gallery-image"
				:src="makeUrl(photo.filename)"
				alt="Nature image"
				@click="changePicture(photo.filenameBig)"
			/>
		</div>
		<transition name="fade" mode="out-in">
			<GalleryModal
				v-if="showModal"
				:mainFile="mainFile"
				@close="showModal = false"
			/>
		</transition>
	</section>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import GalleryModal from '@/components/GalleryModal.vue';
export default {
	name: 'Gallery',
	components: {
		GalleryModal,
	},
	data() {
		return {
			mainFile: null,
			showModal: false,
			photos: [
				{
					filename: 'gal-1-small.jpg',
					filenameBig: 'gal-1-big.jpg',
				},
				{
					filename: 'gal-2-small.jpg',
					filenameBig: 'gal-2-big.jpg',
				},
				{
					filename: 'gal-3-small.jpg',
					filenameBig: 'gal-3-big.jpg',
				},
				{
					filename: 'gal-4-small.jpg',
					filenameBig: 'gal-4-big.jpg',
				},
				{
					filename: 'gal-5-small.jpg',
					filenameBig: 'gal-5-big.jpg',
				},
				{
					filename: 'gal-6-small.jpg',
					filenameBig: 'gal-6-big.jpg',
				},
			],
		};
	},
	methods: {
		changePicture(filename) {
			this.mainFile = filename;
			this.showModal = true;
		},
		makeUrl(filename) {
			return require(`../assets/img/${filename}`);
		},
		hideModal() {
			this.showModal = false;
		},
	},
	mounted() {
		this.popupItem = this.$el;
	},
	directives: {
		ClickOutside,
	},
};
</script>
<style lang="scss" scoped>
#gallery {
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: $primary;
	padding: 5rem 0;
	padding-top: 10rem;
	position: relative;
}
.heading-2 {
	@include absHeading;
}
.gallery {
	width: 85%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 2.5rem;

	@media only screen and(max-width:$bp-large) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}
	@media only screen and(max-width:$bp-smaller) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(auto-fit, 1fr);
	}
	@media only screen and(max-width:$bp-smallest) {
		width: 90%;
	}
	.gallery-image {
		height: 25rem;
		@media only screen and(max-width:$bp-smaller) {
			height: 30rem;
		}
	}
	img {
		border-radius: 3px;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.3s ease;
		transform-origin: center;
		backface-visibility: hidden;
		cursor: pointer;
	}
	@media only screen and(min-width:$bp-small) {
		img:hover {
			transform: scale(1.04);
		}
	}
}
</style>
