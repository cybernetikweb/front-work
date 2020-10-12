<script>
	 let name = '';
	 let age = 30;

	 const incrementAge = () => age += 1;
</script>

<main>
	<h1>Hello {name}! My age is {age}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<!--Un pointeur vers la fonction qui s'éxecutera lors du click -->
	<button on:click={incrementAge}>Change age</button>
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