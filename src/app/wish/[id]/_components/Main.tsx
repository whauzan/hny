import { Button } from "@/components/ui/button";
import { IWish } from "@/database/wish.model";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Main = ({ id }: { id: string }) => {
  const [wish, setWish] = useState<IWish>();

  useEffect(() => {
    const fetchWish = async () => {
      const response = await fetch(`http://localhost:3000/api/wish/${id}`);
      const data = await response.json();
      setWish(data);
    };

    fetchWish();
  }, [id]);

  return (
    <div className="relative">
      <main className="flex min-h-[82vh] flex-col items-center justify-center space-y-12 overflow-hidden">
        <Image
          src="/Ellipse3.svg"
          width={1000}
          height={1000}
          alt="Ellips"
          className="absolute -right-1/2 top-[-15%] lg:right-[-20%] lg:top-[-35%]"
        />
        <Image
          src="/Ellipse4.svg"
          width={700}
          height={700}
          alt="Ellips"
          className="absolute -left-1/4 bottom-20 lg:bottom-[-7%] lg:left-[-15%]"
        />
        <div className="relative flex w-[22rem] justify-center font-lora font-bold uppercase leading-none lg:w-[45rem]">
          <Image
            src="/2024.png"
            width={1000}
            height={1000}
            alt="2024"
            className="absolute top-1/2 z-0 h-[22rem] -translate-y-1/2 lg:h-[45rem]"
          />
          <div className="z-10">
            <h1 className="font-lora text-5xl lg:text-8xl">Happy</h1>
            <h1 className="font-lora text-7xl lg:text-[9rem]">New</h1>
            <h1 className="font-lora text-6xl lg:text-9xl">Year</h1>
          </div>
          <Image
            src="/Star1.svg"
            width={50}
            height={50}
            alt="Star"
            className="absolute -top-20 left-16 lg:-top-32"
          />
          <Image
            src="/Star1.svg"
            width={50}
            height={50}
            alt="Star"
            className="absolute -bottom-20 right-20 lg:-bottom-32"
          />
        </div>
      </main>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <h2 className="z-10">You got a wish from someone!</h2>
        <div className="z-10 w-72 rounded-[20px] border-2 p-4 lg:w-[30rem]">
          <h3 className="font-semibold">From: {wish?.sender}</h3>
          <h3 className="font-semibold">To: {wish?.recipient}</h3>
          <div className="p-2">
            <span className="">{wish?.wish}</span>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center space-y-12">
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
    </div>
  );
};

export default Main;
