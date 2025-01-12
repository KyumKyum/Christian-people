//MBTI
export interface Personality {
	energy: number; // negative: I, positive: E
	focus: number; // negative: S, positive: N
	judgement: number; //negative: T, positive: F
	decision: number; // negative: P, positive: J
}

export enum PersonalityType {
	ENERGY = "ENERGY",
	FOCUS = "FOCUS",
	JUDGEMENT = "JUDGEMENT",
	DECISION = "DECISION",
}
