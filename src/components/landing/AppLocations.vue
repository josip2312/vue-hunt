<template>
	<section id="locations">
		<h2 class="heading-2 dark">Lokacije</h2>
		<article class="location-article" v-scrollanimation>
			<div class="location-image">
				<GalleryImage
					:source="makeUrl('gal-1-big.jpg')"
					altAttr="Nature photo"
					className="notransform"
					width="1920"
					height="1280"
				/>
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Aut, laborum..
				</div>
				<button href="#contact" class="btn btn-sec">Lovi</button>
			</div>
			<div class="location-image">
				<GalleryImage
					:source="makeUrl('gal-2-big.jpg')"
					altAttr="Nature photo"
					width="1920"
					height="1280"
					className="notransform"
				/>
			</div>
		</article>
	</section>
</template>

<script>
import GalleryImage from "@/components/gallery/GalleryImage";
export default {
	name: "Locations",
	data() {
		return {
			sourceOne: "@/assets/img/gal-1-big.jpg",
			sourceTwo: " @/assets/img/gal-2-big.jpg",
		};
	},
	methods: {
		makeUrl(filename) {
			return require(`@/assets/img/${filename}`);
		},
	},
	components: { GalleryImage },
};
</script>
<style lang="scss" scoped>
.before-enter {
	opacity: 0;
	transform: translateY(5rem);
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;
}
.enter {
	opacity: 1;
	transform: translateY(0);
}
#locations {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	min-height: 90vh;
	background-color: $secondary;

	padding-top: 15rem;
	padding-bottom: 10rem;
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

	@media only screen and(max-width:$v-10) {
		flex-direction: column;
	}

	@media only screen and(max-width:$v-5) {
		width: 90%;
	}

	.location-image {
		flex: 1;

		img {
			overflow: hidden;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		@media only screen and(max-width:$v-10) {
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
			max-width: 40rem;
			font-size: 2rem;
			color: $font-p;
			margin-bottom: 2.5rem;
		}

		@media only screen and(max-width:$v-10) {
			padding: 3rem 0;
			justify-content: center;
			align-items: center;
		}
	}
}
.reverse {
	margin-top: 5rem;
	@media only screen and(max-width:$v-10) {
		flex-direction: column-reverse;
	}
}
</style>
