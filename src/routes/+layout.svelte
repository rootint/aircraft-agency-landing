<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Parallax /> -->
	<Header></Header>
	<main>
		<slot />
	</main>
	<!-- <Footer /> -->
</div>
