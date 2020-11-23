<template>
	<div class="mobile-nav">
		<a href="#landing" class="mobile-nav__home">
			<img src="@/assets/img/icons/home.svg" alt="Home icon" />
			<span>Pocetna</span>
		</a>
		<a href="#locations" class="mobile-nav__location">
			<img src="@/assets/img/icons/bed.svg" alt="Bed icon" />
			<span>Smjestaj</span>
		</a>
		<a href="#contact" class="mobile-nav__contact">
			<img src="@/assets/img/icons/email2.svg" alt="Email icon" />
			<span>Kontakt</span>
		</a>
	</div>
</template>

<script>
export default {
	name: "TheMobileNav",
};
</script>

<style lang="scss" scoped>
.mobile-nav {
	display: none;
	@media only screen and(max-width:$v-6) {
		display: flex;
		justify-content: space-around;
		align-items: center;

		z-index: 10;
		background-color: $primary-dark;
		position: fixed;
		bottom: 0;
		left: 0;

		width: 100%;

		& > * {
			display: flex;
			justify-content: center;
			align-items: center;

			padding: 1.35rem 0;
			font-size: 1.8rem;
			flex: 1;
			text-align: center;

			img {
				fill: #fff;
				margin-right: 1rem;
				width: 2.2rem;
				height: 2.2rem;
			}
			span {
				text-decoration: none;
				color: $font-white;
			}
		}
	}
}
</style>
