import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

type Props = {};

const dataDonut = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  datasets: [
    {
      data: [70, 78, 69, 70, 80, 60, 70],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#38b933",
        "#6d2bd6",
        "#2ce2ca",
        "#bc2fd8",
      ],
      hoverOffset: 5,
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#38b933",
        "#6d2bd6",
        "#2ce2ca",
        "#bc2fd8",
      ],
    },
  ],
};

const dataLine = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderDash: [],
      borderDashOffset: 0.0,
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [120, 130, 122, 140, 120, 130, 122],
    },
  ],
};

const dataBar = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  datasets: [
    {
      label: "dataset",
      data: [70, 75, 78, 80, 81, 69, 83],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

function ChartDashBoard({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-20 sm:gap-10 py-10">
      <div className="flex flex-col items-center space-y-10">
        <span>Sugar Level</span>
        <Doughnut data={dataDonut} width={200} height={200} />
      </div>
      <div className="flex flex-col items-center space-y-5">
        <span>Pressure Level</span>
        <Line data={dataLine} width={200} height={200} />
      </div>
      <div className="flex flex-col items-center space-y-5">
        <span>Heart rate Level</span>
        <Bar data={dataBar} width={200} height={200} />
      </div>
    </div>
  );
}

export default ChartDashBoard;
