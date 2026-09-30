import AboutSection, { AboutSectionProps } from "@/components/landing/about";
import FAQSection from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import GallerySection from "@/components/landing/gallery";
import HeroSection from "@/components/landing/hero";
import Navigation from "@/components/landing/navigation";
import ServicesSection from "@/components/landing/services";
import TestimonialsSection from "@/components/landing/testimonials";
import TrustBadges from "@/components/landing/trust-badges";
import AboutVideoSection from "@/components/landing/about-video";

import {
    AboutFeature,
    AboutVideo,
    FaqItem,
    FooterContact,
    GalleryItem,
    HeroSlide,
    Service,
    ServicesBanner,
    SocialLink,
    Testimonial,
    TrustBadge,
} from "@/types/landing-page";

export type LandingPageProps = {
    whatsappUrl: string;

    heroSlides: HeroSlide[];
    trustBadges: TrustBadge[];
    services: Service[];
    servicesBanner?: ServicesBanner;
    galleryItems: GalleryItem[];
    testimonials: Testimonial[];

    about: {
        image: string;
        imageAlt?: string;
        video?: string;
        videoAlt?: string;
        paragraphs: string[];
        features: AboutFeature[];
        socialLinks: SocialLink[];
        quote?: string;
        quoteAuthor?: string;
    };

    aboutVideo: AboutVideo;

    faqItems: FaqItem[];

    footerContact: FooterContact;
    coverageAreas?: string[];
};

export default function LandingPage({
    whatsappUrl,
    heroSlides,
    trustBadges,
    services,
    servicesBanner,
    galleryItems,
    testimonials,
    about,
    aboutVideo,
    faqItems,
}: LandingPageProps) {
    return (
        <div className="min-h-screen bg-[#FFF9F5] text-[#292524]">
            <main>
                <HeroSection slides={heroSlides} whatsappUrl={whatsappUrl} />

                <TrustBadges badges={trustBadges} />

                <AboutSection
                    image={about.image}
                    imageAlt={about.imageAlt}
                    features={about.features}
                    paragraphs={about.paragraphs}
                    socialLinks={about.socialLinks}
                    quote={about.quote}
                    quoteAuthor={about.quoteAuthor}
                    video={aboutVideo}
                />

                <ServicesSection
                    services={services}
                    whatsappUrl={whatsappUrl}
                    banner={servicesBanner}
                />

                <GallerySection items={galleryItems} />

                <TestimonialsSection testimonials={testimonials} />

                <FAQSection items={faqItems} whatsappUrl={whatsappUrl} />
            </main>
        </div>
    );
}
