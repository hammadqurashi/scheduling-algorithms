export const rr = (burstTime, timeQuantum) => {
  const processesInfo = burstTime.map((item, index) => {
    return {
      job: "P" + index,
      bt: Number.parseInt(item),
      ct: Number.parseInt(item),
    };
  });

  const solvedProcessesInfo = burstTime.map((item, index) => {
    return {
      job: "P" + index,
      bt: Number.parseInt(item),
    };
  });

  let max = processesInfo[0].bt;
  let temp = 0;
  const n = processesInfo.length;
  for (let i = 1; i < n; i++)
    if (max < processesInfo[i].bt) max = processesInfo[i].bt;
  for (let j = 0; j < max / timeQuantum + 1; j++)
    for (let i = 0; i < n; i++)
      if (processesInfo[i].bt != 0)
        if (processesInfo[i].bt <= timeQuantum) {
          processesInfo[i].tat =
            Number.parseInt(temp) + Number.parseInt(processesInfo[i].bt);
          temp = Number.parseInt(temp) + processesInfo[i].bt;
          processesInfo[i].bt = 0;
          solvedProcessesInfo[i].tat =
            Number.parseInt(temp) + Number.parseInt(processesInfo[i].bt);
        } else {
          processesInfo[i].bt = processesInfo[i].bt - timeQuantum;
          temp = temp + Number.parseInt(timeQuantum);
        }
  for (let i = 0; i < n; i++) {
    processesInfo[i].wat = processesInfo[i].tat - processesInfo[i].ct;
    solvedProcessesInfo[i].wat = processesInfo[i].tat - processesInfo[i].ct;
  }

  return { solvedProcessesInfo };
};
