"use client";

import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) return 600;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (val: number) => val.toString().padStart(2, "0");
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <div className="bg-brand-black text-white w-20 h-24 flex items-center justify-center rounded-2xl text-5xl font-extrabold font-mono shadow-2xl">
          {format(mm)}
        </div>
        <span className="text-brand-gray text-[10px] font-bold tracking-widest mt-2 uppercase">Min</span>
      </div>
      <div className="text-4xl font-extrabold text-brand-black pb-6">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-brand-black text-white w-20 h-24 flex items-center justify-center rounded-2xl text-5xl font-extrabold font-mono shadow-2xl">
          {format(ss)}
        </div>
        <span className="text-brand-gray text-[10px] font-bold tracking-widest mt-2 uppercase">Sec</span>
      </div>
    </div>
  );
}
