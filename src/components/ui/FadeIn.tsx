"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/config/site-data";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const FadeIn = ({ children, className = "", delay = 0 }: FadeInProps) => {
    // If animations are disabled, render children without any wrapper
    if (!siteData.features.enableAnimations) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
