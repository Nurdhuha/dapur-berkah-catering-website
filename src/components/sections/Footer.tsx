"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

interface FooterProps {
    brandName?: string;
}

const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
};

const Footer = ({ brandName }: FooterProps) => {
    const currentYear = new Date().getFullYear();
    // Use prop if provided, otherwise fall back to siteData
    const displayBrandName = brandName || siteData.general.brandName;

    const handleSocialClick = (platform: keyof typeof siteData.social) => {
        const url = siteData.social[platform];
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <footer className="bg-white border-t border-gray-100 py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                            {displayBrandName}
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {siteData.footer?.description || "Layanan catering terpercaya untuk berbagai acara. Kualitas terjamin, rasa istimewa."}
                        </p>
                        <div className="flex gap-4">
                            {Object.entries(socialIcons).map(([key, Icon]) => (
                                <button
                                    key={key}
                                    onClick={() => handleSocialClick(key as keyof typeof siteData.social)}
                                    className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-100 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Jelajahi</h4>
                        <ul className="space-y-4">
                            {siteData.navbar.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Layanan</h4>
                        <ul className="space-y-4">
                            {siteData.categories.slice(0, 4).map((cat) => (
                                <li key={cat.label}>
                                    <Link href={`/menu?category=${cat.slug}`} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                                        {cat.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <span className="font-medium text-gray-700">WhatsApp:</span>
                                <br />
                                +62 812-3456-7890
                            </li>
                            <li>
                                <span className="font-medium text-gray-700">Email:</span>
                                <br />
                                info@dapurberkahcatering.com
                            </li>
                            <li>
                                <span className="font-medium text-gray-700">Alamat:</span>
                                <br />
                                Jl. Catering No. 123, Jakarta
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {currentYear} {displayBrandName}. Hak cipta dilindungi.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-gray-600 transition-colors">Syarat & Ketentuan</Link>
                        <Link href="#" className="hover:text-gray-600 transition-colors">Kebijakan Privasi</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
