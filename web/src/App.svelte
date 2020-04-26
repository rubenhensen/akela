<script>
	import { onMount } from "svelte";
	import Continent from "./Continent.svelte";
	import Continents from "./Continents.svelte";
	import Signup from "./Signup.svelte";
	let continent;
</script>

<h1>The Seven Continents Svelte App</h1>

<main>
	<Signup />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>