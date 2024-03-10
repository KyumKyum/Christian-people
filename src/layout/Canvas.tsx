import React, {ReactElement} from "react";

interface CanvasProps {
    children: React.ReactNode
}

const Canvas: React.FC<CanvasProps> = ({children}: CanvasProps): ReactElement => {
    return (
        <main className={"w-[360px] h-full bg-[#fff6e3]"}>
            {children}
        </main>
    )
}

export default Canvas;
