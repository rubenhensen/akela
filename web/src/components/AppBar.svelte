<script>
    // export let segment;
    import TopAppBar, {Row, Section, Title, FixedAdjust} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import LoremIpsum from './LoremIpsum.svelte';
    import { loggedIn, appBarTitle } from '../stores';
    let prominent = false;
    let dense = false;
    let secondaryColor = false;
    let variant = 'standard';
    let collapsed = false;
    let title = 'test';
</script>

<style>

</style>

{#if $loggedIn}
    <TopAppBar {dense} {prominent} {variant} bind:collapsed>
        <Row>
            <Section>
                <IconButton class="material-icons">menu</IconButton>
                <Title>{$appBarTitle}</Title>
            </Section>
            <Section align="end" toolbar>
                <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
                <IconButton class="material-icons" aria-label="Profile">account_box</IconButton>
                {#if variant !== 'short'}
<!--                    <IconButton class="material-icons" aria-label="Print this page">print</IconButton>-->
<!--                    <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>-->
                {/if}
            </Section>
        </Row>
    </TopAppBar>
    <div use:FixedAdjust>
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

