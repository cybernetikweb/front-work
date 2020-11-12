<script>
	let src = 'svelte.svg';
</script>

<style type="text/scss">
	div {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		color: aliceblue;
		padding-top: 5rem;
	& h1 {
		font-size: 6rem;
	}
	& h2 {
		font-size: 1.5rem;
		text-transform: uppercase;
		& a {
			background: -webkit-linear-gradient(#ff1900, #f5af19);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-decoration: none;
		}
	}
	}
	img {
		padding-left: 4rem;
		padding-top: 3rem;
		width: 3rem;
		position: absolute;
	}
</style>

<header>
	<a href="https://svelte.dev/"><img {src} alt="404"/></a>
	<div class="title">
		<h1>Todo List</h1>
		<h2>- Made in <a href="https://svelte.dev/">Svelte</a> -</h2>
	</div>
</header>
