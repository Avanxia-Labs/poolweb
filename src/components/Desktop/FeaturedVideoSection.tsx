'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const FeaturedVideoSection = () => {
    return (
        <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit">
                            <span className="flex relative h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Featured Project</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                            Infinity Edge <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Pool & Spa
                            </span>
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                            Experience the pinnacle of luxury with our latest 360° Infinity Edge Spa project.
                            Designed for ultimate relaxation, this masterpiece blends seamless aesthetics with advanced hydrotherapy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/services?service=design-and-construction"
                                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                            >
                                <span>View Full Project</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Video Showcase */}
                    <div className="relative order-1 lg:order-2 group">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 aspect-video">
                            {/* Video Player */}
                            <video
                                src="/images/projects/pool-spa-infinity/pool-spa-infinity-3.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />

                            {/* Overlay Gradient (fades out on hover) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse delay-700" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedVideoSection;
