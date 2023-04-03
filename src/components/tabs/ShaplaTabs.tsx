import React, {ReactElement, ReactNode, useContext, useEffect, useState,} from "react";
import {TabsDataInterface,TabsProps} from "./interfaces";
import ShaplaTabsContext from "./ShaplaTabsContext";
import ShaplaTab from "./ShaplaTab";



const Shaplatab = ({
                    alignment = "left",
                    size = "default",
                    tabStyle = "default",
                    fullwidth = false,
                    vertical = false,
                    onChangeTab,
                    children,
                }: TabsProps) => {
    const shaplaTab = useContext(ShaplaTabsContext) as TabsDataInterface

    const [selectedIndex,setSelectedIndex ] = useState(-1);
    const [tabs, setTabs] = useState<TabsDataInterface[]>(shaplaTab.tabs || []);
    const selectTab = (tab: TabsDataInterface, index: number) => {
        // @ts-ignore
        const newTab = { ...tab, selectedIndex: index };
        setSelectedIndex(index);
        onChangeTab && onChangeTab(newTab, index);
    };

    const navItemClass = (tab: ReactElement<TabsDataInterface>, index: number) => {
        const classes = [];
        if (index === selectedIndex) {
            classes.push("is-active");
        }
        if (tab.props?.navItemClass) {
            classes.push(tab.props.navItemClass);
        }
        return classes;
    };
    const [tabsClasses, setTabsClasses] = useState("");
    useEffect(() => {
        setTabsClasses(["shapla-tabs", vertical && "shapla-tabs--vertical"].filter(Boolean).join(" "));
    }, [vertical]);
    const [tabClasses, setTabClasses] = useState("");
    useEffect(() => {
        setTabClasses([
            "shapla-tabs__tab",
            `is-${size}`,
            fullwidth && "is-fullwidth",
            alignment === "center" && "is-centered",
            alignment === "right" && "is-right",
            tabStyle === "boxed" && "is-boxed",
            (tabStyle === "toggle" || tabStyle === "rounded") && "is-toggle",
            tabStyle === "rounded" && "is-toggle-rounded",
        ].filter(Boolean).join(" "));
    }, [size, fullwidth, alignment, tabStyle]);
    useEffect(() => {
            const newTabs = React.Children.toArray(children).filter(
                (child) => {
                    if (React.isValidElement(child) && child.type === ShaplaTab)
                        return child;
                }
            );
            // @ts-ignore
            setTabs(newTabs)
        },
        [children]);
    return <div className={tabsClasses}>
        <div className={tabClasses}>
            <ul className="shapla-tabs__nav">
                {
                    tabs.map((tab, index) => {
                        // @ts-ignore
                        return <li key={index} className={navItemClass(index)}>
                            {  // @ts-ignore
                            <a href={tab.props.navTo} onClick={ ()=> selectTab(tab,index)}>
                                {/*@ts-ignore*/}
                                {tab.props.name}
                            </a>
                            }
                        </li>
                    })
                }
            </ul>
        </div>
        {children}
    </div>

}
export default Shaplatab
