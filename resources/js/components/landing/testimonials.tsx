import { useEffect, useState } from "react";

export type Testimonial = {
    id: string | number;
    name: string;
    country: string;
    quote: string;
    avatar: string;
    avatarAlt?: string;
    rating: number;
};

export type TestimonialsSectionProps = {
    testimonials: Testimonial[];
    eyebrow?: string;
    title?: string;
    highlightedWord?: string;
    ratingLabel?: string;
    speed?: number;
};

function RatingStars({ rating }: { rating: number }) {
    const normalizedRating = Math.min(Math.max(Math.round(rating), 0), 5);

    return (
        <div
            className="flex gap-0.5"
            aria-label={`${normalizedRating} out of 5 stars`}
        >
            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    key={index}
                    className={`text-sm ${
                        index < normalizedRating
                            ? "text-[#E8A7B0]"
                            : "text-[#D6CEC9]"
                    }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default function TestimonialsSection({
    testimonials,
    eyebrow = "Happy Families",
    title = "Loved by Families",
    highlightedWord = "Worldwide",
    ratingLabel = "5.0 average rating",
    speed = 100,
}: TestimonialsSectionProps) {
    const [isPaused, setIsPaused] = useState(false);

    const validTestimonials = testimonials.filter(
        (testimonial) => testimonial.quote.trim().length > 0,
    );

    if (!validTestimonials.length) {
        return null;
    }

    /*
     * Duplicate the testimonials so the second set can follow
     * the first set seamlessly.
     */
    const marqueeItems = [...validTestimonials, ...validTestimonials];

    /*
     * Pause animation when the user interacts with the carousel.
     */
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPaused(document.hidden);
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
        };
    }, []);

    return (
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
                    <span className="text-[#E8A7B0]">{highlightedWord}</span>
                </h2>

                <div className="mt-5 flex items-center justify-center gap-3">
                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className="text-sm text-[#E8A7B0]"
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    <span className="text-sm text-[#BEB5B0]">
                        {ratingLabel}
                    </span>
                </div>
            </div>

            {/* Marquee */}
            <div
                className="relative mt-12 overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {/* Left fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#292524] to-transparent sm:w-32" />

                {/* Right fade */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#292524] to-transparent sm:w-32" />

                <div
                    className="flex w-max gap-5"
                    style={{
                        animation: `testimonial-marquee ${
                            speed
                        }s linear infinite`,
                        animationPlayState: isPaused ? "paused" : "running",
                    }}
                >
                    {marqueeItems.map((testimonial, index) => (
                        <article
                            key={`${testimonial.id}-${index}`}
                            className="w-75 shrink-0 rounded-2xl border border-[#514B48] bg-[#332F2D] p-6 sm:w-90"
                        >
                            {/* Rating */}
                            <RatingStars rating={testimonial.rating} />

                            {/* Quote */}
                            <blockquote className="mt-5 min-h-30 text-sm leading-7 text-[#E4DCD8]">
                                “{testimonial.quote}”
                            </blockquote>

                            {/* Author */}
                            <div className="mt-6 flex items-center gap-3 border-t border-[#514B48] pt-5">
                                <img
                                    src={testimonial.avatar}
                                    alt={
                                        testimonial.avatarAlt ??
                                        testimonial.name
                                    }
                                    className="size-11 rounded-full object-cover"
                                    loading="lazy"
                                />

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-[#FFF9F5]">
                                        {testimonial.name}
                                    </p>

                                    <p className="mt-0.5 text-xs text-[#AFA6A1]">
                                        {testimonial.country}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <style>{`
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
                    }
                }
            `}</style>
        </section>
    );
}
