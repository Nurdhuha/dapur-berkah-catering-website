"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteData } from "@/config/site-data";

const CTA = () => {
    // Get WhatsApp number
    const waNumber = siteData.general.whatsappNumbers[0];
    const waMessage = siteData.general.whatsappMessage || "Halo, saya ingin konsultasi tentang catering.";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="kontak" className="py-24">
            <Container>
                <div className="relative rounded-[3rem] bg-gray-900 overflow-hidden p-8 md:p-16 lg:p-24 text-center">
                    {/* Abstract background accents */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Siap memesan catering untuk acara Anda?
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl">
                            Konsultasikan kebutuhan catering Anda dengan tim kami sekarang juga.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                variant="primary"
                                className="h-14 px-12 text-base"
                                onClick={handleWhatsAppClick}
                            >
                                Hubungi Kami
                            </Button>
                            <Link href="/menu">
                                <Button variant="secondary" className="h-14 px-12 text-base bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto">
                                    Lihat Menu
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTA;
