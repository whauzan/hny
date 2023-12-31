"use client";

import { TimeLeft, calculateTimeLeft } from "@/lib/utils";
import Link from "next/link";
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
      <p>
        Share the joy of the New Year by sending heartfelt wishes to your loved
        ones.
      </p>
      <Link href="/wish/create">Share Wishes</Link>
    </div>
  );
};

export default CountDown;
