<script>
    import {loggedIn} from '../stores.js';
    import Paper, {Title, Subtitle, Content} from '@smui/paper';
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';

    let buttonVariant = 'outlined';
    let promise = getData();

    async function getData() {
        let res;
        if (process.browser) res = await fetch(API_URL + '/api/users/me', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        const profile = await res.json();
        if (res.ok) {
            return profile;
        } else {
            throw new Error(profile.message);
        }
    }

    async function logOut() {
        let res;
        if (process.browser) res = await fetch(API_URL + '/api/auth/logout', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        const profile = await res.json();
        if (res.ok) {
            return profile;
        } else {
            throw new Error(profile.message);
        }
    }

</script>

{#await promise}
    <p>Loading...</p>
{:then profile}
<div>
    <div class="paper-container">
        <Paper class="paper-demo">
		<Title>Naam: {profile.user.name}</Title>
			<Subtitle>Rol: {profile.user.role}</Subtitle>

{#if $loggedIn}
	<!--    <Button variant={buttonVariant} on:click={logOut}>Logout</Button>-->
{/if}
        </Paper>
    </div>
</div>

{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


<style>
    .paper-container {
        margin: .8em;
    }
</style>
