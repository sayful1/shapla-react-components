import React, {useState} from 'react';
import SectionHero from "./SectionHero";
import ShaplaTabs from "../../../src/components/tabs/ShaplaTabs";
import ShaplaTab from "../../../src/components/tabs/ShaplaTab";
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
    properties?: Object;
    // eslint-disable-next-line @typescript-eslint/ban-types
    desc?: Object;
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
                    properties = ()=>{return {}},
                    desc = () => {return {}}
                }: Props) => {
    const [selectedTab,setSelectedTab] = useState('Implementation')
    return (
        <>
            <SectionHero heading={heading}>
                <p>{subHeading} </p>
            </SectionHero>
            <ShaplaTabs onChangeTab={(e)=>{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setSelectedTab(e.props.name)

            }}  alignment="center" size="large" fullwidth = {true}>
                <ShaplaTab name="Implementation" selected={selectedTab === 'Implementation'}>
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
                </ShaplaTab>
                <ShaplaTab name="Demo and Example Code"    selected={selectedTab === 'Demo and Example Code'}>
                    {children}

                </ShaplaTab>
            </ShaplaTabs>
        </>
    )
}
export default  DocTab
