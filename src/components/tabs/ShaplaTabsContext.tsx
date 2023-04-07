import {createContext} from "react";
import {TabsDataInterface} from "./interfaces";


export default  createContext<TabsDataInterface>({
    tabs: [],
    count: 0,
    selectedIndex: -1,
});

