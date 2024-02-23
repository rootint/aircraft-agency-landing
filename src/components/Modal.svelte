<script>
	import { Phone } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let buttonType;

	onMount(() => {
		if (localStorage.getItem('email')) {
			formData.email = localStorage.getItem('email');
		}
	});

	let design = false;
	let branding = false;

	let showModal = false;
	let formData = {
		name: '',
		email: '',
		field2: '',
		budget: ''
	};

	function close() {
		showModal = false;
	}

	async function submit() {
		console.log(
			JSON.stringify({
				email: formData.email,
				name: formData.name,
				service: `Design&Dev: ${design}, Branding: ${branding}`,
				budget: formData.budget,
				problems: '',
				success: ''
			})
		);
		const endpoint = 'https://api.llime.co/aircraft/contact';

		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: formData.email,
				name: formData.name,
				service: `Design&Dev: ${design}, Branding: ${branding} Which button was pressed: ${buttonType}`,
				budget: formData.budget,
				problems: '',
				success: ''
			})
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		close();
		alert('Success! We will contact you soon');
	}
</script>

<!-- Button to trigger the modal -->
<!-- <div
	style="flex-direction: column; align-items: center; animation: fadeIn 2s ease; {showModal
		? 'display: none'
		: 'display: flex'}"
> -->
{#if buttonType == 'top'}
	<div class="gradient-wrapper">
		<div class="another-wrapper">
			<button class="top" on:click={() => (showModal = true)}>Book A Call</button>
		</div>
	</div>
{:else if buttonType == 'top-mobile'}
	<div class="gradient-wrapper">
		<!-- <div class="another-wrapper"> -->
		<button class="top mobile" on:click={() => (showModal = true)}><Phone style="margin: 0;"></Phone></button>
		<!-- </div> -->
	</div>
{:else if buttonType == 'pricing'}
	<button class="active" on:click={() => (showModal = true)}>Get Started Now</button>
{:else if buttonType == 'cta'}
	<button class="cta" on:click={() => (showModal = true)}>Book A Call</button>
{/if}
<!-- </div> -->

{#if showModal}
	<div class="modal">
		<div class="modal-content">
			<h2>Contact Us<span class="modal-close" on:click={close}>&times;</span></h2>
			<h3>Book a free discovery call with us.</h3>

			<form on:submit|preventDefault={submit}>
				<div class="input-part">
					<label for="email">Email</label>
					<input
						type="email"
						bind:value={formData.email}
						class="email-input"
						placeholder="example@email.com"
					/>
				</div>
				<div class="input-part">
					<label for="email">Your Name</label>
					<input type="text" bind:value={formData.name} class="email-input" placeholder="Name" />
				</div>
				<p class="checkbox-title">What service are you interested in?</p>
				<div
					class="checkbox-wrapper"
					on:click={() => {
						design = !design;
					}}
				>
					<input type="checkbox" bind:checked={design} />
					<div class="checkbox-text">
						<p class="checkbox-label">Design and Development</p>
						<p class="checkbox-subtitle">
							App design, Web design, Pitch decks, Graphic design, Web app development
						</p>
					</div>
				</div>

				<div
					class="checkbox-wrapper"
					on:click={() => {
						branding = !branding;
					}}
				>
					<input type="checkbox" bind:checked={branding} />
					<div class="checkbox-text">
						<p class="checkbox-label">Branding</p>
						<p class="checkbox-subtitle">
							Logo, Business cards, Letterheads, Brand guidelines, Brand Strategy
						</p>
					</div>
				</div>

				<div style="height: 8px" />
				<div class="input-part">
					<label for="budget">What is your budget for this project?</label>
					<input
						type="text"
						bind:value={formData.budget}
						class="email-input"
						placeholder="3000 USD"
					/>
				</div>
				<button
					type="submit"
					class={(branding || design) && formData.name && formData.email && formData.budget
						? ''
						: 'disabled'}>Book a Call</button
				>
			</form>
		</div>
	</div>
{/if}

<style>
	.top-cta-mobile {
		border-radius: 8px;
		border: solid #ddd 1px;
		padding: 16px;
		display: flex;
		align-items: center;
		background-color: #fff;
		font-weight: 500;
		font-size: 16px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		color: #111;
	}
	.cta {
		display: inline-block;
		padding: 24px 120px;
		background-color: #fff;
		font-size: 24px;
		color: #111;
		border: none;
		border-radius: 13px;
		cursor: pointer;
		text-decoration: none;
		font-family: 'Space Grotesk', sans-serif;
		/* z-index: 999;
        position: relative;  */
	}

	@media (max-width: 1200px) {
		.cta {
			display: inline-block;
			padding: 20px 80px;
			background-color: #fff;
			font-size: 20px;
			color: #111;
			border: none;
			border-radius: 13px;
			cursor: pointer;
			text-decoration: none;
			font-family: 'Space Grotesk', sans-serif;
		}
	}
	.active {
		border-radius: 8px;
		font-family: 'Space Grotesk', sans-serif;
		color: #fff;
		background-color: #ff6b75;
		padding: 16px 0;
		font-size: 24px;
		border: none;
		box-shadow: 0px 0px 2px 0px rgba(255, 107, 117, 0.25);
		margin-top: 24px;
		margin-bottom: 32px;
		cursor: pointer;
		width: 100%;
	}
	.active:hover {
		box-shadow: 0px 0px 8px 0px rgba(255, 107, 117, 0.5);
	}
	h2 {
		font-size: 32px;
	}
	h3 {
		font-size: 20px;
		margin-bottom: 16px;
	}
	p.checkbox-subtitle {
		line-height: 130%;
		color: #999;
		font-size: 14px;
		margin: 0;
		padding: 0;
		padding-top: 4px;
	}

	p.checkbox-title {
		margin-bottom: 8px;
		font-size: 16px;
		font-weight: 500;
	}
	input[type='checkbox'] {
		margin-right: 12px;
		accent-color: #111;
	}
	.checkbox-label {
		margin: 0;
		padding: 0;
		font-weight: 500;
	}
	.checkbox-wrapper {
		align-items: start;
		display: flex;
		padding: 16px;
		border: 1px solid #ddd;
		border-radius: 8px;
		margin-bottom: 16px;
	}
	label {
		margin-bottom: 8px;
		font-size: 16px;
		font-weight: 500;
	}
	.input-part {
		display: flex;
		flex-direction: column;
		margin-bottom: 24px;
	}
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
	}

	.modal-content {
		background: white;
		padding: 32px;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		width: 580px;
	}

	.modal-close {
		margin: 0;
		padding: 0px;
		cursor: pointer;
		float: right;
		font-size: 20px;
	}
	.email-input {
		font-weight: 400;
		font-style: normal;
		font-size: 1rem;
		background-color: #fff;
		color: #111;
		padding: 16px;
		border-radius: 8px;
		border: none;
		border: 1px solid #ddd;
		opacity: 1;
	}
	@media (max-width: 800px) {
		.email-input {
			width: 100%;
			font-size: 1rem;
			padding: 16px;
			height: unset;
		}
		.modal {
			width: 100wv;
			height: 100vh;
            overflow: scroll;
		}
		.modal-content {
            margin: 16px;
			height: calc(100vh - 16px);
			padding: 16px;
			overflow: scroll;
		}
		/* .modal {
			position: absolute;
			background-color: #fff;
			z-index: 3; */
		/* } */
		/* .modal-content {
			background: none;
			padding: 16px;
			border-radius: 0px;
			box-shadow: none;
			width: 100%;
		} */
	}

	.email-input:focus {
		outline: none;
		border: 1px solid #111;
	}

	.email-input::placeholder {
		font-weight: 400;
		color: #aaa;
	}
	.gradient-wrapper {
		padding: 1px 1px;
		background: linear-gradient(
			to bottom right,
			#91de45,
			#45dea7,
			#454ade,
			#8347de,
			#de4545,
			#91de45,
			#45dea7,
			#454ade,
			#8347de,
			#de4545
		);
		background-size: 200% 200%;
		border-radius: 16px;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 800px) {
		.gradient-wrapper {
			width: 100%;
		}
	}

	.gradient-wrapper:hover {
		background: linear-gradient(
			to bottom right,
			#91de45,
			#45dea7,
			#454ade,
			#8347de,
			#de4545,
			#91de45,
			#45dea7,
			#454ade,
			#8347de,
			#de4545
		);
		background-size: 200% 200%;
		-webkit-animation: Animation 4s linear infinite;
		-moz-animation: Animation 4s linear infinite;
		animation: Animation 4s linear infinite;
	}

	@-webkit-keyframes Animation {
		0% {
			background-position: 10% 0%;
		}
		50% {
			background-position: 91% 100%;
		}
		100% {
			background-position: 10% 0%;
		}
	}
	@-moz-keyframes Animation {
		0% {
			background-position: 10% 0%;
		}
		50% {
			background-position: 91% 100%;
		}
		100% {
			background-position: 10% 0%;
		}
	}
	@keyframes Animation {
		0% {
			background-position: 10% 0%;
		}
		50% {
			background-position: 91% 100%;
		}
		100% {
			background-position: 10% 0%;
		}
	}

	button {
		padding: 16px 32px;
		background: #111;
		font-weight: 500;
		width: 100%;
		font-size: 1rem;
		color: #fff;
		border: none;
		border-radius: 15px;
		/* margin-left: 10px; */
		cursor: pointer;
	}

	.top {
		padding: 16px 32px;
		background: #fff;
		font-weight: 500;
		width: 100%;
		font-size: 1rem;
		color: #111;
		border: none;
		border-radius: 15px;
		/* margin-left: 10px; */
		cursor: pointer;
	}
    .mobile {
		padding: 16px;
        padding-bottom: 12px;
		background: #fff;
		font-weight: 500;
		width: 100%;
		border: none;
		border-radius: 15px;
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		/* margin-left: 10px; */
		cursor: pointer;
	}

	button.disabled {
		background-color: #ddd;
		color: #fff;
		cursor: default;
		pointer-events: none;
	}

	@media (max-width: 800px) {
		button {
			width: 100%;
			font-size: 1rem;
			padding: 1rem 4rem;
		}
	}
</style>
