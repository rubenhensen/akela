<script>
	export let segment;
	import { loggedIn } from '../stores';
	import { stores, goto } from '@sapper/app';
	const { preloading, page, session } = stores();

	page.subscribe(({ path, params, query }) => {
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
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

{#if $loggedIn}
<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>
		<li><a aria-current='{segment === "signin" ? "page" : undefined}' href='signin'>sign in</a></li>
		<li><a aria-current='{segment === "signup" ? "page" : undefined}' href='signup'>sign up</a></li>
		<li><a aria-current='{segment === "profile" ? "page" : undefined}' href='profile'>profile</a></li>
		<li><a aria-current='{segment === "users" ? "page" : undefined}' href='users-list'>users</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
	</ul>
</nav>
{/if}