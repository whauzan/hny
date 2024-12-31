import type { Metadata } from "next";
import { Lora, Quicksand } from "next/font/google";
import "./globals.css";
import React from "react";
import Provider from "@/components/provider/Provider";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Happy New Year 2025",
  description:
    "Welcome 2025 with our unique New Year's Eve web application! Create and send personalized greeting cards, enjoy a live countdown, and experience a festive, interactive celebration online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${quicksand.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
