<script>
	import aircraft from '../lib/assets/aircraft.svg';
	import { inview } from 'svelte-inview';
	import Modal from './Modal.svelte';
	let seatsLeft = 5;
	let isTitleInView, isPricingInView;
	const options = {
		unobserveOnEnter: true
	};

	const handleTitleChange = ({ detail }) => {
		isTitleInView = detail.inView;
	};
	const handlePricingChange = ({ detail }) => {
		isPricingInView = detail.inView;
	};
</script>

<section class="whyus-container" id="pricing">
	<div class="width-restriction">
		<h2
			use:inview={options}
			on:inview_change={handleTitleChange}
			class={isTitleInView ? 'fade-in' : ''}
		>
			<span class="title-number">3.</span> Pricing
		</h2>
		<h3 class={isTitleInView ? 'fade-in' : ''}>One simple fee, no surprises.</h3>
		<div use:inview={options} on:inview_change={handlePricingChange} class="pricing-row">
			<div class="pricing-card standard {isPricingInView ? 'fade-in' : ''}">
				<div class="seats-left-container">
					<p class="seats-left-text">{seatsLeft} seats left!</p>
				</div>
				<h4>Standard</h4>
				<h5>Perfect for smaller businesses.</h5>
				<p class="price">
					$677<span class="grayed-out-price"
						><span class="grayed-out-price" style="text-decoration: line-through;">$1500</span
						>/month</span
					>
				</p>
				<!-- <button class="active">Get Started Now</button> -->
				<Modal buttonType="pricing"></Modal>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">
						Pixel-perfect designs delivered on time (Includes both brand and landing page designs)
					</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Web development</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">A dedicated team for your design and development needs.</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">One request at a time</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Easy-to-manage ticketing system</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Available for 5 days each week</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Pause or cancel anytime</p>
				</div>
			</div>
			<div class="pricing-card {isPricingInView ? 'fade-in' : ''}">
				<div class="seats-left-container-inactive">
					<p class="seats-left-text-inactive">Coming soon!</p>
				</div>
				<h4>Premium</h4>
				<h5>Perfect for startups.</h5>
				<p class="price">$3000<span class="grayed-out-price">/month</span></p>
				<button class="inactive">Available Later</button>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">All the perks of the standard plan</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">MVP Building</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Maintenance</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Two requests at a time</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Priority support & delivery</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Async + weekly Zoom calls</p>
				</div>
				<div class="option-container">
					<img src={aircraft} class="list-marker" alt="Just a marker for the list" />
					<p class="option-text">Pause or cancel anytime</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.whyus-container {
		padding: 0 32px;
	}
	.width-restriction {
		display: block;
	}
	.seats-left-container-inactive {
		background-color: rgba(0, 0, 0, 0.1);
		padding: 6px 16px;
		border-radius: 8px;
		margin-bottom: 16px;
		display: block;
	}
	.seats-left-text-inactive {
		margin: 0;
		font-size: 12px;
		color: #111;
	}
	.option-container {
		display: flex;
		align-items: start;
		margin-bottom: 20px;
	}
	.option-container:last-child {
		margin-bottom: 0px;
	}
	.option-text {
		margin: 0;
		font-size: 20px;
		margin-left: 16px;
		line-height: 140%;
	}
	.list-marker {
		display: inline-block;
		margin-top: 6px;
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
	.inactive {
		border-radius: 8px;
		font-family: 'Space Grotesk', sans-serif;
		color: #fff;
		background-color: #ccc;
		padding: 16px 0;
		font-size: 24px;
		border: none;
		margin-top: 24px;
		margin-bottom: 32px;
		width: 100%;
	}
	.grayed-out-price {
		font-family: 'Space Grotesk', sans-serif;
		color: #999;
		font-size: 32px;
		margin-left: 4px;
		display: inline-block;
	}
	.price {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 48px;
		margin: 0;
	}
	h5 {
		font-size: 20px;
		color: #777;
		font-weight: 500;
		margin: 0;
		margin-bottom: 32px;
	}
	h4 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 32px;
		margin: 0;
		margin-bottom: 12px;
	}
	.seats-left-container {
		background-color: rgba(255, 107, 117, 0.15);
		padding: 6px 16px;
		border-radius: 8px;
		margin-bottom: 16px;
		display: block;
	}
	.seats-left-text {
		margin: 0;
		font-size: 12px;
		color: #ff6b75;
	}
	.pricing-row {
		display: flex;
		gap: 48px;
		justify-content: center;
	}
	.pricing-card {
		margin-top: 48px;
		display: flex;
		flex-direction: column;
		padding: 32px;
		background-color: #fff;
		border: 1px #ddd solid;
		border-radius: 16px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		/* min-width: 33%; */
		max-width: 445px;
		flex: 1;
		align-items: flex-start;
	}

	.standard {
		border: 1px #ff6b75 solid;
		box-shadow: 0px 0px 2px 0px rgba(255, 107, 117, 0.25);
	}
	.standard:hover {
		box-shadow: 0px 0px 8px 0px rgba(255, 107, 117, 0.25);
	}

	@media (max-width: 1200px) {
		.pricing-row {
			display: flex;
			gap: 48px;
		}
		.pricing-card {
			padding: 24px;
		}
		.whyus-container {
			padding: 0 24px;
		}
	}
	@media (max-width: 800px) {
		.pricing-row {
			display: flex;
			gap: 24px;
			flex-direction: column;
			width: 100%;
            justify-content: center;
            align-items: center;
		}
		.pricing-card {
			min-width: none;
			width: 100%;
			max-width: none;
			padding: 24px;
            margin-top: 32px;
		}
		.whyus-container {
			padding: 0 16px;
		}
		.option-text {
			font-size: 16px;
			margin-left: 12px;
		}
	}
</style>
