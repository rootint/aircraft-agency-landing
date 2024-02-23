<script>
	import { animationComplete, currentVisible } from '../stores';
	import aircraft from '$lib/assets/aircraft.svg';
	import aircraftBlack from '$lib/assets/aircraft_black.svg';
	import { onMount } from 'svelte';

	let showIcon = false;
	let aircraftOpacity = 1;

	let showHeader = false;
	animationComplete.subscribe((value) => {
		showHeader = value;
	});

	function bookACall() {}

	function handleScroll() {
		const scrollOffset = 96;
		aircraftOpacity = Math.max(0, (scrollOffset - window.scrollY) / scrollOffset);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if showHeader}
	<header>
		<div class="width-restriction">
			<nav>
				<div class="top-logo" style="opacity: {aircraftOpacity};">
					<img src={aircraft} width="20" height="19" alt="Aircraft Logo" />
					<a href="/" class="logo">Aircraft</a>
				</div>
				<div class="center-nav">
					<a href="#services" style={currentVisible == 'services' ? 'color: #9A6FDF;' : ''}
						>Workflow</a
					>
					<a href="#benefits" style={currentVisible == 'benefits' ? 'color: #E072CC;' : ''}
						>Services</a
					>
					<a href="#why-us" style={currentVisible == 'why-us' ? 'color: #FF6B75;' : ''}>Why Us</a>
					<a href="#pricing" style={currentVisible == 'pricing' ? 'color: #5593E9;' : ''}
						>Pricing</a
					>
					<a href="#faq" style={currentVisible == 'faq' ? 'color: #F9AC6D;' : ''}>FAQ</a>
				</div>
				<button class="top-cta" on:click={bookACall}> Book A Call </button>
			</nav>
		</div>
	</header>
{/if}

<style>
	.icon-wrapper {
		margin-right: 4px;
		display: flex;
		align-items: center;
		/* opacity: 0;
		transform: translateX(100%); */
	}
	.center-nav {
		display: flex;
		align-items: center;
		border-radius: 16px;
		border: solid #ddd 1px;
		padding: 16px 48px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		background-color: #fff;
		gap: 48px;
	}

	.center-nav > a {
		font-weight: 500;
		text-decoration: none;
		display: flex;
		align-items: center;
		color: #111;
	}

	.center-nav > a:hover {
		color: #999;
	}

	/* .center-nav > a:hover > .icon-wrapper {
		opacity: 1;
		transform: translateX(0%);
		transition:
			transform 0.4s ease-in,
			opacity 0.4s ease-in;
	} */

	button {
		border-radius: 16px;
		border: solid #ddd 1px;
		padding: 16px 32px;
		display: flex;
		align-items: center;
		background-color: #fff;
		font-weight: 500;
		font-size: 16px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		color: #111;
	}

	button:hover {
		color: #777;
	}

	header {
		position: sticky;
		top: 0;
		height: 0;
		/* max-width: var(--desktop-width);
		width: 100%; */
		animation: slideDown 0.5s ease-out forwards;
		z-index: 100;
		padding: 0 32px;
	}
	@keyframes slideDown {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	.top-logo {
		display: flex;
		align-items: center;
	}
	nav {
		padding: 24px 0px;
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	.logo {
		margin-left: 16px;
		text-decoration: none;
		font-size: 16px;
		color: #111;
	}

	@media (max-width: 950px) {
		.center-nav {
			padding: 16px 24px;
			gap: 24px;
		}
	}

	@media (max-width: 800px) {
		.center-nav {
			display: none;
		}
	}
</style>
