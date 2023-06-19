import React, { useState } from "react";
import SectionHero from "./SectionHero";
import {Tabs,Tab} from "../../../src/index";
import SectionUsage from "./SectionUsage";
import SectionProps from "./SectionProps";

interface Props {
    children: React.ReactNode;
    heading?: string;
    subHeading?: string;
    slug?: string;
    name?: string;
    slug2?: string;
    name2?:string,
    scssMixin?: string;
    propsHeading?: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    properties?: {};
    // eslint-disable-next-line @typescript-eslint/ban-types
    desc?: {};
}
const DocTab = ({
  children,
  heading = "",
  subHeading = "",
  slug = "",
  name = "",
  slug2 = "",
  name2 = "",
  scssMixin = "",
  propsHeading = "",
  properties = () => {
    return {};
  },
  desc = () => {
    return {};
  },
}: Props) => {
  const [selectedTab, setSelectedTab] = useState("Implementation");

return (
        <>
            <SectionHero heading={heading}>
                <p>{subHeading} </p>
            </SectionHero>
            <Tabs
           
            alignment="center" size="large" fullwidth = {true}>
                <Tab name="Implementation" selected>
                    <div>
                    <SectionUsage
                        slug={slug}
                        name={name}
                        slug2={slug2}
                        name2={name2}
                        scssMixin={scssMixin}
                    />
                    <SectionProps
                        heading={propsHeading}
                        properties={properties}
                        desc={desc}
                    />
                    </div>
                </Tab>
                <Tab name="Demo and Example Code" >
                    {children}
                    Hello

                </Tab>
            </Tabs>
        </>
    )
}
export default  DocTab
