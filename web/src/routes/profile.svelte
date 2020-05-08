<script>
    // import { onMount } from 'svelte'
    // let profile = {
    //     "user": {
    //         "role": "",
    //         "_id": "",
    //         "name": "",
    //         "email": "",
    //         "createdAt": "",
    //         "updatedAt": "",
    //         "__v": null
    //     },
    //     "token": ""
    // };

    // onMount(async () => {
    //     handleSubmit()
    // });
    let promise = getData();
    async function getData() {
        // Default options are marked with *
        const res = await fetch(API_URL + '/api/users/me', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            // headers: {
            //     'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const profile = await res.json();
        if (res.ok) {
            return profile;
        } else {
            throw new Error(profile.message);
        }
    }
</script>

<h2>Profile</h2>
{#await promise}
<p>Loading...</p>
{:then profile}
    <p>name: {profile.user.name}</p>
    <p>_id: {profile.user._id}</p>
    <p>role: {profile.user.role}</p>
    <p>email: {profile.user.email}</p>
    <p>createdAt: {profile.user.createdAt}</p>
    <p>__v: {profile.user.__v}</p>
    <p>token: {profile.token}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
</style>
