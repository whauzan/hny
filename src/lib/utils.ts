import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment-timezone";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeLeft = (): TimeLeft => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = moment().tz(userTimezone);
  const newYeartime = moment.tz("2025-01-01T00:00:00", userTimezone);
  const difference = newYeartime.diff(now);

  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    const duration = moment.duration(difference);
    timeLeft = {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  return timeLeft;
};
