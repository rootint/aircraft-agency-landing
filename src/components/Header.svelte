<script>
	import { animationComplete } from '../stores';
	import aircraft from '$lib/assets/aircraft.svg';
	import aircraftBlack from '$lib/assets/aircraft_black.svg';

	let showIcon = false;

	let showHeader = false;
	animationComplete.subscribe((value) => {
		showHeader = value;
	});

	function bookACall() {}
</script>

{#if showHeader}
	<header>
		<nav>
			<div class="top-logo">
				<img src={aircraftBlack} width="20" height="19" alt="Aircraft Logo" />
				<a href="/" class="logo">Aircraft</a>
			</div>
			<div class="center-nav">
				<a href="#services">Workflow</a>
				<a href="#benefits">Services</a>
				<a href="#why-us">Why Us</a>
				<a href="#pricing">Pricing</a>
				<a href="#faq">FAQ</a>
			</div>
			<button class="top-cta" on:click={bookACall}> Book A Call </button>
		</nav>
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
		border: solid #333 1px;
		padding: 16px 48px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		background-color: #141414;
		gap: 48px;
	}

	.center-nav > a {
		font-weight: 500;
		text-decoration: none;
		display: flex;
		align-items: center;
		color: #fff;
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
		border: solid #333 1px;
		padding: 16px 32px;
		display: flex;
		align-items: center;
		background-color: #111;
		font-weight: 500;
		font-size: 16px;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		color: #fff;
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
		color: #fff;
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
