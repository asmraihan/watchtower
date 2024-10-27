
"use client"

import Image from "next/image";
import { useRef } from "react";
import Webcam from "react-webcam";


export default function Home() {
  const webcamRef = useRef<Webcam>(null);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Webcam/>
    </div>
  );
}
