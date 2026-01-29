"use client";

import React, { useMemo } from "react";
import { MessageCircle } from "lucide-react";

interface FloatingWAProps {
    whatsappNumbers?: string[];
    message?: string;
    features?: {
        enableFloatingWA: boolean;
        waRotator: boolean;
    };
}

// Default values fallback
const defaults = {
    whatsappNumbers: ["6281234567890"],
    message: "Hello! I'm interested in your products.",
    features: {
        enableFloatingWA: true,
        waRotator: true,
    },
};

const FloatingWA = ({ whatsappNumbers, message, features }: FloatingWAProps) => {
    // Merge with defaults
    const numbers = whatsappNumbers || defaults.whatsappNumbers;
    const waMessage = message || defaults.message;
    const featureFlags = { ...defaults.features, ...features };

    // Feature flag check: don't render if disabled
    if (!featureFlags.enableFloatingWA) {
        return null;
    }

    // WA Rotator: distribute chats across multiple CS numbers
    const selectedNumber = useMemo(() => {
        if (featureFlags.waRotator && numbers.length > 1) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            return numbers[randomIndex];
        }
        return numbers[0];
    }, [featureFlags.waRotator, numbers]);

    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${selectedNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-3 py-1.5 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us!
            </span>
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </a>
    );
};

export default FloatingWA;
