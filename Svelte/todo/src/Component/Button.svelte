<style type="text/scss">
	button {
		color: white;
		border-radius: 12px;
		background: linear-gradient(to right, #3c3b3f, #605c3c);
		border: none;
		outline: none;
		padding: 0.8rem 1.2rem 0.9rem;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row;
		margin-right: 1rem;
		&:hover {
			-webkit-box-shadow: 0 0 0 1px rgba(255,255,0,.25);
			-moz-box-shadow: 0 0 0 1px rgba(255,255,0,.25);
			box-shadow: 0 0 2px 1px rgba(255,255,0,.25);
		}
	}

</style>

<button on:click>
	<slot>Children is not provided</slot>
</button>
