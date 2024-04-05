import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthStore } from "@/store/auth";
import { LinesType } from "@/types";
import { ChangeEvent, useState } from "react";

interface GameControlProps {
  onRunBet: (betValue: number) => void;
  onChangeLines: (lines: LinesType) => void;
  inGameBallsCount: number;
}

export function GameControls({
  onRunBet,
  onChangeLines,
  inGameBallsCount,
}: GameControlProps) {
  const difficultyOptions: string[] = ["Hard", "Medium", "Easy"];

  const maxRowsQnt = 16;
  const rowOptions: number[] = [];
  for (let i = 8; i <= maxRowsQnt; i++) {
    rowOptions.push(i);
  }

  const [betValue, setBetValue] = useState(0);
  const currentBalance = useAuthStore((state) => state.wallet.balance);

  function handleChangeBetValue(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = +e.target.value;
    const newBetValue = value >= currentBalance ? currentBalance : value;
    setBetValue(newBetValue);
  }

  function handleHalfBet() {
    const value = betValue / 2;
    const newBetvalue = value <= 0 ? 0 : Math.floor(value);
    setBetValue(newBetvalue);
  }

  function handleDoubleBet() {
    const value = betValue * 2;

    if (value >= currentBalance) {
      setBetValue(currentBalance);
      return;
    }

    const newBetvalue = value <= 0 ? 0 : Math.floor(value);
    setBetValue(newBetvalue);
  }

  function handleMaxBet() {
    setBetValue(currentBalance);
  }

  async function handleRunBet() {
    if (inGameBallsCount >= 15) return;
    if (betValue > currentBalance) {
      setBetValue(currentBalance);
      return;
    }
    onRunBet(betValue);
    if (betValue <= 0) return;
    setBetValue(0);
  }

  function handleChangeRows(e: ChangeEvent<HTMLSelectElement>) {
    onChangeLines(Number(e.target.value) as LinesType);
  }

  return (
    <Tabs defaultValue="manual" className="w-full h-[95%]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="manual">Manual</TabsTrigger>
        <TabsTrigger value="auto">Auto</TabsTrigger>
      </TabsList>
      <TabsContent value="manual" className=" h-full w-full">
        <div className="w-full h-full flex flex-col justify-between items-start gap-5">
          <div className="w-full h-full flex-col flex-1">
            <p className=" font-sora text-[#7A84A9] text-base font-normal mb-2 mt-4">
              Bet Amount
            </p>
            <div className="flex h-12 w-full">
              <input
                aria-label="number"
                type="number"
                min={0}
                max={currentBalance}
                onChange={handleChangeBetValue}
                value={betValue}
                className="w-full mr-2 rounded-lg border text-white border-[#353950] bg-[#262A3A] p-2.5 px-4 font-normal font-sora transition-colors placeholder:font-normal focus:outline-none placeholder:text-white md:p-2"
              />
              <button
                onClick={handleHalfBet}
                className="relative rounded-l-md text-white font-sora bg-[#353950] p-2.5 px-3 transition-colors after:absolute after:top-[calc(50%_-_8px)] after:right-0 after:h-4 after:w-0.5 after:rounded-lg after:bg-[#262A3A] after:content-[''] hover:bg-[#5A6085]/80 focus:bg-[#64CB2E] focus:text-black focus:outline-none md:p-2"
              >
                0.5x
              </button>
              <button
                onClick={handleDoubleBet}
                className="relative text-white font-sora bg-[#353950] p-2.5 px-3 transition-colors after:absolute after:top-[calc(50%_-_8px)] after:right-0 after:h-4 after:w-0.5 after:rounded-lg after:bg-[#262A3A] after:content-[''] hover:bg-[#5A6085]/80 focus:bg-[#64CB2E] focus:text-black focus:outline-none md:p-2"
              >
                2.0x
              </button>
              <button
                onClick={handleMaxBet}
                className="rounded-br-md rounded-tr-md text-white font-sora bg-[#353950] p-2 px-3 transition-colors hover:bg-[#5A6085]/80 focus:bg-[#64CB2E] focus:text-black focus:outline-none"
              >
                max
              </button>
            </div>

            <p className=" font-sora text-[#7A84A9] text-base font-normal mb-2 mt-4">
              Difficulty
            </p>
            <select
              title="difficulty"
              defaultValue={"Medium"}
              className="w-full h-12 rounded-lg border text-white font-sora border-[#353950] bg-[#262A3A] py-2 pl-2 font-normal transition-all placeholder:font-normal placeholder:text-white focus:outline-none disabled:line-through disabled:opacity-80"
              id="difficulty"
            >
              {difficultyOptions.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>

            <p className=" font-sora text-[#7A84A9] text-base font-normal mb-2 mt-4">
              Rows
            </p>
            <select
              title="rows"
              defaultValue={16}
              disabled={inGameBallsCount > 0}
              onChange={handleChangeRows}
              className="w-full h-12 rounded-lg border text-white font-sora border-[#353950] bg-[#262A3A] py-2 pl-2 font-normal transition-all placeholder:font-normal placeholder:text-white focus:outline-none disabled:line-through disabled:opacity-80"
              id="rows"
            >
              {rowOptions.map((rows) => (
                <option key={rows} value={rows}>
                  {rows} Rows
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={handleRunBet}
            className="w-full bg-gradient-to-r from-[#6AD035] to-[#3BA901] mb-5"
          >
            Bet Now
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="auto" className="h-full w-full">
        <div className="w-full h-full flex flex-col justify-between items-start gap-5">
          <div className="w-full h-full flex-col flex-1">
            <p className=" font-sora text-[#7A84A9] text-base font-normal mb-2 mt-4">
              Bet Amount
            </p>
            <div className="flex h-12 w-full">
              <input
                aria-label="number"
                type="number"
                min={0}
                defaultValue={0}
                className="w-full mr-2 rounded-lg border text-white border-[#353950] bg-[#262A3A] p-2.5 px-4 font-normal font-sora transition-colors placeholder:font-normal focus:outline-none placeholder:text-white md:p-2"
              />
              <button className="relative rounded-l-md text-white font-sora bg-[#353950] p-2.5 px-3 transition-colors after:absolute after:top-[calc(50%_-_8px)] after:right-0 after:h-4 after:w-0.5 after:rounded-lg after:bg-[#262A3A] after:content-[''] hover:bg-[#5A6085]/80 focus:bg-[#64CB2E] focus:text-black focus:outline-none md:p-2">
                0.5x
              </button>
              <button className="relative text-white font-sora bg-[#353950] p-2.5 px-3 transition-colors after:absolute after:top-[calc(50%_-_8px)] after:right-0 after:h-4 after:w-0.5 after:rounded-lg after:bg-[#262A3A] after:content-[''] hover:bg-[#5A6085]/80 focus:bg-[#64CB2E] focus:text-black focus:outline-none md:p-2">
                2.0x
              </button>
              <button className="rounded-br-md rounded-tr-md text-white font-sora bg-[#353950] p-2 px-3 transition-colors hover:bg-[#5A6085]/80 focus:bg-[#64CB2E] focus:text-black focus:outline-none">
                max
              </button>
            </div>

            <p className=" font-sora text-[#7A84A9] text-base font-normal mb-2 mt-4">
              Difficulty
            </p>
            <select
              title="difficulty"
              defaultValue={"Medium"}
              className="w-full h-12 rounded-lg border text-white font-sora border-[#353950] bg-[#262A3A] py-2 pl-2 font-normal transition-all placeholder:font-normal placeholder:text-white focus:outline-none disabled:line-through disabled:opacity-80"
              id="difficulty"
            >
              {difficultyOptions.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>

            <p className=" font-sora text-[#7A84A9] text-base font-normal mb-2 mt-4">
              Rows
            </p>
            <select
              title="rows-auto"
              defaultValue={16}
              className="w-full h-12 rounded-lg border text-white font-sora border-[#353950] bg-[#262A3A] py-2 pl-2 font-normal transition-all placeholder:font-normal placeholder:text-white focus:outline-none disabled:line-through disabled:opacity-80"
              id="rows-auto"
            >
              {rowOptions.map((rows) => (
                <option key={rows} value={rows}>
                  {rows} Rows
                </option>
              ))}
            </select>
          </div>
          <Button className="w-full bg-gradient-to-r from-[#6AD035] to-[#3BA901] mb-5">
            Start Autobet
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
