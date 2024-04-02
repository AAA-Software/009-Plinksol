"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "04/21/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div>
      <div className="p-2 bg-[#1C1F2B] rounded-full">
        <div className="w-full max-w-5xl mx-auto flex items-center rounded-full gap-0">
          <CountdownItem num={remaining.days} />
          <p className="text-white mx-4 font-sora font-semibold text-lg">:</p>
          <CountdownItem num={remaining.hours} />
          <p className="text-white mx-4 font-sora font-semibold text-lg">:</p>
          <CountdownItem num={remaining.minutes} />
          <p className="text-white mx-4 font-sora font-semibold text-lg">:</p>
          <CountdownItem num={remaining.seconds} />
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto flex items-center rounded-full gap-10 justify-center">
        <CountdownUnits text="Days" />
        <CountdownUnits text="Hours" />
        <CountdownUnits text="Mins" />
        <CountdownUnits text="Secs" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num }: { num: number }) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="font-sora aspect-square rounded-full w-16 h-16 bg-[#2C3147] flex flex-col gap-1 md:gap-0 items-center justify-center">
        <div className="w-full text-center relative overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={num}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ ease: "backIn", duration: 0.75 }}
              className="block text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-medium"
            >
              {num}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const CountdownUnits = ({ text }: { text: string }) => {
  return (
    <div className=" flex flex-col items-center mt-3">
      <div className="font-sora w-16 h-fit bg-transparent flex flex-col gap-1 md:gap-0 items-center justify-center">
        <span className="text-sm md:text-sm lg:text-base 2xl:text-lg font-normal text-white/70">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
