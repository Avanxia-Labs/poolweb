"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Ruler, BrickWall, Sparkles } from 'lucide-react';
import Image from 'next/image';

const galleryItems = [
    {
        id: 1,
        title: "Precision Design",
        category: "Blueprint Phase",
        color: "from-blue-500 to-indigo-600",
        icon: <Ruler className="w-6 h-6 text-white/80" />,
        image: "/images/projects/new-construction-1/new-construction-1-1.jpeg"
    },
    {
        id: 2,
        title: "Quality Materials",
        category: "Construction",
        color: "from-slate-600 to-slate-800",
        icon: <BrickWall className="w-6 h-6 text-white/80" />,
        image: "/images/projects/commercial-renovation/commercial-renovation-1.jpeg"
    },
    {
        id: 3,
        title: "Modern Finishes",
        category: "Final Touch",
        color: "from-emerald-500 to-teal-600",
        icon: <Sparkles className="w-6 h-6 text-white/80" />,
        image: "/images/projects/pool-spa-infinity/pool-spa-infinity-1.jpeg"
    }
];

export default function ConstructionGallery() {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-[900px] flex flex-col md:flex-row justify-start md:justify-center items-center gap-3 md:gap-4 h-auto md:h-[500px] py-2 md:py-0">
                {galleryItems.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                        onHoverStart={() => setActiveId(item.id)}
                        onHoverEnd={() => setActiveId(null)}
                        className={`relative rounded-3xl overflow-hidden cursor-pointer backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-500 ease-out flex-shrink-0
                                    ${activeId === item.id
                                ? 'h-[300px] w-full md:w-[400px] md:h-[400px]'
                                : 'h-[80px] w-full md:w-[200px] md:h-[400px]'}
                                    bg-gradient-to-br ${item.color}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            layout: { duration: 0.3 }
                        }}
                    >
                        {/* Background Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        {/* Gradient Overlay for Text Readability - subtle dark bottom fade only */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />

                        <motion.div
                            className="absolute inset-0 p-6 flex flex-col justify-end"
                            layout="position"
                        >
                            <motion.div
                                layout="position"
                                className="mb-2 bg-white/20 w-fit p-2 rounded-xl backdrop-blur-sm"
                            >
                                {item.icon}
                            </motion.div>

                            <motion.h3
                                layout="position"
                                className="text-white text-xl font-bold font-['Plus_Jakarta_Sans'] leading-tight mb-1"
                            >
                                {item.title}
                            </motion.h3>

                            <motion.p
                                layout="position"
                                className="text-white/80 text-sm font-inter font-medium"
                            >
                                {item.category}
                            </motion.p>

                            {activeId === item.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="pt-4 mt-4 border-t border-white/20"
                                >
                                    <p className="text-white/90 text-xs font-inter leading-relaxed">
                                        Experience the future of pool construction with our advanced techniques and premium materials.
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none z-[-1]" />
        </div>
    )
}
