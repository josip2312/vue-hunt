<template>
	<section id="rent">
		<h2 class="heading-2">Smjestaj</h2>
		<div class="container">
			<div class="pictures">
				<img
					:src="makeUrl(mainFile)"
					class="main-picture"
					alt="Acommodation image"
					v-scrollanimation
				/>

				<div class="preview-pictures" v-scrollanimation>
					<img
						v-for="(photo, index) in photos"
						:key="index"
						:src="makeUrl(photo.filename)"
						@click="changePicture(photo.filenameBig)"
						:class="{ active: photo.filenameBig === mainFile }"
						alt="Acommodation image"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Rent',
	data() {
		return {
			mainFile: 'room1big.jpg',
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
			this.mainFile = filename;
		},
		makeUrl(filename) {
			return require(`../assets/img/${filename}`);
		},
	},
};
</script>

<style lang="scss" scoped>
#rent {
	background-color: $primary;
	padding: 5rem 0;
	padding-top: 10rem;
	position: relative;
}
.heading-2 {
	@include absHeading;
}
.container {
	width: 85%;
	background-color: $primary-dark;
	margin: 0 auto;
	border-radius: 0.5rem;
	@media only screen and(max-width:$bp-smallest) {
		border-radius: 3px;
	}
}
.pictures {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 0 auto;

	width: 65%;
	@media only screen and(max-width:$bp-smallest) {
		width: 90%;
	}

	.main-picture {
		width: 100%;
		object-fit: cover;
		border-radius: 3px;
		overflow: hidden;
		margin-bottom: 1.5rem;
		transition: all 0.2s;
	}
	.preview-pictures {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		img {
			border-radius: 3px;
			overflow: hidden;
			flex: 1;
			transition: all 0.2s ease;
			opacity: 0.5;
			cursor: pointer;
			width: 33.3333%;
		}
		.active {
			opacity: 1;
		}
	}
}
</style>
