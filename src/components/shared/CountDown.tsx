"use client";

import { Button } from "@/components/ui/button";
import { TimeLeft, calculateTimeLeft } from "@/lib/utils";
import Image from "next/image";
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
    <main className="relative flex min-h-screen flex-col items-center justify-center space-y-12 overflow-hidden">
      <Image
        src={"/Ellipse1.svg"}
        width={1000}
        height={1000}
        alt="Elipse"
        className="absolute -right-2/4 -top-32 lg:-right-1/4 lg:-top-1/3"
      />
      <Image
        src={"/Ellipse2.svg"}
        width={1000}
        height={1000}
        alt="Elipse"
        className="absolute -bottom-1/4 -left-1/4 lg:-left-1/4 lg:top-1/3"
      />
      <h1 className="z-10 font-lora text-2xl font-bold uppercase lg:text-5xl">
        New Year Countdown
      </h1>
      <div className="mb-4 flex items-center space-x-4">
        {Object.keys(timeLeft).map((interval, i) => {
          const strValue = String((timeLeft as any)[interval]).padStart(2, "0");
          return (
            <React.Fragment key={interval}>
              <span className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-white/10 bg-gray-700/20 shadow-md shadow-black backdrop-blur-xl lg:h-48 lg:w-48 lg:rounded-[20px] lg:text-[88px] lg:shadow-xl">
                {strValue[0]}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-white/10 bg-gray-700/20 shadow-md shadow-black backdrop-blur-xl lg:h-48 lg:w-48 lg:rounded-[20px] lg:text-[88px] lg:shadow-xl">
                {strValue[1]}
              </span>
              {i < Object.keys(timeLeft).length - 1 && (
                <span className="lg:text-[88px]">:</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex flex-col items-center space-y-12">
        <p className="w-9/12 text-center text-sm font-semibold md:w-full lg:text-xl">
          Share the joy of the New Year by sending heartfelt wishes to your
          loved ones.
        </p>
        <Link href="/wish/create">
          <Button className="rounded-md border-2 border-white/10 bg-gray-700/20 px-12 py-7 font-lora text-base uppercase shadow-md shadow-black backdrop-blur-xl lg:rounded-[20px] lg:px-24 lg:text-xl lg:shadow-xl">
            Share Wishes
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default CountDown;
