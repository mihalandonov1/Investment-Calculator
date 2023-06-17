import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";

const initialUserInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = (e) => {
    setUserInput(initialUserInput);
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <div className={styles.form}>
      <form onSubmit={submitHandler} className="form">
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                changeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                changeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={styles["actions"]}>
          <button
            onClick={resetHandler}
            type="reset"
            className={styles["buttonAlt"]}
          >
            Reset
          </button>
          <button type="submit" className={styles["button"]}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;
