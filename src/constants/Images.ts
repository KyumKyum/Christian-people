import PEOPLE from "./People";

import Joseph from "assets/joseph.png";
import Daniel from "assets/daniel.png";
import Joshua from "assets/joshua.png";
import Matthew from "assets/matthew.png";
import Esther from "assets/esther.png";
import Luke from "assets/luke.png";
import Nehemiah from "assets/nehemiah.png";
import David from "assets/david.png";
import Moses from "assets/moses.png";
import Peter from "assets/peter.png";
import Jonathan from "assets/jonathan.png"
import Jeremiah from "assets/jeremiah.png"
import Paul from "assets/paul.png"
import Rebecca from "assets/rebecca.png"
import Job from "assets/job.png"

interface Image {
	url: string;
	alt: string;
	meta: string;
}

const IMAGES: Record<PEOPLE, Image> = {
	[PEOPLE.JOSEPH]: { url: Joseph, alt: "joseph", meta: "요셉" },
	[PEOPLE.DANIEL]: { url: Daniel, alt: "daniel", meta: "다니엘" },
	[PEOPLE.JOSHUA]: { url: Joshua, alt: "joshua", meta: "여호수아" },
	[PEOPLE.MATTHEW]: { url: Matthew, alt: "matthew", meta: "마태" },
	[PEOPLE.ESTHER]: { url: Esther, alt: "esther", meta: "에스더" },
	[PEOPLE.LUKE]: { url: Luke, alt: "luke", meta: "의사 누가" },
	[PEOPLE.NEHEMIAH]: { url: Nehemiah, alt: "nehemiah", meta: "느헤미야" },
	[PEOPLE.DAVID]: { url: David, alt: "david", meta: "다윗" },
	[PEOPLE.MOSES]: { url: Moses, alt: "moses", meta: "모세" },
	[PEOPLE.PETER]: { url: Peter, alt: "peter", meta: "베드로" },
	//* TODO: Change
	[PEOPLE.JONATHAN]: { url: Jonathan, alt: "jonathan", meta: "요나단" },
	[PEOPLE.JEREMIAH]: { url: Jeremiah, alt: "jeremiah", meta: "예레미야" },
	[PEOPLE.PAUL]: { url: Paul, alt: "paul", meta: "바울" },
	[PEOPLE.REBECCA]: { url: Rebecca, alt: "rebecca", meta: "리브가" },
	[PEOPLE.JOB]: { url: Job, alt: "job", meta: "욥" },
	// [PEOPLE.ISAIAH]: { url: Isaish, alt: "isaiah", meta: "이사야" },
};

export default IMAGES;
