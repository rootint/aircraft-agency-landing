<script>
	import { onMount } from 'svelte';
	import { animationComplete } from '../stores';
	import CompanySlider from './CompanySlider.svelte';
	import aircraft from '../lib/assets/aircraft_.svg';
	import aircraftBlack from '../lib/assets/aircraft__black.svg';

	let text = 'The only^ agency% you will ever^ need_';
	let displayedText = text.split('').map((char, index) => keyWrapper(makeMeta(char), index));

	let index = -8;
	// let speed = 75; // Time between letters
	let speed = 1; // Time between letters

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

<section
	class="hero {index != text.length + 5 && typeof window != 'undefined' && window.scrollY == 0
		? 'requires-no-scroll'
		: ''}"
>
	<div class="width-restriction">
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
							class="span-symbol {state === 'visible'
								? 'span-symbol__visible'
								: state === 'underscore'
									? 'span-symbol__underscore'
									: ''}">_</span
						>
					{/if}
				{/if}
			{/each}
			<!-- {#if index < text.length} -->
			<!-- <span class="underscore">_</span> -->
			<!-- {/if} -->
		</h1>
		<!-- {#if index == text.length + 5} -->
		<div
			class="{index == text.length + 5 ? 'fade-in-longer' : ''} fs-initial d-inline-block"
			style={index == text.length + 5 ? 'opacity: 1;' : 'opacity: 0;'}
		>
			<div class="gradient-wrapper">
				<div class="another-wrapper">
					<a href="#pricing">
						<button> See Plans </button>
					</a>
				</div>
			</div>
		</div>
		<!-- {/if} -->
		{#if index == text.length + 5}
			<CompanySlider></CompanySlider>
		{/if}
	</div>
</section>

<style>
	.width-restriction {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin: 0 auto;
		width: 100%;
		height: 100vh;
		min-height: -webkit-fill-available;
	}
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
		/* color: #fff; */
		top: 0;
		left: 0;
	}
	.title {
		margin: 0;
		padding: 0;
		font-size: 120px;
		line-height: 130%;
	}
	span {
		font-family: 'Space Grotesk', sans-serif;
		letter-spacing: -3px;
		margin: 0;
		padding: 0;
		/* color: #fff; */
		color: #111;
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
		border-radius: 16px;
		margin-top: 96px;
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
		border-radius: 14px;
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
		padding: 24px 120px;
		background-color: #111;
		font-size: 24px;
		color: #fff;
		border: none;
		border-radius: 11px;
		cursor: pointer;
		text-decoration: none;
		font-family: 'Space Grotesk', sans-serif;
	}
	section.hero {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		width: 100%;
		height: 100vh;
		min-height: -webkit-fill-available;
		padding: 0 32px;
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
