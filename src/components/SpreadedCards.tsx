import { useState, useEffect } from "react";
import { cls } from "../utils/cls";

interface SpreadedCardsProps {
	cardUrls: string[];
}

interface Card {
	img: HTMLImageElement;
	rotationClass: string;
	revealClass: string;
}

const cardsConfig = [
	{
		rotationClass: "",
		revealClass: "-rotate-[2deg]",
	},
	{
		rotationClass: "group-hover:rotate-[15deg]",
		revealClass: "rotate-[3deg] translate-y-2",
	},
	{
		rotationClass: "group-hover:rotate-[30deg]",
		revealClass: "-rotate-[2deg] translate-x-1",
	},
	{
		rotationClass: "group-hover:rotate-[45deg]",
		revealClass: "rotate-[4deg]",
	},
];

function SpreadedCards({ cardUrls }: SpreadedCardsProps) {
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		if (cardUrls.length > 0) {
			const loadedCards = cardUrls.slice(0, 4).map((url, index) => {
				const img = new Image();
				img.src = url;
				return {
					img,
					rotationClass: cardsConfig[index].rotationClass,
					revealClass: cardsConfig[index].revealClass,
				};
			});
			setCards(loadedCards);
		}
	}, [cardUrls]);

	return (
		<div className="flex flex-col">
			<div
				className={cls("group relative flex min-h-40 min-w-52 items-center", {
					"gap-3": true,
				})}
			>
				{cards.slice(0, 2).map((card, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={cls(
							{
								absolute: false,
							},
							card.revealClass,
						)}
					>
						<img src={card.img.src} alt={`Card ${index + 1}`} />
					</div>
				))}
			</div>
			<div
				className={cls("group relative flex min-h-40 min-w-52 items-center", {
					"gap-3": true,
				})}
			>
				{cards.slice(2).map((card, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={cls(
							{
								absolute: false,
							},
							card.revealClass,
						)}
					>
						<img src={card.img.src} alt={`Card ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
}

export default SpreadedCards;
