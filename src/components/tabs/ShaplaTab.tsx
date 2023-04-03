import React, {useContext, useEffect, useState} from 'react';
import {TabsDataInterface} from "./interfaces";
import ShaplaTabsContext from "./ShaplaTabsContext";


interface Props {
    children: React.ReactNode;
    className?: string;
    name: string;
    active?: boolean;
    selected?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;


}

export default ({
                    children,
                    selected = false,
    onClick = () => {}

                }: Props) => {
    const tabs = useContext(ShaplaTabsContext);
    const [isActive, setIsActive] = useState(false);
    const [index, setIndex] = useState(-1);
    useEffect(() => {
        setIndex(tabs.count);
        tabs.count++;
        setIsActive(index === tabs.selectedIndex);
    }, []);

    useEffect(() => {
        setIsActive(index === tabs.selectedIndex);
    }, [tabs.selectedIndex]);

    useEffect(() => {
        setIsActive(selected);
        if (selected) {
            tabs.selectedIndex = index;
        }
    }, [selected]);



    return (
        <div onClick={onClick} className={`shapla-tabs__panel ${selected ? 'is-active' : ""}`}>
            {children}
        </div>
    )

}