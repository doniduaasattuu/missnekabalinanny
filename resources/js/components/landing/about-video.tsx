import { useMemo, useState } from "react";

import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

import type { AboutVideo } from "@/types/landing-page";

interface AboutVideoProps {
    video: AboutVideo;
}

function getYouTubeVideoId(url: string): string | null {
    try {
        const parsedUrl = new URL(url);

        // https://www.youtube.com/watch?v=VIDEO_ID
        if (
            parsedUrl.hostname === "www.youtube.com" ||
            parsedUrl.hostname === "youtube.com"
        ) {
            if (parsedUrl.pathname === "/watch") {
                return parsedUrl.searchParams.get("v");
            }

            // https://www.youtube.com/embed/VIDEO_ID
            if (parsedUrl.pathname.startsWith("/embed/")) {
                return parsedUrl.pathname.split("/embed/")[1];
            }

            // https://www.youtube.com/shorts/VIDEO_ID
            if (parsedUrl.pathname.startsWith("/shorts/")) {
                return parsedUrl.pathname.split("/shorts/")[1];
            }
        }

        // https://youtu.be/VIDEO_ID
        if (parsedUrl.hostname === "youtu.be") {
            return parsedUrl.pathname.substring(1);
        }

        return null;
    } catch {
        return null;
    }
}

export default function AboutVideoSection({ video }: AboutVideoProps) {
    const [playing, setPlaying] = useState(false);

    const embedUrl = useMemo(() => {
        const videoId = getYouTubeVideoId(video.url);

        if (!videoId) {
            return null;
        }

        const params = new URLSearchParams({
            autoplay: "1",
            rel: "0",
            playsinline: "1",
            controls: "1",
        });

        return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
    }, [video.url]);

    if (!embedUrl) {
        return null;
    }

    return (
        <div className="overflow-hidden bg-white rounded-4xl max-w-7xl mx-auto shadow-xl">
            <div className="relative aspect-video overflow-hidden">
                {!playing ? (
                    <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        className="group absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${video.title}`}
                    >
                        <img
                            src={video.thumbnail_url}
                            alt={video.title}
                            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

                        <span
                            className={cn(
                                "relative flex size-18 items-center justify-center",
                                "rounded-full bg-pink-500 text-white",
                                "shadow-xl",
                                "transition-transform duration-300",
                                "group-hover:scale-110",
                            )}
                        >
                            <Play
                                className="ml-1 size-7 fill-current"
                                aria-hidden="true"
                            />
                        </span>
                    </button>
                ) : (
                    <iframe
                        src={embedUrl}
                        title={video.title}
                        className="size-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
            </div>

            <div className="space-y-2 p-6">
                <p className="font-serif text-xl font-semibold text-slate-950">
                    {video.title}
                </p>

                <p className="text-sm text-slate-500">{video.label}</p>
            </div>
        </div>
    );
}
