<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import type { IPoll } from '@/types/types';
	import TextInput from './TextInput.svelte';
	import Button from './Button.svelte';

	const dispatch = createEventDispatcher<{ 'add-poll': { poll: IPoll } }>();

	let newPoll: IPoll = {
		id: crypto.randomUUID(),
		question: '',
		choiceA: '',
		choiceB: '',
		votesA: 0,
		votesB: 0,
	};

	let errors = {
		question: '',
		choiceA: '',
		choiceB: '',
	};

	let isValid = false;

	function handleSubmit() {
		isValid = true;

		if (newPoll.question.trim().length < 5) {
			isValid = false;
			errors.question = 'Question must be at least five characters.';
		} else {
			errors.question = '';
		}

		if (newPoll.choiceA.trim().length < 1) {
			isValid = false;
			errors.choiceA = 'Choice cannot be blank.';
		} else {
			errors.choiceA = '';
		}

		if (newPoll.choiceB.trim().length < 1) {
			isValid = false;
			errors.choiceB = 'Choice cannot be blank.';
		} else {
			errors.choiceB = '';
		}

		if (isValid) {
			dispatch('add-poll', { poll: newPoll });
			newPoll = {
				id: crypto.randomUUID(),
				question: '',
				choiceA: '',
				choiceB: '',
				votesA: 0,
				votesB: 0,
			};
			goto('/', { replaceState: false });
		}
	}
</script>

<form class="p-4 rounded-lg mb-8 bg-gray-800" on:submit|preventDefault={handleSubmit} in:fade>
	<TextInput
		name="question"
		label="Poll Question"
		error={errors.question}
		bind:value={newPoll.question} />
	<TextInput
		name="choiceA"
		label="First Option"
		error={errors.choiceA}
		bind:value={newPoll.choiceA} />
	<TextInput
		name="choiceB"
		label="Second Option"
		error={errors.choiceB}
		bind:value={newPoll.choiceB} />
	<div class="text-end">
		<Button variant="secondary" type="reset">Reset</Button>
		<Button variant="primary" type="submit">Add Poll</Button>
	</div>
</form>
