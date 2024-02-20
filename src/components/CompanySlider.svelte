<script>
	import apexLogo from '../lib/assets/logos/apex_logo.png';
	import boLogo from '../lib/assets/logos/bo_logo.png';
	import csLogo from '../lib/assets/logos/cs_logo.png';
	import learniLogo from '../lib/assets/logos/learni_logo.png';
	import mfLogo from '../lib/assets/logos/mf_logo.png';
	import mqLogo from '../lib/assets/logos/mq_logo.png';
	import nlLogo from '../lib/assets/logos/nl_logo.png';
	import qsLogo from '../lib/assets/logos/qs_logo.png';
	import wsLogo from '../lib/assets/logos/ws_logo.png';
</script>

<div class="companies-container fade-in-longer">
	<div class="slide-track">
		<div class="slide">
			<img src={apexLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={boLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={csLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={learniLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={mfLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={mqLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={nlLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={qsLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={wsLogo} alt="Company Logo 1" />
		</div>

		<div class="slide">
			<img src={apexLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={boLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={csLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={learniLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={mfLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={mqLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={nlLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={qsLogo} alt="Company Logo 1" />
		</div>
		<div class="slide">
			<img src={wsLogo} alt="Company Logo 1" />
		</div>
	</div>
</div>

<style>
	.slide {
		width: calc(100% / 9);
		flex-shrink: 0;
		height: 64px; /* Adjust height as needed */
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translateX(0);
	}

	.slide img {
		max-height: 20px;
		/* max-height: 100%;
        max-width: 100%; */
		object-fit: contain; /* Keeps logo aspect ratio */
		/* margin-left: 72px; */
	}

	/* Keyframes for the scrolling effect */
	@keyframes scroll-slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%); /* Moves the track by half its width */
		}
	}
	.slide-track {
		display: flex;
		width: 100%;
		animation: scroll-slide 30s linear infinite; /* Adjust time for your needs */
	}
	.companies-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 64px;
		overflow: hidden;
		background-color: #fff;
	}
	.companies-container::before,
	.companies-container::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 128px; /* Adjust the width of the fading effect */
		pointer-events: none; /* Allow click events to pass through */
		z-index: 2;
	}

	.companies-container::before {
		left: 0;
		background: linear-gradient(to right, #fff 0%, transparent 100%);
	}

	.companies-container::after {
		right: 0;
		background: linear-gradient(to left, #fff 0%, transparent 100%);
	}
</style>
