<script>
    export let segment;
    import {loggedIn} from '../stores';
    import {stores, goto} from '@sapper/app';

    const {page} = stores();

    page.subscribe(({path, params, query}) => {
        if (process.browser) {
            if (!$loggedIn && (path !== '/signin' && path !== '/register')) {
                redirectToLogin()
            }
        }
    });

    async function redirectToLogin() {
        await goto('/signin');
    }
</script>

<style>
    nav {
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 56px;
        /*border-bottom: 1px solid rgba(200,200,200,1);*/
        border-top: 1px solid rgba(200, 200, 200, 1);
        /*font-weight: 300;*/
        /*padding: 0 1em;*/
        background-color: rgb(255, 255, 255);
    }

    ul {
        display: flex;
        justify-content: space-around;
        height: inherit;
        width: 100%;

        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    li {
        display: block;
        /*float: left;*/
    }

    [aria-current] {
        position: relative;
        display: inline-block;
    }

    [aria-current]::after {
        position: absolute;
        content: '';
        /*width: calc(100% - 1em);*/
        width: calc(100%);
        height: 2px;
        background-color: rgb(255, 62, 0);
        display: block;
        bottom: -1px;
    }

    a {
        text-decoration: none;
        /*padding: 1em 0.5em;*/
        /*display: block;*/
    }

    span {
        font-size: 12px;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .adjust {
        display: block;
        width: 100%;
        height: 56px;
    }
</style>

{#if $loggedIn}
    <div class="adjust"></div>
    <nav>
        <ul>
            <li>
                <a aria-current='{segment === undefined ? "page" : undefined}' href='.'>
                    <div class="flex-container">
                        <i class="material-icons">check_box</i>
                        <span>Attendance</span>
                    </div>
                </a>
            </li>
            <li>
                <a aria-current='{segment === "cancellation" ? "page" : undefined}' href='cancellation'>
                    <div class="flex-container">
                        <i class="material-icons">cancel</i>
                        <span>Cancellation</span>
                    </div>
                </a>
            </li>
            <li>
                <a aria-current='{segment === "members" ? "page" : undefined}' href='members'>
                    <div class="flex-container">
                        <i class="material-icons">people</i>
                        <span>Members</span>
                    </div>
                </a>
            </li>
            <li>
                <a aria-current='{segment === "program" ? "page" : undefined}' href='program'>
                    <div class="flex-container">
                        <i class="material-icons">notes</i>
                        <span>Program</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
{/if}