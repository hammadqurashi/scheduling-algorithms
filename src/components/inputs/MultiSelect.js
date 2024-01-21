"use client";

import React, { useState } from "react";

import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label + Date.now(),
});

const MultiSelect = ({ placeholder, label, setEnteredValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setEnteredValue((prev) => [...prev, inputValue]);
        setInputValue("");
        event.preventDefault();
    }
  };

  return (
    <label className="flex flex-col gap-2 w-full">
      <span className="text-sm md:text-base text-primary">{label}</span>
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={(newValue) => {
          setValue(newValue);
          setEnteredValue(newValue);
        }}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={value}
        className="text-sm"
      />{" "}
    </label>
  );
};

export default MultiSelect;
