'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FeaturedVideoSectionMobile = () => {
    return (
        <section className="w-full py-12 bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="px-4 relative z-10 flex flex-col gap-6">

                {/* Header Content */}
                <div className="flex flex-col gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit">
                        <span className="flex relative h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider">Featured Project</span>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-tight">
                        Infinity Edge <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Pool & Spa
                        </span>
                    </h2>

                    <p className="text-sm text-gray-300 leading-relaxed font-inter">
                        Experience the pinnacle of luxury with our latest 360° Infinity Edge Spa project.
                    </p>
                </div>

                {/* Video Card */}
                <div className="relative group w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50">
                    <video
                        src="/images/projects/pool-spa-infinity/pool-spa-infinity-3.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    />
                    {/* Glow behind video */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-20 blur-lg -z-10" />
                </div>

                {/* CTA */}
                <Link
                    href="/services?service=design-and-construction"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 active:from-blue-700 active:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm"
                >
                    <span>View Full Project</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>

            </div>
        </section>
    );
};

export default FeaturedVideoSectionMobile;
