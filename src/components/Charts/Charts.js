import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./Charts.module.css";
import InputForm from "./InputForm";

const Charts = () => {
  return (
    <Card className={styles.charts}>
      <InputForm />
    </Card>
  );
};

export default Charts;
