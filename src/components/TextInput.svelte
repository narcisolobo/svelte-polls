<script lang="ts">
	export let name: string;
	export let label: string;
	export let value: string;
	export let error: string;
</script>

<div class="mb-4">
	<label for={name} class="block text-sm mb-1">{label}:</label>
	<input
		type="text"
		{name}
		id={name}
		bind:value
		class="border-gray-300 text-gray-800 rounded block w-full" />
	{#if error}
		<span class="text-xs text-amber-400">{error}</span>
	{/if}
</div>
