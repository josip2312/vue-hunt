<template>
	<footer id="footer">
		<div class="footer-top">
			<div class="footer-contact">
				<div class="location">
					<img
						src="../assets/img/icons/location.svg"
						alt="Location"
					/>
					<span>Prisoje 80240, BiH</span>
				</div>
			</div>

			<div class="footer-social">
				<img src="../assets/img/icons/fb.svg" alt="Facebook" />
				<img src="../assets/img/icons/ig.svg" alt="Instagram" />
				<img src="../assets/img/icons/wapp.svg" alt="WhatsApp" />
			</div>
		</div>
		<div class="footer-bottom">
			<div class="footer-bottom--container">
				<div class="footer-copyright">
					Developed by Josip Ivancic
				</div>
				<div class="footer-references">
					Lovacko drustvo Sljuka &copy;
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
};
</script>
<style lang="scss" scoped>
#footer {
	display: flex;
	flex-direction: column;
	align-items: center;

	min-height: 30vh;
	background-color: $primary;
	color: $font-p;
	@media only screen and(max-width:$bp-small) {
		padding-bottom: 9vh;
	}
}
.footer-top {
	display: flex;
	justify-content: space-around;
	align-items: center;

	width: 75%;
	flex: 2;
	@media only screen and(max-width:$bp-smallest) {
		width: 90%;
	}

	.footer-contact {
		display: flex;
		justify-content: space-around;
		align-items: center;
		.location {
			display: flex;
			align-items: center;
		}
		img {
			margin-right: 1rem;
			width: 2rem;
			height: 2rem;
		}
	}
	.footer-social {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 30%;
		img {
			width: 2rem;
			height: 2rem;
			cursor: pointer;
		}
		img:hover {
			fill: $accent;
		}
	}
}
.footer-bottom {
	flex: 1;
	display: flex;
	align-items: center;

	width: 100%;
	background-color: #022b29;
	font-size: 1.2rem;
	&--container {
		display: flex;
		align-items: center;
		justify-content: space-between;

		text-align: center;
		margin: 0 auto;
		width: 75%;
		@media only screen and(max-width:$bp-smallest) {
			width: 90%;
		}
	}
}
</style>
