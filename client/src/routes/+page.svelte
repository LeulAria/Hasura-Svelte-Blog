<script context="module" lang='ts'>
	export const prerender = true;
</script>

<script lang="ts">
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';

	import { setContextClient, queryStore } from '@urql/svelte'
	import { ArticlesDocument, type ArticlesQuery } from '../generated/graphql';
	import client from '../_client'

	setContextClient(client);
	const articles = queryStore<{data: {article: ArticlesQuery}}>({
		client,
		query: ArticlesDocument
	})

</script>

<svelte:head>
	<title>Articles</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mt-[80px]">
	{#if $articles.fetching}
		<p>Loading...</p>
	{:else if $articles.error}
		<p>Oh no... {$articles.error.message}</p>
	{:else}
		<div>
			{#each $articles.data.article as article}
			<div class="my-5 max-w-[600px]">
			<a class="text-black" href={`/detail/${article.id}`}>
					<h3 class="font-[700]">{article.title}</h3>
				</a>
				<p>{article.content.split(" ").splice(0,30).join(" ")}</p>
			</div>
			{/each}
		</div>
	{/if}
	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
