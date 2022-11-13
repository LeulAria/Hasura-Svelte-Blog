import { createClient } from '@urql/svelte';

export default createClient({
	url: 'http://localhost:8080/v1/graphql'
});
