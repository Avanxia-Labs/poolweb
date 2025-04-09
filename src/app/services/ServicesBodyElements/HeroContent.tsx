import * as React from "react";

export const HeroContent: React.FC = () => {
  return (
    <section className="flex relative flex-col mt-16 max-w-full text-center h-[166px] w-[650px] max-md:mt-10">
      <h1 className="text-7xl font-bold tracking-tighter leading-none text-slate-900 max-md:max-w-full max-md:text-4xl">
        Pool Cleaning
      </h1>
      <p className="self-center mt-9 text-2xl font-semibold leading-10 text-zinc-600 max-md:max-w-full">
        Restore your pool's sparkle. We provide thorough one-time or regular
        cleaning, including brushing, vacuuming, and stain/algae treatment.
      </p>
    </section>
  );
};
