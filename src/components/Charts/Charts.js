import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Charts.module.css";
import ChartsPainter from "./ChartsPainter";
import InputForm from "./InputForm";

const Charts = () => {
  const [labels, setLabels] = useState();
  const [data, setData] = useState();

  const FillChartHandler = (axisX, axisY) => {
    setLabels(axisX.split(","));
    setData(axisY.split(","));
    console.log(labels);
    console.log(data);
  };
  
  return (
    <Card className={styles.charts}>
      <InputForm FillChart={FillChartHandler} />
      <ChartsPainter labels={labels} data={data} />
    </Card>
  );
};

export default Charts;
