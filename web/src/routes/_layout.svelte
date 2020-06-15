<script>
    import Nav from '../components/Nav.svelte';
    import AppBar from '../components/AppBar.svelte';
    import {FixedAdjust} from '@smui/top-app-bar'

    export let segment;
</script>

<style>
    main {
        position: relative;
        max-width: 56em;
        background-color: white;
        /*padding: 2em;*/
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

<AppBar/>

<main>
    <slot></slot>
</main>

<Nav {segment}/>
