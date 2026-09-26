import FloatingWhatsappCta from "@/components/landing/floating-whatsapp-cta";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import {
    About,
    AboutFeatureIcon,
    FooterContact,
    NavigationLink,
    Service,
    SocialLink,
} from "@/types/landing-page";
import { usePage } from "@inertiajs/react";

export default function PublicLayout({
    title = "",
    description = "",
    children,
}: {
    title?: string;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
            <FloatingWhatsappCta />
        </>
    );
}
