<script lang="ts">
	import client from '../../../_client'
    import { setContextClient, queryStore } from '@urql/svelte'
    import {page} from '$app/stores';
	import { ArticleByPkDocument, type ArticleByPkQuery } from '../../../generated/graphql';


	setContextClient(client);
	const article = queryStore<{data: {article: ArticleByPkQuery}}>({
		client,
		query: ArticleByPkDocument,
        variables:{
            id: $page?.params?.id ?? ""
        }
	})

</script>

<div class="flex items-center mb-4">
    <a href="/">
        <button class="w-[35px] h-[35px] transition-all duration-300 hover:bg-gray-300 border border-gray-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </button>
    </a>
    <span class="ml-2">
        Go back
    </span>
</div>


<section class="mt-10">
	{#if $article.fetching}
		<p class="mt-40 text-center">Loading...</p>
	{:else if $article.error}
		<p>Oh no... {$article.error.message}</p>
	{:else}
		<div>
            <p class="mb-4">
                Last updated
                <span class="ml-3">
                    {new Date($article?.data?.article_by_pk.updated_at).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    })}
                </span>
            </p>
            <h2 class="text-2xl font-[800] text-black mb-6">{$article?.data?.article_by_pk.title}</h2>
            <p>{$article?.data?.article_by_pk.content}</p>
            
		</div>
	{/if}
</section>
