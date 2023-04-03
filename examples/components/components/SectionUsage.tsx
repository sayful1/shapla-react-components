// import React from "react";
// import Codehighlights from "./Codehighlights";
//
// interface Props {
//     name?: string;
//     slug?: string;
//     slug2?: string;
//     scssMixin?: string;
//     name2?: string;
// }
//
// export default ({name = "", slug = "", slug2 = "", scssMixin = "", name2 = ""}: Props) => {
//     return (
//         <>
//             <section className="section section-usage">
//                 <h2 className="title">Usage</h2>
//                 <p>
//                     To use this component, you need to register it first. You can register
//                     component <strong>globally</strong> and <strong>locally</strong>
//                 </p>
//                 <h3>Global registration:</h3>
//                 {
//                     name2 && (
//                         <Codehighlights>
//                             <pre>
//                                 <code className="language-js">
//
//                                     {`import {${name},${name2}} from "shapla-react-components";
//                                     const root = createRoot(document.getElementById('app'));
//                                     root.render(
//                                     <div> <a href="#">${name}</a> <${name2} /> </div>);
//                                     `}
//                                 </code>
//                             </pre>
//                         </Codehighlights>
//                     )
//                 }
//                 {
//                     !name2 && (
//                         <Codehighlights>
//                             <pre>
//                                 <code className="language-js">
//                                     {`import {${name}} from "shapla-react-components";`}
//
//                                     </code>
//                                     <code className="language-jsx" >
//                                     {`
//                                     const root = createRoot(document.getElementById('app'));
//                                     root.render(
//                                     <${name} />  );
//                                     `}
//                                 </code>
//                             </pre>
//                         </Codehighlights>
//                     )
//                 }
//                 <h3>Local registration:</h3>
//                 {
//                     name2 && (
//                         <Codehighlights>
//                             <pre>
//                                 <code className="language-js">
//                                     {`import {${name},${name2}} from "shapla-react-components";`}
//                                     {`
//                                     export default function App() {
//                                         return (
//                                             <div>
//                                                 <a href="#">${name}</a>
//                                                 <${name2} />
//                                             </div>
//                                         );
//                                     }
//                                     `}
//                                 </code>
//                             </pre>
//                         </Codehighlights>
//                     )
//                 }
//                 {
//                     !name2 && (
//                         <Codehighlights>
//                             <pre>
//                                 <code className="language-jsx">
//                                     {`import {${name}} from "shapla-react-components";`}
//                                     {`
//                                     export default function App() {
//                                         return (
//                                             <${name} />
//                                         );
//                                     }
//                                     `}
//                                 </code>
//                             </pre>
//                         </Codehighlights>
//                     )
//                 }
//                 <h3>Importing SCSS:</h3>
//                 <Codehighlights>
//                     <pre>
//                         <code className="language-js">
//                             {`import "shapla-react-components/src/components/${slug}/${slug2}/${scssMixin}";`}
//                             {`
//                             @include ${name}();
//                             `}
//                         </code>
//                     </pre>
//                 </Codehighlights>
//             </section>
//         </>
//     )
// }
import React, {FC, useEffect} from 'react';
import Codehighlights from './Codehighlights';

interface Props {
    slug?: string;
    name?: string;
    slug2?: string;
    name2?: string;
    scssMixin?: string;
}

const SectionUsage: FC<Props> = ({slug = '', name = '', slug2 = '', name2 = '', scssMixin = ''}) => {

    return (
        <section className="section section-usage">
            <h2 className="title">Usage</h2>

            <p>
                To use this component, you need to register it first. You can register
                component <strong>globally</strong> and{' '}
                <strong>locally</strong>
            </p>
            <h3><strong>Global registration:</strong></h3>
            {
                name2 && (
                    <Codehighlights>
                            <pre>
                                <code className="language-js">

                                    {`import {${name},${name2}} from "shapla-react-components";
const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <a href="#">${name}</a>
        <${name2} />
    </div>);
`}
                                </code>
                            </pre>
                    </Codehighlights>
                )
            }
            {
                !name2 && (
                    <Codehighlights>
                            <pre>
                                <code className="language-js">
                                    {`import {${name}} from "shapla-react-components";
const root = createRoot(document.getElementById('root'));
root.render( <${name} /> );
                                    `}
                                </code>
                            </pre>
                    </Codehighlights>
                )
            }
            <h3><strong>Local registration:</strong></h3>
            {
                name2 && (
                    <Codehighlights>
                            <pre>
                                <code className="language-js">
                                    {`import {${name},${name2}} from "shapla-react-components";
export default function App() {
    return (
        <div>
            <a href="#">${name}</a>
            <${name2} />
        </div>
    );
}
`}
                                </code>
                            </pre>
                    </Codehighlights>
                )
            }
            {
                !name2 && (
                    <Codehighlights>
                            <pre>
                                <code className="language-jsx">
                                    {`import {${name}} from "shapla-react-components";`}
                                    {`
                                    export default function App() {
                                        return (
                                            <${name} />
                                        );
                                    }
                                    `}
                                </code>
                            </pre>
                    </Codehighlights>
                )
            }

            {scssMixin && (
                <>
                    <h3><strong>Load component style.</strong></h3>
                    <Codehighlights>
                        <pre>
                            <code className="language-js">
                            {`import "shapla-react-components/src/components/${slug}/${slug2}/${scssMixin}";
@include ${name}();
                             `}
                             </code>
                        </pre>
                    </Codehighlights>
                </>
            )}
        </section>
    );
};

export default SectionUsage;
