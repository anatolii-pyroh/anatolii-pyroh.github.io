import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import styles from "./ChartsPainter.module.css";

const ChartsPainter = (props) => {

  const state = {
    labels: props.labels,
    datasets: [
      {
        label: "",
        backgroundColor: "#ccc",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: props.data,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
      toolbar: false
    },
  };

  let selectedChart = "bar"

  return (
    <div className={styles.painter}>
      <Chart type={selectedChart} data={state} options={options} width={7} height={5} />
    </div>
  );
};

export default ChartsPainter;
