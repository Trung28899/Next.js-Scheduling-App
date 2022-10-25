import moment from "moment";
import React from "react";
import classes from "./CalendarMonitor.module.scss";

function WeekDisplay() {
  return (
    <div>
      {" "}
      <div className={classes.weekContainer}>
        {[...Array(7)].map((_, i) => (
          <div className={classes.cellWrapperHeader}>
            {moment()
              .day(i + 1)
              .format("dddd")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekDisplay;
