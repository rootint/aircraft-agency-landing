<script>
	import { onMount } from 'svelte';
	import choosePackage from '../lib/assets/workflow/choose_package.png';
	import design from '../lib/assets/workflow/design.png';
	import dev from '../lib/assets/workflow/dev.png';
	import repeat from '../lib/assets/workflow/repeat.png';

	let scrollY = 0;
	let activeImageIndex = 0;
	const images = [choosePackage, design, dev, repeat];

	// This function will be called on scroll and will update the active image index based on the scroll position
	function handleScroll() {
		console.log(window.scrollY);
		const sectionHeight = window.innerHeight;
		let elem = document.querySelector('.fixed-side');
		console.log(getBoundingClientRect(elem));
		activeImageIndex = Math.floor((window.scrollY - getBoundingClientRect(elem)) / sectionHeight);
		console.log(getBoundingClientRect(elem));
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="container">
	<div class="fixed-side" style="background-image: url({images[activeImageIndex]});"></div>
	<div class="scrolling-side">
		<!-- Repeat this for each section you have, it could be dynamically generated based on the content -->
		<div class="scroll-section">Content for section 1</div>
		<div class="scroll-section">Content for section 2</div>
		<div class="scroll-section">Content for section 3</div>
		<!-- ... -->
	</div>
</div>

<style>
	.container {
		display: flex;
		position: relative;
	}
	.fixed-side {
		position: fixed;
		width: 50%;
		height: 100vh;
		top: 0;
		left: 0;
		background-size: cover;
		background-position: center;
	}
	.scrolling-side {
		width: 50%;
		margin-left: 50%;
		height: 100vh;
		overflow-y: scroll;
		padding: 1rem;
	}
	.scroll-section {
		min-height: 100vh;
	}
</style>
