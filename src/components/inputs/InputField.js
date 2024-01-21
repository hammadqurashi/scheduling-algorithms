"use client";

import React, { useState } from "react";

const InputField = ({
  id,
  name,
  value,
  setValue,
  type = "text",
  label,
  required = false,
  placeholder,
}) => {
  return (
    <label htmlFor={id} className="flex flex-col gap-2 w-full">
      <span className="text-sm md:text-base text-black">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="p-2 outline-none border border-gray-300 focus:border-gray-400 text-sm"
      />
    </label>
  );
};

export default InputField;
