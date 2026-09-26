import { FooterContact } from "@/types/landing-page";
import { usePage } from "@inertiajs/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsappCta() {
    const props = usePage().props;
    const contact: FooterContact = props.footerContact;

    return (
        <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            title="Chat with Miss Neka on WhatsApp"
            aria-label="Chat with Miss Neka on WhatsApp"
            className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-white shadow-2xl shadow-pink-900/30 transition hover:scale-105 sm:bottom-7 sm:right-7"
        >
            <img src="/whatsapp-icon.png" className="h-12 w-12" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 animate-pulse rounded-full border-2 border-white bg-green-600" />
        </a>
    );
}
