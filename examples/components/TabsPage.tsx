import React from "react";
import { Tabs, Tab } from "../../src";
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
      name="Tabs"
      slug2="shapla-tab"
      name2="Tab"
      scss-mixin="tabs"
      props-heading="Props for `Tabs`"
      properties={properties}
      desc={descriptions}
    >
      <div>
        <h2>Tabs</h2>
        <Tabs alignment="center">
          <Tab name="Tab 1">
            <span>Custom name</span>
            Tab One Content
          </Tab>
          <Tab name="Tab 2 (Selected)" selected>
            Tab Two Content
          </Tab>
        </Tabs>
        <Tabs alignment="center" tab-style="boxed">
          <Tab name="Tab 1 (Selected)" selected>
            Tab One Content
          </Tab>
          <Tab name="Tab 2">Tab Two Content</Tab>
        </Tabs>
        <Tabs alignment="center" tab-style="toggle">
          <Tab name="Tab 1" selected>
            Tab One Content
          </Tab>
          <Tab name="Tab 2">Tab Two Content</Tab>
        </Tabs>
        <Tabs alignment="center" fullwidth>
          <Tab
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
          </Tab>
          <Tab name="Tab 2">Tab Two Content</Tab>
        </Tabs>
      </div>
      <SectionProps
        heading="Props for `Tab`"
        properties={properties2}
        desc={descriptions2}
      />
    </DocTab>
  );
};

export default ExampleTabs;
