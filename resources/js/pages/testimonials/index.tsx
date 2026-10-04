import { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
    ArrowLeft,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Heart,
    X,
} from "lucide-react";

import type {
    Testimonial,
    FooterService,
    FooterContact,
} from "@/types/landing-page";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";

type TestimonialsPageProps = {
    testimonials: Testimonial[];
    whatsappUrl: string;
};

export default function TestimonialsPage({
    testimonials,
    whatsappUrl,
}: TestimonialsPageProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    return (
        <>
            <Head title="Testimonials">
                <meta
                    name="description"
                    content="Discover heartfelt experiences shared by families who have trusted Miss Neka Nanny Bali for caring, attentive and flexible childcare in Bali."
                />
            </Head>

            <section className="pb-16 pt-16 bg-white">
                {/* Hero */}
                <section className="relative overflow-hidden border-b border-[#F0E8E4] ">
                    {/* <div className="pointer-events-none absolute -right-28 -top-32 size-105 rounded-full bg-[#FBEFF2]/70 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-40 -left-32 size-95 rounded-full bg-[#F5E9E1]/70 blur-3xl" /> */}

                    <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
                        <div className="max-w-3xl">
                            {/* <Link
                                href="/"
                                className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-[#887873] transition-colors hover:text-[#D94D83]"
                            >
                                <ArrowLeft className="size-3.5" />
                                Back to Home
                            </Link> */}

                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#D94D83]">
                                Kind Words, Real Experiences
                            </p>

                            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-[#292524] sm:text-6xl lg:text-7xl">
                                Loved by families.
                                <br />
                                <span className="italic text-[#D987A2]">
                                    Trusted with care.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-[#746965] sm:text-lg">
                                Every family has a story. Explore the messages
                                and moments shared by parents who have welcomed
                                Miss Neka into their time in Bali.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#292524] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#D94D83]"
                                >
                                    Find Your Nanny
                                    <ArrowUpRight className="size-4" />
                                </a>

                                <span className="text-sm text-[#887873]">
                                    Personal care for your family in Bali
                                </span>
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-90 lg:mx-0 mt-8">
                            <div className="absolute -inset-3 rotate-3 rounded-4xl border border-[#EED8DF]" />
                            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#F0E8E4] bg-white p-6 shadow-[0_20px_60px_rgba(67,42,44,0.08)] sm:p-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-11 items-center justify-center rounded-full bg-[#FBEFF2] text-[#D94D83]">
                                        <Heart
                                            className="size-5"
                                            strokeWidth={1.7}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#292524]">
                                            Happy Families
                                        </p>
                                        <p className="text-xs text-[#887873]">
                                            Shared with gratitude
                                        </p>
                                    </div>
                                </div>

                                <div className="my-7 flex gap-1 text-[#D987A2]">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <span
                                                key={index}
                                                aria-hidden="true"
                                                className="text-lg"
                                            >
                                                ★
                                            </span>
                                        ),
                                    )}
                                </div>

                                <p className="font-serif text-2xl leading-snug text-[#292524]">
                                    “The greatest compliment is being welcomed
                                    back into a family’s life.”
                                </p>

                                <div className="mt-7 h-px bg-[#F0E8E4]" />

                                <p className="mt-5 text-xs leading-6 text-[#887873]">
                                    Thank you to every family who has trusted us
                                    and taken the time to share their
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials gallery */}
                <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
                        <div className="max-w-2xl">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D94D83]">
                                Family Experiences
                            </p>
                            <h2 className="font-serif text-3xl leading-tight text-[#292524] sm:text-4xl">
                                A little appreciation,
                                <br className="hidden sm:block" /> a lot of
                                meaning.
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-[#746965] sm:text-base">
                                Browse the kind words and shared memories from
                                families who have experienced our childcare
                                services.
                            </p>
                        </div>

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#F0DCE2] bg-[#FFF7F8] px-4 py-2.5 text-sm text-[#9C6578]">
                            <Heart className="size-4" />
                            <span>
                                {validTestimonials.length} family{" "}
                                {validTestimonials.length === 1
                                    ? "story"
                                    : "stories"}
                            </span>
                        </div>
                    </div>

                    {validTestimonials.length > 0 ? (
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                            {validTestimonials.map((testimonial, index) => (
                                <button
                                    key={testimonial.id}
                                    type="button"
                                    onClick={() => setSelectedIndex(index)}
                                    aria-label={`View testimonial ${index + 1}`}
                                    className="group relative aspect-square overflow-hidden rounded-xl border border-[#F0E8E4] bg-white p-1.5 text-left shadow-[0_4px_18px_rgba(67,42,44,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E8A7B0] hover:shadow-[0_14px_35px_rgba(67,42,44,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D987A2] focus-visible:ring-offset-4 sm:rounded-2xl sm:p-2"
                                >
                                    <div className="relative size-full overflow-hidden rounded-lg bg-[#F8F4F2] sm:rounded-xl">
                                        <img
                                            src={testimonial.image}
                                            alt={
                                                testimonial.image_alt ??
                                                `Customer testimonial ${index + 1} shared with Miss Neka Nanny Bali`
                                            }
                                            loading="lazy"
                                            decoding="async"
                                            draggable={false}
                                            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <div className="flex w-full items-center justify-between p-3 text-white sm:p-4">
                                                <span className="text-xs font-medium sm:text-sm">
                                                    View story
                                                </span>
                                                <span className="flex size-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                                    <ArrowUpRight className="size-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#E8D8D3] bg-white px-6 py-16 text-center">
                            <Heart className="mx-auto size-8 text-[#D987A2]" />
                            <h3 className="mt-4 font-serif text-2xl text-[#292524]">
                                Stories are on their way
                            </h3>
                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#746965]">
                                We look forward to sharing experiences from the
                                families we have the pleasure of caring for.
                            </p>
                        </div>
                    )}
                </section>

                {/* CTA */}
                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
                    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#292524] px-6 py-12 text-center sm:px-12 sm:py-16 lg:px-20">
                        <div className="pointer-events-none absolute -left-24 -top-32 size-72 rounded-full bg-[#D987A2]/15 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-40 -right-20 size-80 rounded-full bg-[#E8A7B0]/10 blur-3xl" />

                        <div className="relative mx-auto max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#E8A7B0]">
                                Your Family, Our Care
                            </p>

                            <h2 className="font-serif text-3xl leading-tight text-[#FFF9F5] sm:text-4xl lg:text-5xl">
                                Let us make your Bali stay a little
                                <span className="italic text-[#E8A7B0]">
                                    {" "}
                                    more special.
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#D0C6C1] sm:text-base">
                                Whether you are planning a family holiday or
                                need an extra pair of caring hands, we are here
                                to help you find the right childcare support.
                            </p>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5DDE5] px-6 py-3.5 text-sm font-semibold text-[#292524] transition-all hover:-translate-y-0.5 hover:bg-white"
                            >
                                Chat with Us on WhatsApp
                                <ArrowUpRight className="size-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </section>

            {/* Lightbox */}
            {selectedTestimonial && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Testimonial image viewer"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeLightbox();
                        }
                    }}
                >
                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close testimonial"
                        className="absolute right-3 top-3 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A7B0] sm:right-6 sm:top-6"
                    >
                        <X className="size-6" />
                    </button>

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
        </>
    );
}
