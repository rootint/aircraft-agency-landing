<script>
	import { animationComplete } from '../stores';
	import aircraft from '$lib/assets/aircraft.svg';

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
				<img src={aircraft} width="20" height="19" alt="Aircraft Logo" />
				<a href="/" class="logo">Aircraft</a>
			</div>
			<div class="center-nav">
				<a href="#services">Services</a>
				<a href="#benefits">Benefits</a>
				<a href="#why-us">Why Us</a>
				<a href="#pricing">Pricing</a>
				<a href="#faq">FAQ</a>
			</div>
			<button class="top-cta" on:click={bookACall}> Book A Call </button>
			<!-- <ul>
				<li><a href="#aircraft"><span class="icon">✈️</span> Aircraft</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#benefits">Benefits</a></li>
				<li><a href="#why-us">Why Us</a></li>
				<li><a href="#pricing">Pricing</a></li>
				<li><a href="#faq">FAQ</a></li>
				<li><a href="#book-call" class="call-action">Book A Call</a></li>
			</ul> -->
		</nav>
	</header>
{/if}

<style>
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
	}

	button {
		border-radius: 16px;
		border: solid #ddd 1px;
		padding: 16px 24px;
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
		position: fixed;
		width: 100%;
		animation: slideDown 0.5s ease-out forwards;
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
		border: solid #ddd 1px;
		border-radius: 16px;
		padding: 16px 24px;
		display: flex;
		align-items: center;
		background-color: #fff;
	}
	nav {
		padding: 24px 64px;
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	.logo {
		margin-left: 16px;
		text-decoration: none;
		font-size: 16px;
	}
</style>
