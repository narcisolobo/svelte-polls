import { writable } from 'svelte/store';
import type { IPoll } from '@/types/types';

let polls: IPoll[] = [
	{
		id: crypto.randomUUID(),
		question: 'Which ice cream is better?',
		choiceA: 'Mint Chocolate Chip',
		choiceB: 'Rocky Road',
		votesA: 0,
		votesB: 0,
	},
];

export const pollStore = writable(polls);
