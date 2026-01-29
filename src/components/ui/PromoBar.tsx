"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { siteData } from "@/config/site-data";

const PromoBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Feature flag check: don't render if disabled
    if (!siteData.features.enablePromoBar) {
        return null;
    }

    // Don't render if user closed it
    if (!isVisible) {
        return null;
    }

    const { message, linkText, linkUrl, backgroundColor } = siteData.promoBar;

    return (
        <div
            className={`w-full ${backgroundColor || "bg-red-600"} text-white text-xs sm:text-sm font-medium py-2.5 px-4 relative`}
        >
            <div className="container mx-auto flex items-center justify-center gap-2 text-center">
                <span>{message}</span>
                {linkText && linkUrl && (
                    <a
                        href={linkUrl}
                        className="underline underline-offset-2 font-bold hover:text-white/80 transition-colors whitespace-nowrap"
                    >
                        {linkText}
                    </a>
                )}
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close promo bar"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default PromoBar;
