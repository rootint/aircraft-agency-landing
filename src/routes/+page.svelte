<script>
	import Cta from '../components/CTA.svelte';
	import Faq from '../components/FAQ.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';
	import HowThisWorks from '../components/HowThisWorks.svelte';
	import Pricing from '../components/Pricing.svelte';
	import SideScrollTitle from '../components/SideScrollTitle.svelte';
	import Test from '../components/Test.svelte';
	import WhatWeDo from '../components/WhatWeDo.svelte';
	import WhyUs from '../components/WhyUs.svelte';
</script>

<svelte:head>
	<title>Aircraft</title>
	<meta name="description" content="The only agency you will ever need" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Roboto+Mono&display=swap"
		rel="stylesheet"
	/>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
</svelte:head>

<Hero></Hero>
<HowThisWorks></HowThisWorks>
<WhatWeDo></WhatWeDo>
<WhyUs></WhyUs>
<SideScrollTitle></SideScrollTitle>
<Pricing></Pricing>
<Faq></Faq>
<Cta></Cta>
<Footer></Footer>
<!-- <Test></Test> -->
