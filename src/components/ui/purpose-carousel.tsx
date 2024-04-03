"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 400;
const CARD_LINE_WIDTH = 370;
const MARGIN = 24;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-[1336px]">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl md:text-4xl text-white font-sora font-semibold">
              Purpose & Utilities
            </h2>

            <div className="flex items-center gap-4">
              <button
                className={`rounded-full bg-[#3BA901] p-2.5 text-4xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                {""}
                <ChevronLeft />
              </button>
              <button
                className={`rounded-full bg-[#3BA901] p-2.5 text-4xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                {""}
                <ChevronRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex mt-6"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>

          <div className="w-full flex flex-col items-center mt-12">
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-1.5 bg-[#3BA901] rounded-full" />
              <div
                className={`w-12 h-1.5 bg-[#3BA901] rounded-full ${
                  CAN_SHIFT_RIGHT ? "opacity-30" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ number, title, description }: PostType) => {
  return (
    <div className="transition-transform hover:-translate-y-1 cursor-pointer">
      <div
        className="relative shrink-0 bg-[#141826] rounded-2xl h-[300px] py-10 px-8"
        style={{
          width: CARD_WIDTH,
          marginRight: MARGIN,
        }}
      >
        <p className="mt-1.5 text-lg font-medium font-sora text-white">
          {title}
        </p>
        <p className="text-base text-white/70 font-sora font-normal text-white">
          {description}
        </p>
      </div>
      <div
        className=" border-dashed border-t border-t-white/15 ml-4"
        style={{
          width: CARD_LINE_WIDTH,
        }}
      />
      <div
        className="bg-[#141826] rounded-2xl flex items-center justify-center py-4"
        style={{
          width: CARD_WIDTH,
        }}
      >
        <p className="text-xl text-white font-sora">{number}</p>
      </div>
    </div>
  );
};

export default Carousel;

type PostType = {
  id: number;
  number: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    number: "01",
    title: "Gaming Currency",
    description:
      "Users can use PlinkoSol coins to place bets, participate in tournaments, and unlock exclusive features within the game.",
  },
  {
    id: 2,
    number: "02",
    title: "Rewards and Incentives",
    description:
      "Players can earn PlinkoSol coins as rewards for winning games, completing challenges, or participating in community events.These coins can be redeemed for in-game bonuses, exclusive items, or even real-world rewards.",
  },
  {
    id: 3,
    number: "03",
    title: "Ecosystem Expansion",
    description:
      "PlinkoSol coin plays a crucial role in expanding the ecosystem of the platform. As the user base grows and more games and features are added to the platform, the demand for the coin increases, driving value and adoption within the gaming community.",
  },
  {
    id: 4,
    number: "04",
    title: "Community Engagement",
    description:
      "PlinkoSol coin fosters a vibrant and active community of players, developers, and enthusiasts. By participating in the PlinkoSol ecosystem, users can engage with like-minded individuals, share strategies, and contribute to the growth and success of the platform.",
  },
];
