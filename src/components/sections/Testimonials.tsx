import React from "react";
import { Star, Quote } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

const Testimonials = () => {
    return (
        <section id="testimoni" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 line">Testimoni Pelanggan</h2>
                    <p className="text-gray-500 text-lg">
                        Kepuasan pelanggan adalah prioritas utama kami
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteData.testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-gray-50 opacity-10 group-hover:text-orange-100 group-hover:opacity-100 transition-all" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < t.rating ? "fill-orange-400 text-orange-400" : "text-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 italic relative z-10">"{t.review}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-100 to-pink-100 flex items-center justify-center font-bold text-orange-600">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-400 font-medium">Pelanggan Terverifikasi</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
