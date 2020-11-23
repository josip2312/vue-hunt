<template>
	<section id="gallery">
		<h2 class="heading-2">Galerija</h2>
		<div class="gallery">
			<GalleryImage
				v-for="photo in photos"
				:key="photo.filename"
				altAttr="Nature image"
				:source="makeUrl(photo.filename)"
				@change-picture="changePicture(photo.filenameBig)"
				width="620"
				height="413"
			/>
		</div>
		<transition mode="out-in" name="fade">
			<GalleryModal
				v-if="showModal"
				:source="source"
				@close="showModal = false"
			/>
		</transition>
	</section>
</template>

<script>
import ClickOutside from "vue-click-outside";

import GalleryImage from "@/components/gallery/GalleryImage";
import GalleryModal from "@/components/gallery/GalleryModal";
export default {
	name: "Gallery",
	components: {
		GalleryModal,
		GalleryImage,
	},
	data() {
		return {
			source: null,
			showModal: false,
			photos: [
				{
					filename: "gal-1-small.jpg",
					filenameBig: "gal-1-big.jpg",
				},
				{
					filename: "gal-2-small.jpg",
					filenameBig: "gal-2-big.jpg",
				},
				{
					filename: "gal-3-small.jpg",
					filenameBig: "gal-3-big.jpg",
				},
				{
					filename: "gal-4-small.jpg",
					filenameBig: "gal-4-big.jpg",
				},
				{
					filename: "gal-5-small.jpg",
					filenameBig: "gal-5-big.jpg",
				},
				{
					filename: "gal-6-small.jpg",
					filenameBig: "gal-6-big.jpg",
				},
			],
		};
	},
	methods: {
		changePicture(filename) {
			this.source = this.makeUrl(filename);
			this.showModal = true;
		},
		makeUrl(filename) {
			return require(`@/assets/img/${filename}`);
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
//scroll animations
.before-enter {
	opacity: 0;
	transform: translateY(5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
}
.enter {
	opacity: 1;
	transform: translateY(0);
}
#gallery {
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: $primary;
	padding-top: 15rem;
	padding-bottom: 10rem;
	position: relative;
}
.heading-2 {
	@include absHeading;
}
.gallery {
	width: 85%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	gap: 2.5rem;

	@media only screen and(max-width:$v-10) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and(max-width:$v-6) {
		grid-template-columns: repeat(1, 1fr);
	}
	@media only screen and(max-width:$v-5) {
		width: 90%;
	}
	& > * {
		cursor: pointer;
	}
}
</style>
