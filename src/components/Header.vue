<template>
	<header id="header" :class="{ scrolled: scrollPosition > 500 }">
		<img
			class="mobile-menu"
			src="../assets/img/icons/menu.svg"
			alt="Menu icon"
			@click="toggleSidebar"
			:class="{ active: toggled }"
			v-click-outside="hideSidebar"
		/>
		<div class="mobile-nav">
			<a href="#landing" class="mobile-nav__home">
				<img src="../assets/img/icons/home.svg" alt="Home icon" />
				<span>Pocetna</span>
			</a>
			<a href="#locations" class="mobile-nav__location">
				<img src="../assets/img/icons/bed.svg" alt="Bed icon" />
				<span>Smjestaj</span>
			</a>
			<a href="#contact" class="mobile-nav__contact">
				<img src="../assets/img/icons/email2.svg" alt="Email icon" />
				<span>Kontakt</span>
			</a>
		</div>
		<nav class="navbar">
			<h3 class="heading-3">Sljuka</h3>
			<ul :class="{ visible: toggled }">
				<li><a href="#landing">Pocetna</a></li>
				<li><a href="#gallery">Galerija</a></li>
				<li><a href="#locations">Lokacija</a></li>
				<li><a href="#rent">Smjestaj</a></li>
				<li><a href="#contact">Kontakt</a></li>
			</ul>
		</nav>
	</header>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
	name: 'Header',
	data() {
		return {
			scrollPosition: null,
			toggled: false,
		};
	},
	methods: {
		toggleSidebar() {
			this.toggled = !this.toggled;
		},
		hideSidebar() {
			this.toggled = false;
		},
		updateScroll() {
			this.scrollPosition = window.scrollY;
		},
	},
	mounted() {
		window.addEventListener('scroll', this.updateScroll);
		this.popupItem = this.$el;
	},
	directives: {
		ClickOutside,
	},
};
</script>
<style lang="scss" scoped>
#header {
	height: 9vh;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;

	background-color: transparent;
	transition: all 0.3s;
	@media only screen and(max-width:$bp-small) {
		position: absolute;
	}
}
.scrolled {
	background-color: $primary-dark !important;
}
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 100%;
	width: 85%;
	margin: 0 auto;

	h3 {
		flex: 1;
	}
	ul {
		flex: 1.2;
		display: flex;
		justify-content: space-between;
		align-items: center;

		list-style: none;
		@media only screen and(max-width:$bp-large) {
			flex: 1.5;
		}

		@media only screen and(max-width:$bp-small) {
			flex-direction: column;
			justify-content: flex-start;

			position: fixed;
			top: 0;
			right: 0;
			height: 91vh;
			width: 45vw;
			padding-top: 12vh;

			background-color: $primary-dark;
			transform: scaleX(0);
			transform-origin: right;
			opacity: 0;
			transition: all 0.3s;

			li {
				padding: 3rem 1.5rem;

				a {
					font-size: 2.5rem;
				}
			}
		}

		li {
			a {
				color: $grey;
			}
			a:hover {
				color: $accent;
			}
		}
	}
	.visible {
		transform: scaleX(1);
		opacity: 1;
	}
}

.mobile-menu {
	display: none;

	@media only screen and(max-width:$bp-small) {
		background-color: $font-white;
		display: block;

		padding: 1.1rem;
		position: fixed;
		right: 7.5%;
		top: 1.5vh;

		border-radius: 50%;
		z-index: 20;
		cursor: pointer;

		transform: rotate(0);
		transition: all 0.2s;
	}
}
.active {
	transform: rotate(-180deg);
}
.mobile-nav {
	display: none;
	@media only screen and(max-width:$bp-small) {
		display: flex;
		justify-content: space-around;
		align-items: center;

		z-index: 10;
		background-color: $primary-dark;
		position: fixed;
		bottom: 0;
		left: 0;
		height: 9vh;
		width: 100%;

		& > * {
			display: flex;
			justify-content: center;
			align-items: center;

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
