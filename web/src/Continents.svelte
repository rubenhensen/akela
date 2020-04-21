
<script>
    import { onMount } from "svelte";
    import Continent from "./Continent.svelte";
    // define the data holding variable
    let continents;
    let photos;
    onMount(async () => {
        const res = await fetch(`http://localhost:3000/api/continents`);
        continents = await res.json();
    });

</script>

{#if continents}
    {#each continents as continent }
        <ul>
            <li>
                <Continent {continent} />
            </li>
        </ul>
    {/each}
{:else}
    <p class="loading">loading...</p>
{/if}

<style>
    .loading {
        opacity: 0;
        animation: 0.4s 0.8s forwards fade-in;
    }
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    li {
        list-style-type: georgian;
    }
</style>