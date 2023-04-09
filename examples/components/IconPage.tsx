import React from "react";
import { IconContainer } from "../../src";
import DocTab from "./components/DocTab";
import CodeBlock from "./components/CodeBlock";

const ExampleIcon: React.FC = () => {
  const properties = {
    size: {
      type: String,
      required: false,
      default: null,
    },
    hoverable: { type: Boolean, default: false },
  };
  const descriptions = {};

  return (
    <DocTab
      heading="Icon Container"
      subHeading="The icon-container component is a container for any type of icon font. Because the icons can take a few seconds to load,
and because you want control over the space the icons will take, you can use the icon class
as a reliable square container that will prevent the page to <strong>jump</strong> on page load."
      slug="shapla-icon"
      name="IconContainer"
      scss-mixin="icon-container"
      properties={properties}
      desc={descriptions}
    >
      <CodeBlock
        heading="Font Awesome Icons"
        content={
          <IconContainer size="medium" hoverable>
            <i className={`far fa-address-book`} />
          </IconContainer>
        }
        code={
          <pre>
            <code>
              {`<IconContainer size="medium" hoverable>
    <i className="far fa-address-book" />
</IconContainer>`}
            </code>
          </pre>
        }
      />
      <CodeBlock
        heading="Material Icons"
        content={
          <IconContainer size="medium" hoverable>
            <span className="material-icons-outlined">home</span>
          </IconContainer>
        }
        code={
          <pre>
            <code>
              {`<IconContainer size="medium" hoverable>
    <span className="material-icons-outlined">home</span>
</IconContainer>`}
            </code>
          </pre>
        }
      />
    </DocTab>
  );
};

export default ExampleIcon;
