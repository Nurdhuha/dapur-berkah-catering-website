"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function MenuPage() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "all";
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    // Get WhatsApp number
    const waNumber = siteData.general.whatsappNumbers[0];

    const handleProductOrder = (productTitle: string) => {
        const message = `Halo, saya ingin memesan ${productTitle}. Mohon info lebih lanjut.`;
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Filter products by category
    const filteredProducts = useMemo(() => {
        if (activeCategory === "all") {
            return siteData.featuredProducts;
        }
        return siteData.featuredProducts.filter(
            (product) => product.category === activeCategory
        );
    }, [activeCategory]);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-50 via-pink-50 to-blue-50 py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-600 mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Kembali ke Beranda
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            Menu Kami
                        </h1>
                        <p className="text-lg text-gray-600">
                            Jelajahi berbagai pilihan menu catering kami untuk acara spesial Anda.
                            Dari prasmanan hingga tumpeng, semua tersedia dengan cita rasa terbaik.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Category Filter */}
            <section className="sticky top-20 z-30 bg-white border-b border-gray-100 py-4">
                <Container>
                    <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === "all"
                                    ? "bg-orange-500 text-white shadow-sm"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            Semua Menu
                        </button>
                        {siteData.categories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.slug
                                        ? "bg-orange-500 text-white shadow-sm"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Products Grid */}
            <section className="py-12 md:py-16">
                <Container>
                    {/* Results count */}
                    <p className="text-gray-500 mb-8">
                        Menampilkan <span className="font-semibold text-gray-900">{filteredProducts.length}</span> menu
                        {activeCategory !== "all" && (
                            <> dalam kategori <span className="font-semibold text-orange-600">{siteData.categories.find(c => c.slug === activeCategory)?.label}</span></>
                        )}
                    </p>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredProducts.map((product, idx) => (
                                <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Badge */}
                                        {product.badge && (
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-white text-gray-900 shadow-sm border border-gray-100 px-3 py-1">
                                                    {product.badge}
                                                </Badge>
                                            </div>
                                        )}

                                        {/* Favorite Button */}
                                        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                                            <Star className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="p-5 space-y-4">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                                                {product.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {product.description || "Menu spesial dengan bahan berkualitas."}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-gray-900">
                                                    Rp{product.price.toLocaleString("id-ID")}
                                                </span>
                                                {product.discountPrice && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        Rp{product.discountPrice.toLocaleString("id-ID")}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <Button
                                            variant="primary"
                                            className="w-full"
                                            onClick={() => handleProductOrder(product.title)}
                                        >
                                            Pesan via WhatsApp
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">Tidak ada menu dalam kategori ini.</p>
                            <button
                                onClick={() => setActiveCategory("all")}
                                className="mt-4 text-orange-600 font-medium hover:underline"
                            >
                                Lihat semua menu
                            </button>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900">
                <Container>
                    <div className="text-center max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Butuh paket khusus?
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Hubungi kami untuk konsultasi menu dan paket custom sesuai kebutuhan acara Anda.
                        </p>
                        <Button
                            variant="primary"
                            className="h-14 px-12 text-base"
                            onClick={() => {
                                const message = "Halo, saya ingin konsultasi tentang paket catering custom.";
                                const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
                                window.open(url, "_blank");
                            }}
                        >
                            Konsultasi Gratis
                        </Button>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
