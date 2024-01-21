"use client";

import React from "react";
import Select from "react-select";

const SelectInput = ({ label, options, setSelectedAlg }) => {
  return (
    <label className="flex flex-col gap-2 w-full">
      <span className="text-sm md:text-base text-primary">{label}</span>
      <Select
        options={options}
        className="text-sm"
        onChange={(value) => setSelectedAlg(value.value)}
        required={true}
      />
    </label>
  );
};

export default SelectInput;
