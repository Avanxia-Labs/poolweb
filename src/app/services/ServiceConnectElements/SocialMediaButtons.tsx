"use client";

import * as React from "react";

const SocialMediaButtons: React.FC = () => {
  return (
    <nav className="flex gap-6 items-center text-sm font-extrabold leading-loose text-center text-indigo-600 whitespace-nowrap">
      <button
        className="flex flex-col justify-center items-center self-stretch px-4 py-3 my-auto rounded-md bg-slate-50 w-[122px]"
        aria-label="Connect with TikTok"
      >
        <div className="flex gap-2 items-center">
          <img
            src="/svgs/tiktok.svg"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[18px]"
          />
          <span className="self-stretch my-auto">TikTok</span>
        </div>
      </button>

      <button
        className="flex gap-2 justify-center items-center self-stretch py-3 pr-4 pl-3.5 my-auto rounded-md bg-slate-50 w-[122px]"
        aria-label="Connect with Instagram"
      >
        <img
            src="/svgs/instagram1.svg"
            alt=""
            // className="object-contain shrink-0 self-stretch my-auto aspect-[0.5] w-[9px]"
          />
        <span className="gap-2 self-stretch my-auto">Instagram</span>
      </button>

      <button
        className="flex flex-col justify-center items-center self-stretch px-4 py-3 my-auto rounded-md bg-slate-50 w-[122px]"
        aria-label="Connect with Facebook"
      >
        <div className="flex gap-2 justify-center items-center">
          <img
            src="/svgs/facebook.svg"
            alt=""
            //className="object-contain shrink-0 self-stretch my-auto aspect-[0.5] w-[9px]"
          />
          <span className="self-stretch my-auto">Facebook</span>
        </div>
      </button>
    </nav>
  );
};

export default SocialMediaButtons;
