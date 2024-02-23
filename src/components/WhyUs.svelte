<script>
	import {
		AlignHorizontalDistributeCenter,
		CheckCheck,
		CircleDollarSign,
		Zap
	} from 'lucide-svelte';
	import pricingCard from '../lib/assets/why_us/pricing_card.png';
	import speed from '../lib/assets/why_us/speed.png';
	import flexibility from '../lib/assets/why_us/flexibility.png';
	import satisfaction from '../lib/assets/why_us/satisfaction.png';
	import { inview } from 'svelte-inview';

	let isTitleInView, isFlexInView, isSatisfactionInView;
	const options = {
		unobserveOnEnter: true
	};

	const handleTitleChange = ({ detail }) => {
		isTitleInView = detail.inView;
	};
	const handleFlexChange = ({ detail }) => {
		isFlexInView = detail.inView;
	};
	const handleSatisfactionChange = ({ detail }) => {
		isSatisfactionInView = detail.inView;
	};
</script>

<section class="whyus-container" id="why-us">
	<div class="width-restriction">
		<h2
			use:inview={options}
			on:inview_change={handleTitleChange}
			class={isTitleInView ? 'fade-in' : ''}
		>
			<span class="title-number">2.</span> Why Us
		</h2>
		<h3 class={isTitleInView ? 'fade-in' : ''}>
			Elevate Your Project with Aircraft – Beyond the Best, No Exaggeration!
		</h3>
		<div class="bento-grid">
			<div
				use:inview={options}
				on:inview_change={handleFlexChange}
				class="grid-element monthly-rate {isFlexInView ? 'fade-in' : ''}"
			>
				<CircleDollarSign size="48" color="#45DEA7"></CircleDollarSign>
				<h4 class="element-title">Fixed monthly rate</h4>
				<p>Consistent Pricing, No Surprises – One Fixed Monthly Rate!</p>
				<img src={pricingCard} alt="A graphic that shows that prices are consistent." />
			</div>
			<div class="grid-element flexibility {isFlexInView ? 'fade-in' : ''}">
				<AlignHorizontalDistributeCenter size="48" color="#5593E9"
				></AlignHorizontalDistributeCenter>
				<h4 class="element-title">Flexibility</h4>
				<p>
					Pause or cancel anytime.<br />Sign up for a plan and enjoy unlimited feature requests!
				</p>
				<img src={flexibility} alt="A graphic with a calendar that shows how flexible we are." />
			</div>
			<div class="grid-element speed {isFlexInView ? 'fade-in' : ''}">
				<Zap size="48" color="#F9AC6D"></Zap>
				<h4 class="element-title">Speed</h4>
				<p>Revisions are made between 24-48hrs</p>
				<img
					src={speed}
					alt="A graphic that says 'A task is done in 2 hours' which shows how fast we are."
				/>
			</div>
			<div
				use:inview={options}
				on:inview_change={handleSatisfactionChange}
				class="grid-element satisfaction {isSatisfactionInView ? 'fade-in' : ''}"
			>
				<div class="right-side">
					<CheckCheck size="48" color="#FF6B75"></CheckCheck>
					<h4 class="element-title">Guaranteed Satisfaction</h4>
					<p>We'll revise every project until you're 100% satisfied.</p>
				</div>
				<div class="left-side">
					<img
						src={satisfaction}
						alt="A chat with a client that shows that we can change our designs to get the client satisfied."
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.whyus-container {
		margin-bottom: 64px;
		padding: 64px 32px;
	}
	.width-restriction {
		flex-direction: column;
	}
	.right-side {
		width: 50%;
	}
	.left-side {
		width: 50%;
		display: flex;
		padding-left: 32px;
	}
	img {
		max-width: 100%;
	}
	/* TODO: make the image smaller */
	/* .left-side > img {
		width: 80%;
	} */
	h4 {
		margin: 16px 0;
		font-size: 32px;
		color: #111;
		font-family: 'Space Grotesk', sans-serif;
	}
	p {
		color: #777;
		font-weight: 500;
		font-family: 'Inter', sans-serif;
		font-size: 20px;
		margin: 0;
		margin-bottom: 32px;
	}
	.monthly-rate {
		grid-column: 1;
		grid-row: 1 / 3;
	}
	.flexibility {
		grid-column: 2;
		grid-row: 1;
	}
	.speed {
		grid-column: 3;
		grid-row: 1;
	}
	.satisfaction {
		grid-row: 2;
		grid-column: 2 / 4;
		display: flex;
		justify-content: space-between;
	}
	.grid-element {
		padding: 32px;
		border: 1px #ddd solid;
		border-radius: 16px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		background-color: #fff;
	}
	.grid-element:hover {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
	}
	.bento-grid {
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(3, 1fr);
	}
	h3 {
		margin-bottom: 64px;
	}

	@media (max-width: 800px) {
		.bento-grid {
			display: flex;
			flex-direction: column;
		}
		.right-side,
		.left-side {
			width: 100%;
		}
		.satisfaction {
			flex-direction: column;
		}
		.whyus-container {
			margin-bottom: 32px;
			padding: 32px 16px;
		}
		h3 {
			margin-bottom: 32px;
		}
		.grid-element {
			padding: 16px;
		}
	}

	@media (max-width: 1200px) {
		.bento-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		.monthly-rate {
			grid-column: 1;
			grid-row: 1 / 3;
		}
		.flexibility {
			grid-column: 2;
			grid-row: 1;
		}
		.speed {
			grid-column: 2;
			grid-row: 2;
		}
		.satisfaction {
			grid-row: 3;
			grid-column: 1 / 3;
			display: flex;
		}
		.whyus-container {
			margin-bottom: 48px;
			padding: 48px 24px;
		}
		.grid-element {
			padding: 24px;
		}
	}
</style>
