import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Canvas from "../layouts/Canvas";
import { cls } from "../utils/cls";
import Details from "../constants/Details";
import type PEOPLE from "../constants/People";
import type { Detail } from "../interfaces/Detail";
import BreakableText from "../components/BreakableText";
import _ from "lodash";

function DetailPage() {
	const [loading, setLoading] = useState<boolean>(true);
	const [fade, setFade] = useState<string>("fade-in");
	const [curDetails, setCurDetails] = useState<Detail | null>(null);

	const [searchParams] = useSearchParams();
	const character = searchParams.get("character") ?? "";

	useEffect(() => {
		const details = Details[character as PEOPLE];
		setCurDetails(details);

		const timer = setTimeout(() => {
			setFade("fade-out");
			setTimeout(() => setLoading(false), 1000); // Delay to allow the fade-out effect
		}, 3000); // 3 seconds delay

		return () => clearTimeout(timer);
	}, [character]);
	return (
		<Canvas>
			{loading ? (
				<div
					className={cls(
						"flex w-full h-screen justify-center items-center",
						`${fade}`,
					)}
				>
					<span className="font-LSY font-bold text-4xl text-[#402a01] animate-bounce">
						결과를 불러오고 있습니다...
					</span>
				</div>
			) : (
				<div className="fade-in flex flex-col w-full h-full items-center p-10">
					<div className="flex flex-col gap-2 items-center mb-8">
						<span className="font-LSY font-bold text-5xl text-[#402a01]">
							{curDetails?.koName}
						</span>
						<span className="font-LSY font-bold text-3xl text-[#402a01]">
							{curDetails?.enName}
						</span>
					</div>
					<img src={curDetails?.image} alt={character} className="w-[250px]" />
					<BreakableText
						className="font-LSY font-bold text-xl text-[#402a01] text-center my-4"
						text={`"${curDetails?.main}"`}
					/>
					<div className="flex flex-col gap-4 mb-4">
						{_.map(curDetails?.descriptions, (description, index) => {
							return (
								<BreakableText
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className="font-LSY text-[13px] text-black"
									text={description}
								/>
							);
						})}
					</div>
					<button
						type="button"
						className="flex justify-center items-center w-3/4 rounded-xl bg-[#302a01] py-2 mb-4"
						onClick={() => {
							const link = document.createElement("a");
							link.href = curDetails?.image ?? ""; // replace with the actual image URL
							link.download = character; // replace with the desired file name
							link.click();
						}}
					>
						<span className="text-2xl font-LSY text-white">사진 다운로드</span>
					</button>
					<button
						type="button"
						className="flex justify-center items-center w-3/4 rounded-xl border-2 border-[#302a01] py-2"
						onClick={() => {
							window.location.href = "/gallery";
						}}
					>
						<span className="text-2xl font-LSY text-[#302a01]">
							다른 인물 보기
						</span>
					</button>
				</div>
			)}
		</Canvas>
	);
}

export default DetailPage;
