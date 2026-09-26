import { Heart } from "lucide-react";

export default function Logo() {
    return (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FCE7F3] text-[#DB2777] transition-colors group-hover:bg-[#ffe3ee]">
            <Heart className="h-5 w-5 fill-current" strokeWidth={1.8} />
        </span>
    );
}
