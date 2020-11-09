<script>
    import ContactCard from './ContactCard.svelte'

    let name = 'Bartosz'
    let age = 21
    let url = ''
    let jobTitle = ''
    let description = ''

    $: uppercaseName = name.toUpperCase()

    $: console.log(name)

    $: if (name === 'Rafael') {
        console.log('It runs!')
        age = 22
    }

    function incrementAge() {
        age += 1
    }

    function nameInput(event) {
        name = event.target.value
    }

    const getUrl = (e) => (url = e.target.value)
</script>

<style>
    h1 {
        color: purple;
    }
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<label for="name">Enter a name</label>
<input id="name" type="text" bind:value={name} />
<label for="jobTitle">Enter your jobTitle</label>
<input id="jobTitle" type="text" bind:value={jobTitle} />
<label for="description">Enter your job description</label>
<textarea id="description" rows={3} bind:value={description} /><label
    for="url">Enter an url</label>
<input
    id="url"
    type="url"
    value={url}
    pattern="https://.*"
    placeholder="https://example.jpeg"
    on:input={getUrl} />
<ContactCard username={name} {url} {jobTitle} {description} />
¨
