<script>
	import choosePackage from '../lib/assets/workflow/choose_package.png';
	import design from '../lib/assets/workflow/design.png';
	import dev from '../lib/assets/workflow/dev.png';
	import repeat from '../lib/assets/workflow/repeat.png';
	import { onMount } from 'svelte';

	let scrollY = 0;
	let activeImageIndex = 0;
	const images = [choosePackage, design, dev, repeat];

	function handleScroll() {
		const sectionHeight = window.innerHeight;
		let elem = document.querySelector('.graphic-section');
		console.log(window.scrollY);
		console.log(elem.getBoundingClientRect());
		activeImageIndex = Math.floor(
			Math.max(0, window.scrollY - elem.getBoundingClientRect().height + window.innerHeight * 0.4) /
				sectionHeight
		);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section class="htw-container">
	<div class="width-restriction">
		<h2><span class="title-number">0.</span> How This Works</h2>
		<h3>
			Our procedure is straightforward and hassle-free. Choose the option that best fits your
			requirements, and then schedule a brief 20-minute conversation with us.
		</h3>
		<div class="scroll-container">
			<div class="graphic-section">
				{#if activeImageIndex == 0}
					<img src={images[activeImageIndex]} />
				{:else if activeImageIndex == 1}
					<img src={images[activeImageIndex]} />
				{:else if activeImageIndex == 2}
					<img src={images[activeImageIndex]} />
				{:else if activeImageIndex == 3}
					<img src={images[activeImageIndex]} />
				{:else if activeImageIndex == 4}
					<img src={images[activeImageIndex]} />
				{/if}
				<!-- <img src={choosePackage} alt="Choose package graphic" /> -->
				<!-- <img src={design} alt="Design graphic" />
			<img src={dev} alt="Graphic with code" />
			<img src={repeat} alt="A loop showing design, dev and branding" /> -->
			</div>
			<div class="scroll-section">
				<div class="height-wrapper">
					<div class="text-section">
						<h3 class="section-title">
							<span class="step" style="color: #5593E9;">Step 1. </span>Choose Package
						</h3>
						<p class="section-body">
							After meeting with you to discuss your project's specifics, you can select from our
							available options, which currently include only the Standard and Premium packages,
							covering Branding, Design, Development, and more.
						</p>
					</div>
				</div>
				<div class="height-wrapper">
					<div class="text-section">
						<h3 class="section-title">
							<span class="step" style="color: #FF6B75;">Step 2. </span>Receive Designs
						</h3>
						<p class="section-body">
							Our team of creative experts will then translate your vision into initial concepts.
							This stage is all about exploring different directions and possibilities, ensuring we
							cover a broad spectrum of ideas that align with your project's objectives. <br />
							<br />After presenting you with the initial concepts, we closely collaborate with you
							to refine the designs. Your feedback is crucial during this phase, as it guides the
							iterative process of tweaking and perfecting the designs to match your vision
							precisely.
						</p>
					</div>
				</div>
				<div class="height-wrapper">
					<div class="text-section">
						<h3 class="section-title">
							<span class="step" style="color: #E072CC;">Step 3. </span>Development
						</h3>
						<p class="section-body">
							Our development process, designed to turn your vision into a fully functional product,
							begins with detailed planning and strategizing, ensuring a clear roadmap and technical
							foundation. We employ an agile methodology for flexible, iterative progress,
							complemented by rigorous quality assurance testing to guarantee reliability, security,
							and user-friendliness. Following meticulous development and testing phases, we manage
							a smooth deployment and launch.
						</p>
					</div>
				</div>
				<div class="height-wrapper">
					<div class="text-section">
						<h3 class="section-title">
							<span class="step" style="color: #9A6FDF;">Last Step. </span>Repeat or Leave
						</h3>
						<p class="section-body">
							Our relationship doesn't end at launch. We offer comprehensive post-launch support to
							address any subsequent needs or enhancements. Whether it's updates, maintenance, or
							scaling your project to accommodate growth, we're here to provide ongoing assistance
							to ensure your product continues to perform optimally.<br />
							Our development team combines technical expertise with creative thinking to transform your
							vision into a robust and scalable digital solution. We're committed to delivering excellence
							and empowering your business through cutting-edge technology and innovative development
							practices. Let's build something extraordinary together.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.height-wrapper {
		height: 100vh;
		display: flex;
		align-items: center;
	}
	.height-wrapper:first-child {
		height: unset;
		margin-top: 96px;
	}
    .height-wrapper:last-child {
		/* height: unset; */
		margin-top: 96px;
        margin-bottom: 96px;
	}
	.width-restriction {
		margin-top: 128px;
		position: relative;
		flex-direction: column;
	}
	.step {
		font-family: 'Inter', sans-serif;
		font-weight: 500;
	}
	.section-body {
		font-size: 20px;
		line-height: 140%;
	}
	.section-title {
		margin: 0;
		margin-bottom: 32px;
		font-size: 32px;
		color: #111;
		font-family: 'Space Grotesk', sans-serif;
	}
	.text-section {
		padding: 32px;
		border: 1px #ddd solid;
		border-radius: 16px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
	}
	img {
		max-width: 100%;
		min-width: 40%;
        animation: fadeIn 1s ease;
		/* width: 300px;
		height: 200px; */
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.htw-container {
		margin-top: 128px;
		position: relative;
		padding: 0 32px;
	}
	.scroll-container {
		margin-top: 96px;
		display: flex;
		gap: 10%;
		width: 100%;
		/* height: 100vh; */
		position: relative;
	}
	.graphic-section {
		position: sticky;
		top: 30%;
		height: 100vh;
		flex: 1;
	}
	.scroll-section {
		width: 50%;
		height: 400vh;
		flex: 1;
	}
</style>
