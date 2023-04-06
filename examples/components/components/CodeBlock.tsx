import React, {FC, ReactNode} from 'react';
import {Columns,Column} from "../../../src";
import CodeHighlights from "./Codehighlights";
interface Props {
    heading: string;
    content: ReactNode;
    code : ReactNode;
}
const CodeBlock:FC<Props> = ({heading, content,code}) => {
    return (
        <>
        <h4 className="is-h4">{ heading }</h4>
    <Columns>
        <Column tablet={6}>
            {content}
    </Column>
    <Column tablet={6}>
        <CodeHighlights>
            {code}
        {/*<slot name="code" />*/}
        </CodeHighlights>
</Column>
</Columns>
    </>
    );
};
export default CodeBlock;
