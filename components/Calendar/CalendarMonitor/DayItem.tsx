import moment from "moment";
import React from "react";
import classes from "./CalendarMonitor.module.scss";

type DayItemProps = {
  dayItem: any;
  today: any;
};

function DayItem({ dayItem, today }: DayItemProps) {
  const isCurrentDay = (day: any) => moment().isSame(day, "day");
  const isSelectedMonth = (day: any) => today.isSame(day, "month");

  return (
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
            <div className={classes.currentDay}>{dayItem.format("D")}</div>
          )}

          {!isCurrentDay(dayItem) && dayItem.format("D")}
        </div>
      </div>
    </div>
  );
}

export default DayItem;
