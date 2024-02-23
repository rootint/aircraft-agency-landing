<script>
	import { inview } from 'svelte-inview';

	let text = 'Better^, Faster^, More Affordable^ - Quality Made Easy!';
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

<div class="text-container">
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
</div>

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
		content: '';
		font-family: inherit;
		position: absolute;
		color: var(--text);
		/* color: #fff; */
		top: 0;
		left: 0;
	}
	span {
		font-family: 'Space Grotesk', sans-serif;
		margin: 0;
		padding: 0;
		color: #fff;
	}
	.text-container {
		position: relative;
		overflow: hidden;
		height: 120px;
		background-color: #111;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 48px;
		margin-top: 16px;
	}
	h2 {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 48px;
		color: #fff;
	}
</style>
