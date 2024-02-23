<script>
	import cross from '$lib/assets/cross.svg';
	import circle_dotted from '$lib/assets/circle_dotted.svg';
	import plus from '$lib/assets/plus.svg';
	import triangle from '$lib/assets/triangle.svg';
	import plus_cross_cross from '$lib/assets/plus_cross_cross.svg';
	import circle_circle from '$lib/assets/circle_circle.svg';
	import { onMount } from 'svelte';
	import danil from '../lib/assets/danil.png';
	import dave from '../lib/assets/dave.png';
	import tio from '../lib/assets/tio.png';
	import ai from '../lib/assets/ai.png';
	import marketing from '../lib/assets/marketing.png';
	import { animationComplete } from '../stores';

	onMount(() => {
		var scene = document.getElementById('scene');
		var parallaxInstance = new Parallax(scene);
	});

	let showNames = false;
	animationComplete.subscribe((value) => {
		showNames = value;
	});
</script>

<ul id="scene">
	<li class="layer" data-depth="-0.04" invert-x="false" invert-y="false">
		{#if showNames}
			<img src={dave} class="opaque" style="position: absolute; left: 10%; top: 88vh; height: 34px;" />
		{/if}
	</li>
	<li class="layer" data-depth="0.015">
		{#if showNames}
			<img src={tio} class="opaque" style="position: absolute; top: 7vh; right: 12%; height: 34px;" />
		{/if}
	</li>
	<li class="layer " data-depth="0.007" invert-x="false" invert-y="false">
		{#if showNames}
			<img src={danil} class="opaque" style="position: absolute; top: 8.5vh; left: 15%; height: 34px;" />
		{/if}
	</li>
	<li class="layer" data-depth="-0.005">
		{#if showNames}
			<img src={marketing} class="opaque" style="position: absolute; top: 85vh; right: 10%; height: 34px;" />
		{/if}
	</li>
	<li class="layer" data-depth="0.005" invert-x="false" invert-y="false">
		{#if showNames}
			<img src={ai} class="opaque" style="position: absolute; top: 25vh; right: 25%; height: 34px;" />
		{/if}
	</li>
	<li class="layer hide-mobile" data-depth="-0.015">
		<img src={danil} class="hide-mobile" style="position: absolute; bottom: 20vh; right: 10%; height: 34px;" />
	</li>
	<li class="layer hide-mobile" data-depth="0.02">
		<img src={tio} class="hide-mobile" style="position: absolute; bottom: 40vh; right: 30%; height: 34px;" />
	</li>
	<li class="layer hide-mobile" data-depth="0.02">
		<img src={dave} class="hide-mobile" style="position: absolute; bottom: 50vh; right: 15%; height: 34px;" />
	</li>

	<li class="layer transparent" data-depth="0.06">
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; top: 25vh; left: 25%;"
		/>
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; top: 75vh; right: 25%;"
		/>
		<!-- <img src={cross} alt="Parallax Cross" style="position: absolute; top: 33%; right: 33%;" /> -->
	</li>
	<li class="layer transparent" data-depth="-0.04">
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; top: 5vh; left: 5%;"
		/>
		<img src={cross} alt="Parallax Cross" style="position: absolute; bottom: 5%; left: 10%;" />
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; top: 50vh; right: 10%;"
		/>
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 90vh; right: 5%;" />
	</li>
	<li class="layer transparent" data-depth="0.015">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 7vh; left: 20%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 7vh; right: 20%;" />
	</li>
	<li class="layer transparent" data-depth="0.02">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 85vh; right: 60%;" />
	</li>
	<li class="layer transparent" data-depth="-0.01">
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; right: 35%; bottom: -99px;"
			alt="Circle Dotted"
		/>
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 100px; top: 85vh"
			alt="Circle Dotted"
		/>
		<img
			src={circle_dotted}
			style="position: absolute; left: 35%; top: -99px"
			alt="Circle Dotted"
		/>
	</li>

	<li class="layer transparent" data-depth="-0.04">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 125vh; left: 5%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 135vh; left: 17%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 200vh; left: 10%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 149vh; right: 50%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 150vh; right: 5%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 50%; top: 180vh;"
			alt="Circle Dotted"
		/>
	</li>
	<li class="layer transparent" data-depth="0.05">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 170vh; left: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 180vh; right: 40%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 200vh; right: 6%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 230vh; left: 13%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 240vh; left: 54%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 250vh; left: 30%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 270vh; left: 84%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: -50px; top: 200vh;"
			alt="Circle Dotted"
		/>
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 300vh; left: 12%;" />
	</li>
	<li class="layer transparent" data-depth="0.06">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 280vh; left: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 290vh; right: 40%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 310vh; left: 6%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 320vh; left: 13%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 330vh; left: 54%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 340vh; right: 30%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; right: -50px; top: 300vh;"
			alt="Circle Dotted"
		/>
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 350vh; left: 84%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 360vh; right: 12%;" />
	</li>
	<li class="layer transparent" data-depth="0.08">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 370vh; left: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 380vh; right: 40%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 390vh; left: 6%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 400vh; left: 45%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 410vh; left: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 420vh; right: 23%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 430vh; left: 67%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 35%; top: 400vh;"
			alt="Circle Dotted"
		/>
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 440vh; right: 53%;" />
	</li>
	<li class="layer transparent" data-depth="-0.08">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 450vh; left: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 460vh; right: 40%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 470vh; left: 6%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 480vh; left: 45%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 490vh; left: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 500vh; right: 23%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 510vh; left: 67%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 520vh; right: 53%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; right: 35%; top: 500vh;"
			alt="Circle Dotted"
		/>
	</li>
	<li class="layer transparent" data-depth="-0.08">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 530vh; left: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 540vh; right: 40%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 550vh; left: 6%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 560vh; left: 45%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 570vh; left: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 580vh; right: 23%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 590vh; left: 67%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 600vh; right: 53%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 35%; top: 600vh;"
			alt="Circle Dotted"
		/>
	</li>
	<li class="layer transparent" data-depth="-0.08">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 51%; left: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 52%; right: 50%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 53%; left: 6%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 55%; left: 55%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 55%; left: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 56%; right: 23%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 57%; left: 67%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 58%; right: 53%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 59%; right: 13%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 35%; top: 55%;"
			alt="Circle Dotted"
		/>
	</li>
	<li class="layer transparent" data-depth="0.1">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 61%; left: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 62%; right: 60%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 63%; left: 6%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 64%; left: 66%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 65%; left: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 66%; right: 23%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 67%; left: 67%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 68%; right: 63%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 69%; left: 1%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 1%; top: 63%;"
			alt="Circle Dotted"
		/>
	</li>
	<li class="layer transparent" data-depth="0.07">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 71%; left: 89%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 72%; right: 53%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 73%; left: 88%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 74%; left: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 75%; left: 64%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 76%; right: 12%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 77%; left: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 78%; right: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 79%; right: 15%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 1%; top: 73%;"
			alt="Circle Dotted"
		/>
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; right: 1%; top: 76%;"
			alt="Circle Dotted"
		/>
	</li>
	<li class="layer transparent" data-depth="0.04">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 81%; left: 89%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 82%; right: 53%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 83%; left: 88%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 84%; right: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 85%; right: 64%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 86%; right: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 87%; left: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 88%; right: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 89%; right: 51%;" />
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 3%; top: 83%;"
			alt="Circle Dotted"
		/>
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; right: 13%; top: 81%;"
			alt="Circle Dotted"
		/>
	</li>
	<li class="layer transparent" data-depth="0.04">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 91%; left: 89%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 92%; right: 53%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 93%; left: 88%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 94%; right: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 95%; right: 64%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 96%; right: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 97%; left: 32%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 98%; right: 11%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 99%; left: 11%;" />
	</li>
</ul>

<style>
	.opaque {
		animation: fadeIn 1s ease;
	}
	.transparent {
		opacity: 1;
		animation: almostFadeIn 1s;
	}
	@keyframes rotate {
		0% {
			transform: rotate(-60deg);
		}
		100% {
			transform: rotate(180deg);
		}
	}
	.layer {
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		position: absolute;
	}
	#scene {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		padding: 0;
		margin: 0;
		z-index: -5;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes almostFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media (max-width: 800px) {
		.hide-mobile {
			display: none;
		}
	}
</style>
