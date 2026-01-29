"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

interface NavbarProps {
    brandName?: string;
}

const Navbar = ({ brandName }: NavbarProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Use prop if provided, otherwise fall back to siteData
    const displayBrandName = brandName || siteData.general.brandName;
    const waNumber = siteData.general.whatsappNumbers[0];
    const waMessage = siteData.general.whatsappMessage || "Halo, saya ingin bertanya tentang catering.";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
        window.open(url, "_blank");
    };

    return (
        <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <Container>
                <div className="flex items-center justify-between h-20 gap-4">
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent shrink-0">
                        {displayBrandName}
                    </Link>

                    {/* Nav Links - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-8">
                        {siteData.navbar.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        {/* WhatsApp Button */}
                        <button
                            onClick={handleWhatsAppClick}
                            className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Hubungi Kami</span>
                        </button>

                        {/* Mobile WhatsApp Icon */}
                        <button
                            onClick={handleWhatsAppClick}
                            className="sm:hidden p-2.5 bg-green-500 text-white rounded-full"
                        >
                            <Phone className="w-5 h-5" />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors md:hidden"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-2">
                            {siteData.navbar.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-xl font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;
