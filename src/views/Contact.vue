<template>
	<section id="contact">
		<h2 class="heading-2 dark">Kontakt</h2>
		<h3 class="heading-3 dark" v-scrollanimation>Javi se!</h3>
		<form class="form" v-scrollanimation @submit.prevent="">
			<div class="form-group">
				<label for="email">Email adresa</label>
				<input type="email" id="email" name="email" />
				<img
					class="icon-email"
					src="../assets/img/icons/email.svg"
					alt="Email icon"
				/>
			</div>
			<div class="form-group">
				<label for="subject">Naslov</label>
				<input type="text" id="subject" name="subject" />
				<img
					class="icon-subject"
					src="../assets/img/icons/title.svg"
					alt="Title icon"
				/>
			</div>
			<div class="form-group">
				<label for="message">Poruka</label>
				<textarea
					id="message"
					name="message"
					cols="5"
					rows="5"
				></textarea>
				<img
					class="icon-text"
					src="../assets/img/icons/text.svg"
					alt="Content icon"
				/>
			</div>
			<button href="#" class="btn">Pošalji</button>
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
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background-color: $secondary;
	padding: 5rem 0;
	position: relative;
	@media only screen and(max-width:$bp-smallest) {
		padding-top: 9rem;
	}
}

.heading-2 {
	@include absHeading;
}
.heading-3 {
	margin-bottom: 2rem;
}
.form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 45rem;
	padding: 4rem 0;
	background-color: $primary;
	border-radius: 3px;

	@media only screen and(max-width:$bp-smallest) {
		width: 75vw;
	}
	.form-group {
		display: flex;
		flex-direction: column;

		margin: 0 auto;
		width: 75%;
		position: relative;
		label {
			margin-bottom: 1rem;
		}
		input,
		textarea {
			margin-bottom: 2rem;
			padding: 0.9rem 2rem;
			padding-left: 5rem;
			border: none;
			outline: none;
			caret-color: $font-dark;
			color: $font-dark;
			font-size: 1.8rem;
			background-color: $font-white;
			border: 2px solid $font-white;
			transition: all 0.2s ease;
		}
		input:focus,
		textarea:focus {
			border: 2px solid $accent;
		}

		.icon-email,
		.icon-subject {
			position: absolute;
			bottom: 3rem;
			left: 1rem;
			width: 2rem;
			height: 2rem;
			transform: rotate(0);
		}
		.icon-text {
			position: absolute;
			top: 4.5rem;
			left: 1rem;
			width: 2rem;
			height: 2rem;
		}
	}
	button {
		width: 75%;
		margin: 0 auto;
	}
}
</style>
