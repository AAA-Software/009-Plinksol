"use client";
import React from "react";
import { SparklesCore } from "./sparkles-core";
import { toast } from "./use-toast";

export function SparklesPreview() {
  const copyToClipboard = () => {
    const textToCopy = "9BA1xvXX9DNpe5fERHK12315c6d";
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast({
        description: "Solana Address copied to clipboard",
      });
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <p className="text-white font-sora mt-6 mb-2">SOL Address</p>
      <h3
        onClick={copyToClipboard}
        className="text-xl font-semibold font-sora text-center text-white relative z-20 cursor-pointer"
      >
        9BA1xvXX9DNpe5fERHK12315c6d
      </h3>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#6AD035] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#6AD035] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#3BA901] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#3BA901] to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#141826] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
