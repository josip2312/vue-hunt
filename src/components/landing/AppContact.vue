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
					src="@/assets/img/icons/email.svg"
					alt="Email icon"
				/>
			</div>
			<div class="form-group">
				<label for="subject">Naslov</label>
				<input type="text" id="subject" name="subject" />
				<img
					class="icon-subject"
					src="@/assets/img/icons/title.svg"
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
					src="@/assets/img/icons/text.svg"
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
	padding: 7.5rem 0;
	padding-top: 12rem;
	position: relative;
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

	padding: 4rem 0;
	background-color: $primary;
	border-radius: 3px;

	width: 90%;
	max-width: 50rem;
	.form-group {
		display: flex;
		flex-direction: column;

		margin: 0 auto;
		width: 85%;
		position: relative;
		label {
			margin-bottom: 1rem;
		}
		input,
		textarea {
			margin-bottom: 2rem;
			padding: 1rem 2rem;
			padding-left: 4rem;
			border: none;
			outline: none;
			caret-color: $font-dark;
			color: $font-dark;
			font-size: 1.8rem;
			background-color: $font-white;
			border: 2px solid $font-white;
			transition: border 0.2s ease-in-out;
		}
		input:focus,
		textarea:focus {
			border: 2px solid $accent;
		}

		.icon-email,
		.icon-subject {
			position: absolute;
			bottom: 3.4rem;
			left: 1rem;
			width: 2rem;
			height: 2rem;
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
		width: 85%;
		margin: 0 auto;
	}
}
</style>
