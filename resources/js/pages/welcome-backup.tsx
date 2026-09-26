import Navigation from "@/components/landing/navigation";

const whatsappUrl =
    "https://wa.me/6285856459247?text=Hello%20Miss%20Neka%20Nanny%20Bali%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20nanny.%20Date%3A%20%5BDate%5D%20Location%3A%20%5BLocation%20in%20Bali%5D";

import HeroSection from "@/components/landing/hero";
import TrustBadges from "@/components/landing/trust-badges";
import ServicesSection from "@/components/landing/services";
import TestimonialsSection from "@/components/landing/testimonials";
import GallerySection from "@/components/landing/gallery";
import AboutSection, {
    AboutFeature,
    SocialLink,
} from "@/components/landing/about";
import FAQSection, { FAQItem } from "@/components/landing/faq";
import Footer, { FooterContact, FooterLink } from "@/components/landing/footer";

export default function Home() {
    const aboutFeatures: AboutFeature[] = [
        {
            id: 1,
            icon: "shield-check",
            title: "Safety First",
            description: "CPR & First Aid certified",
        },
        {
            id: 2,
            icon: "check",
            title: "Trusted Team",
            description: "Background checked",
        },
        {
            id: 3,
            icon: "heart",
            title: "5+ Years",
            description: "Childcare experience",
        },
        {
            id: 4,
            icon: "users",
            title: "Family Focused",
            description: "Personalised care",
        },
    ];

    const socialLinks: SocialLink[] = [
        {
            id: 1,
            platform: "instagram",
            label: "Instagram",
            url: "https://instagram.com/missnekanannybali",
        },
        {
            id: 2,
            platform: "facebook",
            label: "Facebook",
            url: "https://facebook.com/missnekanannybali",
        },
        {
            id: 3,
            platform: "tiktok",
            label: "TikTok",
            url: "https://tiktok.com/@missnekanannybali",
        },
        {
            id: 4,
            platform: "x",
            label: "X",
            url: "https://x.com/missnekananny",
        },
    ];

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: "Which areas in Bali do you cover?",
            answer: "We primarily serve popular family destinations including Canggu, Seminyak, Kerobokan, Ubud, Sanur, Nusa Dua, Jimbaran and Uluwatu. If you are staying outside these areas, simply contact us via WhatsApp and we will confirm availability and service coverage.",
        },
        {
            id: 2,
            question: "How far in advance should I book a nanny?",
            answer: "We recommend booking as early as possible, especially during high season, school holidays and wedding periods. However, we also understand that travel plans change, so last-minute requests can be checked via WhatsApp based on nanny availability.",
        },
        {
            id: 3,
            question: "What payment methods do you accept?",
            answer: "Payment arrangements can be confirmed directly with our team when you make your booking. We will provide the available payment options, booking details and any applicable terms before your service is confirmed.",
        },
        {
            id: 4,
            question: "Are your nannies CPR and First Aid certified?",
            answer: "Yes. Our service highlights CPR and First Aid certification as part of our commitment to children's safety. Certification details can be discussed and verified with our team when you make your booking.",
        },
        {
            id: 5,
            question: "Are the nannies background checked?",
            answer: "Yes. Background checking is part of our trust and safety standards. We aim to give visiting families confidence that their children are being cared for by responsible and trusted professionals.",
        },
        {
            id: 6,
            question:
                "Can the nanny accompany us to a restaurant, wedding or excursion?",
            answer: "Absolutely. Event, wedding and travel companion services are available depending on your requirements. Share your itinerary, location, dates and children's ages via WhatsApp so we can recommend the appropriate arrangement.",
        },
        {
            id: 7,
            question: "Can I request a nanny who speaks English?",
            answer: "Yes. English communication is an important part of our service for international families visiting Bali. Please mention your language preferences when making your enquiry.",
        },
    ];

    const contact: FooterContact = {
        whatsapp: "6285856459247",
        whatsappUrl: whatsappUrl,
        email: "missnekanannybali@gmail.com",
    };

    const footerLinks: FooterLink[] = [
        {
            id: 1,
            label: "Home",
            href: "#home",
        },
        {
            id: 2,
            label: "About",
            href: "#about",
        },
        {
            id: 3,
            label: "Gallery",
            href: "#gallery",
        },
    ];

    return (
        <>
            <Navigation whatsappUrl={whatsappUrl} />
            <HeroSection whatsappUrl={whatsappUrl} />
            <TrustBadges />
            <ServicesSection whatsappUrl={whatsappUrl} />
            <GallerySection />
            <TestimonialsSection />
            <AboutSection
                image="https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1400&q=90"
                imageAlt="Family enjoying nature in Bali"
                paragraphs={[
                    "Miss Neka and her professional nanny team are dedicated to providing warm, reliable and thoughtful childcare for families in Bali.",
                    "We understand that choosing someone to care for your child while travelling is a deeply personal decision. That is why we focus on safety, communication, professionalism and genuine connection with every family we serve.",
                ]}
                features={aboutFeatures}
                socialLinks={socialLinks}
            />
            <FAQSection items={faqs} whatsappUrl={whatsappUrl} />
            <Footer
                contact={contact}
                navigationLinks={footerLinks}
                services={[]}
            />
        </>
    );
}
