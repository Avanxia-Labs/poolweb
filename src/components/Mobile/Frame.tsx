import React from "react";
import { Button } from "@/components/ui/button"; // usa alias si ya está configurado
import { Card, CardContent } from "@/components/ui/card";

export const Frame = () => {
  return (
    <Card className="w-full max-w-[280px] border-none shadow-none bg-transparent px-4 pt-6">
      <CardContent className="flex flex-col items-center gap-[21px] p-0">
        <div className="flex flex-col gap-2 w-full items-center text-center">
          <h1 className="font-bold text-blue-900 text-[28px] sm:text-[32px] tracking-[-2px] leading-10 font-sans">
            Transform Your Pool Experience
          </h1>

          <h2 className="text-[#485aff] text-sm font-bold leading-5 font-sans">
            Expert Water Chemistry for a Safer, Cleaner Pool
          </h2>

          <p className="text-blue-800 text-xs font-normal leading-5 font-sans max-w-xs">
            We combine expertise with dedication to deliver exceptional pool
            services that exceed expectations.
          </p>
        </div>

        <Button className="bg-[#485AFF] hover:bg-[#485AFF]/90 text-white text-xs font-semibold rounded-lg px-4 py-2">
          GET YOUR FREE ESTIMATE
        </Button>
      </CardContent>
    </Card>
  );
};
