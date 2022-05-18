import React, { useRef, Fragment } from "react";
import "./InputForm.module.css";

const InputForm = (props) => {
  const inputX = useRef();
  const inputY = useRef();

  const formSubmit = () => {
    const axisX = inputX.current.value;
    const axisY = inputY.current.value;
    // Check if inputs are empty
    if (axisX.trim().length < 1 || axisY.trim().length < 1) {
      return 0;
    }
    // sending data from inputs to ChartsPainter component from Charts parent component
    props.FillChart(axisX, axisY);
    inputX.current.value = "";
    inputY.current.value = "";
  };

  return (
    <Fragment>
      <form onKeyPress={(event) => event.key === "Enter" && formSubmit()}>
        <label htmlFor='X_axis'>X axis labels:</label>
        <input id='X_axis' type='text' onBlur={formSubmit} ref={inputX} />
        <label htmlFor='Y_axis'>Y axis values:</label>
        <input id='Y_axis' type='text' onBlur={formSubmit} ref={inputY} />
      </form>
    </Fragment>
  );
};

export default InputForm;
