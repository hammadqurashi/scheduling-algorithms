"use client";

import InputBox from "@/components/InputBox";
import OutputBox from "@/components/OutputBox";
import { useState } from "react";

export default function Home() {
  const [showOutput, setShowOutput] = useState(false);
  const [output, setOutput] = useState(false);

  return (
    <main className="container mx-auto py-5 min-h-screen">
      <h1 className="font-bold text-lg md:text-2xl text-center">
        Process Scheduling Algorithm
      </h1>
      <section className="grid md:grid-cols-4 gap-10 my-10">
        <div className="md:col-span-1">
          <InputBox setShowOutput={setShowOutput} setOutput={setOutput} />
        </div>
        <div className="md:col-span-3">
          <OutputBox output={output} showOutput={showOutput} />
        </div>
      </section>
    </main>
  );
}
