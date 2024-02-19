<script>
	import { onMount } from 'svelte';
	import { animationComplete } from '../stores';
	import { ChevronDown } from 'lucide-svelte';

	let text = 'The only agency you will ever need.';
	let displayedText = [];
	let index = -8;
	let speed = 50; // Time between letters

	onMount(() => {
		const interval = setInterval(() => {
			if (index < text.length) {
				if (index >= 0) {
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
	<h1>
		{#each displayedText as { char, key } (key)}
			<span class="fade-in">{char}</span>
		{/each}
	</h1>
	{#if index == text.length}
		<h2 class="fade-in-longer">
			Weaving creativity into branding and transforming ideas into exemplary digital experiences.
		</h2>
		<div class="scroll-down fade-in">
			<div class="scroll-down-icon">
				<ChevronDown color="#999" width="2" size="48" />
			</div>
			<div class="monospace-text">Scroll down to see more</div>
		</div>
	{:else}
		<h2 style="color: #fff;">Hi</h2>
	{/if}
</section>

<style>
	.monospace-text {
		font-family: 'Roboto Mono', monospace;
		margin-left: 24px;
		color: #999;
		font-size: 20px;
	}
	.scroll-down {
		position: absolute;
		bottom: 64px;
		left: 64px;
		display: flex;
		align-items: center;
	}

	.scroll-down-icon {
		border: #ddd solid 1px;
		border-radius: 16px;
		padding: 8px;
		padding-bottom: 4px;
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
