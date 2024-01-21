"use client";

import React from "react";
import SelectInput from "./inputs/SelectInput";
import MultiSelect from "./inputs/MultiSelect";
import { fcfs } from "@/solve/fcfs";
import { sjf } from "@/solve/sjf";
import InputField from "./inputs/InputField";
import { rr } from "@/solve/rr";

const options = [
  { value: "fcfs", label: "First Come First Serve" },
  { value: "sjf", label: "Shortest Job First" },
  { value: "rr", label: "Round Robin" },
];

const InputBox = ({
  selectedAlg,
  setSelectedAlg,
  arrivalTime,
  setArrivalTime,
  burstTime,
  setBurstTime,
  quantumNo,
  setQuantumNo,
  setShowOutput,
  setOutput,
}) => {
  const handleSolve = () => {
    let solve = {};

    if (
      (selectedAlg.length === 0 &&
        arrivalTime.length === 0 &&
        burstTime.length === 0) ||
      arrivalTime.length !== burstTime.length
    ) {
      return alert("Enter Correct Values");
    }
    if (selectedAlg === "fcfs") {
      solve = fcfs(arrivalTime, burstTime);
    }
    if (selectedAlg === "sjf") {
      solve = sjf(arrivalTime, burstTime);
    }
    if (selectedAlg === "rr") {
      solve = rr(quantumNo, arrivalTime, burstTime);
    }
    setOutput(solve);
    setShowOutput(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
      <SelectInput
        label={"Algorithm"}
        options={options}
        setSelectedAlg={setSelectedAlg}
      />
      <MultiSelect
        label={"Arrival Times"}
        placeholder={"Arrival Times"}
        setEnteredValue={setArrivalTime}
      />
      <MultiSelect
        label={"Burst Times"}
        placeholder={"Burst Times"}
        setEnteredValue={setBurstTime}
      />
      {selectedAlg === "rr" && (
        <InputField
          id={"quantumNo"}
          name={"quantumNo"}
          label={"Quantum No"}
          placeholder={"Quantum No"}
          value={quantumNo}
          setValue={setQuantumNo}
          required={true}
          type="number"
        />
      )}
      <button
        className="bg-black px-4 py-2 text-white text-sm rounded-md"
        onClick={handleSolve}
      >
        Solve
      </button>
    </div>
  );
};

export default InputBox;
