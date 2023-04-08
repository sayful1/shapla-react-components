import React, { useEffect, useState } from "react";
import "./formSearch.scss";

interface Props {
  value?: string;
  placeholder?: string;
  screenReaderText?: string;
  fontSize?: string;
  onInput?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const SearchForm: React.FC<Props> = ({
  value = "",
  placeholder = "Search …",
  screenReaderText = "Search for:",
  fontSize = "",
  onInput,
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState<string>(value);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const [style, setStyle] = useState({});
  useEffect(() => {
    if (fontSize) {
      setStyle({ "--base-font-size": fontSize });
    }
  }, [fontSize]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onInput && onInput(value);
    setSearchValue(value);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    onSearch && onSearch(searchValue);
  };

  return (
    <form
      role="search"
      method="get"
      className="shapla-search-form"
      action=""
      style={style}
      onSubmit={handleSubmit}
    >
      <label>
        <span className="screen-reader-text sr-only">{screenReaderText}</span>
        <input
          type="search"
          className="shapla-search-form__input"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInput}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleSubmit(e);
          }}
        />
      </label>
      <button type="submit" className="shapla-search-form__submit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
