<script>
    import { Button } from 'sveltestrap';
    let promise = getUsers();
    async function getUsers() {
        const res = await fetch(`http://localhost:3000/api/users/all`, {
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
        const users = await res.json();
        if (res.ok) {
            return users;
        } else {
            throw new Error(users.message);
        }
    }


    function isUser(id) {
        return true;
    }
</script>


{#await promise}
    <p>...waiting</p>
{:then users}
    <ul class="list-group">
    {#each users as { _id, name }, i}
        <li class="list-group-item d-flex "><span class="align-self-center">{name}</span> {#if isUser(_id)} <Button type="button" class="btn-sm float-right ml-auto p-2" color="primary">edit</Button>{/if}</li>
    {/each}
    </ul>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


<style>
    li {
        font-size: 1.3rem;
    }
</style>
