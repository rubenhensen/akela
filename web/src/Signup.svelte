<script>
    let name = '';
    let email = '';
    let password = '';

    let questions = [
        { id: 1, text: `Bevers` },
        { id: 2, text: `Welpen Jongens` },
        { id: 3, text: `Welpen Meisjes` },
        { id: 4, text: `Scouts` },
        { id: 5, text: `Explorers` },
        { id: 6, text: `Roverscouts` },
        { id: 7, text: `Pivos` },
    ];

    let selected;

    let answer = '';
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    function handleSubmit() {
        let url = 'http://localhost:3000/api/auth/signup';
        let data = {
            "name": name,
            "email": email,
            "password": password
        };
        postData(url, data);
    }
</script>

<h2>Login</h2>

<form on:submit|preventDefault={handleSubmit}>
    <input bind:value={name} placeholder="enter your name">
    <input bind:value={email} placeholder="enter your e-mail">
    <input bind:value={password} placeholder="enter your password">
<!--    <select bind:value={selected} on:change="{() => answer = ''}">-->
<!--        {#each questions as question}-->
<!--            <option value={question}>-->
<!--                {question.text}-->
<!--            </option>-->
<!--        {/each}-->
<!--    </select>-->

<!--    <input bind:value={answer}>-->

    <button type=submit>
        Submit
    </button>
</form>

<!--<p>selected question {selected ? selected.id : '[waiting...]'}</p>-->

<style>
    input { display: block; width: 500px; max-width: 100%; }
</style>
