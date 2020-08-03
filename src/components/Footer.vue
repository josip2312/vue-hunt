<template>
	<footer id="footer">
		<div class="footer-top">
			<div class="footer-contact">
				<img src="../assets/img/phone.svg" alt="" />
				<span>063-132-823</span>
			</div>

			<div class="footer-social">
				<img src="../assets/img/fb.svg" alt="" />
				<img src="../assets/img/ig.svg" alt="" />
				<img src="../assets/img/wapp.svg" alt="" />
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
	min-height: 30vh;
	background-color: $primary;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: $font-p;
}
.footer-top {
	width: 75%;
	flex: 2;
	display: flex;

	justify-content: space-around;
	align-items: center;
	@media only screen and(max-width:$bp-smallest) {
		width: 90%;
	}
	.footer-contact {
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			margin-right: 1rem;
			width: 2rem;
			height: 2rem;
		}
	}
	.footer-social {
		width: 30%;
		display: flex;
		justify-content: space-between;
		align-items: center;

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
	width: 100%;
	display: flex;
	align-items: center;
	background-color: #022b29;
	font-size: 1.2rem;
	&--container {
		text-align: center;
		margin: 0 auto;
		width: 75%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media only screen and(max-width:$bp-smallest) {
			width: 90%;
		}
	}
}
</style>
