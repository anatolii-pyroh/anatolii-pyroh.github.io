import React, { Fragment, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import styles from "./ChartsPainter.module.css";

const ChartsPainter = (props) => {
  ChartJS.register(...registerables);
  
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
      toolbar: false,
    },
  };
  const [type, setType] = useState("bar")
  const charTypeBar = () => {setType("bar")};
  const charTypeLine = () => {setType("line")};
  const charTypePie = () => {setType("pie")};
  const charTypeDoughnut = () => {setType("doughnut")};
  console.log(type)

  return (
    <Fragment>
      <div className={styles.painter}>
        <Chart
          type={type}
          data={state}
          options={options}
          width={7}
          height={5}
        />
      </div>
      <div className={styles.radio}>
        <input
          type='radio'
          id='bar'
          name='chart'
          defaultChecked
          onClick={charTypeBar}
        />
        <label htmlFor='bar'>Bar</label>

        <input type='radio' id='line' name='chart' onClick={charTypeLine} />
        <label htmlFor='line'>Line</label>

        <input type='radio' id='pie' name='chart' onClick={charTypePie} />
        <label htmlFor='pie'>Pie</label>

        <input
          type='radio'
          id='doughnut'
          name='chart'
          onClick={charTypeDoughnut}
        />
        <label htmlFor='doughnut'>Doughnut</label>
      </div>
    </Fragment>
  );
};

export default ChartsPainter;
