<script>
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
            credentials: 'include', // include, *same-origin, omit
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
        let url = API_URL + '/api/auth/signin';
        let data = {
            "email": email,
            "password": password
        };
        postData(url, data);
    }
</script>

<h2>Signin</h2>

<form on:submit|preventDefault={handleSubmit}>
    <input bind:value={email} placeholder="enter your e-mail">
    <input bind:value={password} placeholder="enter your password">
    <button type=submit>
        Submit
    </button>
</form>

<style>
    input { display: block; width: 500px; max-width: 100%; }
</style>
