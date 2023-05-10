import React from "react";
import classes from "./CalendarMonitor.module.scss";
import WeekDisplay from "./WeekDisplay";
import DayItem from "./DayItem";

type PropsType = {
  startDay: any;
  today: any;
};

function CalendarGrid({ startDay, today }: PropsType) {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  return (
    <div>
      <WeekDisplay />

      <div className={classes.container}>
        {daysMap.map((dayItem) => (
          <DayItem today={today} dayItem={dayItem} />
        ))}
      </div>
    </div>
  );
}

export default CalendarGrid;
