<script>
    // export let segment;
    import TopAppBar, {Row, Section, Title, DenseFixedAdjust} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import { goto } from '@sapper/app';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import LoremIpsum from './LoremIpsum.svelte';
    import { loggedIn, appBarTitle } from '../stores';
    let prominent = false;
    let dense = true;
    let secondaryColor = false;
    let variant = 'standard';
    let collapsed = false;
    let title = 'MBG';
</script>

<style>
    .logo {
        height: 3em;
    }

    * :global(.mdc-top-app-bar) {
        @include mdc-elevation(4);
        box-shadow: 10px 10px;
    }

</style>

{#if $loggedIn}
    <TopAppBar {dense} {prominent} {variant} bind:collapsed>
        <Row>
            <Section>
                <img alt="logo" class="logo" src="logozondertekst.svg"/>
<!--                <IconButton class="material-icons">menu</IconButton>-->
<!--                <Title>{$appBarTitle}</Title>-->
                <Title>{title}</Title>
            </Section>
            <Section align="end" toolbar>
<!--                <IconButton class="material-icons" aria-label="Download">file_download</IconButton>-->
                <IconButton class="material-icons" aria-label="Profile" on:click={async () => await goto('profile')}>account_box</IconButton>
                {#if variant !== 'short'}
<!--                    <IconButton class="material-icons" aria-label="Print this page">print</IconButton>-->
<!--                    <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>-->
                {/if}
            </Section>
        </Row>
    </TopAppBar>
    <div use:DenseFixedAdjust>
    </div>
{/if}
<!--    <div use:Adjust>-->
<!--        <LoremIpsum />-->
<!--        <p>segment: {segment}</p>-->
<!--    </div>-->


    <!--        <iframe class="top-app-bar-iframe" src="/demo/top-app-bar-iframe" title="standard" width="480" height="320"></iframe>-->
<!--        <a style="display: none;" href="/demo/top-app-bar-iframe">helper needed for sapper export</a>-->

<!--        <iframe class="top-app-bar-iframe" src="/demo/top-app-bar-iframe?style=fixed" title="fixed" width="480" height="320"></iframe>-->

<!--        <iframe class="top-app-bar-iframe" src="/demo/top-app-bar-iframe?style=dense" title="dense" width="480" height="320"></iframe>-->

<!--        <iframe class="top-app-bar-iframe" src="/demo/top-app-bar-iframe?style=prominent" title="prominent" width="480" height="320"></iframe>-->

<!--        <iframe class="top-app-bar-iframe" src="/demo/top-app-bar-iframe?style=short" title="short" width="480" height="320"></iframe>-->

<!--        <iframe class="top-app-bar-iframe" src="/demo/top-app-bar-iframe?style=short-closed" title="short closed" width="480" height="320"></iframe>-->
<!--    <ul>-->
<!--        <li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>-->
<!--        <li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>-->
<!--        <li><a aria-current='{segment === "signin" ? "page" : undefined}' href='signin'>sign in</a></li>-->
<!--        <li><a aria-current='{segment === "signup" ? "page" : undefined}' href='signup'>sign up</a></li>-->
<!--        <li><a aria-current='{segment === "profile" ? "page" : undefined}' href='profile'>profile</a></li>-->
<!--        <li><a aria-current='{segment === "users" ? "page" : undefined}' href='users-list'>users</a></li>-->

<!--        &lt;!&ndash; for the blog link, we're using rel=prefetch so that Sapper prefetches-->
<!--             the blog data when we hover over the link or tap it on a touchscreen &ndash;&gt;-->
<!--        <li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>-->
<!--    </ul>-->

