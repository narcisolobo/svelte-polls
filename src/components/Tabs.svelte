<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { ITab } from '@/types/types';

	let tabs: ITab[] = [
		{
			link: '/',
			label: 'Current Polls',
		},
		{
			link: '/new',
			label: 'Create a Poll',
		},
	];

	$: activeTab = $page.url.pathname;

	function handleClick(tab: ITab) {
		activeTab = tab.link;
		goto(tab.link, { replaceState: false });
	}
</script>

<nav class="py-4 bg-gray-900">
	<div class="px-4 sm:px-0 sm:container mx-auto flex gap-4">
		{#each tabs as tab}
			<button
				class="tab-link"
				class:active-tab={activeTab === tab.link}
				on:click={() => handleClick(tab)}>
				{tab.label}
			</button>
		{/each}
	</div>
</nav>
