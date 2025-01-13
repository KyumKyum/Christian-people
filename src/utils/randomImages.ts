import _ from "lodash";
import IMAGES from "../constants/Images";

const getRandomImages = (cnt: number): string[] => {
	const imageArray = Object.values(IMAGES);

	const shuffled = _.map(imageArray, (element) => {
		return element.url;
	});

	for (let from = shuffled.length - 1; from > 0; from--) {
		const to = Math.floor(Math.random() * (from + 1));
		[shuffled[from], shuffled[to]] = [shuffled[to], shuffled[from]];
	}

	return shuffled.slice(0, cnt);
};

export default getRandomImages;
