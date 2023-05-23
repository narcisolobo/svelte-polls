<script lang="ts">
	import type { IPoll } from '@/types/types';
	import PollForm from '@/components/PollForm.svelte';
	import { pollStore } from '@/stores/poll-store';

	function handleAdd(e: CustomEvent<{ poll: IPoll }>) {
		pollStore.update((polls) => [e.detail.poll, ...polls]);
	}
</script>

<h1 class="text-2xl mb-4">Create a Poll</h1>
<PollForm on:add-poll={handleAdd} />
