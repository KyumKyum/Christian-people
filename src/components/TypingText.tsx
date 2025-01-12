import { useState, useEffect } from "react";
import { cls } from "../utils/cls";
import BreakableText from "./BreakableText";

interface TypingTextProps {
	text: string;
	typingSpeed: number;
	className?: string;
}

const TypingText = ({ text, typingSpeed, className }: TypingTextProps) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timer = setTimeout(() => {
				setDisplayText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, typingSpeed);

			return () => clearTimeout(timer);
		}
	}, [currentIndex, text, typingSpeed]);

	return (
		<BreakableText
			text={displayText}
			className={cls("w-[300px] p-0 text-center", className)}
			seperator="_"
		/>
	);
};

export default TypingText;
