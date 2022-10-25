import moment from "moment";
import React from "react";
import classes from "./CalendarMonitor.module.scss";
import WeekDisplay from "./WeekDisplay";

type PropsType = {
  startDay: any;
  today: any;
};

function CalendarGrid({ startDay, today }: PropsType) {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day: any) => moment().isSame(day, "day");
  const isSelectedMonth = (day: any) => today.isSame(day, "month");

  return (
    <div>
      <WeekDisplay />

      <div className={classes.container}>
        {daysMap.map((dayItem) => (
          <div
            key={dayItem.unix()}
            className={
              classes.cellWrapper +
              " " +
              (isSelectedMonth(dayItem)
                ? classes.colorCurrentMonth
                : classes.colorNotCurrentMonth) +
              " " +
              (dayItem.day() === 6 || dayItem.day() === 0
                ? classes.backgroundWeek
                : classes.backgroundNotWeek)
            }
          >
            <div className={classes.rowInCell}>
              <div className={classes.dayWrapper}>
                {isCurrentDay(dayItem) && (
                  <div className={classes.currentDay}>
                    {dayItem.format("D")}
                  </div>
                )}

                {!isCurrentDay(dayItem) && dayItem.format("D")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarGrid;
