"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartData {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface ChartState {
  labels: string[];
  datasets: ChartData[];
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartState>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["5", "", "10", "", "15", "", "20", "", "25", "", "30", "", "35"],
      datasets: [
        {
          label: "Total Carbon Captured",
          data: [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 110, 119],
          backgroundColor: "#5CC94D",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
          },
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      barThickness: 20,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,
          grid: {
            color: "#fff",
          },
          border: {
            dash: [1, 8],
          },
          ticks: {
            callback: function (value: any) {
              return value;
            },
            font: {
              weight: "bold",
            },
            stepSize: 100,
          },
          min: 0,
          max: 300,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="relative m-auto w-[47vw] rounded-lg bg-[#202123]  sm:h-[60vh] sm:pt-4 md:h-[50vh] md:p-4 lg:h-[40vh]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
export default BarChart;
