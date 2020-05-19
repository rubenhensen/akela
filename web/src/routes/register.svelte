<script>
    import {goto} from '@sapper/app';
    import {loggedIn} from '../stores.js';
    import Textfield, {Input, Textarea} from '@smui/textfield';
    import Icon from '@smui/textfield/icon/index';
    import Button, {Label} from '@smui/button';

    let name = '';
    let email = '';
    let password = '';

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
        let url = API_URL + '/api/auth/signup';
        let data = {
            "name": name,
            "email": email,
            "password": password
        };
        postData(url, data);
    }
</script>

<svelte:head>
    <title>Sapper project template</title>
</svelte:head>


<div class="center">

    <img alt='MBG logo' src='logozondertekst.svg'>
    <h2>Register</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <Textfield variant="outlined" withLeadingIcon bind:value={name} label="Name"
                       input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">
                <Icon class="material-icons">person</Icon>
            </Textfield>
            <!--        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>-->
            <!--        <pre class="status">Value: {valueOutlinedB}</pre>-->
        </div>
        <div>
            <Textfield variant="outlined" withLeadingIcon bind:value={email} label="E-mail"
                       input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">
                <Icon class="material-icons">email</Icon>
            </Textfield>
            <!--        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>-->
            <!--        <pre class="status">Value: {valueOutlinedB}</pre>-->
        </div>
        <div>
            <Textfield variant="outlined" withLeadingIcon bind:value={password} label="Password"
                       input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b"
                       type="password">
                <Icon class="material-icons">lock</Icon>
            </Textfield>
            <!--        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>-->
            <!--        <pre class="status">Value: {valueOutlinedB}</pre>-->
        </div>
        <div>
            <Button type="submit" variant="raised"><Label>Register</Label></Button>
            <span>- or -</span>
            <Button type="button" on:click={() => goto('/signin')} ripple={false}><Label>Log in</Label></Button>
        </div>
    </form>
</div>

<style>
    h2 {
        text-align: center;
    }

    img {
        width: 70%;
        max-width: 400px;
        margin: 0 0 1em 0;
    }

    .center {
        text-align: center;
        /*margin: 0 auto;*/
    }

    form {
        display: inline-block;
    }

    :global(.mdc-text-field) {
        margin-bottom: .8em;
    }

    span {
        margin: 0 .8em;
    }
</style>
