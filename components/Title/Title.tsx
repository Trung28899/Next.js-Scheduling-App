import React from "react";
// import classes from "./Title.module.scss";
import classes from "./Title.module.scss";

type PropsType = {
  title?: String;
};

function Title(props: PropsType) {
  return <div className={classes.container}>{props.title}</div>;
}

export default Title;
