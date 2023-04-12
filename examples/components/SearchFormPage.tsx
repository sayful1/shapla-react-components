import React, { FC } from "react";
import DocTab from "./components/DocTab";
import { SearchForm } from "../../src";

const SearchFormPage: FC = () => {
  const properties = {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "Search …" },
    screenReaderText: { type: String, default: "Search for:" },
    fontSize: { type: String, default: "" },
  };
  const descriptions: Record<string, string> = {};

  return (
    <DocTab
      heading="Search Form"
      slug="shapla-search-form"
      name="ShaplaSearchForm"
      scss-mixin="search-form"
      properties={properties}
      desc={descriptions}
    >
      <SearchForm />
    </DocTab>
  );
};

export default SearchFormPage;
