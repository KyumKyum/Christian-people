import type { ReactNode } from "react";

function Canvas({ children }: { children?: ReactNode }) {
	return (
		<div className="max-w-[400px] min-w-[300px] h-svh bg-[#e0d5c1]">
			{children}
		</div>
	);
}

export default Canvas;
