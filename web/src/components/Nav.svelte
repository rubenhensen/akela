<script>
	export let segment;
	import { loggedIn } from '../stores';
	import { stores, goto } from '@sapper/app';
	const { page } = stores();

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
		position: fixed;
		bottom: 0px;
		width: 100%;
		height:56px;
		border-bottom: 1px solid rgba(200,200,200,1);
		border-top: 1px solid rgba(200,200,200,1);
		/*font-weight: 300;*/
		/*padding: 0 1em;*/
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

	/* clearfix */
	/*ul::after {*/
	/*	content: '';*/
	/*	display: block;*/
	/*	clear: both;*/
	/*}*/

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
		background-color: rgb(255,62,0);
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
</style>

{#if $loggedIn}
<nav>
	<ul>
		<li>
			<a aria-current='{segment === undefined ? "page" : undefined}' href='.'>
				<div class="flex-container">
					<i class="material-icons">check_box</i>
					<span>Checklist</span>
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
<!--		<li><a aria-current='{segment === "signin" ? "page" : undefined}' href='signin'>sign in</a></li>-->
<!--		<li><a aria-current='{segment === "signup" ? "page" : undefined}' href='signup'>sign up</a></li>-->
<!--		<li><a aria-current='{segment === "profile" ? "page" : undefined}' href='profile'>profile</a></li>-->
		<li>
			<a aria-current='{segment === "program" ? "page" : undefined}' href='program'>
				<div class="flex-container">
					<i class="material-icons">notes</i>
					<span>Program</span>
				</div>
			</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
<!--		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>-->
	</ul>
</nav>
{/if}