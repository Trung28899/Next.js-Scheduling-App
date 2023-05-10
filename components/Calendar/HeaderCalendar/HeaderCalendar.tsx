import React from "react";
import classes from "./HeaderCalendar.module.scss";

type PropsType = {
  prevHandler: () => void;
  nextHandler: () => void;
  todayHandler: () => void;
  today: any;
};

function Monitor({ today, prevHandler, todayHandler, nextHandler }: PropsType) {
  return (
    <div className={classes.container}>
      <div>
        <span className={classes.title}>{today.format("MMMM")}</span>
        <span className={classes.text}>{today.format("YYYY")}</span>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.arrowButton} onClick={prevHandler}>
          &lt;
        </button>
        <button onClick={todayHandler} className={classes.currentDay}>
          Today
        </button>
        <button className={classes.arrowButton} onClick={nextHandler}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Monitor;
