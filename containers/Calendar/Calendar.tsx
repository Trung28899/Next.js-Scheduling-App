import React from "react";
import Title from "@/components/Title/Title";
import HeaderCalendar from "@/components/HeaderCalendar/HeaderCalendar";
import CalendarMonitor from "@/components/CalendarMonitor/CalendarMonitor";
import { useState } from "react";
import moment from "moment";

import classes from "./Calendar.module.scss";

function Calendar() {
  moment.updateLocale("en", { week: { dow: 1 } });

  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf("month").startOf("week");

  const prevHandler = () =>
    setToday((prev: any) => prev.clone().subtract(1, "month"));
  const todayHandler = () => setToday(moment());
  const nextHandler = () =>
    setToday((prev: any) => prev.clone().add(1, "month"));

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Title />
        <HeaderCalendar
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
          today={today}
        />
        <CalendarMonitor startDay={startDay} today={today} />
      </div>
    </div>
  );
}

export default Calendar;
