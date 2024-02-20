<script>
	import cross from '$lib/assets/cross.svg';
	import plus from '$lib/assets/plus.svg';
	import triangle from '$lib/assets/triangle.svg';
	import plus_cross_cross from '$lib/assets/plus_cross_cross.svg';
	import circle_circle from '$lib/assets/circle_circle.svg';
	import circle_dotted from '$lib/assets/circle_dotted.svg';
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
	{#if showNames}
		<li class="layer opaque" data-depth="0.1">
			<img src={dave} style="position: absolute; left: 15%; bottom: 12%; height: 34px;" />
		</li>
		<li class="layer opaque" data-depth="0.15">
			<img src={tio} style="position: absolute; top: 7%; right: 12%; height: 34px;" />
		</li>
		<li class="layer opaque" data-depth="0.05">
			<img src={danil} style="position: absolute; top: 7%; left: 15%; height: 34px;" />
		</li>
		<li class="layer opaque" data-depth="0.05">
			<img src={marketing} style="position: absolute; bottom: 10%; right: 10%; height: 34px;" />
		</li>
		<li class="layer opaque" data-depth="0.05">
			<img src={ai} style="position: absolute; top: 25%; right: 25%; height: 34px;" />
		</li>
	{/if}
	<li class="layer transparent" data-depth="0.6">
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; top: 25%; left: 25%;"
		/>
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; bottom: 25%; right: 25%;"
		/>
		<!-- <img src={cross} alt="Parallax Cross" style="position: absolute; top: 33%; right: 33%;" /> -->
	</li>
	<li class="layer transparent" data-depth="0.4">
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; top: 5%; left: 5%;"
		/>
		<img src={cross} alt="Parallax Cross" style="position: absolute; bottom: 5%; left: 10%;" />
		<img
			src={cross}
			class="cross"
			alt="Parallax Cross"
			style="position: absolute; top: 50%; right: 10%;"
		/>
		<img src={cross} alt="Parallax Cross" style="position: absolute; bottom: 10%; right: 5%;" />
	</li>
	<li class="layer transparent" data-depth="-0.15">
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 7%; left: 20%;" />
		<img src={cross} alt="Parallax Cross" style="position: absolute; top: 7%; right: 20%;" />
	</li>
	<li class="layer transparent" data-depth="0.2">
		<img src={cross} alt="Parallax Cross" style="position: absolute; bottom: 15%; right: 60%;" />
	</li>
	<li class="layer transparent" data-depth="-0.1">
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; right: 35%; bottom: -99px;"
			alt="Circle Dotted"
		/>
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 100px; bottom: 15%"
			alt="Circle Dotted"
		/>
		<img
			class="circle-dotted"
			src={circle_dotted}
			style="position: absolute; left: 35%; top: -99px"
			alt="Circle Dotted"
		/>
	</li>
</ul>

<style>
	.opaque {
		animation: fadeIn 1s;
	}
	.transparent {
        opacity: 0.3;
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
		position: fixed;
		height: 100svh;
		width: 100vw;
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
			opacity: 0.3;
		}
	}
</style>
