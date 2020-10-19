<template>
	<header class="header" :class="{ scrolled: scrollPosition > 500 }">
		<button
			class="mobile-menu-toggle"
			@click="toggleSidebar"
			:class="{ active: toggled }"
		>
			<img
				class="menu-image"
				src="@/assets/img/icons/menu.svg"
				alt="Menu icon"
				v-click-outside="hideSidebar"
			/>
		</button>

		<nav class="navbar">
			<a href="#showcase">
				<div class="logo">Šljuka</div>
			</a>
			<ul :class="{ visible: toggled }">
				<li><a href="#showcase">Naslovnica</a></li>
				<li><a href="#gallery">Galerija</a></li>
				<li><a href="#locations">Lokacija</a></li>
				<li><a href="#rent">Smještaj</a></li>
				<li><a href="#contact">Kontakt</a></li>
			</ul>
		</nav>

		<TheMobileNav />
	</header>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import TheMobileNav from '@/components/layout/TheMobileNav';

export default {
	name: 'Header',
	components: {
		TheMobileNav,
	},
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
.header {
	height: 9vh;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;

	background-color: transparent;
	transition: background-color 0.3s ease-in-out;
	@media only screen and(max-width:$v-7) {
		position: absolute;
	}
}
.scrolled {
	background-color: $primary-dark;
}
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 100%;
	width: 85%;
	margin: 0 auto;

	.logo {
		font-size: 2.2rem;
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;

		list-style: none;

		li {
			padding: 0 2rem;

			&:last-child {
				padding-right: 0;
			}
			a {
				color: $grey;
			}
			a:hover,
			a:focus {
				color: $accent;
			}
		}

		@media only screen and(max-width:$v-6) {
			flex-direction: column;
			justify-content: center;
			align-items: center;

			position: fixed;
			top: 0;
			right: 0;
			height: 100vh;
			width: 60vw;

			background-color: $primary-dark;
			transform: scaleX(0);
			transform-origin: right;
			opacity: 0;
			transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

			li {
				opacity: 0;
				transition: opacity 50ms ease-in-out;
				font-size: 2.5rem;

				padding: 3rem 1.5rem;

				&:last-child {
					padding-right: 1.5rem;
				}
			}
		}
	}
	.visible {
		li {
			opacity: 1;
			transition: opacity 250ms ease-in-out 450ms;
		}
		transform: scaleX(1);
		opacity: 1;
	}
}

.mobile-menu-toggle {
	display: none;

	@media only screen and(max-width:$v-6) {
		background-color: $font-white;
		display: block;

		border: none;

		padding: 1.1rem;
		position: fixed;
		right: 7.5%;
		top: 2vh;

		border-radius: 50%;
		z-index: 20;
		cursor: pointer;

		transform: rotate(0);
		transition: transform 0.2s ease-in-out;
	}
}
.active {
	transform: rotate(-180deg);
}
</style>
