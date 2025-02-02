import _ from "lodash";
import PEOPLE from "../constants/People";
import type { Selection } from "../interfaces/Content";
import { type Personality, PersonalityType } from "../interfaces/Personality";

const decidePersonality = (selections: Selection[]): PEOPLE => {
	const initPersonality: Personality = {
		energy: 0,
		focus: 0,
		judgement: 0,
		decision: 0,
	};

	const personality = _.reduce(
		selections,
		(acc, cur) => {
			switch (cur.type) {
				case PersonalityType.ENERGY:
					acc.energy += cur.grade;
					break;
				case PersonalityType.FOCUS:
					acc.focus += cur.grade;
					break;
				case PersonalityType.JUDGEMENT:
					acc.judgement += cur.grade;
					break;
				case PersonalityType.DECISION:
					acc.decision += cur.grade;
					break;
			}
			return acc;
		},
		initPersonality,
	);

	let result: PEOPLE;

	if (personality.energy > 0) {
		//E
		if (personality.focus > 0) {
			//EN
			if (personality.judgement > 0) {
				//ENF
				if (personality.decision > 0) {
					//* ENFJ
					result = PEOPLE.JONATHAN;
				} else {
					//* ENFP
					result = PEOPLE.PETER;
				}
			} else {
				//ENT
				if (personality.decision > 0) {
					//* ENTJ
					result = PEOPLE.JOSHUA;
				} else {
					//* ENTP
					result = PEOPLE.ESTHER;
				}
			}
		} else {
			// ES
			if (personality.judgement > 0) {
				//ESF
				if (personality.decision > 0) {
					//* ESFJ
					result = PEOPLE.DAVID;
				} else {
					//* ESFP
					result = PEOPLE.REBECCA;
				}
			} else {
				// EST
				if (personality.decision > 0) {
					//* ESTJ
					result = PEOPLE.NEHEMIAH;
				} else {
					//* ESTP
					result = PEOPLE.PAUL;
				}
			}
		}
	} else {
		//I
		if (personality.focus > 0) {
			//IN
			if (personality.judgement > 0) {
				//INF
				if (personality.decision > 0) {
					//* INFJ
					result = PEOPLE.JEREMIAH;
				} else {
					//* INFP
					result = PEOPLE.JOSEPH;
				}
			} else {
				//INT
				if (personality.decision > 0) {
					//* INTJ
					result = PEOPLE.DANIEL;
				} else {
					//* INTP
					result = PEOPLE.MATTHEW;
				}
			}
		} else {
			// IS
			if (personality.judgement > 0) {
				//ISF
				if (personality.decision > 0) {
					//* ISFJ
					result = PEOPLE.LUKE;
				} else {
					//* ISFP
					result = PEOPLE.JOB;
				}
			} else {
				// IST
				if (personality.decision > 0) {
					//* ISTJ
					result = PEOPLE.MOSES;
				} else {
					//* ISTP
					result = PEOPLE.MATTHEW;
				}
			}
		}
	}

	return result;
};

export default decidePersonality;
