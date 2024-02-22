<script>
	import { onMount } from 'svelte';

	let scrollContainer;
	let textPosition = 0;

	// Function to handle scroll event
	function handleScroll() {
		const containerRect = scrollContainer.getBoundingClientRect();
		const midPoint = window.innerHeight / 2;
		const distanceFromMid = containerRect.top - midPoint;

		// Calculate text position based on the distance from the middle
		// of the screen. You'll need to adjust this formula depending on your exact needs.
		textPosition = -distanceFromMid;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div bind:this={scrollContainer} class="text-container">
	<div class="scrolling-text" style="right: {textPosition}px;">
		<span style="color:#9A6FDF;">Better</span>, <span style="color:#5593E9">Faster</span>,
		<span style="color: #FF6B75;">More Affordable</span> - Quality Made Easy!
	</div>
</div>

<style>
	span {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 48px;
		color: #111;
	}
	.text-container {
		position: relative;
		overflow: hidden;
		height: 120px;
        background-color: #111;
        display: flex;
        align-items: center;
        margin-bottom: 48px;
        margin-top: 16px;
	}
	.scrolling-text {
		position: absolute;
		white-space: nowrap;
		will-change: transform; /* Optimizes the scrolling animation */
		font-family: 'Space Grotesk', sans-serif;
		font-size: 48px;
		color: #fff;
	}
</style>
