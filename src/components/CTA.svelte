<script>
	import cross from '$lib/assets/cross.svg';
	import circle_dotted from '$lib/assets/circle_dotted.svg';
	import danil from '../lib/assets/danil.png';
	import dave from '../lib/assets/dave.png';
	import tio from '../lib/assets/tio.png';
	import { inview } from 'svelte-inview';
	import Modal from './Modal.svelte';

	let text = 'Start a new project^ with% us in just^ a few clicks_';
	let displayedText = text.split('').map((char, index) => keyWrapper(makeMeta(char), index));

	let index = -8;
	let speed = 30; // Time between letters
	// let speed = 1; // Time between letters

	let isTitleInView;
	const options = {
		unobserveOnEnter: true,
		rootMargin: '-128px'
	};

	const handleTitleChange = ({ detail }) => {
		isTitleInView = detail.inView;
		if (isTitleInView) {
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
				}
			}, speed);
		}
	};

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
</script>

<section class="cta-container">
	<div class="width-restriction">
		<h2 use:inview={options} on:inview_change={handleTitleChange}>
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
		</h2>
		<p
			class="subtitle {index == text.length + 5 ? 'fade-in' : ''}"
			style={index == text.length + 5 ? 'visibility: visible;' : 'visibility: hidden;'}
		>
			Book a free call and Turn your maybe into definitely
		</p>
		<div class={index == text.length + 5 ? 'fade-in' : ''}>
			<div
				class="gradient-wrapper"
				style={index == text.length + 5 ? 'visibility: visible;' : 'visibility: hidden;'}
			>
				<div class="another-wrapper">
                    <Modal buttonType="cta"></Modal>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.decor-container {
		width: 100%;
		background-color: #8347de;
		position: absolute;
		overflow: hidden;
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
	span {
		font-family: 'Space Grotesk', sans-serif;
		letter-spacing: -1px;
		margin: 0;
		padding: 0;
		color: #fff;
	}
	.width-restriction {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}
	h2 {
		color: #fff;
	}
	.subtitle {
		font-size: 24px;
		color: #ccc;
		margin: 0;
		margin-top: 48px;
		margin-bottom: 64px;
	}
	@media (max-width: 800px) {
		.subtitle {
			font-size: 20px;
			color: #ccc;
			margin: 0;
			margin-top: 24px;
			margin-bottom: 32px;
		}
	}
	.cta-container {
		margin: 0;
		margin-top: 64px;
		background-color: #111;
		z-index: -10;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 96px 32px;
		width: 100%;
		/* position: absolute; */
		box-sizing: border-box;
		overflow: hidden;
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
		background-color: #111;
		border-radius: 15px;
		padding: 6px;
		display: inline-block;
	}

	button {
		display: inline-block;
		padding: 24px 120px;
		background-color: #fff;
		font-size: 24px;
		color: #111;
		border: none;
		border-radius: 13px;
		cursor: pointer;
		text-decoration: none;
		font-family: 'Space Grotesk', sans-serif;
	}

	@media (max-width: 1200px) {
		button {
			display: inline-block;
			padding: 20px 80px;
			background-color: #fff;
			font-size: 20px;
			color: #111;
			border: none;
			border-radius: 13px;
			cursor: pointer;
			text-decoration: none;
			font-family: 'Space Grotesk', sans-serif;
		}
		.cta-container {
			padding: 72px 24px;
		}
	}

	@media (max-width: 800px) {
		.cta-container {
			padding: 48px 16px;
		}
		.gradient-wrapper {
			margin-top: 16px;
			display: flex;
			width: 100%;
		}
	}
</style>
