<script>
	import { onMount } from 'svelte';
	import { animationComplete } from '../stores';
	import CompanySlider from './CompanySlider.svelte';

	let text = 'The only^% agency you will ever^ need_';
	let displayedText = text.split('').map((char) => keyWrapper(makeMeta(char), Math.random()));

	let index = -8;
	let speed = 75; // Time between letters
	// let speed = 1; // Time between letters

	function Meta() {
		this.state = 'transparent';
	}

	function setMetaState(meta, state) {
		if (typeof meta !== 'object') {
			console.log('setMetaState: unexpected', typeof meta, meta);
			return meta;
		}
		return {
			...meta,
			state
		};
	}

	function setMetaVisible(meta) {
		return setMetaState(meta, 'visible');
	}

	function setMetaUnderscore(meta) {
		return setMetaState(meta, 'underscore');
	}

	function makeMetaSymbol(char) {
		const meta = new Meta();
		meta.type = 'symbol';
		meta.value = char;
		return meta;
	}

	function makeMetaSpecial(special) {
		const meta = new Meta();
		meta.type = 'special';
		meta.value = special;
		return meta;
	}

	function makeMeta(symbol) {
		switch (true) {
			case symbol === '^':
				return makeMetaSpecial('waiter');
			case symbol === '%':
				return makeMetaSpecial('endofline');
			case symbol === '_':
				return makeMetaSpecial('lastunderscore');
			default:
				return makeMetaSymbol(symbol);
		}
	}

	function keyWrapper(object, index) {
		if (typeof object !== 'object') {
			console.log('keyWrapper: unexpected');
			return object;
		}

		object.key = index;

		return object;
	}

	onMount(() => {
		const interval = setInterval(() => {
			if (index < text.length + 5) {
				if (index >= 0 && index < text.length) {
					displayedText = [
						...displayedText.slice(0, index),
						setMetaVisible(displayedText.at(index)),
						setMetaUnderscore(displayedText.at(index + 1)),
						...displayedText.slice(index + 2)
					].filter(Boolean);
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
	<h1 class="title">
		{#each displayedText as { type, value, state, key } (key)}
			{#if type === 'symbol'}
				<span
					class="span-symbol {state === 'visible'
						? 'span-symbol__visible'
						: state === 'underscore'
							? 'span-symbol__underscore'
							: ''}">{value}</span
				>
			{:else if type === 'special'}
				<!-- svelte-ignore empty-block -->
				{#if value === 'endofline'}
					<br />
				{:else if value === 'waiter'}{:else if value === 'lastunderscore'}
					<span
						class="span-symbol {state === 'visible' || state === 'underscore'
							? 'span-symbol__underscore'
							: ''}">a</span
					>
				{/if}
			{/if}
		{/each}
		<!-- {#if index < text.length} -->
		<!-- <span class="underscore">_</span> -->
		<!-- {/if} -->
		{#if index == text.length + 5}
			<div class="fade-in-longer fs-initial d-inline-block">
				<div class="gradient-wrapper">
					<div class="another-wrapper">
						<a href="#pricing">
							<button> See Plans </button>
						</a>
					</div>
				</div>
			</div>
		{/if}
	</h1>

	{#if index == text.length + 5}
		<CompanySlider></CompanySlider>
	{/if}
</section>

<style>
	.span-symbol {
		position: relative;
		opacity: 0;
	}

	.span-symbol__visible {
		opacity: 1;
	}

	.span-symbol__underscore {
		opacity: 1;
		color: transparent;
	}

	.span-symbol__underscore::after {
		content: '_';
		font-family: inherit;
		position: absolute;
		color: var(--text);
		top: 0;
		left: 0;
	}

	.underscore {
		margin: 0;
		padding: 0;
		margin-left: -48px;
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
	.title {
		margin: 0;
		padding: 0;
		font-size: 172px;
		line-height: 130%;
	}
	span {
		font-family: 'Space Grotesk', sans-serif;
		margin: 0;
		padding: 0;
	}
	.gradient-wrapper {
		padding: 4px;
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
		border-radius: 32px;
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
		border-radius: 28px;
		padding: 6px;
		display: inline-block;
	}

	.fs-initial {
		font-size: initial;
	}

	.d-inline-block {
		display: inline-block;
		vertical-align: middle;
	}

	button {
		display: inline-block;
		padding: 32px 140px;
		background-color: #111;
		font-size: 32px;
		color: #fff;
		border: none;
		border-radius: 24px;
		cursor: pointer;
		text-decoration: none;
		font-family: 'Space Grotesk', sans-serif;
	}
	section.hero {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin: 0;
		width: 100%;
		height: 100svh;
		min-height: -webkit-fill-available;
	}
	.fade-in {
		opacity: 1;
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
