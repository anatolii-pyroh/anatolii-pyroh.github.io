import React, { Fragment, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import styles from "./ChartsPainter.module.css";

const ChartsPainter = (props) => {
  const state = {
    type: "bar",
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
      toolbar: false,
    },
  };
  
  const charType = (type) => {
      ChartJS.state.type = type;
      ChartJS.update()
  }
  
  return (
    <Fragment>
      <div className={styles.painter}>
        <Chart
          type={state.type}
          data={state}
          options={options}
          width={7}
          height={5}
        />
      </div>
      <div className={styles.radio}>
        <input type='radio' id='bar' name='chart' defaultChecked onClick={charType("bar")}/>
        <label htmlFor='bar'>Bar</label>

        <input type='radio' id='line' name='chart' onClick={charType("line")}/>
        <label htmlFor='line'>Line</label>

        <input type='radio' id='pie' name='chart' onClick={charType("pie")}/>
        <label htmlFor='pie'>Pie</label>

        <input type='radio' id='doughnut' name='chart' onClick={charType("doughnut")}/>
        <label htmlFor='doughnut'>Doughnut</label>
      </div>
    </Fragment>
  );
};

export default ChartsPainter;
