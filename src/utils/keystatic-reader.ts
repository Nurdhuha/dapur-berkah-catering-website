import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

// Create reader instance for local storage
const reader = createReader(process.cwd(), keystaticConfig);

// Type for the landing page data
export interface LandingPageData {
    general: {
        brandName: string;
        whatsappNumbers: string[];
        whatsappMessage: string;
    };
    features: {
        enableFloatingWA: boolean;
        waRotator: boolean;
        enableAnimations: boolean;
        enableSEOJSONLD: boolean;
        enablePromoBar: boolean;
    };
    hero: {
        headline: string;
        subheadline: string;
        ctaText: string;
        image: string | null;
    };
    promoBar: {
        message: string;
        linkText: string;
        linkUrl: string;
        backgroundColor: string;
    };
}

/**
 * Fetch landing page data from Keystatic CMS
 * Use this in Server Components or getStaticProps
 */
export async function getLandingPageData(): Promise<LandingPageData | null> {
    try {
        const data = await reader.singletons.landingPage.read();

        if (!data) {
            console.warn("No landing page data found in Keystatic");
            return null;
        }

        // Transform data to match component requirements
        return {
            general: {
                brandName: data.brandName || "Marketplace",
                whatsappNumbers: data.whatsappNumbers ? [...data.whatsappNumbers] : ["6281234567890"],
                whatsappMessage: data.whatsappMessage || "Hello! I'm interested in your products.",
            },
            features: {
                enableFloatingWA: data.features?.enableFloatingWA ?? true,
                waRotator: data.features?.waRotator ?? true,
                enableAnimations: data.features?.enableAnimations ?? true,
                enableSEOJSONLD: data.features?.enableSEOJSONLD ?? true,
                enablePromoBar: data.features?.enablePromoBar ?? true,
            },
            hero: {
                headline: data.hero?.headline || "BIG SALE!",
                subheadline: data.hero?.subheadline || "Wireless headphones with noise canceling",
                ctaText: data.hero?.ctaText || "Shop Now",
                image: data.hero?.image || null,
            },
            promoBar: {
                message: data.promoBar?.message || "🔥 Promo Spesial Hari Ini!",
                linkText: data.promoBar?.linkText || "Klaim Sekarang",
                linkUrl: data.promoBar?.linkUrl || "#promo",
                backgroundColor: data.promoBar?.backgroundColor || "bg-red-600",
            },
        };
    } catch (error) {
        console.error("Error reading landing page data:", error);
        return null;
    }
}

/**
 * Get landing page data with fallback to static site-data.ts
 * Useful during migration from hardcoded to CMS
 */
export async function getLandingPageDataWithFallback(): Promise<LandingPageData> {
    const cmsData = await getLandingPageData();

    if (cmsData) {
        return cmsData;
    }

    // Fallback to static data if CMS is empty
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { siteData } = require("@/config/site-data");

    return {
        general: {
            brandName: siteData.general.brandName,
            whatsappNumbers: siteData.general.whatsappNumbers,
            whatsappMessage: "Hello! I'm interested in your products.",
        },
        features: siteData.features,
        hero: siteData.hero,
        promoBar: siteData.promoBar,
    };
}
