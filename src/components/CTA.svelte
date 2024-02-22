<section class="cta-container">
	<div class="width-restriction">
		<h2>Start a new project with<br /> us in just a few clicks_</h2>
		<p class="subtitle">Book a free call and Turn your maybe into definitely</p>
		<div class="gradient-wrapper">
			<div class="another-wrapper">
				<button> Book A Call </button>
			</div>
		</div>
	</div>
</section>

<style>
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
	.cta-container {
		margin: 0;
		margin-top: 64px;
		background-color: #111;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 96px 32px;
		width: 100%;
		/* position: absolute; */
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
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

	@media (max-width: 800px) {
		.gradient-wrapper {
			margin-top: 16px;
			width: 100%;
		}
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
</style>
