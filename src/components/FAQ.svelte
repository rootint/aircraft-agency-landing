<script>
	import { HelpCircle } from 'lucide-svelte';
	import { inview } from 'svelte-inview';
	let isTitleInView, isRow1InView, isRow2InView, isRow3InView;
	const options = {
		unobserveOnEnter: true
	};
	const handleTitleChange = ({ detail }) => {
		isTitleInView = detail.inView;
	};
	const handleRow1Change = ({ detail }) => {
		isRow1InView = detail.inView;
	};
	const handleRow2Change = ({ detail }) => {
		isRow2InView = detail.inView;
	};
	const handleRow3Change = ({ detail }) => {
		isRow3InView = detail.inView;
	};
</script>

<section class="faq-container" id="faq">
	<div class="width-restriction">
		<h2
			use:inview={options}
			on:inview_change={handleTitleChange}
			class={isTitleInView ? 'fade-in' : ''}
		>
			<span class="title-number">4.</span> FAQ
		</h2>
		<h3 style="margin-bottom: 40px;" class={isTitleInView ? 'fade-in' : ''}>
			Questions on Your Mind? Find Clarity Here
		</h3>
		<div
			use:inview={options}
			on:inview_change={handleRow1Change}
			class="question-container {isRow1InView ? 'fade-in' : ''}"
		>
			<div class="title-container">
				<HelpCircle></HelpCircle>
				<h4>How does the pause feature work?</h4>
			</div>
			<p>
				We recognize that there might be months where your design and development needs are lighter,
				and you might not have enough requests to utilize the full month. That's when the option to
				pause your subscription becomes invaluable.
				<br /><br />
				Our billing cycles operate on a 31-day basis. For instance, if you activate your subscription
				and make use of our services for 21 days before choosing to pause, your billing cycle freezes,
				preserving the remaining 10 days of service. These can be utilized at any future point, ensuring
				you get full value from your subscription.
			</p>
		</div>
		<div
			use:inview={options}
			on:inview_change={handleRow2Change}
			class="question-container {isRow2InView ? 'fade-in' : ''}"
		>
			<div class="title-container">
				<HelpCircle></HelpCircle>
				<h4>Why wouldn't I just hire a full-time designer or full time developer?</h4>
			</div>
			<p>
				Great question! Hiring a full-time senior-level designer or developer can be quite costly,
				with annual salaries often surpassing $100,000, not to mention the added expense of
				benefits. Moreover, finding available talent in today's market can be a challenge.
				Additionally, there may be periods when you don't have enough work to keep a full-time
				employee fully engaged, leading to paying for downtime you can't utilize.
				<br /><br />
				Our monthly subscription model offers a flexible alternative. You have the freedom to pause and
				resume your subscription based on your workload, ensuring that you only pay for design and development
				services when you actually need them. This approach not only optimizes your expenses but also
				spares you the complexities and financial burdens associated with maintaining full-time staff
				during fluctuating work volumes.
			</p>
		</div>
		<div class="question-row">
			<div
				use:inview={options}
				on:inview_change={handleRow3Change}
				class="question-container {isRow3InView ? 'fade-in' : ''}"
			>
				<div class="title-container">
					<HelpCircle></HelpCircle>
					<h4>What if I only have a single request?</h4>
				</div>
				<p>
					No problem at all. Feel free to pause your subscription once you're done and come back
					whenever you have more design or development requirements. There's no reason to waste any
					leftover subscription time.
				</p>
			</div>
			<div
				use:inview={options}
				on:inview_change={handleRow3Change}
				class="question-container {isRow3InView ? 'fade-in' : ''}"
			>
				<div class="title-container">
					<HelpCircle></HelpCircle>
					<h4>How much work would I receive in a month?</h4>
				</div>
				<p>
					The number of deliverables may differ based on the project's scope and complexity.
					Typically, you can anticipate receiving a complete brand identity, a custom-designed and
					developed website featuring up to 8 subpages, or around 25-35 screens for a mobile app, on
					average.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.width-restriction {
		display: flex;
		flex-direction: column;
	}
	.question-row {
		display: flex;
		gap: 24px;
	}
	.title-container {
		display: flex;
		align-items: center;
	}
	h4 {
		font-size: 24px;
		font-family: 'Space Grotesk', sans-serif;
		margin: 0;
		margin-top: 2px;
		/* margin-bottom:  */
		margin-left: 12px;
	}
	p {
		margin: 0;
		margin-top: 24px;
		line-height: 140%;
		color: #555;
	}
	.question-container {
		display: flex;
		flex-direction: column;
		padding: 32px;
		border: 1px #ddd solid;
        background-color: #fff;
		border-radius: 16px;
		margin-bottom: 24px;
		flex: 1;
	}
	.faq-container {
		margin-top: 96px;
		margin-bottom: 64px;
		padding: 0 32px;
		width: 100%;
	}
	@media (max-width: 1200px) {
		.faq-container {
			margin-top: 64px;
			margin-bottom: 32px;
			padding: 0 24px;
			width: 100%;
		}
		.question-container {
			display: flex;
			flex-direction: column;
			padding: 24px;
			border: 1px #ddd solid;
			border-radius: 16px;
			margin-bottom: 24px;
			flex: 1;
		}
	}
	@media (max-width: 800px) {
		.question-row {
			flex-direction: column;
			gap: 0;
		}
		.faq-container {
			margin-top: 64px;
			margin-bottom: 32px;
			padding: 0 16px;
			width: 100%;
		}
		.question-container {
			display: flex;
			flex-direction: column;
			padding: 16px;
			border: 1px #ddd solid;
			border-radius: 8px;
			margin-bottom: 16px;
			flex: 1;
		}
	}
</style>
