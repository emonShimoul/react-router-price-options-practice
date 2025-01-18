import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const marksData = [
    { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 79 },
    { id: 2, name: "Bob", math: 75, physics: 80, chemistry: 88 },
    { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 90 },
    { id: 4, name: "David", math: 74, physics: 76, chemistry: 72 },
    { id: 5, name: "Eve", math: 88, physics: 84, chemistry: 89 },
    { id: 6, name: "Frank", math: 87, physics: 70, chemistry: 65 },
    { id: 7, name: "Grace", math: 81, physics: 77, chemistry: 83 },
    { id: 8, name: "Hank", math: 95, physics: 94, chemistry: 96 },
    { id: 9, name: "Ivy", math: 74, physics: 88, chemistry: 87 },
    { id: 10, name: "Jack", math: 76, physics: 75, chemistry: 74 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={marksData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
