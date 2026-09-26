import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Star } from "lucide-react";

export type HeroSlide = {
    id: string | number;
    image: string;
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    imageAlt?: string;
};

export type HeroSectionProps = {
    slides?: HeroSlide[];
    whatsappUrl: string;
    autoplayInterval?: number;
    onExploreServices?: () => void;
};

const defaultHeroSlides: HeroSlide[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "CARING • PROFESSIONAL • TRUSTED",
        title: "More Than a Nanny.",
        accent: "A Peace of Mind.",
        description:
            "Premium childcare support for families who want to experience Bali with confidence, comfort, and complete peace of mind.",
        imageAlt: "Happy children enjoying a family moment",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "YOUR FAMILY, OUR CARE",
        title: "Exceptional Care,",
        accent: "Wherever Bali Takes You.",
        description:
            "From your private villa to a beach club, resort, wedding, or family adventure — your little ones are always in caring hands.",
        imageAlt: "Family enjoying quality time together",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=2200&q=90",
        eyebrow: "BALI FAMILY EXPERIENCES",
        title: "Explore Bali.",
        accent: "We'll Care for the Little Ones.",
        description:
            "Enjoy your holiday, your dinner, or your special occasion while our professional nanny gives your children attentive, loving care.",
        imageAlt: "Children enjoying an outdoor activity",
    },
];

export default function HeroSection({
    slides = defaultHeroSlides,
    whatsappUrl,
    autoplayInterval = 5500,
    onExploreServices,
}: HeroSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const hasSlides = slides.length > 0;

    useEffect(() => {
        if (slides.length <= 1) {
            return;
        }

        const timer = window.setInterval(() => {
            setCurrentSlide((current) => (current + 1) % slides.length);
        }, autoplayInterval);

        return () => {
            window.clearInterval(timer);
        };
    }, [slides.length, autoplayInterval]);

    useEffect(() => {
        if (currentSlide >= slides.length) {
            setCurrentSlide(0);
        }
    }, [currentSlide, slides.length]);

    if (!hasSlides) {
        return null;
    }

    const activeSlide = slides[currentSlide];

    const previousSlide = () => {
        setCurrentSlide(
            (current) => (current - 1 + slides.length) % slides.length,
        );
    };

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % slides.length);
    };

    const handleExploreServices = () => {
        if (onExploreServices) {
            onExploreServices();
            return;
        }

        document.querySelector("#services")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section
            id="home"
            className="relative flex min-h-190 items-end overflow-hidden bg-[#111827] mt-19 lg:min-h-205"
            aria-label="Miss Neka Nanny Bali introduction"
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide
                            ? "opacity-100"
                            : "pointer-events-none opacity-0"
                    }`}
                    aria-hidden={index !== currentSlide}
                >
                    <img
                        src={slide.image}
                        alt={slide.imageAlt ?? ""}
                        className="h-full w-full object-cover"
                        fetchPriority={index === 0 ? "high" : "auto"}
                    />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/10" />
                </div>
            ))}

            {/* Hero Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
                <div className="max-w-3xl text-white">
                    {/* Eyebrow */}
                    <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-pink-200">
                        <span
                            className="h-px w-8 bg-pink-300"
                            aria-hidden="true"
                        />

                        <span>{activeSlide.eyebrow}</span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[5.5rem]"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        {activeSlide.title}

                        <span className="mt-1 block text-pink-200">
                            {activeSlide.accent}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                        {activeSlide.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DB2777] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-pink-900/20 transition-all hover:-translate-y-0.5 hover:bg-[#BE185D] focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-transparent"
                        >
                            <MessageCircle className="h-4 w-4" />
                            Book a Nanny Now
                        </a>

                        <button
                            type="button"
                            onClick={handleExploreServices}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#111827] focus:outline-none focus:ring-2 focus:ring-white/60"
                        >
                            Explore Services
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Rating */}
                    <div className="mt-10 flex items-center gap-4 text-sm text-white/80">
                        <div
                            className="flex items-center gap-1"
                            aria-label="5 out of 5 stars"
                        >
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    className="h-4 w-4 fill-[#F9A8D4] text-[#F9A8D4]"
                                    aria-hidden="true"
                                />
                            ))}
                        </div>

                        <span>Trusted by international families in Bali</span>
                    </div>
                </div>
            </div>

            {/* Carousel Controls */}
            {slides.length > 1 && (
                <div className="absolute bottom-8 right-5 z-20 flex items-center gap-2 sm:right-8 lg:right-10">
                    <button
                        type="button"
                        onClick={previousSlide}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#111827] focus:outline-none focus:ring-2 focus:ring-white/70"
                        aria-label="Previous hero slide"
                    >
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>

                    {/* Indicators */}
                    <div
                        className="flex items-center gap-1.5 px-2"
                        role="tablist"
                        aria-label="Hero slides"
                    >
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                onClick={() => setCurrentSlide(index)}
                                role="tab"
                                aria-selected={index === currentSlide}
                                aria-label={`Go to hero slide ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    index === currentSlide
                                        ? "w-8 bg-white"
                                        : "w-1.5 bg-white/50 hover:bg-white/80"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={nextSlide}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#111827] focus:outline-none focus:ring-2 focus:ring-white/70"
                        aria-label="Next hero slide"
                    >
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            )}
        </section>
    );
}
