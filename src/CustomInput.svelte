<svelte:options tag="custom-input" />

<script>
	console.log($$slots);
</script>

<div>
	<label for="theInput"><slot /></label>
	<input id="theInput" />
	{#if $$slots.description}
		<slot name="description" />
	{/if}
</div>