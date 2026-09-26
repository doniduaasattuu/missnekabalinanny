/**
 * Miss Neka Nanny Bali — Premium Hospitality & Childcare Landing Page
 *
 * Recommended Google Fonts:
 * 1. Playfair Display — elegant, warm, premium editorial headings.
 * 2. Plus Jakarta Sans — modern, highly readable body/interface font.
 *
 * Recommended <head> font import:
 * @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
 *
 * Stack:
 * Laravel + Inertia.js + React TypeScript + Tailwind CSS + Lucide React
 *
 * WhatsApp:
 * https://wa.me/6285856459247
 */

import { useEffect, useState } from "react";
import {
    Baby,
    Bath,
    BookOpen,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock3,
    Heart,
    Instagram,
    Mail,
    MapPin,
    Menu,
    MessageCircle,
    Moon,
    Palette,
    PlayCircle,
    ShieldCheck,
    Sparkles,
    Star,
    Sun,
    Users,
    Waves,
    X,
    Facebook,
    Twitter,
} from "lucide-react";

type Service = {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
};

type GalleryItem = {
    image: string;
    title: string;
    description: string;
};

type Testimonial = {
    name: string;
    country: string;
    initials: string;
    image: string;
    quote: string;
};

const WHATSAPP_NUMBER = "6285856459247";

const createWhatsAppLink = (
    message = `Hello Miss Neka Nanny Bali,

I would like to enquire about booking a nanny.

Date: [Date]
Location: [Villa / Hotel / Area in Bali]
Number of children: [Number]
Children's ages: [Ages]
Service needed: [Service]

Could you please share your availability and rates?

Thank you!`,
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "CARING • PROFESSIONAL • TRUSTED",
        title: "More Than a Nanny.",
        accent: "A Peace of Mind.",
        description:
            "Premium childcare support for families who want to experience Bali with confidence, comfort, and complete peace of mind.",
    },
    {
        image: "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "YOUR FAMILY, OUR CARE",
        title: "Exceptional Care,",
        accent: "Wherever Bali Takes You.",
        description:
            "From your private villa to a beach club, resort, wedding, or family adventure — your little ones are always in caring hands.",
    },
    {
        image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "BALI FAMILY EXPERIENCES",
        title: "Explore Bali.",
        accent: "We'll Care for the Little Ones.",
        description:
            "Enjoy your holiday, your dinner, or your special occasion while our professional nanny gives your children attentive, loving care.",
    },
];

const services: Service[] = [
    {
        icon: Sun,
        title: "Full-Day Nanny",
        description:
            "Reliable daytime childcare designed around your family's holiday schedule.",
        features: [
            "Personalised daily routine",
            "Meals & snacks assistance",
            "Play & educational activities",
            "Outdoor supervision",
        ],
    },
    {
        icon: Moon,
        title: "Night-Time Babysitting",
        description:
            "Enjoy a peaceful evening while your children remain safe, comfortable, and cared for.",
        features: [
            "Hotel & villa babysitting",
            "Bedtime routine",
            "Sleep supervision",
            "Flexible evening hours",
        ],
    },
    {
        icon: Heart,
        title: "Event & Wedding Nanny",
        description:
            "Professional childcare support so parents can fully enjoy their special moments.",
        features: [
            "Wedding & event childcare",
            "Ceremony supervision",
            "Children's activities",
            "Dedicated one-on-one care",
        ],
    },
    {
        icon: MapPin,
        title: "Travel & Resort Companion",
        description:
            "A trusted childcare companion for families exploring Bali beyond the hotel.",
        features: [
            "Resort & villa support",
            "Family excursions",
            "Pool & beach supervision",
            "Flexible travel assistance",
        ],
    },
];

const galleryItems: GalleryItem[] = [
    {
        image: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1200&q=85",
        title: "Little Explorers",
        description: "Outdoor discovery & meaningful play",
    },
    {
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85",
        title: "Creative Moments",
        description: "Arts, crafts & imagination",
    },
    {
        image: "https://images.unsplash.com/photo-1560080877-3e7e0f4f3c90?auto=format&fit=crop&w=1200&q=85",
        title: "Poolside Fun",
        description: "Safe & supervised water play",
    },
    {
        image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85",
        title: "Curious Minds",
        description: "Learning through everyday experiences",
    },
    {
        image: "https://images.unsplash.com/photo-1471286174890-9c112ffca8bf?auto=format&fit=crop&w=1200&q=85",
        title: "Family Adventures",
        description: "Making beautiful Bali memories",
    },
    {
        image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=85",
        title: "Happy Little Hearts",
        description: "Warm, attentive & joyful care",
    },
];

const testimonials: Testimonial[] = [
    {
        name: "Emma Williams",
        country: "Australia",
        initials: "EW",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
        quote: "Miss Neka made our Bali holiday completely different. Our daughter absolutely loved her nanny and we felt comfortable from the very first meeting. Professional, kind and incredibly attentive.",
    },
    {
        name: "Oliver Thompson",
        country: "United Kingdom",
        initials: "OT",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
        quote: "We booked a nanny for several evenings during our stay in Seminyak. Communication was excellent, everything felt professional, and our two children were genuinely happy and relaxed.",
    },
    {
        name: "Sophia Miller",
        country: "United States",
        initials: "SM",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=85",
        quote: "The best part was the peace of mind. We could enjoy a dinner and a day trip knowing our son was with someone caring and experienced. We would absolutely book again.",
    },
    {
        name: "Daniel Tan",
        country: "Singapore",
        initials: "DT",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
        quote: "Very responsive, warm and organised. The nanny understood our son's routine quickly and made our family trip to Bali much easier. Highly recommended for travelling families.",
    },
];

const faqs = [
    {
        question: "Which areas in Bali do you cover?",
        answer: "We primarily serve popular family destinations including Canggu, Seminyak, Kerobokan, Ubud, Sanur, Nusa Dua, Jimbaran and Uluwatu. If you are staying outside these areas, simply contact us via WhatsApp and we will confirm availability and service coverage.",
    },
    {
        question: "How far in advance should I book a nanny?",
        answer: "We recommend booking as early as possible, especially during high season, school holidays and wedding periods. However, we also understand that travel plans change, so last-minute requests can be checked via WhatsApp based on nanny availability.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "Payment arrangements can be confirmed directly with our team when you make your booking. We will provide the available payment options, booking details and any applicable terms before your service is confirmed.",
    },
    {
        question: "Are your nannies CPR and First Aid certified?",
        answer: "Yes. Our service highlights CPR and First Aid certification as part of our commitment to children's safety. Certification details can be discussed and verified with our team when you make your booking.",
    },
    {
        question: "Are the nannies background checked?",
        answer: "Yes. Background checking is part of our trust and safety standards. We aim to give visiting families confidence that their children are being cared for by responsible and trusted professionals.",
    },
    {
        question:
            "Can the nanny accompany us to a restaurant, wedding or excursion?",
        answer: "Absolutely. Event, wedding and travel companion services are available depending on your requirements. Share your itinerary, location, dates and children's ages via WhatsApp so we can recommend the appropriate arrangement.",
    },
    {
        question: "Can I request a nanny who speaks English?",
        answer: "Yes. English communication is an important part of our service for international families visiting Bali. Please mention your language preferences when making your enquiry.",
    },
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentSlide((current) => (current + 1) % heroSlides.length);
        }, 5500);

        return () => window.clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const previousSlide = () => {
        setCurrentSlide(
            (current) => (current - 1 + heroSlides.length) % heroSlides.length,
        );
    };

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % heroSlides.length);
    };

    const scrollTo = (href: string) => {
        setMobileMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div
            className="min-h-screen bg-[#FAFAFA] text-[#111827]"
            style={{
                fontFamily:
                    "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
            }}
        >
            <style>{`
                html {
                    scroll-behavior: smooth;
                }

                ::selection {
                    background: #f9a8d4;
                    color: #111827;
                }

                .font-display {
                    font-family: "Playfair Display", Georgia, serif;
                }

                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Navigation */}
            <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl">
                <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                    <button
                        type="button"
                        onClick={() => scrollTo("#home")}
                        className="group flex items-center gap-3 text-left"
                        aria-label="Go to homepage"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777] transition group-hover:bg-[#FCE7F3]">
                            <Heart
                                className="h-5 w-5 fill-current"
                                strokeWidth={1.8}
                            />
                        </span>

                        <span className="leading-tight">
                            <span className="font-display block text-lg font-semibold text-[#111827]">
                                Miss Neka
                            </span>
                            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DB2777]">
                                Nanny Bali
                            </span>
                        </span>
                    </button>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {navigationItems.map((item) => (
                            <button
                                key={item.href}
                                type="button"
                                onClick={() => scrollTo(item.href)}
                                className="text-[13px] font-semibold text-gray-600 transition hover:text-[#DB2777]"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <a
                            href={createWhatsAppLink()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-[#DB2777]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Book via WhatsApp
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F4] text-[#111827] lg:hidden"
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="border-t border-gray-100 bg-white px-5 pb-5 pt-3 shadow-xl lg:hidden">
                        <nav className="flex flex-col">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.href}
                                    type="button"
                                    onClick={() => scrollTo(item.href)}
                                    className="border-b border-gray-100 py-4 text-left text-sm font-semibold text-gray-700"
                                >
                                    {item.label}
                                </button>
                            ))}

                            <a
                                href={createWhatsAppLink()}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#DB2777] px-5 py-3.5 text-sm font-semibold text-white"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Book via WhatsApp
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <main>
                {/* Hero */}
                <section
                    id="home"
                    className="relative flex min-h-[760px] items-end overflow-hidden bg-[#111827] pt-[105px] lg:min-h-[820px]"
                >
                    {heroSlides.map((slide, index) => (
                        <div
                            key={slide.title}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                            aria-hidden={index !== currentSlide}
                        >
                            <img
                                src={slide.image}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                        </div>
                    ))}

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
                        <div className="max-w-3xl text-white">
                            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-200">
                                <span className="h-px w-8 bg-pink-300" />
                                {heroSlides[currentSlide].eyebrow}
                            </div>

                            <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-8xl">
                                {heroSlides[currentSlide].title}
                                <span className="mt-1 block text-pink-200">
                                    {heroSlides[currentSlide].accent}
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                {heroSlides[currentSlide].description}
                            </p>

                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={createWhatsAppLink()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DB2777] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-pink-900/20 transition hover:-translate-y-0.5 hover:bg-[#BE185D]"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Book a Nanny Now
                                </a>

                                <button
                                    type="button"
                                    onClick={() => scrollTo("#services")}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111827]"
                                >
                                    Explore Services
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="mt-10 flex items-center gap-4 text-sm text-white/80">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-[#F9A8D4] text-[#F9A8D4]"
                                        />
                                    ))}
                                </div>
                                <span>
                                    Trusted by international families in Bali
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-5 z-20 flex items-center gap-2 sm:right-8 lg:right-10">
                        <button
                            type="button"
                            onClick={previousSlide}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#111827]"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div className="flex items-center gap-1.5 px-2">
                            {heroSlides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-1.5 rounded-full transition-all ${
                                        index === currentSlide
                                            ? "w-8 bg-white"
                                            : "w-1.5 bg-white/50"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={nextSlide}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#111827]"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className="relative z-20 border-b border-gray-100 bg-white">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 sm:grid-cols-4">
                        {[
                            {
                                value: "CPR + First Aid",
                                label: "Safety Certified",
                                icon: ShieldCheck,
                            },
                            {
                                value: "Background",
                                label: "Checked Nannies",
                                icon: Check,
                            },
                            {
                                value: "5+ Years",
                                label: "Childcare Experience",
                                icon: Clock3,
                            },
                            {
                                value: "150+",
                                label: "Happy Families",
                                icon: Users,
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 px-5 py-6 sm:justify-center sm:px-8"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777]">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-[#111827]">
                                            {item.value}
                                        </p>
                                        <p className="mt-0.5 text-[11px] font-medium text-gray-500">
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* About Intro */}
                <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
                    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-[#FDF2F4]" />
                            <div className="relative overflow-hidden rounded-[2rem]">
                                <img
                                    src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1400&q=90"
                                    alt="Happy children enjoying time together"
                                    className="aspect-[4/5] w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-7 -right-3 max-w-[220px] rounded-2xl bg-white p-5 shadow-2xl shadow-gray-900/10 sm:-right-8">
                                <div className="mb-3 flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-[#DB2777] text-[#DB2777]"
                                        />
                                    ))}
                                </div>
                                <p className="font-display text-lg font-semibold leading-snug text-[#111827]">
                                    "The peace of mind every parent deserves."
                                </p>
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                                Welcome to Miss Neka Nanny Bali
                            </p>

                            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                                Your family deserves{" "}
                                <span className="text-[#DB2777]">
                                    exceptional care.
                                </span>
                            </h2>

                            <p className="mt-6 text-base leading-8 text-gray-600">
                                Bali should feel relaxing for everyone —
                                including parents. Miss Neka Nanny Bali provides
                                thoughtful, professional childcare for
                                international families visiting or living on the
                                island.
                            </p>

                            <p className="mt-5 text-base leading-8 text-gray-600">
                                Whether you are enjoying a quiet dinner,
                                attending a wedding, exploring Bali, or simply
                                taking a well-deserved break, our nanny team is
                                here to care for your little ones with warmth,
                                patience and professionalism.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {[
                                    "Warm & caring approach",
                                    "Professional childcare standards",
                                    "English-friendly communication",
                                    "Flexible family-focused service",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FCE7F3] text-[#DB2777]">
                                            <Check className="h-3 w-3" />
                                        </span>
                                        <span className="text-sm font-semibold text-gray-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section
                    id="services"
                    className="scroll-mt-20 bg-[#FDF2F4] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                                Our Services
                            </p>
                            <h2 className="font-display mt-4 text-4xl font-semibold text-[#111827] sm:text-5xl">
                                Childcare designed around your Bali experience.
                            </h2>
                            <p className="mt-5 text-base leading-8 text-gray-600">
                                Flexible, attentive and family-focused support
                                wherever your Bali plans take you.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <article
                                        key={service.title}
                                        className="group rounded-[1.5rem] border border-white bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-900/5"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF2F4] text-[#DB2777] transition group-hover:bg-[#DB2777] group-hover:text-white">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="font-display mt-6 text-2xl font-semibold text-[#111827]">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 min-h-[78px] text-sm leading-6 text-gray-600">
                                            {service.description}
                                        </p>

                                        <div className="mt-5 border-t border-gray-100 pt-5">
                                            <ul className="space-y-3">
                                                {service.features.map(
                                                    (feature) => (
                                                        <li
                                                            key={feature}
                                                            className="flex items-start gap-2.5 text-xs font-medium text-gray-700"
                                                        >
                                                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#DB2777]" />
                                                            {feature}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        <div className="mt-12 rounded-[1.75rem] bg-[#111827] p-7 text-white sm:p-9">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                                        <Sparkles className="h-5 w-5 text-pink-200" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold">
                                            A service standard built around your
                                            family.
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm leading-6 text-white/65">
                                            Tell us what your family needs,
                                            where you are staying and what your
                                            Bali plans look like. We will help
                                            find the right childcare
                                            arrangement.
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={createWhatsAppLink()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#111827] transition hover:bg-[#FCE7F3]"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Ask About Availability
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section
                    id="gallery"
                    className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div className="max-w-2xl">
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                                    Life With Miss Neka
                                </p>
                                <h2 className="font-display mt-4 text-4xl font-semibold text-[#111827] sm:text-5xl">
                                    Little moments.{" "}
                                    <span className="text-[#DB2777]">
                                        Big memories.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-gray-600">
                                From creative play to outdoor adventures, we
                                encourage children to explore, learn and enjoy
                                their time in Bali in a safe and caring
                                environment.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                            {galleryItems.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`group relative overflow-hidden rounded-[1.5rem] ${
                                        index === 0 || index === 4
                                            ? "md:row-span-2"
                                            : ""
                                    }`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                                            index === 0 || index === 4
                                                ? "aspect-[4/5] h-full"
                                                : "aspect-square"
                                        }`}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-80" />

                                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                        <p className="font-display text-2xl font-semibold">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-xs font-medium text-white/75">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section
                    id="testimonials"
                    className="scroll-mt-20 bg-[#111827] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-300">
                                    Loved By Families
                                </p>
                                <h2 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                                    Real families.{" "}
                                    <span className="text-pink-200">
                                        Real peace of mind.
                                    </span>
                                </h2>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-pink-300 text-pink-300"
                                        />
                                    ))}
                                </div>
                                <p className="mt-2 text-sm font-semibold">
                                    Trusted by international families
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                            {testimonials.map((testimonial) => (
                                <article
                                    key={testimonial.name}
                                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] hover:-translate-y-1 p-6 transition hover:bg-white/[0.09]"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-bold">
                                                {testimonial.name}
                                            </p>
                                            <p className="mt-0.5 text-xs text-white/50">
                                                {testimonial.country}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex gap-1">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-3.5 w-3.5 fill-pink-300 text-pink-300"
                                                />
                                            ),
                                        )}
                                    </div>

                                    <p className="mt-5 text-sm leading-7 text-white/70">
                                        "{testimonial.quote}"
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About */}
                <section
                    id="about"
                    className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                                    About Miss Neka
                                </p>

                                <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
                                    Caring for your children like they are{" "}
                                    <span className="text-[#DB2777]">
                                        our own.
                                    </span>
                                </h2>

                                <p className="mt-6 text-base leading-8 text-gray-600">
                                    Miss Neka and her professional nanny team
                                    are dedicated to providing warm, reliable
                                    and thoughtful childcare for families in
                                    Bali.
                                </p>

                                <p className="mt-5 text-base leading-8 text-gray-600">
                                    We understand that choosing someone to care
                                    for your child while travelling is a deeply
                                    personal decision. That's why we focus on
                                    safety, communication, professionalism and
                                    genuine connection with every family we
                                    serve.
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    {[
                                        {
                                            icon: ShieldCheck,
                                            title: "Safety First",
                                            text: "CPR & First Aid certified",
                                        },
                                        {
                                            icon: Check,
                                            title: "Trusted Team",
                                            text: "Background checked",
                                        },
                                        {
                                            icon: Heart,
                                            title: "5+ Years",
                                            text: "Childcare experience",
                                        },
                                        {
                                            icon: Users,
                                            title: "Family Focused",
                                            text: "Personalised care",
                                        },
                                    ].map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.title}
                                                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                            >
                                                <Icon className="h-5 w-5 text-[#DB2777]" />
                                                <p className="mt-4 text-sm font-bold">
                                                    {item.title}
                                                </p>
                                                <p className="mt-1 text-xs text-gray-500">
                                                    {item.text}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-9 flex flex-wrap items-center gap-3">
                                    <span className="mr-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Follow us
                                    </span>

                                    <a
                                        href="https://instagram.com/missnekanannybali"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Instagram"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777] transition hover:bg-[#DB2777] hover:text-white"
                                    >
                                        <Instagram className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="https://facebook.com/missnekanannybali"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Facebook"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777] transition hover:bg-[#DB2777] hover:text-white"
                                    >
                                        <Facebook className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="https://tiktok.com/@missnekanannybali"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="TikTok"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777] transition hover:bg-[#DB2777] hover:text-white"
                                    >
                                        <PlayCircle className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="https://x.com/missnekananny"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="X"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777] transition hover:bg-[#DB2777] hover:text-white"
                                    >
                                        <Twitter className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -right-4 -top-5 h-32 w-32 rounded-full bg-[#FDF2F4]" />

                                <div className="relative overflow-hidden rounded-[2rem]">
                                    <img
                                        src="https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1400&q=90"
                                        alt="Family enjoying nature in Bali"
                                        className="aspect-[4/5] w-full object-cover"
                                    />
                                </div>

                                <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-2xl backdrop-blur">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777]">
                                            <Heart className="h-5 w-5 fill-current" />
                                        </div>
                                        <div>
                                            <p className="font-display text-lg font-semibold">
                                                "Care you can feel."
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">
                                                The Miss Neka promise
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Areas */}
                <section className="border-y border-gray-100 bg-[#FDF2F4] px-5 py-16 sm:px-8 lg:px-10">
                    <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-[#DB2777]" />
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                                    Serving Bali Families
                                </p>
                            </div>
                            <h3 className="font-display mt-3 text-3xl font-semibold">
                                Wherever you're staying, we're here to help.
                            </h3>
                        </div>

                        <div className="flex max-w-2xl flex-wrap gap-2">
                            {[
                                "Canggu",
                                "Seminyak",
                                "Ubud",
                                "Sanur",
                                "Nusa Dua",
                                "Jimbaran",
                                "Uluwatu",
                            ].map((area) => (
                                <span
                                    key={area}
                                    className="rounded-full border border-[#F9A8D4] bg-white px-4 py-2.5 text-xs font-semibold text-gray-700"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section
                    id="faq"
                    className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
                >
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                                Frequently Asked Questions
                            </p>
                            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
                                Everything you need to know.
                            </h2>
                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600">
                                Still have a question? Send us a WhatsApp
                                message and our team will be happy to help.
                            </p>
                        </div>

                        <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;

                                return (
                                    <div key={faq.question}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? null : index,
                                                )
                                            }
                                            className="flex w-full items-center justify-between gap-6 py-6 text-left"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-sm font-bold text-[#111827] sm:text-base">
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                                                    isOpen
                                                        ? "bg-[#DB2777] text-white"
                                                        : "bg-[#FDF2F4] text-[#DB2777]"
                                                }`}
                                            >
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform ${
                                                        isOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </span>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ${
                                                isOpen
                                                    ? "grid-rows-[1fr] pb-6 opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="max-w-3xl pr-10 text-sm leading-7 text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-10 rounded-[1.5rem] bg-[#111827] p-7 text-center text-white sm:p-10">
                            <MessageCircle className="mx-auto h-6 w-6 text-pink-200" />
                            <h3 className="font-display mt-4 text-2xl font-semibold">
                                Have a specific question about your family?
                            </h3>
                            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/60">
                                Tell us your dates, location and childcare
                                needs. We'll help you find the right
                                arrangement.
                            </p>
                            <a
                                href={createWhatsAppLink()}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#DB2777] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#BE185D]"
                            >
                                Chat With Us on WhatsApp
                                <ChevronRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative overflow-hidden bg-[#FDF2F4] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-pink-100 blur-3xl" />

                    <div className="relative mx-auto max-w-4xl text-center">
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#DB2777] shadow-sm">
                            <Heart className="h-6 w-6 fill-current" />
                        </span>

                        <h2 className="font-display mt-7 text-4xl font-semibold leading-tight text-[#111827] sm:text-6xl">
                            Enjoy Bali.
                            <br />
                            <span className="text-[#DB2777]">
                                We'll care for the little ones.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                            Give yourself the freedom to enjoy every moment of
                            your Bali experience while your children receive
                            thoughtful, professional care.
                        </p>

                        <a
                            href={createWhatsAppLink()}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#111827] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-[#DB2777]"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Book a Nanny Now
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#111827] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr]">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-pink-200">
                                    <Heart
                                        className="h-5 w-5 fill-current"
                                        strokeWidth={1.8}
                                    />
                                </span>

                                <div>
                                    <p className="font-display text-xl font-semibold">
                                        Miss Neka
                                    </p>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-pink-300">
                                        Nanny Bali
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
                                Professional, caring and trusted childcare for
                                international families visiting or living in
                                Bali.
                            </p>

                            <div className="mt-6 flex gap-2">
                                <a
                                    href="https://instagram.com/missnekanannybali"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#DB2777] hover:text-white"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://facebook.com/missnekanannybali"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#DB2777] hover:text-white"
                                >
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://tiktok.com/@missnekanannybali"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="TikTok"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#DB2777] hover:text-white"
                                >
                                    <PlayCircle className="h-4 w-4" />
                                </a>
                                <a
                                    href="https://x.com/missnekananny"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="X"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#DB2777] hover:text-white"
                                >
                                    <Twitter className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-200">
                                Explore
                            </h3>
                            <ul className="mt-5 space-y-3">
                                {navigationItems.slice(0, 5).map((item) => (
                                    <li key={item.href}>
                                        <button
                                            type="button"
                                            onClick={() => scrollTo(item.href)}
                                            className="text-sm text-white/55 transition hover:text-white"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-200">
                                Services
                            </h3>
                            <ul className="mt-5 space-y-3">
                                {services.map((service) => (
                                    <li key={service.title}>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                scrollTo("#services")
                                            }
                                            className="text-left text-sm text-white/55 transition hover:text-white"
                                        >
                                            {service.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pink-200">
                                Contact
                            </h3>

                            <div className="mt-5 space-y-4">
                                <a
                                    href={createWhatsAppLink()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
                                >
                                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-pink-300" />
                                    <span>WhatsApp</span>
                                </a>

                                <a
                                    href="mailto:hello@missnekanannybali.com"
                                    className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
                                >
                                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-pink-300" />
                                    <span>hello@missnekanannybali.com</span>
                                </a>

                                <div className="flex items-start gap-3 text-sm leading-6 text-white/55">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink-300" />
                                    <span>
                                        Bali, Indonesia
                                        <br />
                                        Serving major areas across Bali
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} Miss Neka Nanny Bali.
                            All rights reserved.
                        </p>

                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-3.5 w-3.5 text-pink-300" />
                            <span>Professional childcare in Bali</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp CTA */}
            <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Miss Neka on WhatsApp"
                className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#DB2777] text-white shadow-2xl shadow-pink-900/30 transition hover:scale-105 hover:bg-[#BE185D] sm:bottom-7 sm:right-7"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 animate-pulse rounded-full border-2 border-white bg-green-500" />
            </a>
        </div>
    );
}

export default App;
