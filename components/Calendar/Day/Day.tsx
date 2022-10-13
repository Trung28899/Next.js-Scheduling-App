import React from "react";
import classes from "./Day.module.scss";
import { isBorderLeftDate } from "@/utils/date_helper";

type PropsType = {
  onClick: () => void;
  day: any;
  indexKey: number;
};

const Day = ({ day, onClick, indexKey }: PropsType) => {
  const haveBorderLeft = isBorderLeftDate(indexKey);

  const className = `${haveBorderLeft ? classes.dayBorderLeft : classes.day} ${
    day.value === classes.padding ? classes.padding : ""
  } ${day.isCurrentDay ? classes.currentDay : ""}`;

  return (
    <div onClick={onClick} className={className}>
      {day.value === "padding" ? "" : day.value}

      {day.event && <div className={classes.event}>{day.event.title}</div>}
    </div>
  );
};

export default Day;
