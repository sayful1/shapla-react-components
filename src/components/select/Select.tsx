import React, { FC, useEffect, useRef, useState } from "react";
import { Chip, Cross, DropdownMenu, InputField } from "../../index";
import "./Select.scss";

interface Props {
    label?: string;
   value?: string | number | boolean | Array<string | number | boolean>;
    options?: (
        | string
        | number
        | boolean
        | Record<string, string | number | boolean>
    )[];
    labelKey?: string;
    valueKey?: string;
    clearable?: boolean;
    autocomplete?: string;
    name?: string;
    id?: string;
    helpText?: string;
    validationText?: string;
    hasError?: boolean;
    hasSuccess?: boolean;
    disabled?: boolean;
    required?: boolean;
    searchable?: boolean;
    closeOnSelect?: boolean;
    clearSearchOnSelect?: boolean;
    multiple?: boolean;
    noOptionsText?: string;
    singularSelectedText?: string;
    pluralSelectedText?: string;
    onUpdateValue?: (value: string | string[]) => void;
    direction?: "up" | "down";
}
interface SelectOptionInterface {
    label: string;
    value: string;
}
const Select: FC<Props> = ({
    label = "",
   value = "",
    options = [],
    labelKey = "label",
    valueKey = "value",
    clearable = true,
    autocomplete = "",
    name = "",
    id = "",
    helpText = "",
    validationText = "",
    hasError = false,
    hasSuccess = false,
    disabled = false,
    required = false,
    searchable = false,
    closeOnSelect = false,
    clearSearchOnSelect = false,
    multiple = false,
    noOptionsText = "Sorry, no matching options.",
    singularSelectedText = "item selected",
    pluralSelectedText = "items selected",
    onUpdateValue = () => { },
    direction = "down",
}) => {
    
    const element = useRef<HTMLDivElement>(null);
    const [selectedOption, setSelectedOption] = useState<SelectOptionInterface | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<SelectOptionInterface[]>([]);
    const [isReadonly, setIsReadonly] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<SelectOptionInterface[]>([]);
    const [LabelFromValue, setLabelFromValue] = useState("")
    const [hasValue, setHasValue] = useState(false);
    const [hasSelectedOption, setHasSelectedOption] = useState<boolean>(false);
    const emitEvent = (value: string | string[]) => onUpdateValue && onUpdateValue(value);
    
    useEffect(() => {
        setHasSelectedOption(
            !!(
                selectedOption &&
                typeof selectedOption === "object" &&
                Object.keys(selectedOption).length
            )
        );
    }, [selectedOption]);

    useEffect(() => {
        if (Array.isArray(value)) {
            setHasValue(!!value.length);
        } else {
            setHasValue(
                !(
                   value === null ||
                   value === "" ||
                   value === undefined
                )
            );
        }
    }, [value, options]);
    useEffect(() => {
        let label = "";
        if (value && !multiple) {
            filteredOptions.forEach((option) => {
                if (option["value"] ==value) {
                    label = option["label"];
                }
            });
        }
        if (multiple && selectedOptions.length) {
            if (selectedOptions.length > 1) {
                label = `${selectedOptions.length} ${pluralSelectedText}`;
            } else {
                label = `${selectedOptions.length} ${singularSelectedText}`;
            }
        }
        setLabelFromValue(label)
        // Set the label to the state or prop here, if desired
    }, [value, multiple, selectedOptions, filteredOptions]);


    useEffect(() => {
        if (options.length < 1) {
            setFilteredOptions([]);
            return;
        }

        const newOptions: SelectOptionInterface[] = [];
        options.forEach((option) => {
            if (["string", "number", "boolean"].includes(typeof option)) {
                newOptions.push({
                    label: option.toString(),
                    value: option.toString(),
                });
            }
            else if (typeof option == "object" && option[labelKey] && option[valueKey]) {
                newOptions.push({
                    label: option[labelKey].toString(),
                    value: option[valueKey].toString(),
                });
                
            }
        });

        if (search.length) {
            const filtered = newOptions.filter(
                (option) =>
                    option["label"].toLowerCase().includes(search.toLowerCase()) ||
                    option["value"].toLowerCase().includes(search.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(newOptions);
        }
    }, [options, search]);

    useEffect(() => {
        if (Array.isArray(value) && multiple) {
            const _values =value.map((_item) => _item.toString());
            setSelectedOptions(filteredOptions.filter(
                (option) => _values.indexOf(option["value"]) !== -1
                ));
        }
        if (!value) {
            setSelectedOption(null);
        }
    }, [value, multiple, filteredOptions]);

    useEffect(() => {
        window.addEventListener("click", (event: Event) => {
            if (
                !(element.current as HTMLElement | null)?.contains(
                    event.target as HTMLElement
                )
            ) {
                setShowDropdown(false);
            }
        });
        if (multiple && Array.isArray(value)) {
            const _values =value.map((_item) => _item.toString());
            setSelectedOptions(filteredOptions.filter(
                (option) => _values.indexOf(option["value"]) !== -1
            ))
        }
    }, [multiple,value, filteredOptions]);


    const handleFocusEvent = () => {
        setIsReadonly(true);
        setShowDropdown(true);
    };
    const handleBlurEvent = () => {
        setTimeout(() => (setIsReadonly(false)), 200);
    };
    const isItemSelected = (option: SelectOptionInterface) => {
        return Array.isArray(value)
            ?value.includes(option["value"])
            :value == option["value"];
    };
    const dropdownItemClasses = (option: SelectOptionInterface) => {
        const classes = [];
        if (isItemSelected(option)) classes.push("is-active");
        if (
            hasSelectedOption &&
            selectedOption &&
            selectedOption["value"] === option["value"]
        )
            classes.push("is-hover");

        return classes.join(" ");
    };

    const clearSelectedValue = () => {
        if (clearable) {
            setSelectedOption(null);
            setSelectedOptions([]);
            emitEvent(multiple ? [] : "");
        }
    };
    const selectOption = (option: SelectOptionInterface) => {
        if (multiple) {
            if (!selectedOptions.find((word) => word.value == option.value)) {
                selectedOptions.push(option);
                const values = selectedOptions.map((_option) => _option.value);
                emitEvent(values);
            }
        } else {
            setSelectedOption(option);
           
            emitEvent(option.value);
        }

        if (closeOnSelect && !multiple) {
            setShowDropdown(false);
        }

        if (clearSearchOnSelect) {
            setSearch("");
        }
    };
    const removeSelectedItem = (_option: SelectOptionInterface) => {
        selectedOptions.splice(selectedOptions.indexOf(_option), 1);
        emitEvent(
            selectedOptions.length
                ? selectedOptions.map((option) => option.value)
                : []
        );
    };
    const scrollIfNeeded = (direction: string) => {
        const dropdownContent = (element.current as HTMLElement).querySelector(
            ".shapla-dropdown-menu__content"
        ) as HTMLElement,
            hoverEl = dropdownContent.querySelector(
                ".shapla-dropdown-item.is-hover"
            ) as HTMLElement,
            hoverElHeight = hoverEl ? hoverEl.clientHeight : 0,
            hoverElFromTop = hoverEl ? hoverEl.offsetTop : 0;

        if ("up" === direction && hoverElFromTop < dropdownContent.clientHeight) {
            dropdownContent.scrollTop =
                hoverElFromTop + hoverElHeight - dropdownContent.clientHeight;
        }

        if ("down" === direction) {
            setTimeout(() => {
                dropdownContent.scrollTop =
                    hoverElFromTop + hoverElHeight - dropdownContent.clientHeight;
            }, 50);
        }
    };
    const handleKeydownEvent = (event: React.KeyboardEvent) => {
        const indexOfSelectedOption = selectedOption
            ? filteredOptions.indexOf(selectedOption)
            : -1;
        // Go Up
        if ("ArrowUp" === event.code) {
            const preIndex = indexOfSelectedOption - 1;
            if (preIndex >= 0) {
                setSelectedOption(filteredOptions[preIndex]);
            }

            scrollIfNeeded("up");
        }
        // Go Down
        if ("ArrowDown" === event.code) {
            const nextIndex = indexOfSelectedOption + 1;
            if (nextIndex < filteredOptions.length) {
                setSelectedOption(filteredOptions[nextIndex])
            }

            scrollIfNeeded("down");
        }
        // Select item
        if ("Enter" === event.code) {
            // Go Down
            if (selectedOption) {
                selectOption(selectedOption);
            }
            setIsReadonly(false);
            setShowDropdown(false);
            (
                (element.current as HTMLElement).querySelector("input") as HTMLInputElement
            ).blur();
        }
    };
    return (
        <div ref={element}
            className={`shapla-select-field ${searchable ? 'is-searchable' : ''}`}
        >
            <div className="shapla-select-field__control">
                <InputField
                    id={id}
                    label={label}
                    value={LabelFromValue}
                    name={name}
                    required={required}
                    autocomplete={autocomplete}
                    hasError={hasError}
                    hasSuccess={hasSuccess}
                    readonly={isReadonly}
                    disabled={disabled}
                    onFocus={handleFocusEvent}
                    onBlur={handleBlurEvent}
                    onKeyDown={handleKeydownEvent}
                    onChange={setLabelFromValue}
                    rightIcon={
                        <>
                            {
                                clearable && (hasSelectedOption || hasValue) && <span className="icon is-right icon--delete">
                                    <Cross size="small" onClick={clearSelectedValue} />
                                </span>

                            }
                            <span className="icon is-right">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                    />
                                    <path fill="none" d="M0 0h24v24H0V0z" />
                                </svg>
                            </span>
                        </>
                    }
                >
                </InputField>
                <>
                    {
                        multiple && selectedOptions.length ? (
                            <div className="shapla-select-field__selected-values">
                                {
                                    
                                    selectedOptions.map((option) => {
                                        return <Chip
                                                key={option.value}
                                            deletable={true}
                                            small={true}
                                            onDeleteIconClick={() => removeSelectedItem(option)}
                                        >
                                            <span dangerouslySetInnerHTML={{ __html: option.label }} /></Chip>
                                    }
                                    )
                                }
                            </div>)
                            : null
                    }

                </>
                <DropdownMenu
                  active={showDropdown}
                    maxItems={5}
                    role="listbox"
                    beforeContent={
                        <>
                            {
                                searchable && direction == "down" && (
                                    <span className="shapla-dropdown-item is-search-input" >
                                        <input
                                            value={search}
                                            type="text"
                                            className="shapla-select-field__search"
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </span>
                                )

                            }
                        </>
                    }
                    afterContent={
                        <>
                            {searchable  && direction =="up" && (
                                <span className="shapla-dropdown-item is-search-input" >
                                    <input
                                        value={search}
                                        type="text"
                                        className="shapla-select-field__search"
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </span>
                            )
                            }
                        </>
                    }
                >
                    <>
                        {filteredOptions.map((option) => {
                            return <span
                                key={option.value}
                                role="option"
                                className={`shapla-dropdown-item ${dropdownItemClasses(option)}`}
                                aria-selected={isItemSelected(option)}
                                data-value={option.value}
                                onClick={() => selectOption(option)}
                            >
                                <span dangerouslySetInnerHTML={{ __html: option.label }} />
                                <span className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </span>
                            </span>
                        })}
                        {
                            !filteredOptions.length && <span
                                className="shapla-dropdown-item is-link no-options"
                            >
                                <>
                                    {noOptionsText}
                                </>
                            </span>
                        }
                    </>
                </DropdownMenu>
            </div>
          {hasError &&<small
            className="shapla-text-field__help-text is-invalid"
          >{validationText}</small>}

          {helpText.length ?<small
            className="shapla-text-field__help-text"
          > {helpText}</small>: null}
        </div>
    );
};

export default Select;
