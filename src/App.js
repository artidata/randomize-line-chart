import React, { useState } from "react";
import "./styles.css";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function App() {
  const [graphData, setGraphData] = useState(data);
  const handleClick = () => {
    setGraphData((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          data: Array(6)
            .fill()
            .map((val) => Math.floor(Math.random() * 100))
        },
        prev.datasets[1]
      ]
    }));
  };

  return (
    <div className="App">
      <Line data={graphData} />
      <button onClick={handleClick}>test</button>
    </div>
  );
}
