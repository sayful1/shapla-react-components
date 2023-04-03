import React, {useEffect} from "react";
// import "./style.scss";
import {ShaplaTable} from "../../../src/index";

interface Props {
    children?: React.ReactNode;
    properties?: Object;
    heading?: string;
    desc?: Object;


}
export default ({heading="Properties",properties =  {},desc = {}}:Props) => {
    const columns = [
        { key: "property", label: "Property" },
        { key: "type", label: "Type" },
        { key: "required", label: "Required" },
        { key: "default", label: "Default" },
        { key: "description", label: "Description" },
        ];

    const [tableRows, setTableRows] = React.useState([]);
    // useEffect(()=>
    // {
    //             let descriptions = desc;
    //     if (!Object.keys(descriptions).length) {
    //         descriptions = Object.keys(properties).reduce(
    //             (previousValue, currentValue) => ({
    //                 ...previousValue,
    //                 [currentValue]: "",
    //             }),
    //             {}
    //         );
    // }
    //         let rows = [];
    //     for (const [key, value] of Object.entries(properties)) {
    //         if (Object.keys(descriptions).indexOf(key) === -1) {
    //             continue;
    //         }
    //         rows.push({
    //             property: key,
    //             default: value["default"] ?? "undefined",
    //             type: value["type"] ?? "Any",
    //             required: value["required"] ?? false ? "yes" : "no",
    //             description: descriptions ?? "",
    //         });
    //         // @ts-ignore
    //         setTableRows(rows)
    //     }
    // },[properties,desc]);
    useEffect(() => {
        let descriptions = desc;
        if (!Object.keys(descriptions).length) {
            descriptions = Object.keys(properties).reduce(
                (previousValue, currentValue) => ({
                    ...previousValue,
                    [currentValue]: "",
                }),
                {}
            );
        }
        // console.log(properties)
        const newTableRows = Object.entries(properties)
            .filter(([key]) => Object.keys(descriptions).includes(key))
            .map(([key, value]) => ({
                property: key,
                default: value?.default ?? "undefined",
                type: value?.type?.name ?? "Any",
                required: value?.required ? "yes" : "no",
                // @ts-ignore
                description: descriptions[key] ?? "",
            })
            );
        // @ts-ignore
        setTableRows(newTableRows);
        console.log(newTableRows);
    }, [properties, desc]);

        return (
        <section className="section section-properties">
            <h2 className="title">{heading}</h2>
            <ShaplaTable showCb={false} columns={columns} items={tableRows} />
        </section>
    )
}