import type { Testimonial } from "@/types/landing-page";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type TestimonialsSectionProps = {
    testimonials: Testimonial[];
    eyebrow?: string;
    title?: string;
    highlightedWord?: string;
    label?: string;
    speed?: number;
};

export default function TestimonialsSection({
    testimonials,
    eyebrow = "Testimonials",
    title = "Because Every Family Deserves",
    highlightedWord = "Peace of Mind",
    label = "Nothing makes us happier than knowing families feel comfortable, confident, and cared for. Read the experiences and heartfelt words from the families we have been honoured to serve.",
    speed = 160,
}: TestimonialsSectionProps) {
    const [isPaused, setIsPaused] = useState(false);
    const [isPageHidden, setIsPageHidden] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const validTestimonials = testimonials.filter(
        (testimonial) => testimonial.image?.trim().length > 0,
    );

    const selectedTestimonial =
        selectedIndex !== null ? validTestimonials[selectedIndex] : null;

    const closeLightbox = () => setSelectedIndex(null);

    const showPrevious = () => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current - 1 + validTestimonials.length) %
                  validTestimonials.length,
        );
    };

    const showNext = () => {
        setSelectedIndex((current) =>
            current === null ? null : (current + 1) % validTestimonials.length,
        );
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPageHidden(document.hidden);
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
        };
    }, []);

    // Keyboard navigation and page scroll lock while lightbox is open.
    useEffect(() => {
        if (selectedIndex === null) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex, validTestimonials.length]);

    if (validTestimonials.length === 0) {
        return null;
    }

    const testimonialGroups = [0, 1];

    return (
        <>
            <section
                id="testimonials"
                className="overflow-hidden bg-[#292524] py-20 sm:py-24 lg:py-28"
            >
                {/* Heading */}
                <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8A7B0]">
                        {eyebrow}
                    </p>

                    <h2 className="font-serif text-4xl leading-tight text-[#FFF9F5] sm:text-5xl">
                        {title}{" "}
                        <span className="text-[#E8A7B0]">
                            {highlightedWord}
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#BEB5B0] sm:text-base">
                        {label}
                    </p>
                </div>

                {/* Marquee */}
                <div
                    className="relative mt-12 overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    onTouchCancel={() => setIsPaused(false)}
                >
                    {/* Left fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#292524] to-transparent sm:w-32" />

                    {/* Right fade */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#292524] to-transparent sm:w-32" />

                    <div
                        className="testimonial-marquee flex w-max"
                        style={{
                            animationDuration: `${speed}s`,
                            animationPlayState:
                                isPaused ||
                                isPageHidden ||
                                selectedIndex !== null
                                    ? "paused"
                                    : "running",
                        }}
                    >
                        {testimonialGroups.map((group) => (
                            <div
                                key={group}
                                className="flex w-max shrink-0 gap-5 pr-5"
                                aria-hidden={group === 1}
                            >
                                {validTestimonials.map((testimonial, index) => (
                                    <button
                                        key={`${group}-${testimonial.id}`}
                                        type="button"
                                        onClick={() => setSelectedIndex(index)}
                                        tabIndex={group === 1 ? -1 : 0}
                                        aria-label={
                                            group === 0
                                                ? `View testimonial ${index + 1}`
                                                : undefined
                                        }
                                        className="group w-64 shrink-0 cursor-zoom-in overflow-hidden rounded-2xl border border-[#514B48] bg-[#332F2D] p-2 text-left shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A7B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#292524] sm:w-80 sm:rounded-3xl sm:p-3"
                                    >
                                        <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F8F6F4] sm:rounded-2xl">
                                            <img
                                                src={testimonial.image}
                                                alt={
                                                    group === 0
                                                        ? (testimonial.image_alt ??
                                                          "Customer testimonial shared with Miss Neka Nanny Bali")
                                                        : ""
                                                }
                                                loading="lazy"
                                                decoding="async"
                                                draggable={false}
                                                className="h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-105"
                                            />

                                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                                                <span className="flex size-11 items-center justify-center rounded-full bg-white/90 text-[#292524] opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                                                    <span className="text-xl leading-none">
                                                        +
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedTestimonial && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Testimonial image viewer"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeLightbox();
                        }
                    }}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close testimonial"
                        className="absolute right-3 top-3 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A7B0] sm:right-6 sm:top-6"
                    >
                        <X className="size-6" />
                    </button>

                    {/* Previous */}
                    {validTestimonials.length > 1 && (
                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label="Previous testimonial"
                            className="absolute left-2 z-20 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A7B0] sm:left-6 sm:size-12"
                        >
                            <ChevronLeft className="size-6 sm:size-7" />
                        </button>
                    )}

                    {/* Full image */}
                    <div className="flex max-h-full max-w-full flex-col items-center justify-center">
                        <img
                            key={selectedTestimonial.id}
                            src={selectedTestimonial.image}
                            alt={
                                selectedTestimonial.image_alt ??
                                "Customer testimonial shared with Miss Neka Nanny Bali"
                            }
                            className="max-h-[82vh] max-w-[82vw] rounded-lg object-contain shadow-2xl sm:max-h-[88vh] sm:max-w-[80vw]"
                            draggable={false}
                        />

                        <p className="mt-3 text-center text-xs text-white/65">
                            {selectedIndex! + 1} / {validTestimonials.length}
                        </p>
                    </div>

                    {/* Next */}
                    {validTestimonials.length > 1 && (
                        <button
                            type="button"
                            onClick={showNext}
                            aria-label="Next testimonial"
                            className="absolute right-2 z-20 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A7B0] sm:right-6 sm:size-12"
                        >
                            <ChevronRight className="size-6 sm:size-7" />
                        </button>
                    )}
                </div>
            )}

            <style>{`
                .testimonial-marquee {
                    animation-name: testimonial-marquee;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }

                @keyframes testimonial-marquee {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .testimonial-marquee {
                        animation: none !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </>
    );
}
