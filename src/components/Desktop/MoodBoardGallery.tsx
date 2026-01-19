"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Ruler, Hammer, Star, Info } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        title: "Initial Design",
        category: "Blueprint & Layout",
        icon: <Ruler className="w-4 h-4 text-white" />,
        image: "/images/projects/new-construction-1/new-construction-1-1.jpeg", // Blueprint/Early stage if available, using this for now
        colSpan: "col-span-2",
        rowSpan: "row-span-1",
        color: "from-blue-600/80 to-indigo-900/80"
    },
    {
        id: 2,
        title: "Construction",
        category: "Structural Build",
        icon: <Hammer className="w-4 h-4 text-white" />,
        image: "/images/projects/commercial-renovation/commercial-renovation-1.jpeg",
        colSpan: "col-span-1",
        rowSpan: "row-span-2",
        color: "from-orange-600/80 to-amber-900/80"
    },
    {
        id: 3,
        title: "Final Results",
        category: "Premium Finish",
        icon: <Star className="w-4 h-4 text-white" />,
        image: "/images/projects/pool-spa-infinity/pool-spa-infinity-1.jpeg",
        colSpan: "col-span-2",
        rowSpan: "row-span-1",
        color: "from-emerald-600/80 to-teal-900/80"
    },
    {
        id: 4,
        title: "Custom Features",
        category: "Waterfalls & Lighting",
        icon: <Info className="w-4 h-4 text-white" />,
        image: "/images/projects/new-pool-waterfall/new-pool-waterfall-2.jpeg",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        color: "from-purple-600/80 to-fuchsia-900/80"
    }
];

export default function MoodBoardGallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="w-full h-full bg-white p-4 overflow-hidden relative">
            {/* "Mood Board" Layout - Masonry/Bento Grid */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-full">
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`relative rounded-2xl overflow-hidden cursor-default group ${item.colSpan} ${item.rowSpan}`}
                        onHoverStart={() => setHoveredId(item.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        layoutId={`card-${item.id}`}
                    >
                        {/* Background Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        {/* Gradient Overlay (Always visible but subtle) */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                        {/* Default Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />


                        {/* Content */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                            <motion.div
                                className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="bg-white/20 p-1.5 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <span className="text-white text-xs font-bold uppercase tracking-wider bg-black/30 px-2 py-0.5 rounded-md">
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className="text-white font-bold text-lg leading-tight">
                                    {item.title}
                                </h3>

                                <AnimatePresence>
                                    {hoveredId === item.id && (
                                        <motion.p
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="text-white/90 text-xs mt-2 font-medium"
                                        >
                                            Every detail matters. From the initial blueprint to the crystal clear water.
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative "Mood Board" Elements - Tape, Stickers styling feel */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[10px] font-mono uppercase px-2 py-1 rounded shadow-sm z-10 -rotate-2">
                Concept Phase
            </div>
            <div className="absolute bottom-4 left-4 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-10 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                In Progress
            </div>
        </div>
    );
}
