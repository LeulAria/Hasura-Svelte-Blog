<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
</script>

<header class="w-full mx-auto h-[100px] border-b flex items-center ">
	<div class="">
		<h3 class="font-[900]">
			Loop.article
		</h3>
	</div>

	<nav>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg> -->
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class={$page.url.pathname === '/' ? "active" : ""}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class={$page.url.pathname === '/about' ? "active" : ""}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/creator' ? 'page' : undefined} class={$page.url.pathname === '/creator' ? "active" : ""}>
				<a href="/creator">Creator</a>
			</li>
			<!-- <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
		<!-- <svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg> -->
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	/* .corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	/* nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	} */

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	} */

	/* path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
		/* --size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size)); */
		/* border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1); */
		/* border: 1px solid #333; */
		color: black !important;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 500;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		/* color: #999; */
	}

	.active {
		color: black !important;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
