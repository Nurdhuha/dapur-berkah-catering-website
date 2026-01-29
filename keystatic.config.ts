import { config, fields, singleton } from "@keystatic/core";

export default config({
    storage: {
        kind: "local",
    },
    singletons: {
        landingPage: singleton({
            label: "Landing Page",
            path: "src/content/landing-page/",
            schema: {
                // ========================================
                // 1. General Settings
                // ========================================
                brandName: fields.text({
                    label: "Brand Name",
                    description: "Nama brand/bisnis Anda",
                }),
                whatsappNumbers: fields.array(
                    fields.text({
                        label: "WhatsApp Number",
                        description: "Format: 628xxxxxxxxxx (tanpa + atau spasi)",
                    }),
                    {
                        label: "WhatsApp Numbers",
                        description: "Daftar nomor CS untuk fitur WA Rotator",
                        itemLabel: (props) => props.value || "Nomor baru",
                    }
                ),
                whatsappMessage: fields.text({
                    label: "WhatsApp Message",
                    description: "Pesan default saat user klik tombol WA",
                    defaultValue: "Hello! I'm interested in your products.",
                }),

                // ========================================
                // 2. Feature Flags
                // ========================================
                features: fields.object(
                    {
                        enableFloatingWA: fields.checkbox({
                            label: "Enable Floating WhatsApp",
                            description: "Tampilkan tombol WA floating di pojok kanan bawah",
                            defaultValue: true,
                        }),
                        waRotator: fields.checkbox({
                            label: "Enable WA Rotator",
                            description: "Distribusikan chat ke berbagai nomor CS secara acak",
                            defaultValue: true,
                        }),
                        enableAnimations: fields.checkbox({
                            label: "Enable Animations",
                            description: "Aktifkan animasi fade-in pada section",
                            defaultValue: true,
                        }),
                        enableSEOJSONLD: fields.checkbox({
                            label: "Enable SEO JSON-LD",
                            description: "Inject schema markup untuk SEO",
                            defaultValue: true,
                        }),
                        enablePromoBar: fields.checkbox({
                            label: "Enable Promo Bar",
                            description: "Tampilkan banner promo di atas halaman",
                            defaultValue: true,
                        }),
                    },
                    {
                        label: "Feature Flags",
                        description: "Kontrol fitur-fitur premium (Pricing Tier)",
                    }
                ),

                // ========================================
                // 3. Hero Section
                // ========================================
                hero: fields.object(
                    {
                        headline: fields.text({
                            label: "Headline",
                            description: "Judul utama hero section",
                        }),
                        subheadline: fields.text({
                            label: "Subheadline",
                            description: "Teks pendukung di bawah headline",
                        }),
                        ctaText: fields.text({
                            label: "CTA Button Text",
                            description: "Teks pada tombol Call-to-Action",
                        }),
                        image: fields.image({
                            label: "Hero Image",
                            description: "Gambar utama hero section",
                            directory: "public/images/hero",
                            publicPath: "/images/hero",
                        }),
                    },
                    {
                        label: "Hero Section",
                        description: "Konten bagian hero/banner utama",
                    }
                ),

                // ========================================
                // 4. Promo Bar
                // ========================================
                promoBar: fields.object(
                    {
                        message: fields.text({
                            label: "Promo Message",
                            description: "Pesan promo yang ditampilkan",
                        }),
                        linkText: fields.text({
                            label: "Link Text",
                            description: "Teks link/tombol (opsional)",
                        }),
                        linkUrl: fields.text({
                            label: "Link URL",
                            description: "URL tujuan saat link diklik",
                        }),
                        backgroundColor: fields.text({
                            label: "Background Color",
                            description: "Class Tailwind untuk background (e.g., bg-red-600)",
                            defaultValue: "bg-red-600",
                        }),
                    },
                    {
                        label: "Promo Bar",
                        description: "Konfigurasi banner promo di atas halaman",
                    }
                ),
            },
        }),
    },
    collections: {
        // Collections untuk data multiple (products, testimonials, dll)
        // akan ditambahkan nanti
    },
});
