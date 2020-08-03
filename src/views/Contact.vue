<template>
	<section id="contact">
		<h2 class="heading-2 dark">Javi se!</h2>
		<form action="" class="form">
			<div class="form-group">
				<label for="email">Email adresa</label>
				<input type="email" id="email" name="email" />
				<img class="icon-email" src="../assets/img/email.svg" alt="" />
			</div>
			<div class="form-group">
				<label for="message">Poruka</label>
				<textarea
					id="message"
					name="message"
					cols="5"
					rows="5"
				></textarea>
				<img class="icon-text" src="../assets/img/text.svg" alt="" />
			</div>
			<a href="#" class="btn">Dalje</a>
		</form>
	</section>
</template>

<script>
export default {
	name: 'Contact',
};
</script>

<style lang="scss" scoped>
#contact {
	//min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: $secondary;
	padding: 5rem;

	h2 {
		margin-bottom: 2.5rem;
	}
}

.form {
	width: 45rem;
	padding: 4rem 0;
	background-color: $primary;
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	@media only screen and(max-width:$bp-medium) {
		width: 50%;
	}
	@media only screen and(max-width:$bp-small) {
		width: 62.5%;
	}
	@media only screen and(max-width:$bp-smaller) {
		width: 75%;
	}
	@media only screen and(max-width:$bp-smallest) {
		width: 90%;
	}
	.form-group {
		margin: 0 auto;
		width: 75%;
		display: flex;
		flex-direction: column;
		position: relative;
		label {
			margin-bottom: 1.5rem;
		}
		input {
			margin-bottom: 1rem;
			border: none;
			padding: 1rem 2rem;
			padding-left: 5rem;
			outline: none;
			caret-color: $font-dark;
			color: $font-dark;
			font-size: 1.6rem;
		}
		textarea {
			margin-bottom: 2rem;
			padding: 1rem 2rem;
			padding-left: 5rem;
			outline: none;
			caret-color: $font-dark;
			color: $font-dark;
			font-size: 1.8rem;
		}
		.icon-email {
			position: absolute;
			bottom: 1.8rem;
			left: 1rem;
			width: 2rem;
			height: 2rem;
		}
		.icon-text {
			position: absolute;
			top: 5rem;
			left: 1rem;
			width: 2rem;
			height: 2rem;
		}
	}
	a {
		width: 75%;
		margin: 0 auto;
	}
}
</style>
