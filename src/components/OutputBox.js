"use client";

import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

const OutputBox = ({ showOutput, output }) => {
  const [awt, setAwt] = useState(0);
  const [atat, setAtat] = useState(0);

  useEffect(() => {
    const calculateAverageTime = () => {
      if (output?.solvedProcessesInfo?.length > 0) {
        let twt = 0;
        let ttat = 0;
        output?.solvedProcessesInfo?.forEach((item) => {
          twt += item.wat;
          ttat += item.tat;
        });

        setAwt(twt / output?.solvedProcessesInfo?.length);
        setAtat(ttat / output?.solvedProcessesInfo?.length);
      } else {
        setAwt(0);
        setAtat(0);
      }
    };
    calculateAverageTime();
  }, [output]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
      {showOutput ? (
        <div className="flex flex-col gap-4">
          <DataTable
            columns={[
              { field: "job", headerName: "PROCESS" },
              { field: "at", headerName: "Arrival Time" },
              { field: "bt", headerName: "Burst Time" },
              { field: "wat", headerName: "Waiting Time" },
              { field: "tat", headerName: "Turn Around Time" },
            ]}
            // rows={[
            //   {
            //     process: "P1",
            //     bt: 24,
            //     wt: 12,
            //     tat: 5,
            //   },
            // ]}
            rows={output?.solvedProcessesInfo}
          />

          <div className="flex flex-col gap-3 my-4">
            <div className="flex gap-2 text-gray-700 text-sm">
              <p className="font-bold ">Average Waiting Time: </p>
              <p>{awt}</p>
            </div>
            <div className="flex gap-2 text-gray-700 text-sm">
              <p className="font-bold ">Average Turn Around Time: </p>
              <p>{atat}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Output will show here</p>
      )}
    </div>
  );
};

export default OutputBox;
