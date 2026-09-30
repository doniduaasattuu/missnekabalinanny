import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItem } from "@/types/landing-page";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../ui/button";
import { Link } from "@inertiajs/react";
import { gallery } from "@/routes";

export type GallerySectionProps = {
    items: GalleryItem[];
    eyebrow?: string;
    title?: string;
    highlightedWord?: string;
    description?: string;
    enableLightbox?: boolean;
};

export default function GallerySection({
    items,
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

    const isMobile = useIsMobile();

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
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {items.map((item, index) => {
                            if (isMobile && index > 3) {
                                return null;
                            } else if (!isMobile && index > 5) {
                                return null;
                            }

                            const isLargeItem = isMobile
                                ? false
                                : index === 0 || index === 4;

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
                                        src={`/storage/${item.image}`}
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
                                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white">
                                        <p
                                            className="text-lg sm:text-xl md:text-2xl font-semibold"
                                            style={{
                                                fontFamily:
                                                    "'Playfair Display', Georgia, serif",
                                            }}
                                        >
                                            {item.title}
                                        </p>

                                        <p className="mt-1 text-xs font-medium text-white/75 truncate">
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

                    <div className="mt-10 flex justify-center">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-white rounded-full transition-all bg-[#111827] hover:bg-[#0e1420] group hover:text-white/80"
                        >
                            <Link href={gallery()}>
                                View All Gallery
                                <ChevronRight className="size-4 group-hover:translate-x-0.5 duration-300" />
                            </Link>
                        </Button>
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
