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
        color: "from-blue-600/80 to-indigo-900/80",
        className: "md:col-span-1 md:row-span-1 h-[240px] md:h-[280px]"
    },
    {
        id: 2,
        title: "Construction",
        subtitle: "Structural Build",
        icon: <Hammer className="w-4 h-4 text-white" />,
        image: "/images/projects/commercial-renovation/commercial-renovation-2.jpeg",
        color: "from-orange-600/80 to-amber-900/80",
        className: "md:col-span-1 md:row-span-2 h-[240px] md:h-[580px]"
    },
    {
        id: 3,
        title: "Final Results",
        subtitle: "Premium Finish",
        icon: <Sparkles className="w-4 h-4 text-white" />,
        image: "/images/projects/pool-spa-infinity/pool-spa-infinity-1.jpeg",
        color: "from-emerald-600/80 to-teal-900/80",
        className: "md:col-span-1 md:row-span-1 h-[240px] md:h-[280px]"
    },
    {
        id: 4,
        title: "Custom Features",
        subtitle: "Every detail matters",
        icon: <Star className="w-4 h-4 text-white" />,
        image: "/images/projects/new-construction-3/new-construction-3-1.jpeg", // Using a relevant image
        color: "from-purple-600/90 to-fuchsia-900/90", // Explicit purple for this card
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

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                        {/* Purple Tint for Custom Features specific request */}
                        {item.id === 4 && <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay" />}

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <motion.div
                                className="w-fit"
                                initial={false}
                                animate={{ y: hoveredId === item.id ? -5 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg border border-white/10">
                                        {item.icon}
                                    </div>
                                    <span className="text-white/90 text-[10px] font-bold uppercase tracking-wider bg-black/20 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
                                        {item.subtitle}
                                    </span>
                                </div>

                                <h3 className="text-white font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight drop-shadow-sm">
                                    {item.title}
                                </h3>

                                {item.id === 4 && (
                                    <p className="text-white/80 text-sm mt-2 font-inter max-w-md">
                                        From the initial blueprint to the crystal clear water, we ensure every element is perfect.
                                    </p>
                                )}
                            </motion.div>
                        </div>

                        {/* Badge for Custom Features if needed */}
                        {item.id === 4 && (
                            <div className="absolute bottom-6 right-6">
                                <span className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full shadow-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
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
