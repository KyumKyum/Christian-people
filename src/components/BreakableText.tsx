import _ from "lodash";

interface BreakableTextProps {
	text: string;
	className?: string;
	seperator?: string;
}

function BreakableText({
	text,
	className,
	seperator = "\n",
}: BreakableTextProps) {
	return (
		<span className={className}>
			{_.map(text.split(seperator), (line, index) => (
				<span key={index + line}>
					{line} <br />
				</span>
			))}
		</span>
	);
}

export default BreakableText;
