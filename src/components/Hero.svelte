<script>
	import { onMount } from 'svelte';
	import { animationComplete } from '../stores';
	import { ChevronDown } from 'lucide-svelte';
	import apexLogo from '../lib/assets/logos/apex_logo.png';
	import boLogo from '../lib/assets/logos/bo_logo.png';
	import csLogo from '../lib/assets/logos/cs_logo.png';
	import learniLogo from '../lib/assets/logos/learni_logo.png';
	import mfLogo from '../lib/assets/logos/mf_logo.png';
	import mqLogo from '../lib/assets/logos/mq_logo.png';
	import nlLogo from '../lib/assets/logos/nl_logo.png';
	import qsLogo from '../lib/assets/logos/qs_logo.png';
	import wsLogo from '../lib/assets/logos/ws_logo.png';
	import danil from '../lib/assets/danil.png';
	import dave from '../lib/assets/dave.png';
	import tio from '../lib/assets/tio.png';

	let text = 'The only agency you will ever need.';
	let displayedText = [];
	let index = -8;
	let speed = 50; // Time between letters
	// let speed = 1; // Time between letters

	onMount(() => {
		const interval = setInterval(() => {
			if (index < text.length + 5) {
				if (index >= 0 && index < text.length) {
					displayedText = [...displayedText, { char: text[index], key: Math.random() }];
				}
				index++;
			} else {
				clearInterval(interval);
				animationComplete.set(true);
			}
		}, speed);
	});
</script>

<section class="hero">
	<h1 style="margin-top: 24px;">
		{#each displayedText as { char, key } (key)}
			<span class="fade-in">{char}</span>
		{/each}
	</h1>

	{#if index == text.length + 5}
		<div class="fade-in-longer">
			<img src={danil} style="position: absolute; top: 200px; left: 200px; height: 34px;" />
			<img src={dave} style="position: absolute; right: 300px; bottom: 200px; height: 34px;" />
			<img src={tio} style="position: absolute; top: 150px; right: 200px; height: 34px;" />
		</div>
		<h2 class="fade-in-longer">
			Weaving creativity into branding and transforming ideas into exemplary digital experiences.
		</h2>
		<div style="height: 48px"></div>
		<div class="fade-in-longer">
			<div class="gradient-wrapper">
				<div class="another-wrapper">
					<a href="#pricing">
						<button href="#pricing"> See Plans </button>
					</a>
				</div>
			</div>
		</div>
		<div class="companies-container fade-in-longer">
			<div class="slide-track">
				<div class="slide">
					<img src={apexLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={boLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={csLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={learniLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={mfLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={mqLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={nlLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={qsLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={wsLogo} alt="Company Logo 1" />
				</div>

				<div class="slide">
					<img src={apexLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={boLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={csLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={learniLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={mfLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={mqLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={nlLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={qsLogo} alt="Company Logo 1" />
				</div>
				<div class="slide">
					<img src={wsLogo} alt="Company Logo 1" />
				</div>
			</div>
		</div>
	{:else}
		<h2 style="color: #fff;">Hi</h2>
		<div style="height: 126px"></div>
	{/if}
</section>

<style>
	.gradient-wrapper {
		padding: 2px 2px;
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
	}

	@media (max-width: 800px) {
		.gradient-wrapper {
			margin-top: 16px;
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

	.another-wrapper {
		background-color: #fff;
		border-radius: 13px;
		height: 100%;
		width: 100%;
		padding: 4px;
	}

	button {
		padding: 20px 88px;
		background-color: #111;
		font-weight: 500;
		font-size: 20px;
		color: #fff;
		border: none;
		border-radius: 13px;
		cursor: pointer;
		text-decoration: none;
	}
	.slide {
		width: calc(100% / 9);
		flex-shrink: 0;
		height: 64px; /* Adjust height as needed */
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateX(0);
	}

	.slide img {
		max-height: 20px;
		/* max-height: 100%;
        max-width: 100%; */
		object-fit: contain; /* Keeps logo aspect ratio */
		/* margin-left: 72px; */
	}

	/* Keyframes for the scrolling effect */
	@keyframes scroll-slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%); /* Moves the track by half its width */
		}
	}
	.slide-track {
		display: flex;
		width: 100%;
		animation: scroll-slide 30s linear infinite; /* Adjust time for your needs */
	}
	.companies-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 64px;
		overflow: hidden;
		background-color: #fff;
	}
	.companies-container::before,
	.companies-container::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 128px; /* Adjust the width of the fading effect */
		pointer-events: none; /* Allow click events to pass through */
		z-index: 2;
	}

	.companies-container::before {
		left: 0;
		background: linear-gradient(to right, #fff 0%, transparent 100%);
	}

	.companies-container::after {
		right: 0;
		background: linear-gradient(to left, #fff 0%, transparent 100%);
	}

	section.hero {
		padding: 0 64px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin: 0;
		width: 100vw;
		height: 100svh;
		min-height: -webkit-fill-available;
	}
	h1 {
		font-size: 64px;
		margin: 0;
		margin-bottom: 32px;
	}
	h2 {
		color: #777;
		font-size: 24px;
		font-weight: 500;
		margin: 0;
		animation: fadeInAnimation 0.5s forwards;
	}
	.fade-in {
		opacity: 0;
		animation: fadeInAnimation 0.5s forwards;
	}

	.fade-in-longer {
		opacity: 0;
		animation: fadeInAnimation 1s forwards;
	}

	@keyframes fadeInAnimation {
		to {
			opacity: 1;
		}
	}
</style>
