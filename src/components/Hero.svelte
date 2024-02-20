<script>
	import { onMount } from 'svelte';
	import { animationComplete } from '../stores';
	import CompanySlider from './CompanySlider.svelte';

	let text = 'The onlyx agency you will everx needx_';
	let displayedText = [];
	let index = -8;
	// let speed = 60; // Time between letters
	let speed = 1; // Time between letters

	onMount(() => {
		const interval = setInterval(() => {
			if (index < text.length + 5) {
				if (index >= 0 && index < text.length) {
					if (text[index] != 'x') {
						displayedText = [...displayedText, { char: text[index], key: Math.random() }];
					}
				}
				index++;
			} else {
				clearInterval(interval);
				animationComplete.set(true);
			}
		}, speed);
	});
</script>

/
<section class="hero">
	<h1 class="title">
		{#each displayedText as { char, key } (key)}
			<span class="fade-in">{char}</span>
		{/each}
		{#if index < text.length}
			<span class="underscore">_</span>
		{/if}
		<!-- <div class="fade-in-longer"> -->

		<!-- </div> -->
		<div class="gradient-wrapper">
			<div class="another-wrapper">
				<!-- <a href="#pricing"> -->
				<button href="#pricing"> See Plans </button>
				<!-- </a> -->
			</div>
		</div>
	</h1>

	{#if index == text.length + 5}
		<CompanySlider></CompanySlider>
	{:else}
		<h2 style="color: #fff;">Hi</h2>
		<div style="height: 135px;"></div>
	{/if}
</section>

<style>
	.underscore {
		margin: 0;
		padding: 0;
	}
	@keyframes blink {
		0%,
		100% {
			opacity: 0.3;
		}
		30% {
			opacity: 0;
		}
	}
	.blinking {
		animation: blink 2s step-start 0s infinite;
	}
	.title-container {
		display: flex;
	}
	.title {
		margin: 0;
		font-size: 172px;
		line-height: 130%;
		font-family: 'Space Grotesk', sans-serif;
	}
	span {
		font-family: 'Space Grotesk', sans-serif;
		margin: 0;
		padding: 0;
	}
	.gradient-wrapper {
		padding: 4px 4px;
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
		padding: 4px;
	}

	button {
		padding: 32px 144px;
		background-color: #111;
		font-size: 32px;
		color: #fff;
		border: none;
		border-radius: 13px;
		cursor: pointer;
		text-decoration: none;
		font-family: 'Space Grotesk', sans-serif;
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
	h2 {
		color: #777;
		font-size: 32px;
		font-weight: 500;
		max-width: 800px;
		line-height: 140%;
		margin: 0;
		margin-bottom: 64px;
		animation: fadeInAnimation 0.5s forwards;
	}
	.fade-in {
		opacity: 1;
		/* opacity: 0; */
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
