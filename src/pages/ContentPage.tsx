import { useEffect, useState } from "react";
import { INDEX, SELECTION } from "../constants/localStorageKey";
import Canvas from "../layouts/Canvas";
import type { Content, Selection } from "../interfaces/Content";
import Contents from "../constants/Contents";
import _ from "lodash";
import BreakableText from "../components/BreakableText";
import type { PersonalityType } from "../interfaces/Personality";
import decidePersonality from "../utils/decidePersonality";

function ContentPage() {
	const [curIndex, setCurIndex] = useState<number>(0);
	const [curContent, setCurContent] = useState<Content | null>(null);
	const [selector, setSelector] = useState<0 | 1>(1);
	const [selectionList, setSelectionList] = useState<Selection[]>([]);

	const moveToNextQuestion = (type: PersonalityType, grade: 1 | -1) => {
		const selection: Selection = {
			type,
			grade,
		};

		setSelectionList([...selectionList, selection]);
		localStorage.setItem(
			SELECTION,
			JSON.stringify([...selectionList, selection]),
		);
		if (curIndex < Contents.length - 1) {
			localStorage.setItem(INDEX, (curIndex + 1).toString());
			setCurContent(Contents[curIndex + 1]);
			setCurIndex(curIndex + 1);
			setSelector(Math.random() < 0.5 ? 0 : 1);
		} else {
			//* Move to result page
			const result = decidePersonality([...selectionList, selection]);

			window.location.href = `/detail?character=${result}`;
		}
	};

	const moveToPreviousQuestion = () => {
		if (curIndex > 0) {
			setSelectionList(selectionList.slice(0, -1));
			localStorage.setItem(
				SELECTION,
				JSON.stringify(selectionList.slice(0, -1)),
			);
			localStorage.setItem(INDEX, (curIndex - 1).toString());
			setCurContent(Contents[curIndex - 1]);
			setCurIndex(curIndex - 1);
			setSelector(Math.random() < 0.5 ? 0 : 1);
		} else {
			history.back();
		}
	};

	useEffect(() => {
		//* Check if index is corrupted or not. If corrupted, return to the landing page.
		const index = localStorage.getItem(INDEX);
		const selection = localStorage.getItem(SELECTION);

		if (!index || !selection) {
			window.location.href = "/";
		} else {
			const content = Contents[Number.parseInt(index)];
			setCurContent(content);
			setSelectionList(JSON.parse(selection) as Selection[]);
			setCurIndex(Number.parseInt(index));
			setSelector(Math.random() < 0.5 ? 0 : 1);
		}

		window.scrollTo(0, 0);
	}, []);

	return (
		<Canvas>
			{curContent && (
				<div className="flex flex-col h-screen px-10 items-center justify-center">
					<div className="flex flex-col items-center">
						<p className="font-Laundry text-4xl mb-2 text-[#402a01]">
							{curIndex + 1}
						</p>
						<BreakableText
							text={curContent?.question}
							className="font-LSY text-xl text-center"
						/>
					</div>
					<div className="flex flex-col mt-2 items-center">
						<button
							type="button"
							className="mt-10 w-full h-20 p-8 rounded-xl bg-[#302a01] flex justify-center items-center hover:scale-125 transition-transform ease-in-out"
							onClick={() => {
								moveToNextQuestion(
									curContent.type,
									curContent.answers[selector].grade,
								);
							}}
						>
							<BreakableText
								text={curContent?.answers[selector].text}
								className="text-base font-LSY text-white"
							/>
						</button>
						<button
							type="button"
							className="mt-10 w-full h-20 p-8 rounded-xl bg-[#302a01] flex justify-center items-center hover:scale-125 transition-transform ease-in-out"
							onClick={() => {
								moveToNextQuestion(
									curContent.type,
									curContent.answers[Math.abs(selector - 1)].grade,
								);
							}}
						>
							<BreakableText
								text={curContent?.answers[Math.abs(selector - 1)].text}
								className="text-base font-LSY text-white"
							/>
						</button>
					</div>
					<div className="flex flex-col mt-2 items-center">
						<button
							type="button"
							className="mt-10 w-full h-6 p-6 rounded-xl border-2 border-[#302a01] flex justify-center items-center hover:scale-125 transition-transform ease-in-out"
							onClick={moveToPreviousQuestion}
						>
							<p className="text-base font-LSY text-black">뒤로가기</p>
						</button>
					</div>
				</div>
			)}
		</Canvas>
	);
}

export default ContentPage;
