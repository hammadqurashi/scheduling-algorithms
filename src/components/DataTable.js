"use client";

import React from "react";

const DataTable = ({ columns, rows }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 min-w-max overflow-auto">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          {columns?.map((item, index) => (
            <th
              scope="col"
              className="px-4 py-3"
              key={index}
              style={{ width: item?.width ? item.width : "" }}
            >
              {item.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((data, index) => (
          <tr className="border-b" key={index}>
            {columns?.map((item, subIndex) => (
              <td key={subIndex} className="px-4 py-3">
                {data[item.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
