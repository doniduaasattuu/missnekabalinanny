import { cn } from "@/lib/utils";
import { SocialLink } from "@/types/landing-page";
import {
    AtSign,
    Facebook,
    Instagram,
    PlayCircle,
    ThumbsUp,
    Twitter,
    Youtube,
} from "lucide-react";

const socialIconMap = {
    instagram: Instagram,
    facebook: Facebook,
    tiktok: PlayCircle,
    x: Twitter,
    youtube: Youtube,
    threads: AtSign,
    default: ThumbsUp,
} as const;

export default function SocialMedia({
    socialLinks,
    theme = "default",
}: {
    socialLinks: SocialLink[];
    theme?: "default" | "pink";
}) {
    return (
        <>
            {socialLinks.map((social: SocialLink, index: number) => {
                const Icon =
                    socialIconMap?.[social.platform] ?? socialIconMap.default;

                return (
                    <a
                        key={`${social.id}-${index}`}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        title={social.label}
                        className={cn(
                            "flex size-9 items-center justify-center rounded-full ",
                            theme == "pink"
                                ? "bg-[#FDF2F4] text-[#DB2777] transition-all hover:-translate-y-0.5 hover:bg-[#DB2777] hover:text-white"
                                : "border border-[#514B48] text-[#D6CEC9] transition-colors hover:border-[#E8A7B0] hover:bg-[#E8A7B0] hover:text-[#292524]",
                        )}
                    >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                );
            })}
        </>
    );
}
