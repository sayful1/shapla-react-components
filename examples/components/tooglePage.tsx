import {  useState } from "react";
import { Toggle, Toggles } from "../../src";
import DocTab from "./components/DocTab";
import SectionProps from "./components/SectionProps";



const TogglesPage = () => {
  const [range] = useState([...Array(5).keys()]);

  const properties =  {accordion: { type: Boolean, default: true },
    iconPosition: {
      type: String,
      default: "left",
    },
    boxedMode: { type: Boolean, default: true },
    showDivider: { type: Boolean, default: true },
    titleColor: {
      type: String,
      default: "default",

    },}
  const properties2 = {
    name: { type: String, default: null, required: true },
    subtext: { type: String, default: null, required: false },
    selected: { type: Boolean, default: false },
   iconPosition: {type: String, default: undefined,},
    boxedMode: { type: Boolean, default: undefined },
    showDivider: { type: Boolean, default: undefined },
    titleColor: { type: String, default: undefined, },
  }
  const descriptions: Record<string, string> = {};
  const descriptions2: Record<string, string> = {};

  return (
    <DocTab
      heading="Toggles"
      slug="shapla-toggles"
      name="Toggles"
      slug2="shapla-toggle"
      name2="Toggle"
      scssMixin="toggles"
      propsHeading="Props for `Toggles`"
      properties={properties}
      desc={descriptions}
    >
      <div className="test-toggle-container">
        <Toggles
          accordion={true}
          icon-position="left"
          boxed-mode={false}
          show-divider={true}
          titleColor="primary"
        >

          <Toggle name="Nested Toggle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quasi.
            <Toggles>
              <>
              <Toggle name="Nested 2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                dolorem laborum molestiae neque nisi nostrum perferendis
                placeat quod reprehenderit sunt.
              </Toggle>
                </>
            </Toggles>
          </Toggle>
          {range.map((_range) => (
            <Toggle
              key={_range}
              name={`Toggle ${_range + 1}`}
              selected={_range === 1}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aliquam at et itaque magnam nulla officiis perferendis ratione
              velit, veritatis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ab aspernatur assumenda at autem beatae
              consectetur consequatur culpa debitis dolorem doloremque eligendi
              eum ex expedita fugiat inventore iste iusto laborum laudantium
              natus officiis, pariatur placeat porro quam quisquam, repudiandae
              sit suscipit ut. Aliquid beatae culpa doloribus dolorum ea earum
              et exercitationem, hic, incidunt ipsum laborum minus necessitatibus
              officia quasi rerum sapiente tenetur unde. Accusamus adipisci
              aliquid animi asperiores et, impedit laborum maiores, molestias
              natus nisi quae quo repudiandae velit! Dignissimos ex impedit
              laborum nisi qui suscipit temporibus voluptas? Ipsam, mollitia,
              natus? Assumenda dignissimos expedita ipsum laboriosam molestiae
              quos recusandae, soluta vel?
            </Toggle>
          ))}

        </Toggles>
        <SectionProps
          heading="Props for `Toggle`"
          properties={properties2}
          desc={descriptions2}
        />
      </div>
    </DocTab>
  );
};


export default TogglesPage;