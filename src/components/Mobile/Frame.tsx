import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Frame = () => {
    return (
      <div className="w-full max-w-screen-sm mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-bold text-blue-900 text-[28px] sm:text-[32px] leading-10 tracking-tight">
            Transform Your Pool Experience
          </h1>
          <h2 className="text-[#485aff] text-sm font-bold leading-5">
            Expert Water Chemistry for a Safer, Cleaner Pool
          </h2>
          <p className="text-blue-800 text-xs font-normal leading-5 max-w-xs">
            We combine expertise with dedication to deliver exceptional pool
            services that exceed expectations.
          </p>
          <Button className="bg-[#485AFF] hover:bg-[#485AFF]/90 text-white text-xs font-semibold rounded-lg px-4 py-2">
            GET YOUR FREE ESTIMATE
          </Button>
        </div>
      </div>
    );
  };
  
