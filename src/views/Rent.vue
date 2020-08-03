<template>
	<section id="rent">
		<div class="pictures">
			<img :src="makeUrl(mainFile)" class="main-picture" alt="" />

			<div class="preview-pictures">
				<img
					v-for="(photo, index) in photos"
					:key="index"
					:src="makeUrl(photo.filename)"
					alt=""
					@click="changePicture(photo.filenameBig)"
					:class="{ active: photo.filenameBig === mainFile }"
				/>
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

	@media only screen and(max-width:$bp-small) {
		padding: 3rem 0;
	}
}
.pictures {
	width: 50%;

	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.main-picture {
		width: 100%;
		object-fit: cover;
		overflow: hidden;
		margin-bottom: 1.5rem;
		transition: all 0.2s;
	}
	.preview-pictures {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			flex: 1;
			transition: all 0.2s ease;
			opacity: 0.6;
			cursor: pointer;
			width: 33.3333%;
		}
		.active {
			opacity: 1;
		}
	}
}
</style>
