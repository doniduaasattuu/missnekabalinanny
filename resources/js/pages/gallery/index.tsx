import { useState } from "react";

import { ArrowLeft, ArrowRight, X } from "lucide-react";

import type {
    GalleryItem,
    NavigationLink,
    SocialLink,
    FooterContact,
    Service,
    GalleryVideo,
} from "@/types/landing-page";
import { Head } from "@inertiajs/react";
import GalleryHeroVideo from "@/components/gallery/gallery-hero-video";

interface GalleryPageProps {
    galleryVideo: GalleryVideo;
    galleryItems: GalleryItem[];
    whatsappUrl: string;
}

export default function Gallery({
    galleryVideo,
    galleryItems,
    whatsappUrl,
}: GalleryPageProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedImage =
        selectedIndex !== null ? galleryItems[selectedIndex] : null;

    const showPrevious = () => {
        if (selectedIndex === null || galleryItems.length === 0) {
            return;
        }

        setSelectedIndex(
            selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1,
        );
    };

    const showNext = () => {
        if (selectedIndex === null || galleryItems.length === 0) {
            return;
        }

        setSelectedIndex(
            selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1,
        );
    };

    return (
        <>
            <Head title="Gallery">
                <meta
                    name="description"
                    content="A glimpse into the warm, playful, and caring moments we create with families throughout Bali."
                />
            </Head>

            <main className="bg-[#fbf6f9]">
                {/* Hero */}
                <section className="relative isolate overflow-hidden bg-[#FCF7FA] px-6 pb-16 pt-28 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:gap-20">
                        <div className="max-w-3xl">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-pink-500 sm:text-sm">
                                Our Gallery
                            </p>

                            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                                Moments worth
                                <span className="mt-1 block text-pink-500">
                                    remembering.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                                A glimpse into the warm, playful, and caring
                                moments we create with families throughout Bali.
                            </p>

                            <div className="mt-10 flex items-center gap-4">
                                <span className="h-px w-12 bg-pink-500" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Moments{" "}
                                    <span className="text-pink-400">•</span>{" "}
                                    Memories{" "}
                                    <span className="text-pink-400">•</span>{" "}
                                    Care
                                </span>
                            </div>
                        </div>

                        {galleryVideo?.url && (
                            <div className="w-full">
                                <GalleryHeroVideo video={galleryVideo} />
                            </div>
                        )}
                    </div>
                </section>

                {/* Gallery */}
                <section className="px-6 pb-24 lg:px-8 lg:pb-32">
                    <div className="mx-auto max-w-7xl">
                        {galleryItems.length > 0 ? (
                            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:gap-4">
                                {galleryItems.map((item, index) => {
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() =>
                                                setSelectedIndex(index)
                                            }
                                            className={[
                                                "group relative overflow-hidden rounded-2xl bg-slate-100 text-left",
                                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-4",
                                                "col-span-1 aspect-square lg:col-span-3",
                                            ].join(" ")}
                                        >
                                            <img
                                                src={item.image}
                                                alt={
                                                    item.imageAlt ?? item.title
                                                }
                                                loading={
                                                    index < 4 ? "eager" : "lazy"
                                                }
                                                className="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:p-6">
                                                <p className="font-serif text-base sm:text-xl font-semibold text-white">
                                                    {item.title}
                                                </p>

                                                {item.description && (
                                                    <p className="mt-1 text-xs sm:text-sm text-white/75">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            <span className="absolute right-4 top-4 flex size-6 sm:size-9 items-center justify-center rounded-full bg-white/90 text-slate-950 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                                                <ArrowRight className="size-3 sm:size-4" />
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-dashed border-slate-200 px-6 py-20 text-center">
                                <p className="font-serif text-2xl font-semibold">
                                    Gallery coming soon.
                                </p>

                                <p className="mt-2 text-sm text-slate-500">
                                    Beautiful moments from Miss Neka Nanny Bali
                                    will appear here.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Closing */}
                <section className="bg-slate-950 px-6 py-20 text-white lg:px-8 lg:py-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
                            Your Family • Our Care
                        </p>

                        <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                            Let us create beautiful
                            <span className="text-pink-400">
                                {" "}
                                Bali memories
                            </span>{" "}
                            together.
                        </h2>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center rounded-full bg-pink-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-600"
                        >
                            Book via WhatsApp
                        </a>
                    </div>
                </section>
            </main>

            {/* Lightbox */}
            {selectedImage && selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedImage.title}
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        type="button"
                        onClick={() => setSelectedIndex(null)}
                        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                        aria-label="Close gallery"
                    >
                        <X className="size-5" />
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                        aria-label="Previous image"
                    >
                        <ArrowLeft className="size-5" />
                    </button>

                    <div
                        className="relative flex max-h-full max-w-6xl flex-col items-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.imageAlt ?? selectedImage.title}
                            className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
                        />

                        <div className="mt-5 text-center">
                            <h2 className="font-serif text-2xl font-semibold text-white">
                                {selectedImage.title}
                            </h2>

                            {selectedImage.description && (
                                <p className="mt-1 text-sm text-white/60">
                                    {selectedImage.description}
                                </p>
                            )}

                            <p className="mt-3 text-xs font-medium uppercase tracking-widest text-pink-400">
                                {selectedIndex + 1} / {galleryItems.length}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                        aria-label="Next image"
                    >
                        <ArrowRight className="size-5" />
                    </button>
                </div>
            )}
        </>
    );
}
