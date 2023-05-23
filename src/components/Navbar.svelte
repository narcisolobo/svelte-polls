<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle class="bg-amber-600">
	<NavBrand href="/">
		<span class="text-2xl font-semibold text-green-900 font-display">Svelte Polls</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} ulClass="bg-lime-300">
		<NavLi href="/">Polls</NavLi>
	</NavUl>
</Navbar>
