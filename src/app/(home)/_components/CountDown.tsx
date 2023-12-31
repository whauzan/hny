"use client";

import { TimeLeft, calculateTimeLeft } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h1>Countdown to 2024</h1>
      <div>
        {Object.keys(timeLeft).map((interval: string) => (
          <span key={interval}>
            {(timeLeft as any)[interval]} {interval}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
