import Navigation from "@/components/landing/navigation";
import HeroSection, { type HeroSlide } from "@/components/landing/hero";
import TrustBadges, {
    type TrustBadge,
} from "@/components/landing/trust-badges";
import ServicesSection, {
    type Service,
    type ServicesBanner,
} from "@/components/landing/services";
import GallerySection, { type GalleryItem } from "@/components/landing/gallery";
import TestimonialsSection, {
    type Testimonial,
} from "@/components/landing/testimonials";
import AboutSection, {
    type AboutFeature,
    type SocialLink,
} from "@/components/landing/about";
import FAQSection, { type FAQItem } from "@/components/landing/faq";
import Footer, {
    type FooterLink,
    type FooterService,
    type FooterSocialLink,
    type FooterContact,
} from "@/components/landing/footer";

export type LandingPageProps = {
    whatsappUrl: string;

    heroSlides: HeroSlide[];
    trustBadges: TrustBadge[];
    services: Service[];
    servicesBanner?: ServicesBanner;
    galleryItems: GalleryItem[];
    testimonials: Testimonial[];

    aboutImage: string;
    aboutImageAlt?: string;
    aboutFeatures: AboutFeature[];
    aboutParagraphs: string[];
    aboutSocialLinks?: SocialLink[];
    aboutQuote?: string;
    aboutQuoteAuthor?: string;

    faqItems: FAQItem[];

    navigationLinks: FooterLink[];
    footerServices: FooterService[];
    footerSocialLinks?: FooterSocialLink[];
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
    aboutImage,
    aboutImageAlt,
    aboutFeatures,
    aboutParagraphs,
    aboutSocialLinks,
    aboutQuote,
    aboutQuoteAuthor,
    faqItems,
    navigationLinks,
    footerServices,
    footerSocialLinks,
    footerContact,
    coverageAreas,
}: LandingPageProps) {
    return (
        <div className="min-h-screen bg-[#FFF9F5] text-[#292524]">
            <Navigation whatsappUrl={whatsappUrl} />

            <main>
                <HeroSection slides={heroSlides} whatsappUrl={whatsappUrl} />

                <TrustBadges badges={trustBadges} />

                <ServicesSection
                    services={services}
                    whatsappUrl={whatsappUrl}
                    banner={servicesBanner}
                />

                <GallerySection items={galleryItems} />

                <TestimonialsSection testimonials={testimonials} />

                <AboutSection
                    image={aboutImage}
                    imageAlt={aboutImageAlt}
                    features={aboutFeatures}
                    paragraphs={aboutParagraphs}
                    socialLinks={aboutSocialLinks}
                    quote={aboutQuote}
                    quoteAuthor={aboutQuoteAuthor}
                />

                <FAQSection items={faqItems} whatsappUrl={whatsappUrl} />
            </main>

            <Footer
                navigationLinks={navigationLinks}
                services={footerServices}
                socialLinks={footerSocialLinks}
                contact={footerContact}
                coverageAreas={coverageAreas}
            />
        </div>
    );
}
