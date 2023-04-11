import React, { useEffect, useState } from "react";
import { SelectField } from "../../src";
import DocTab from "./components/DocTab";
import { countriesList, studentsList } from "./testData";
const SelectPage = () => {
  const properties = {
    label: { type: String, default: "" },
    value: { type: [String, Number, Boolean, Array], default: null },
    options: {
      type: Array<(string | number | boolean | Record<string, string | number | boolean>)>},
    labelKey: { type: String, default: "label" },
    valueKey: { type: String, default: "value" },
    clearable: { type: Boolean, default: true },
    autocomplete: { type: String, default: null },
    name: { type: String, default: null, required: false },
    id: { type: String, default: null, required: false },
    helpText: { type: String, default: null, required: false },
    validationText: { type: String, default: null, required: false },
    hasError: { type: Boolean, default: false },
    hasSuccess: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    searchable: { type: Boolean, default: false },
    closeOnSelect: { type: Boolean, default: true },
    clearSearchOnSelect: { type: Boolean, default: true },
    multiple: { type: Boolean, default: false },
    noOptionsText: { type: String, default: "Sorry, no matching options." },
    singularSelectedText: { type: String, default: "item selected" },
    pluralSelectedText: { type: String, default: "items selected" },
  }
  const options = [
    "Sayful Islam",
    "Saif Al Araf",
    "Aklima",
    3,
    true,
    false,
    0,
    1,
    { label: "Sayful", value: "SA" },
  ]
  const [option, setOption] = useState<string | string[]>("Aklima")
  const [option2, setOption2] = useState<string | string[]>("SA")
  const [country, setCountry] = useState<string[]>(["ST"])
  const [students,setStudents] = useState<any[]>( [1])
  const [countries, setCountries] = useState<{ code: string, name: string }[]>([])
  const [, setStudentList] = useState<{ role: number, name: string }[]>([])
  useEffect(
    () => {
      setCountries(countriesList)
      setStudentList(studentsList)
    }, [countriesList, studentsList])
  
  return (
    <div>
      <DocTab
        heading="Input: Select"
        slug="select"
        name="selectField"
        scssMixin="select"
        properties={properties}
        desc={{}}


      >
        <div className="p-8 container mx-auto">
          <div className="md:flex flex-wrap -m-4">
            <div className="md:w-3/12 p-4">
              <SelectField
                value={option}
                label="Choose a country"
                options={options}
                onUpdateValue={(value) => setOption(value)}
              />
            </div>
            {/* searchable */}
            <div className="md:w-3/12 p-4">
              <SelectField
                value={option2}
                label="Choose a country"
                helpText="You can search country name"
                options={options}
                searchable={true}
                onUpdateValue={(value) => setOption2(value)}

              />
            </div>
            {/* has err */}
            <div className="md:w-3/12 p-4">
              <SelectField
                value={option}
                label="Choose a country"
                helpText="Help text goes here"
                validationText="Validation text test"
                hasError={true}
                options={options}
                onUpdateValue={(value) => setOption(value)}
              />
            </div>
            {/* has success */}
            <div className="md:w-3/12 p-4">
              <SelectField
                value={option}
                label="Choose a country"
                helpText="Help text goes here"
                hasSuccess={true}
                options={options}
                onUpdateValue={(value) => setOption(value)}
              />
            </div>

            {/* multiple */}
            <div className="md:w-3/12 p-4">
              <SelectField
                value={country}
                options={countries}
                searchable={true}
                multiple={true}
                labelKey="name"
                valueKey="code"
                label="Choose a country"
                helpText="You can search country name and select multiple countries"
                singular-selected-text="country selected"
                plural-selected-text="countries selected"
                onUpdateValue={(value) => setCountry([...value])}
              />
            </div>
            {/* multiple */}
            <div className="md:w-3/12 p-4">
          <SelectField
            value={students}
            options={studentsList}
            searchable={true}
            multiple={true}
            labelKey="name"
            valueKey="role"
            label="Choose a student"
            onUpdateValue={(value) => setStudents([...value] )}
          />
        </div>
          </div>
        </div>

      </DocTab>
    </div>
  );
};
export default SelectPage;
