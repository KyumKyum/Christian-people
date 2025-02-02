import TypingText from "../components/TypingText";
import Canvas from "../layouts/Canvas";
import SpreadedCards from "../components/SpreadedCards";
import { INDEX, SELECTION } from "../constants/localStorageKey";
import getRandomImages from "../utils/randomImages";
import { useState, useMemo } from "react";

function LandingPage() {
  const [copyText, setCopyText] = useState("링크 복사하기!");
  
  // Use useMemo to keep the random images stable across re-renders
  const randomImages = useMemo(() => getRandomImages(6), []);

  const moveToNextPage = () => {
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
          className="font-LSY font-bold text-4xl h-24 text-[#402a01]"
        />
        <SpreadedCards cardUrls={randomImages} />
        <button
          type="button"
          className="mt-10 w-3/4 h-10 rounded-xl bg-[#302a01] flex justify-center items-center hover:scale-125 transition-transform ease-in-out"
          onClick={moveToNextPage}
        >
          <span className="text-2xl font-LSY text-white">찾아보기!</span>
        </button>
        <button
          type="button"
          className="mt-4 w-3/4 h-10 rounded-xl border-2 border-[#302a01] flex justify-center items-center hover:scale-125 transition-transform ease-in-out"
          onClick={async () => {
            await navigator.clipboard.writeText(window.location.href);
            setCopyText("복사 완료! :)");
            setTimeout(() => setCopyText("링크 복사하기!"), 2000);
          }}
        >
          <span className="text-2xl font-LSY text-[#302a01]">{copyText}</span>
        </button>
		<button
          type="button"
          className="mt-10 w-3/4 h-10"
		  onClick={() => {window.location.href = "/creators"}}
        >
          <span className="text-base font-LSY text-[#302a01]">누가 만들었나요?</span>
        </button>
		<span className="text-xs font-LSY text-black mt-4 text-center">* 잘못된 내용이 있을 시,<br/>mycheesepasta@gmail.com으로 연락주세요! :)</span>
      </div>
    </Canvas>
  );
}

export default LandingPage;