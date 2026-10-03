import { useState } from "react";
import { Play } from "lucide-react";

import type { GalleryVideo } from "@/types/landing-page";

type GalleryHeroVideoProps = {
    video: GalleryVideo;
};

function getYouTubeVideoId(url: string): string | null {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname.replace(/^www\./, "");

        if (hostname === "youtu.be") {
            return parsedUrl.pathname.split("/").filter(Boolean)[0] ?? null;
        }

        if (
            hostname !== "youtube.com" &&
            hostname !== "m.youtube.com" &&
            hostname !== "youtube-nocookie.com"
        ) {
            return null;
        }

        const videoIdFromQuery = parsedUrl.searchParams.get("v");

        if (videoIdFromQuery) {
            return videoIdFromQuery;
        }

        const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
        const videoPathIndex = pathParts.findIndex((part) =>
            ["shorts", "embed", "live"].includes(part),
        );

        return videoPathIndex >= 0
            ? (pathParts[videoPathIndex + 1] ?? null)
            : null;
    } catch {
        return null;
    }
}

export default function GalleryHeroVideo({ video }: GalleryHeroVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!video.url) {
        return null;
    }

    const videoId = getYouTubeVideoId(video.url);

    if (!videoId) {
        return null;
    }

    const thumbnail =
        video.thumbnailUrl ||
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`;

    return (
        <div className="relative mx-auto w-full md:max-w-80 lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-3 rotate-2 rounded-4xl border border-pink-200/80" />

            <div className="relative aspect-9/16 md:aspect-4/5 overflow-hidden rounded-3xl border border-pink-100 bg-[#292524] shadow-[0_24px_70px_rgba(41,37,36,0.16)] sm:rounded-[1.75rem]">
                {isPlaying ? (
                    <iframe
                        src={embedUrl}
                        title={video.title}
                        className="absolute mx-auto inset-0 size-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setIsPlaying(true)}
                        className="group absolute inset-0 flex size-full items-center justify-center"
                        aria-label={`Play video: ${video.title}`}
                    >
                        <img
                            src={thumbnail}
                            alt=""
                            loading="lazy"
                            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />

                        <span className="relative flex size-16 items-center justify-center rounded-full border border-white/50 bg-white/90 text-[#D94D83] shadow-xl transition-transform duration-300 group-hover:scale-110 sm:size-18">
                            <Play
                                className="ml-1 size-6 fill-current"
                                aria-hidden="true"
                            />
                        </span>

                        <span className="absolute bottom-5 left-5 right-5 text-left text-sm font-medium text-white drop-shadow-md">
                            {video.title}
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
}
