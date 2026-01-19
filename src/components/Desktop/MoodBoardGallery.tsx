"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ruler, Hammer, Sparkles, Star } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        title: "Initial Design",
        subtitle: "Blueprint & Layout",
        icon: <Ruler className="w-4 h-4 text-white" />,
        image: "/images/projects/new-construction-1/new-construction-1-2.jpeg",
        color: "from-blue-600/40 to-indigo-900/40",
        className: "md:col-span-1 md:row-span-1 h-[240px] md:h-[260px]"
    },
    {
        id: 2,
        title: "Construction",
        subtitle: "Structural Build",
        icon: <Hammer className="w-4 h-4 text-white" />,
        image: "/images/projects/commercial-renovation/commercial-renovation-2.jpeg",
        color: "from-orange-600/40 to-amber-900/40",
        className: "md:col-span-1 md:row-span-2 h-[490px] md:h-[540px]"
    },
    {
        id: 3,
        title: "Final Results",
        subtitle: "Premium Finish",
        icon: <Sparkles className="w-4 h-4 text-white" />,
        image: "/images/projects/pool-spa-infinity/pool-spa-infinity-1.jpeg",
        color: "from-emerald-600/40 to-teal-900/40",
        className: "md:col-span-1 md:row-span-1 h-[240px] md:h-[260px]"
    },
    {
        id: 4,
        title: "Custom Features",
        subtitle: "Precision & Detail",
        icon: <Star className="w-4 h-4 text-white" />,
        image: "/images/projects/new-construction-3/new-construction-3-1.jpeg",
        color: "from-purple-600/40 to-fuchsia-900/40",
        className: "md:col-span-2 md:row-span-1 h-[200px]"
    }
];

export default function MoodBoardGallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="w-full h-full bg-white p-4 rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`relative rounded-3xl overflow-hidden cursor-default group ${item.className}`}
                        onHoverStart={() => setHoveredId(item.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        layoutId={`card-${item.id}`}
                    >
                        {/* Background Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Gradient Overlay - Significantly reduced opacity for clarity */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-75 transition-opacity duration-500`} />

                        {/* Subtle tint for bottom text readability */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <motion.div
                                className="w-full"
                                initial={false}
                                animate={{ y: hoveredId === item.id ? -5 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/10 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <span className="text-white/95 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 bg-white/10 backdrop-blur-md shadow-sm">
                                        {item.subtitle}
                                    </span>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-white font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight drop-shadow-md">
                                            {item.title}
                                        </h3>
                                        {item.id === 4 && (
                                            <p className="text-white/80 text-xs mt-1 font-inter max-w-sm hidden sm:block">
                                                Tailored features that make your pool uniquely yours.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Special interactive badge for Custom Features */}
                        {item.id === 4 && (
                            <div className="absolute top-4 right-4 animate-in fade-in zoom-in duration-500 delay-300">
                                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-bold rounded-full shadow-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse box-shadow-glow" />
                                    In Progress
                                </span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
