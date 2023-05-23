export interface ITab {
	link: string;
	label: string;
}

export interface IPoll {
	id: string;
	question: string;
	choiceA: string;
	choiceB: string;
	votesA: number;
	votesB: number;
}
