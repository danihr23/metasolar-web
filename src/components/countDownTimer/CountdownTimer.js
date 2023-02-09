import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment("2023-05-01");

export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>Deadline comes in</p>
      <p className="counter">
        <span>{timeBetween.months()}m </span>
        <span>{timeBetween.days()}d </span>
        <span>{timeBetween.hours()}h </span>
        <span>{timeBetween.minutes()}min </span>
        <span>{timeBetween.seconds()}s </span>
      </p>
    </>
  );
};