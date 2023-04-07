import React from "react";
import {ImageContainer} from "../../src";
import DocTab from "./components/DocTab";
import CodeBlock from "./components/CodeBlock";

function ExampleImage() {
    const properties = {
        containerWidth: {type: String, default: null, required: false},
        containerHeight: {type: String, default: null, required: false},
        heightRatio: {type: Number, required: false, default: 1},
        widthRatio: {type: Number, required: false, default: 1},
        isRounded: {type: Boolean, required: false, default: false},
    }

    const descriptions = {};

    // language=JavaScript
    return (
        <div>
            <DocTab
                heading="Image Container"
                subHeading="The image container to specify a precisely sized container so that your layout isn't broken because of image loading or image errors."
                slug="ImageContainer"
                name="ImageContainer"
                scss-mixin="image-container"
                properties={properties}
                desc={descriptions}
            >
                <CodeBlock heading="Fixed size"
                           content={(
                               <ImageContainer containerWidth="32px" containerHeight="32px">
                                   <img src="https://via.placeholder.com/48x48" alt="Placeholder"/>
                               </ImageContainer>
                           )}
                           code={(
                               <pre>
                        <code>

            {`<ImageContainer containerWidth="32px" containerHeight="32px">
  <img src="https://via.placeholder.com/48x48" alt="Placeholder" />
</ImageContainer>`}
                        </code>
          </pre>)}
                /><CodeBlock heading="Fixed size"
                             content={(
                                 <ImageContainer containerWidth="32px" containerHeight="32px" isRounded={true}>
                                     <img src="https://via.placeholder.com/48x48" alt="Placeholder"/>
                                 </ImageContainer>
                             )}
                             code={(
                                 <pre>
                        <code>

            {`<ImageContainer containerWidth="32px" containerHeight="32px">
  <img src="https://via.placeholder.com/48x48" alt="Placeholder" />
</ImageContainer>`}
                        </code>
          </pre>)}
            />
                <CodeBlock heading="Ratio"
                           content={(
                               <div style={{width: "420px", height: "560px"}}>
                                   <ImageContainer widthRatio={3} heightRatio={4}>
                                       <img src="https://via.placeholder.com/420x560" alt="Placeholder"/>
                                   </ImageContainer>
                               </div>
                           )}
                           code={(
                               <pre>
                        <code>
                            {`<ImageContainer widthRatio={3} heightRatio={4}>
        <img src="https://via.placeholder.com/420x560" alt="Placeholder" />
    </ImageContainer>`}
                        </code>
            </pre>)}
                />

                <CodeBlock heading="Iframe support"
                           content={(
                               <div style={{width: "420px", height: "560px"}}>
                                   <ImageContainer widthRatio={16} heightRatio={9}>
                                       <iframe
                                           width="640"
                                           height="360"
                                           allowFullScreen
                                           src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
                                       />
                                   </ImageContainer>
                               </div>
                           )}
                           code={(
                               <pre>
                        <code>
                            {`
    <ImageContainer widthRatio={16} heightRatio={9}>
        <iframe
            width="640"
            height="360"
            allowFullScreen
            src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
        />
    </ImageContainer>`}
                        </code>
            </pre>)}
                />
            </DocTab>
        </div>
    );
}

export default ExampleImage;
