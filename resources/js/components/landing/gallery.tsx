import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryItem = {
    id: string | number;
    image: string;
    title: string;
    description: string;
    imageAlt?: string;
};

export type GallerySectionProps = {
    items?: GalleryItem[];
    eyebrow?: string;
    title?: string;
    highlightedWord?: string;
    description?: string;
    enableLightbox?: boolean;
};

const defaultGalleryItems: GalleryItem[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1200&q=85",
        title: "Little Explorers",
        description: "Outdoor discovery & meaningful play",
        imageAlt: "Children exploring outdoors",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85",
        title: "Creative Moments",
        description: "Arts, crafts & imagination",
        imageAlt: "Child enjoying a creative activity",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1651614158095-b98b6c1da74b?auto=format&fit=crop&w=1200&q=85",
        title: "Poolside Fun",
        description: "Safe & supervised water play",
        imageAlt: "Children enjoying poolside activities",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=85",
        title: "Curious Minds",
        description: "Learning through everyday experiences",
        imageAlt: "Child learning through outdoor activities",
    },
    {
        id: 5,
        image: "https://plus.unsplash.com/premium_photo-1663088809392-ef409ddf5940?auto=format&fit=crop&w=1200&q=85",
        title: "Family Adventures",
        description: "Making beautiful Bali memories",
        imageAlt: "Family enjoying an outdoor adventure",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=85",
        title: "Happy Little Hearts",
        description: "Warm, attentive & joyful care",
        imageAlt: "Happy children playing together",
    },
];

export default function GallerySection({
    items = defaultGalleryItems,
    eyebrow = "Life With Miss Neka",
    title = "Little moments.",
    highlightedWord = "Big memories.",
    description = "From creative play to outdoor adventures, we encourage children to explore, learn and enjoy their time in Bali in a safe and caring environment.",
    enableLightbox = true,
}: GallerySectionProps) {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    if (!items.length) {
        return null;
    }

    const closeLightbox = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <section
                id="gallery"
                className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
            >
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DB2777]">
                                {eyebrow}
                            </p>

                            <h2
                                className="mt-4 text-4xl font-semibold text-[#111827] sm:text-5xl"
                                style={{
                                    fontFamily:
                                        "'Playfair Display', Georgia, serif",
                                }}
                            >
                                {title}{" "}
                                <span className="text-[#DB2777]">
                                    {highlightedWord}
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-gray-600">
                            {description}
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {items.map((item, index) => {
                            const isLargeItem = index === 0 || index === 4;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() =>
                                        enableLightbox && setSelectedItem(item)
                                    }
                                    disabled={!enableLightbox}
                                    className={`group relative overflow-hidden rounded-3xl text-left ${
                                        isLargeItem ? "md:row-span-2" : ""
                                    } ${
                                        enableLightbox
                                            ? "cursor-zoom-in"
                                            : "cursor-default"
                                    }`}
                                    aria-label={
                                        enableLightbox
                                            ? `View ${item.title}`
                                            : item.title
                                    }
                                >
                                    <img
                                        src={item.image}
                                        alt={item.imageAlt ?? item.title}
                                        loading={index < 3 ? "eager" : "lazy"}
                                        className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                                            isLargeItem
                                                ? "h-full min-h-105"
                                                : "aspect-square"
                                        }`}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                        <p
                                            className="text-2xl font-semibold"
                                            style={{
                                                fontFamily:
                                                    "'Playfair Display', Georgia, serif",
                                            }}
                                        >
                                            {item.title}
                                        </p>

                                        <p className="mt-1 text-xs font-medium text-white/75">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Hover Indicator */}
                                    {enableLightbox && (
                                        <span className="absolute right-5 top-5 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <span className="text-lg leading-none">
                                                +
                                            </span>
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {enableLightbox && selectedItem && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedItem.title}
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        onClick={closeLightbox}
                        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-[#111827] sm:right-8 sm:top-8"
                        aria-label="Close image preview"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div
                        className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedItem.image}
                            alt={selectedItem.imageAlt ?? selectedItem.title}
                            className="max-h-[75vh] w-auto max-w-full object-contain"
                        />

                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-6 pb-6 pt-14 text-white">
                            <p
                                className="text-2xl font-semibold"
                                style={{
                                    fontFamily:
                                        "'Playfair Display', Georgia, serif",
                                }}
                            >
                                {selectedItem.title}
                            </p>

                            <p className="mt-1 text-sm text-white/70">
                                {selectedItem.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
