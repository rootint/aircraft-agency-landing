<script>
	import Header from '../components/Header.svelte';
	import Parallax from '../components/Parallax.svelte';
	import './styles.css';
</script>

<div class="app">
	<Parallax />
	<Header></Header>
	<main>
		<slot />
	</main>
	<!-- <Footer /> -->
</div>
