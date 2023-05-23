<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'danger';
	export let type: 'button' | 'reset' | 'submit';
</script>

<button class={`btn ${variant}`} {type}><slot /></button>
