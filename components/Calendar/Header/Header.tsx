import React from "react";
import classes from "./Header.module.scss";

type PropsType = {
  monthYearDisplay: string | number;
  onNext: () => void;
  onBack: () => void;
};

function Header({ onNext, onBack, monthYearDisplay }: PropsType) {
  return (
    <div className={classes.header}>
      <div className={classes.monthDisplay}>{monthYearDisplay}</div>
      <div className={classes.buttonContainer}>
        <button className={classes.backButton} onClick={onBack}>
          Back
        </button>
        <button className={classes.nextButton} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Header;
