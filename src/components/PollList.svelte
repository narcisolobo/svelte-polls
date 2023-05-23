<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { pollStore as polls } from '@/stores/poll-store';
	import PollItem from './PollItem.svelte';
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
	{#each $polls as poll (poll.id)}
		<div in:fade out:scale|local animate:flip={{ duration: 500 }}>
			<PollItem {poll} />
		</div>
	{/each}
</section>
