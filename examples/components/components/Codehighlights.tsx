import React, {ReactNode, useEffect, useRef} from "react";
import hljs from "highlight.js";

interface Props {
    children: React.ReactNode;
}
export default ({ children }:Props) => {
    const codeRef = useRef(null);

    useEffect(() => {
        const nodes = codeRef.current ? codeRef.current : document
        Array.from(nodes.querySelectorAll("pre code")).forEach((block) => {
            return hljs.highlightBlock(block as HTMLElement);
        });

    }, []);

    return (
        <div className="shapla-code-highlight" ref={codeRef}>
            {children}
        </div>
    );
};
