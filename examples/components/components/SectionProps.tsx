import React, { useEffect } from "react";
import "./style.scss";
import { Table } from "../../../src/index";
import { ItemInterface } from "../../../src/components/table/TableInterfaces";

interface Props {
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  properties?: Object;
  heading?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  desc?: Object;
}
const SectionProps = ({
  heading = "Properties",
  properties = {},
  desc = {},
}: Props) => {
  const columns = [
    { key: "property", label: "Property" },
    { key: "type", label: "Type" },
    { key: "required", label: "Required" },
    { key: "default", label: "Default" },
  ];

  const [tableRows, setTableRows] = React.useState<ItemInterface[]>([]);
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
    const newTableRows = Object.entries(properties)
      .filter(([key]) => Object.keys(descriptions).includes(key))
      .map(([key, value]) => ({
        property: key,
        default: value?.default ?? "undefined",
        type: value?.type?.name ?? "Any",
        required: value?.required ? "yes" : "no",
      }));
    setTableRows(newTableRows);
  }, [properties, desc]);

  return (
    <section className="section section-properties">
      <h2 className="title">{heading}</h2>
      <Table showCb={false} columns={columns} items={tableRows} />
    </section>
  );
};
export default SectionProps;
