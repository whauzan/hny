"use client";

import { useEffect, useState } from "react";
import moment from "moment-timezone";
import CountDown from "./_components/CountDown";
import Main from "./_components/Main";

export default function Home() {
  const [showCountDown, setShowCountDown] = useState<boolean | null>(null);

  useEffect(() => {
    const checkTime = () => {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const now = moment().tz(userTimezone);
      const newYeartime = moment.tz("2023-01-01T00:00:00", userTimezone);
      const diff = newYeartime.diff(now);

      if (diff <= 0) {
        setShowCountDown(false);
      } else {
        setShowCountDown(true);
      }
    };

    // Check the time immediately
    checkTime();

    // Then check every second
    const interval = setInterval(checkTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (showCountDown === null) {
    return null;
  }

  return showCountDown ? <CountDown /> : <Main />;
}
