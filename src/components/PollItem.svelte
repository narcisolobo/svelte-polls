<script lang="ts">
	import { tweened } from 'svelte/motion';
	import type { IPoll } from '@/types/types';
	import { pollStore } from '@/stores/poll-store';
	import TrashIcon from './TrashIcon.svelte';

	export let poll: IPoll;

	$: total = poll.votesA + poll.votesB;
	$: percentA = (poll.votesA / total) * 100 || 0;
	$: percentB = (poll.votesB / total) * 100 || 0;

	const tweenedA = tweened(0);
	const tweenedB = tweened(0);
	$: tweenedA.set(percentA);
	$: tweenedB.set(percentB);

	function handleVote(id: string, choice: 'a' | 'b') {
		pollStore.update((polls) => {
			const upvotedPoll = polls.find((poll) => poll.id === id);
			switch (choice) {
				case 'a':
					if (upvotedPoll) {
						upvotedPoll.votesA++;
					}
					break;
				case 'b':
					if (upvotedPoll) {
						upvotedPoll.votesB++;
					}
					break;
				default:
					console.log('Poll not found.');
					break;
			}
			return polls;
		});
	}

	function handleDelete(id: string) {
		pollStore.update((polls) => {
			return polls.filter((poll) => poll.id !== id);
		});
	}
</script>

<article class="rounded-lg bg-gray-800">
	<div class="p-4">
		<h2 class="text-xl flex-1">{poll.question}</h2>
		<p class="text-gray-400 mb-4">{total} total votes</p>
		<div class="flex flex-col gap-2">
			<!-- prettier-ignore -->
			<button
        type="button"
        class="btn bg-gray-700 relative z-10"
        on:click={() => handleVote(poll.id, 'a')}>
        {poll.choiceA} ({poll.votesA})
        <div class="percent percent-a" style="width: {$tweenedA}%;"></div>
      </button>
			<!-- prettier-ignore -->
			<button
        type="button"
        class="btn bg-gray-700 relative z-10"
        on:click={() => handleVote(poll.id, 'b')}>
        {poll.choiceB} ({poll.votesB})
        <div class="percent percent-b" style="width: {$tweenedB}%;"></div>
      </button>
		</div>
	</div>
	<div class="rounded-b-lg border-t border-gray-700 p-4 flex justify-end">
		<button
			class="rounded p-2 text-white bg-red-800 hover:bg-red-700 transition cursor-pointer"
			on:click={() => handleDelete(poll.id)}>
			<TrashIcon />
		</button>
	</div>
</article>

<style lang="postcss">
	.percent {
		@apply h-full absolute top-0 left-0;
	}

	.percent-a {
		@apply bg-teal-600 rounded -z-10;
	}

	.percent-b {
		@apply bg-purple-700 rounded -z-10;
	}
</style>
