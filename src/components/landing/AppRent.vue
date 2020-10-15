<template>
	<section id="rent">
		<h2 class="heading-2">Smjestaj</h2>
		<div class="container">
			<div class="pictures">
				<GalleryImage
					:source="makeUrl(mainFile)"
					:imgSource="imgSource"
					altAttr="Acommodation image"
					className="notransform"
					width="1920"
					height="1282"
				/>

				<div class="preview-pictures" v-scrollanimation>
					<img
						loading="lazy"
						v-for="(photo, index) in photos"
						:key="index"
						:src="makeUrl(photo.filename)"
						@click="changePicture(photo.filenameBig)"
						:class="{ active: photo.filenameBig === mainFile }"
						alt="Acommodation image"
						width="640"
						height="427"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import GalleryImage from '@/components/gallery/GalleryImage';

export default {
	name: 'Rent',
	components: {
		GalleryImage,
	},
	data() {
		return {
			mainFile: 'room1big.jpg',
			imgSource: '',
			photos: [
				{
					filename: 'room1small.jpg',
					filenameBig: 'room1big.jpg',
				},
				{
					filename: 'room2small.jpg',
					filenameBig: 'room2big.jpg',
				},
				{
					filename: 'room3small.jpg',
					filenameBig: 'room3big.jpg',
				},
			],
		};
	},
	methods: {
		changePicture(filename) {
			this.imgSource = this.makeUrl(filename);
			this.mainFile = filename;
		},
		makeUrl(filename) {
			return require(`@/assets/img/${filename}`);
		},
	},
};
</script>

<style lang="scss" scoped>
/* .preview-pictures {
	.before-enter {
		opacity: 0;
		transform: translateY(5rem);
		transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
	}
	.enter {
		opacity: 1;
		transform: translateY(0);
	}
} */

#rent {
	background-color: $primary;
	padding: 7.5rem 0;
	padding-top: 12rem;
	position: relative;
}
.heading-2 {
	@include absHeading;
}
.container {
	width: 85%;

	background-color: $primary-dark;
	margin: 0 auto;
	border-radius: 3px;
	@media only screen and(max-width:$v-5) {
		width: 90%;
	}
}
.pictures {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 0 auto;

	width: 90%;
	max-width: 75rem;

	.main-picture {
		width: 100%;
		object-fit: cover;
		border-radius: 3px;
		overflow: hidden;
		margin-bottom: 1.5rem;
		transition: opacity 0.2s ease-in-out;
	}
	.preview-pictures {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		img {
			width: 100%;
			height: auto;
			border-radius: 3px;
			overflow: hidden;
			flex: 1;
			transition: opacity 0.2s ease-in-out;
			opacity: 0.5;
			cursor: pointer;
			width: 33.3333%;
		}
		img.active {
			opacity: 1;
		}
	}
}
</style>
