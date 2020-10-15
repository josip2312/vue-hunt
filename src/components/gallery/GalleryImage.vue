<template>
	<figure v-lazyload class="image-wrapper">
		<img
			ref="image"
			:data-url="source"
			:src="placeholderSrc(width, height)"
			class="image-item"
			:alt="altAttr"
			:class="className"
			@click="$emit('change-picture')"
		/>
	</figure>
</template>

<script>
export default {
	name: 'GalleryImage',
	computed: {
		dataUrl() {
			const { width, height } = this.$attrs;
			if (!width || !height) return '';
			console.log(width, height);
			// create a tiny png with matching aspect ratio as img
			const w = 100;
			const canvas = document.createElement('canvas');
			canvas.width = w;
			canvas.height = (height / width) * w;

			return canvas.toDataURL();
		},
	},
	props: {
		source: {
			type: String,
			required: true,
		},
		altAttr: {
			type: String,
			required: true,
		},
		width: {
			type: String,
		},
		height: {
			type: String,
		},
		className: {
			type: String,
		},
		imgSource: {
			type: String,
		},
	},
	watch: {
		imgSource: function() {
			this.$refs.image.src = this.imgSource;
		},
	},
	methods: {
		placeholderSrc(w, h) {
			return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
		},
	},
};
</script>

<style lang="scss" scoped>
.image-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;

	&.loaded {
		.image {
			&-item {
				visibility: visible;
				opacity: 1;
				border: 0;
				transform: translateY(0);
			}
		}
	}
}
.image-item {
	height: auto;
	width: 100%;
	object-fit: cover;
	border-radius: 3px;

	backface-visibility: hidden;
	transition: transform 800ms ease-in-out, opacity 800ms ease-in-out;

	transform: translateY(5rem);
	visibility: hidden;
	opacity: 0;
}

//specific styling
.notransform {
	transform: translateY(0) !important;
}
</style>
