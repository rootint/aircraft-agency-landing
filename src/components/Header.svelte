<script>
	import { animationComplete } from '../stores';
	import aircraft from '$lib/assets/aircraft.svg';
	import { KanbanSquare } from 'lucide-svelte';

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
				<img src={aircraft} width="20" height="19" alt="Aircraft Logo" />
				<a href="/" class="logo">Aircraft</a>
			</div>
			<div class="center-nav">
				<a
					href="#services"
					on:mouseenter={() => (showIcon = true)}
					on:mouseleave={() => (showIcon = false)}
				>
					<!-- {#if showIcon}
						<span class="icon-wrapper">
							<KanbanSquare color="#9A6FDF" size="16"></KanbanSquare>
						</span>
					{:else}
						<span class="icon-wrapper">
							<KanbanSquare color="#999" size="16"></KanbanSquare>
						</span>
					{/if} -->
					Services
				</a>
				<a href="#benefits">Benefits</a>
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
		border-radius: 2px;
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
		border-radius: 2px;
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
