<script>
	import { DraftingCompass, Pencil, Terminal } from 'lucide-svelte';
	import brandingAircraft from '../lib/assets/what_we_do/branding_aircraft.svg';
	import brandingRunway from '../lib/assets/what_we_do/branding_runway.svg';
	import brandingLeft from '../lib/assets/what_we_do/branding1.svg';
	import brandingRight from '../lib/assets/what_we_do/branding2.svg';
	import designCursor from '../lib/assets/what_we_do/design_cursor.svg';
	import designWeb from '../lib/assets/what_we_do/design1.svg';
	import designMobile from '../lib/assets/what_we_do/design2.svg';
	import devCursor from '../lib/assets/what_we_do/dev_cursor.svg';
	import devCss from '../lib/assets/what_we_do/dev2.svg';
	import devSvelte from '../lib/assets/what_we_do/dev1.svg';
	import { inview } from 'svelte-inview';

	let aircraftX = 200;
	let aircraftY = 100;
	let designX = 100;
	let designY = 100;
	let devX = 50;
	let devY = 50;

	let isTitleInView, isDevInView, isBrandingInView;
	const options = {
		unobserveOnEnter: true
	};

	// Function to update image position
	function moveImage(event) {
		aircraftX = Math.min(Math.max(88, event.offsetX), event.target.clientWidth - 88);
		aircraftY = Math.min(Math.max(82, event.offsetY), event.target.clientHeight - 24);
		// console.log(event);
		// console.log('clientX clientY', event.clientX, event.clientY);
		// console.log('layerX, layerY', event.layerX, event.layerY); // inside current container
		// console.log('offsetX, offsetY', event.offsetX, event.offsetY);
		// console.log(' ');
	}
	function moveImage2(event) {
		designX = Math.min(Math.max(43, event.offsetX), event.target.clientWidth - 43);
		designY = Math.min(Math.max(19, event.offsetY), event.target.clientHeight);
	}
	function moveImage3(event) {
		devX = Math.min(Math.max(23, event.offsetX), event.target.clientWidth - 23);
		devY = Math.min(Math.max(9, event.offsetY), event.target.clientHeight - 10);
	}
	const handleTitleChange = ({ detail }) => {
		isTitleInView = detail.inView;
	};
	const handleBrandingChange = ({ detail }) => {
		isBrandingInView = detail.inView;
	};
	const handleDevChange = ({ detail }) => {
		isDevInView = detail.inView;
	};
</script>

<section class="wwd-container" id="benefits">
	<div class="width-restriction">
		<h2
			use:inview={options}
			on:inview_change={handleTitleChange}
			class={isTitleInView ? 'fade-in' : ''}
		>
			<span class="title-number">1.</span> What We Do
		</h2>
		<h3 class={isTitleInView ? 'fade-in' : ''}>
			Subscribe Once, Unlock Every Tool to Elevate Your Business!
		</h3>
		<div class="bento-grid">
			<div
				use:inview={options}
				on:inview_change={handleBrandingChange}
				class="grid-element branding {isBrandingInView ? 'fade-in' : ''}"
			>
				<div class="canvas" on:mousemove={moveImage} on:mouseleave={moveImage}>
					<img
						src={brandingAircraft}
						id="brandingAircraft"
						style="left: {aircraftX - 88}px; top: {aircraftY - 82}px; height: 142px; width: 176px;"
						alt="An Aircraft logo which you can move using your cursor."
					/>
					<img src={brandingLeft} id="brandingLeft" alt="Graphic with a list of icons." />
					<img src={brandingRunway} id="brandingRunway" alt="Graphic that showcases a runway." />

					<img src={brandingRight} id="brandingRight" alt="Graphic with a list of tools." />
				</div>
				<div class="row">
					<Pencil color="#fff"></Pencil>
					<h5>Branding</h5>
				</div>
				<p class="subtitle">Logo, Typography, Brand Voice, Stationery and Business Cards</p>
			</div>
			<div class="grid-element design {isBrandingInView ? 'fade-in' : ''}">
				<div class="canvas2" on:mousemove={moveImage2} on:mouseleave={moveImage2}>
					<img
						src={designCursor}
						id="cursorDesign"
						style="left: {designX - 43}px; top: {designY - 19}px; height: 39px; width: 87px;"
						alt="An Aircraft logo which you can move using your cursor."
					/>
					<img src={designWeb} id="designWeb" alt="Graphic with a list of icons." />
					<img src={designMobile} id="designMobile" alt="Graphic that showcases a runway." />
				</div>
				<div class="row">
					<DraftingCompass color="#fff"></DraftingCompass>
					<h5>Design</h5>
				</div>
				<p class="subtitle">Landing Page Design, UI/UX</p>
			</div>
			<div
				use:inview={options}
				on:inview_change={handleDevChange}
				class="grid-element development {isDevInView ? 'fade-in' : ''}"
			>
				<div class="canvas3" on:mousemove={moveImage3} on:mouseleave={moveImage3}>
					<img
						src={devCursor}
						id="cursorDev"
						style="left: {devX - 23}px; top: {devY}px; height: 17px; width: 57px;"
						alt="An Aircraft logo which you can move using your cursor."
					/>
					<img src={devCss} id="devCss" alt="Graphic with a list of icons." />
					<img src={devSvelte} id="devSvelte" alt="Graphic with a list of icons." />
				</div>
				<div class="row">
					<Terminal color="#fff"></Terminal>
					<h5>Development</h5>
				</div>
				<p class="subtitle">Frontend Development, Backend Development, AI</p>
			</div>
		</div>
	</div>
</section>

<style>
	#cursorDev {
		position: absolute;
		z-index: 2;
		overflow: hidden;
		pointer-events: none;
	}
	#devCss {
		position: absolute;
		top: 16px;
		left: 0;
		pointer-events: none;
	}
	#devSvelte {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		pointer-events: none;
	}
	#cursorDesign {
		position: absolute;
		pointer-events: none;
		z-index: 3;
		overflow: hidden;
	}
	#designWeb {
		z-index: 0;
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 1;
	}
	#designMobile {
		z-index: 0;
		position: absolute;
		top: 0;
		right: 0;
		pointer-events: none;
		z-index: 2;
	}
	.canvas {
		display: flex;
		margin-bottom: 32px;
		align-items: end;
		justify-content: center;
		position: relative;
		pointer-events: all;
		height: 300px;
		width: 100%;
		background-color: rgba(0, 0, 0, 0);
		overflow: hidden;
		/* cursor: none; */
	}
	.canvas2 {
		display: flex;
		margin-bottom: 32px;
		align-items: end;
		justify-content: center;
		position: relative;
		pointer-events: all;
		height: 300px;
		width: 100%;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0);
		/* cursor: none; */
	}
	.canvas3 {
		display: flex;
		margin-bottom: 32px;
		align-items: end;
		justify-content: center;
		position: relative;
		pointer-events: all;
		height: 300px;
		width: 100%;
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0);
		/* cursor: none; */
	}
	#brandingRight {
		position: absolute;
		top: 0px;
		right: 0px;
		pointer-events: none;
		z-index: 2;
	}
	#brandingRunway {
		position: relative;
		pointer-events: none;
	}
	#brandingLeft {
		position: absolute;
		top: 0px;
		left: 0px;
		pointer-events: none;
		z-index: 3;
	}
	#brandingAircraft {
		position: absolute;
		pointer-events: none;
		z-index: 2;
		overflow: hidden;
	}
	.row {
		display: flex;
		gap: 16px;
		align-items: center;
	}
	.subtitle {
		font-size: 20;
		color: #888;
		margin: 0;
		margin-top: 16px;
		font-weight: 500;
	}

	h5 {
		color: #fff;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 32px;
		margin: 0;
	}
	.bento-grid {
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(2, 1fr);
	}

	.grid-element {
		padding: 32px;
		border: 1px #333 solid;
		border-radius: 16px;
		background-image: linear-gradient(to bottom right, rgba(21, 21, 21, 1), rgba(21, 21, 21, 0.1));
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	.grid-element:hover {
		box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.25);
	}

	.branding {
		grid-row: 1;
		grid-column: 1;
	}

	.design {
		grid-row: 1;
		grid-column: 2;
	}

	.development {
		grid-row: 2;
		grid-column: 1 / 3;
	}

	.width-restriction {
		flex-direction: column;
	}
	h3 {
		color: #aaa;
		margin-bottom: 48px;
	}
	h2 {
		color: #fff;
	}
	.wwd-container {
		background-color: #111;
		padding: 64px 32px;
	}

	@media (max-width: 1200px) {
		.wwd-container {
			padding: 32px 24px;
		}
		.grid-element {
			padding: 24px;
		}
		img {
			max-width: 100%;
		}
	}
	@media (max-width: 800px) {
		.wwd-container {
			padding: 24px 16px;
		}
		.grid-element {
			padding: 16px;
		}
		img {
			max-width: 100%;
		}
		.bento-grid {
			display: flex;
			flex-direction: column;
		}
		#brandingRight {
			position: absolute;
			top: 0px;
			right: 0px;
			pointer-events: none;
			z-index: 2;
            height: 128px;
		}
		#brandingLeft {
			position: absolute;
			top: 0px;
			left: 0px;
			pointer-events: none;
			z-index: 3;
            height: 128px;
		}
	}
</style>
