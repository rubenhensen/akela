<script>
    // export let segment;
    import TopAppBar, {Row, Section, Title, DenseFixedAdjust} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import {goto} from '@sapper/app';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    import {loggedIn, appBarTitle} from '../stores';

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
                <IconButton class="material-icons" aria-label="Profile" on:click={async () => await goto('profile')}>
                    account_box
                </IconButton>
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
