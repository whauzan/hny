import React, { useEffect, useState } from "react";
import { IWish } from "@/database/wish.model";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Main = () => {
  const [wish, setWish] = useState<IWish[] | []>([]);

  useEffect(() => {
    const fetchWish = async () => {
      const response = await fetch("http://localhost:3000/api/home");
      const data = await response.json();
      setWish(data);
    };

    fetchWish();
  }, []);

  return (
    <div className="relative">
      <main className="flex min-h-[82vh] flex-col items-center justify-center space-y-12 overflow-hidden">
        <Image
          src="/Ellipse3.svg"
          width={1000}
          height={1000}
          alt="Ellips"
          className="absolute right-[-20%] top-[-35%]"
        />
        <Image
          src="/Ellipse4.svg"
          width={700}
          height={700}
          alt="Ellips"
          className="absolute bottom-[-7%] left-[-15%]"
        />
        <div className="relative flex w-[45rem] justify-center font-lora font-bold uppercase leading-none">
          <Image
            src="/2024.png"
            width={1000}
            height={1000}
            alt="2024"
            className="absolute top-1/2 z-0 h-[45rem] -translate-y-1/2"
          />
          <div className="z-10">
            <h1 className="font-lora text-8xl">Happy</h1>
            <h1 className="font-lora text-[9rem]">New</h1>
            <h1 className="font-lora text-9xl">Year</h1>
          </div>
          <Image
            src="/Star1.svg"
            width={50}
            height={50}
            alt="Star"
            className="absolute -top-32 left-16"
          />
          <Image
            src="/Star1.svg"
            width={50}
            height={50}
            alt="Star"
            className="absolute -bottom-32 right-20"
          />
        </div>
      </main>
      <div className="flex justify-center pb-12">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="">
            {wish.map((w) => (
              <CarouselItem key={w._id} className="md:basis-1/2 lg:basis-1/3">
                <div className="py-4">
                  <Card className="h-64 border-2 border-white/10 bg-gray-700/20 text-[#FEFEFE] shadow-md shadow-black backdrop-blur-xl">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">From: {w.sender}</h3>
                      <div className="p-2">
                        <span className="">{w.wish}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-14 w-14 border-none bg-gray-700/70 text-[#FEFEFE]" />
          <CarouselNext className="h-14 w-14 border-none bg-gray-700/70 text-[#FEFEFE]" />
        </Carousel>
      </div>
      <div className="flex flex-col items-center space-y-12">
        <p className="text-xl font-semibold">
          Share the joy of the New Year by sending heartfelt wishes to your
          loved ones.
        </p>
        <Link href="/wish/create">
          <Button className="rounded-[20px] border-2 border-white/10 bg-gray-700/20 px-24 py-7 font-lora text-xl uppercase shadow-xl shadow-black backdrop-blur-xl">
            Share Wishes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
