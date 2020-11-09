<script>
	 export let name = '';
	 let age = 30;

	 $: uppercaseName = name.toUpperCase()

	 const incrementAge = () => age += 1;
	 const changeName = () => name = 'Rafael'
</script>

<main>
	<h1>Hello {uppercaseName}! My age is {age}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<!--Un pointeur vers la fonction qui s'éxecutera lors du click -->
	<button on:click={incrementAge}>Change age</button>
	<button on:click={changeName}>Change name</button>
	<label>
		<input type="text">
	</label>
</main>

<style>

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
