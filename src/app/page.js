"use client";

import InputBox from "@/components/InputBox";
import OutputBox from "@/components/OutputBox";
import { useState } from "react";

export default function Home() {
  const [selectedAlg, setSelectedAlg] = useState("");
  const [arrivalTime, setArrivalTime] = useState([]);
  const [burstTime, setBurstTime] = useState([]);
  const [quantumNo, setQuantumNo] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState(false);

  return (
    <main className="container mx-auto py-5 min-h-screen">
      <h1 className="font-bold text-lg md:text-2xl text-center">
        Process Scheduling Algorithm
      </h1>
      <section className="grid md:grid-cols-4 gap-10 my-10">
        <div className="md:col-span-1">
          <InputBox
            selectedAlg={selectedAlg}
            setSelectedAlg={setSelectedAlg}
            arrivalTime={arrivalTime}
            setArrivalTime={setArrivalTime}
            burstTime={burstTime}
            setBurstTime={setBurstTime}
            quantumNo={quantumNo}
            setQuantumNo={setQuantumNo}
            setShowOutput={setShowOutput}
            setOutput={setOutput}
          />
        </div>
        <div className="md:col-span-3">
          <OutputBox
            selectedAlg={selectedAlg}
            setSelectedAlg={setSelectedAlg}
            arrivalTime={arrivalTime}
            setArrivalTime={setArrivalTime}
            burstTime={burstTime}
            setBurstTime={setBurstTime}
            output={output}
            showOutput={showOutput}
          />
        </div>
      </section>
    </main>
  );
}
