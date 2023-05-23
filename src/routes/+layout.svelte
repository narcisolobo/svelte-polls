<script>
	import '../app.scss';
	import Footer from '@/components/Footer.svelte';
	import Hero from '@/components/Hero.svelte';
	import Tabs from '@/components/Tabs.svelte';
</script>

<div class="flex flex-col min-h-screen bg-gray-700">
	<Tabs />
	<main class="px-4 sm:px-0 sm:container mx-auto py-4 flex-1 text-gray-300">
		<slot />
	</main>
	<Footer />
</div>
