import React from "react";
import { ShaplaTabs, ShaplaTab } from "../../src";
import DocTab from "./components/DocTab";
import SectionProps from "./components/SectionProps";

const ExampleTabs = () => {
  const properties = {
    alignment: {
      type: String,
      default: "left"
    },
    size: {
      type: String,
      default: "default"
    },
    tabStyle: {
      type: String,
      default: "default"
    },
    fullwidth: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    onChangeTab: { type: Function, default: "" },
    children: { type: Node, default: "" }
  };
  const properties2 = {
    name: { type: String, required: true },
    selected: { type: Boolean, required: false, default: false },
    navItemClass: { type: String, required: false, default: "" },
    navTo: { type: String, required: false, default: "" },
    children: { type: Node, required: false, default: "" }
  };

  const descriptions = {};
  const descriptions2 = {};

  return (
    <DocTab
      heading="Tabs"
      slug="shapla-tabs"
      name="ShaplaTabs"
      slug2="shapla-tab"
      name2="ShaplaTab"
      scss-mixin="tabs"
      props-heading="Props for `ShaplaTabs`"
      properties={properties}
      desc={descriptions}
    >
      <div>
        <h2>Tabs</h2>
        <ShaplaTabs alignment="center">
          <ShaplaTab name="Tab 1">
            <span>Custom name</span>
            Tab One Content
          </ShaplaTab>
          <ShaplaTab name="Tab 2 (Selected)" selected>
            Tab Two Content
          </ShaplaTab>
        </ShaplaTabs>
        <ShaplaTabs alignment="center" tab-style="boxed">
          <ShaplaTab name="Tab 1 (Selected)" selected>
            Tab One Content
          </ShaplaTab>
          <ShaplaTab name="Tab 2">Tab Two Content</ShaplaTab>
        </ShaplaTabs>
        <ShaplaTabs alignment="center" tab-style="toggle">
          <ShaplaTab name="Tab 1" selected>
            Tab One Content
          </ShaplaTab>
          <ShaplaTab name="Tab 2">Tab Two Content</ShaplaTab>
        </ShaplaTabs>
        <ShaplaTabs alignment="center" fullwidth>
          <ShaplaTab
            name={
              <>
                                <span className="icon is-small">
                                    <i className="fas fa-image" aria-hidden="true"></i>
                                </span>
                <span>Pictures</span>
              </>
            }
            selected
          >
            <span className="icon is-small">
              <i className="fas fa-image" aria-hidden="true"></i>
            </span>
            <span>Pictures</span>
            Tab One Content
          </ShaplaTab>
          <ShaplaTab name="Tab 2">Tab Two Content</ShaplaTab>
        </ShaplaTabs>
      </div>
      <SectionProps
        heading="Props for `ShaplaTab`"
        properties={properties2}
        desc={descriptions2}
      />
    </DocTab>
  );
};

export default ExampleTabs;
