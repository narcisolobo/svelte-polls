<script lang="ts">
	import type { IPoll } from '@/types/types';
	import Button from './Button.svelte';
	export let total: number;
	export let poll: IPoll;
</script>

<article class="p-4 rounded-lg bg-gray-800 flex flex-col">
	<h2 class="text-xl flex-1">{poll.question}</h2>
	<p class="text-gray-400 mb-4">{total} total votes</p>
	<div class="flex flex-col gap-2">
		<Button variant="primary" type="button">{poll.choiceA} ({poll.votesA})</Button>
		<Button variant="primary" type="button">{poll.choiceB} ({poll.votesB})</Button>
	</div>
</article>
