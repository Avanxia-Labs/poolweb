"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Ruler, Hammer } from 'lucide-react';

const galleryItems = [
    {
        id: 1,
        title: "Initial Design",
        category: "Concept",
        icon: <Ruler className="w-5 h-5 text-white" />,
        image: "/images/projects/new-construction-1/new-construction-1-2.jpeg",
        color: "from-blue-600/80 to-indigo-900/80"
    },
    {
        id: 2,
        title: "Construction",
        category: "Build",
        icon: <Hammer className="w-5 h-5 text-white" />,
        image: "/images/projects/commercial-renovation/commercial-renovation-2.jpeg",
        color: "from-orange-600/80 to-amber-900/80"
    }
];

export default function MoodBoardGallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="w-full h-full bg-white p-3 overflow-hidden relative rounded-[2.5rem]">
            {/* 2-Row Symmetric Layout */}
            <div className="flex flex-col w-full h-full gap-3">
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative flex-1 rounded-3xl overflow-hidden cursor-default group"
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
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <motion.div
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-white/20 p-2 rounded-xl">
                                        {item.icon}
                                    </div>
                                    <span className="text-white text-xs font-bold uppercase tracking-wider bg-black/30 px-2 py-1 rounded-md">
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className="text-white font-bold text-2xl leading-tight">
                                    {item.title}
                                </h3>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
