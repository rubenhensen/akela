<script>
    import { onMount } from 'svelte';
    let users =
    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
        photos = await res.json();
    });

    function isUser(id) {
        return true;
    }
</script>


{#await promise}
    <p>...waiting</p>
{:then number}
    <ul>
    {#each users as { _id, name }, i}
        <li>{name} {#if isUser(_id)}<button>edit</button>{/if}</li>
    {/each}
    </ul>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}


<style>

</style>
