import TypingText from "../components/TypingText";
import Canvas from "../layouts/Canvas";
import Daniel from "../assets/Daniel.png";
import SpreadedCards from "../components/SpreadedCards";
import { INDEX, SELECTION } from "../constants/localStorageKey";
import type { Personality } from "../interfaces/Personality";

function LandingPage() {
	const moveToNextPage = () => {
		const personality: Personality = {
			energy: 0,
			focus: 0,
			judgement: 0,
			decision: 0,
		};
		localStorage.setItem(SELECTION, JSON.stringify([]));
		localStorage.setItem(INDEX, "0");
		window.location.href = "/contents";
	};

	return (
		<Canvas>
			<div className="flex flex-col pt-20 px-10 items-center">
				<TypingText
					text="나는 누구의 신앙을_닮아있을까?"
					typingSpeed={100}
					className="font-LSY font-bold text-4xl text-[#402a01]"
				/>
				<SpreadedCards cardUrls={[Daniel, Daniel, Daniel, Daniel]} />
				<button
					type="button"
					className="mt-10 w-3/4 h-10 rounded-xl bg-[#302a01] flex justify-center items-center hover:scale-125 transition-transform ease-in-out"
					onClick={moveToNextPage}
				>
					<span className="text-2xl font-LSY text-white">찾아보기!</span>
				</button>
			</div>
		</Canvas>
	);
}

export default LandingPage;
