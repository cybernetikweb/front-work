<script>
	import { v4 as uuidv4 } from 'uuid';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import Container from './Component/Container.svelte';
	import Button from './Component/Button.svelte';
	import CheckBox from './Component/CheckBox.svelte';

	let listOfTodo = [
		{
			todo: 'Learn GraphQl',
			done: false,
			id: uuidv4(),
		},
		{
			todo: 'Learn Django',
			done: false,
			id: uuidv4(),
		},
		{
			todo: 'Do project',
			done: false,
			id: uuidv4(),
		},
	];

	let todo = '';
	let invalid = '';
	let checked = false;

	const capitalizeFirstLetter = (string) =>
		string.charAt(0).toUpperCase() + string.slice(1);

	const addTodo = () => {
		if (todo.length === 0) {
			invalid = 'Vous devez rentrez au min 1 car';
		} else {
			listOfTodo = [
				...listOfTodo,
				{
					todo: capitalizeFirstLetter(todo),
					done: false,
					id: uuidv4(),
				},
			];
			todo = '';

			invalid = '';
		}
	};
	const filteredItem = () => {
		listOfTodo = listOfTodo.filter((e) => e.done === checked);
		console.log(listOfTodo);
	};
</script>

<style type="text/scss">
	$green-dark: #3c3b3f;
	$green-light: #605c3c;
	.content {
		color: aliceblue;
		display: flex;
		flex-flow: column;
	& label {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 2.5rem;
		 & input {
			color: aliceblue;
			border-radius: 4px;
			background: linear-gradient(to right, $green-dark, $green-light);
			border: none;
			outline: none;
			padding: 0.5rem 1rem;
			transition: 0.1s ease-in;
			 &::placeholder {
				 color: rgba(240, 248, 255, 0.5);
				 font-size: 0.8rem;
			 }
		}
	}
	& .button-action {
		padding-top: 1rem;
		display: flex;
	}
	& .listContainer {
		margin-top: 0.5rem;
		position: relative;
		background: linear-gradient(to right, red, orange);
		padding: 8px;
		width: 100%;
		background-size: 400% 400%;
		border-radius: 5px;
		-webkit-animation: GradientAnimation 8s ease infinite;
		-moz-animation: GradientAnimation 8s ease infinite;
		animation: GradientAnimation 8s ease infinite;
		& ul {
			padding: 1rem 0;
			background: #161515;
		}
		& li {
			padding: 0.5rem 1rem;
			margin: 1rem;
			border-radius: 8px;
			background: linear-gradient(to right, #3c3b3f, #605c3c);
			width: 50%;
			& label {
				font-size: 1rem;
				position: relative;
				margin-bottom: 3rem;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				& input {
					position: absolute;
					opacity: 0;
					cursor: pointer;
					height: 0;
					width: 0;
				}
			}
			& button {
				margin-left: 1.5rem;
				background: white;
				cursor: pointer;
				border: none;
				&:hover{
				background: linear-gradient(to right, #ff1900, #f5af19);
				border-radius: 2px;
				color: white;
				}
			}
		}
		& p {
			margin-left: 1rem;
			color: #fff;
		}
	}
	}
</style>

<Container>
	<section class="content">
		<label>
			Ajouter une tâche dans la liste :
			<input
				type="text"
				bind:value={todo}
				placeholder="exemple: Faire du poor" />
		</label>

		<div class="button-action">
			<Button on:click={addTodo}>Ajouter</Button>
			<Button on:click={filteredItem}>
				Supprimer les tâches completer
			</Button>
		</div>

		<div class="listContainer">
			<ul>
				{#if listOfTodo.length === 0}
					<p in:fade={{ delay: 100 }}>
						Il n'y a pas d'item dans la liste de choses à faire!
					</p>
				{/if}
				{#each listOfTodo as { todo, done, id } (id)}
					<li animate:flip in:fade out:fly={{ x: 50 }}>
						<label>
							{todo}
							<input
								type="checkbox"
								bind:checked={done} />
							<CheckBox checked={done} />
						</label>
						<button
							on:click={() => (listOfTodo = listOfTodo.filter((e) => e.id !== id))}>Supprimer</button>
					</li>
				{/each}
			</ul>
			{#if todo.length === 0}
				<p in:fade={{ delay: 1000 }}>{invalid}</p>
			{/if}
		</div>
	</section>
</Container>
