import type { PersonalityType } from "./Personality";

export interface Answer {
	text: string;
	grade: -1 | 1;
}
export interface Content {
	question: string;
	type: PersonalityType;
	answers: Answer[];
}

export interface Selection {
	type: PersonalityType;
	grade: -1 | 1;
}
