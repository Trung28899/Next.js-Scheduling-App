import moment from "moment";
import React from "react";
import classes from "./CalendarMonitor.module.scss";

function WeekDisplay() {
  return (
    <div>
      {" "}
      <div className={classes.weekContainer}>
        {[...Array(7)].map((_, index) => (
          <div key={index} className={classes.cellWrapperHeader}>
            {moment()
              .day(index + 1)
              .format("dddd")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekDisplay;
