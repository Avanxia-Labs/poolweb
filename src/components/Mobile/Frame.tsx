'use client'; // si estás en /app
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";

export const Frame = () => {
  const router = useRouter();
    return (
      <div className="w-full max-w-screen-sm mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-5 text-center">
        <h1 className="font-bold text-[#0F172A] text-[32px] leading-[40px] tracking-[-0.02em] text-center">
          Transform Your <br />Pool Experience
        </h1>
          <h2 className="text-[#485AFF] text-[14px] font-bold leading-[20px]">
            Expert Water Chemistry for a Safer, <br /> Cleaner Pool
          </h2>
          <p className="text-[#212939] text-xs font-normal leading-5 max-w-xs">
            We combine expertise with dedication to deliver <br /> exceptional pool
            services that exceed <br />expectations.
          </p>
          <Button
            onClick={() => router.push('/form')}
            className="flex flex-col justify-center items-center gap-[10px] px-0 py-[8px] bg-[#485AFF] hover:bg-[#485AFF]/90 text-white text-[14px] leading-[32px] font-semibold text-center font-inter rounded-[8px]"
          >
            GET YOUR FREE ESTIMATE
          </Button>
        </div>
      </div>
    );
  };
  
