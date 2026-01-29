"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteData } from "@/config/site-data";

// Props interface for Hero component
interface HeroProps {
    heroData?: {
        headline: string;
        subheadline: string;
        ctaText: string;
        image: string | null;
    };
}

// Default values fallback
const defaultHero = {
    headline: "CATERING BERKAH",
    subheadline: "Hidangan lezat untuk setiap momen spesial Anda",
    ctaText: "Pesan Sekarang",
    image: "/tumpeng-nobg.png",
};

const Hero = ({ heroData }: HeroProps) => {
    // Merge with defaults
    const hero = {
        ...defaultHero,
        ...heroData,
        image: heroData?.image || defaultHero.image,
    };

    // Get WhatsApp number
    const waNumber = siteData.general.whatsappNumbers[0];
    const waMessage = siteData.general.whatsappMessage || "Halo, saya ingin memesan catering.";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
            <Container>
                <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-pink-100 via-orange-50 to-blue-50">
                    {/* Animated Background Shapes */}
                    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-pink-200/40 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full" />

                    <div className="relative grid md:grid-cols-2 items-center gap-12 p-8 md:p-16 lg:p-24">
                        <div className="space-y-6 md:space-y-8 text-center md:text-left">
                            <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm rounded-full">
                                <span className="text-sm font-bold tracking-wider text-orange-600 uppercase">
                                    {hero.headline}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                Cita Rasa, <br />
                                <span className="text-orange-600">Penuh Berkah.</span>
                            </h1>

                            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                                {hero.subheadline}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Button
                                    variant="primary"
                                    className="h-14 px-10 text-base shadow-lg shadow-orange-500/20"
                                    onClick={handleWhatsAppClick}
                                >
                                    {hero.ctaText}
                                </Button>
                                <Link href="/menu">
                                    <Button variant="secondary" className="h-14 px-10 text-base w-full sm:w-auto">
                                        Lihat Menu
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="relative aspect-square max-w-md mx-auto transform transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={hero.image}
                                    alt="Featured Product"
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                            {/* Floating badges for visual interest */}
                            <div className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                    <span className="font-bold text-xs">-15%</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-medium text-gray-500 uppercase">Promo</p>
                                    <p className="text-xs font-bold text-gray-900">Pernikahan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
