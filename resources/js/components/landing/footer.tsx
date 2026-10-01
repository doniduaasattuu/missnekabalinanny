import { useIsMobile } from "@/hooks/use-mobile";
import {
    FooterContact,
    NavigationLink,
    Service,
    SocialLink,
} from "@/types/landing-page";
import { usePage } from "@inertiajs/react";
import {
    AtSign,
    Facebook,
    Heart,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    PlayCircle,
    ThumbsUp,
    Twitter,
    Youtube,
} from "lucide-react";
import SocialMedia from "./social-media";

export type FooterSectionProps = {
    brandName?: string;
    brandDescription?: string;
    // navigationLinks: NavigationLink[];
    // services: Service[];
    // socialLinks?: SocialLink[];
    // contact: FooterContact;
    coverageAreas?: string[];
    copyrightName?: string;
    privacyHref?: string;
    termsHref?: string;
};

export default function Footer({
    coverageAreas = [
        "Canggu",
        "Seminyak",
        "Ubud",
        "Nusa Dua",
        "Sanur",
        "Uluwatu",
        "Jimbaran",
    ],
    copyrightName = "Miss Neka Nanny Bali",
    privacyHref = "#",
    termsHref = "#",
}: FooterSectionProps) {
    const isMobile = useIsMobile();
    const currentYear = new Date().getFullYear();
    const props = usePage().props;
    const socialLinks: SocialLink[] = props.socialLinks;
    const navigationLinks: NavigationLink[] = props.navigationLinks;
    const services: Service[] = props.services;
    const contact: FooterContact = props.footerContact;
    const brand = props.brand;
    const brandName = brand.fullName;
    const brandDescription = brand.description;

    return (
        <footer className="bg-[#292524] text-[#FFF9F5]">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="inline-flex items-center gap-2"
                            aria-label={`${brandName} home`}
                        >
                            <span className="flex size-10 items-center justify-center rounded-full bg-[#E8A7B0] text-[#292524]">
                                <Heart
                                    className="size-5 fill-current"
                                    aria-hidden="true"
                                />
                            </span>

                            <span>
                                <span className="block font-serif text-xl leading-none">
                                    {brandName}
                                </span>

                                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-[#BEB5B0]">
                                    Premium Childcare in Bali
                                </span>
                            </span>
                        </a>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-[#CFC6C1]">
                            {brandDescription}
                        </p>

                        {socialLinks.length > 0 && (
                            <div className="mt-7 flex items-center gap-2">
                                <SocialMedia socialLinks={socialLinks} />
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#FFF9F5]">
                            Quick Navigation
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {navigationLinks.map((link) =>
                                link.is_direct ? (
                                    <li key={link.id}>
                                        <a
                                            href={link.url}
                                            className="text-sm text-[#BEB5B0] transition-colors hover:text-[#E8A7B0]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ) : (
                                    <li key={link.id}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-[#BEB5B0] transition-colors hover:text-[#E8A7B0]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>

                    {/* Services */}
                    {!isMobile && (
                        <div>
                            <h3 className="text-sm font-semibold text-[#FFF9F5]">
                                Our Services
                            </h3>

                            <ul className="mt-5 space-y-3">
                                {services.map((service) => (
                                    <li key={service.id}>
                                        {service.href ? (
                                            <a
                                                href={service.href}
                                                className="text-sm text-[#BEB5B0] transition-colors hover:text-[#E8A7B0]"
                                            >
                                                {service.label}
                                            </a>
                                        ) : (
                                            <span className="text-sm text-[#BEB5B0]">
                                                {service.label}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#FFF9F5]">
                            Get in Touch
                        </h3>

                        <div className="mt-5 space-y-4">
                            {contact.whatsapp && (
                                <a
                                    href={contact.whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-start gap-3 text-sm text-[#BEB5B0] transition-colors hover:text-[#E8A7B0]"
                                >
                                    <MessageCircle className="mt-0.5 size-4 shrink-0" />
                                    <span>{contact.whatsapp}</span>
                                </a>
                            )}

                            {contact.email && (
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-start gap-3 text-sm text-[#BEB5B0] transition-colors hover:text-[#E8A7B0]"
                                >
                                    <Mail className="mt-0.5 size-4 shrink-0" />
                                    <span>{contact.email}</span>
                                </a>
                            )}

                            {contact.location && (
                                <div className="flex items-start gap-3 text-sm text-[#BEB5B0]">
                                    <MapPin className="mt-0.5 size-4 shrink-0" />
                                    <span>{contact.location}</span>
                                </div>
                            )}
                        </div>

                        <a
                            href={contact.whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E8A7B0] px-5 py-2.5 text-sm font-semibold text-[#292524] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F1B8C0] hover:shadow-lg"
                        >
                            <MessageCircle className="size-4" />
                            Book via WhatsApp
                        </a>
                    </div>
                </div>

                {/* Coverage */}
                {coverageAreas.length > 0 && (
                    <div className="mt-14 border-t border-[#514B48] pt-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-center gap-2 text-sm font-medium text-[#FFF9F5]">
                                <MapPin className="size-4 text-[#E8A7B0]" />
                                Areas We Cover
                            </div>

                            <div className="flex max-w-3xl flex-wrap gap-x-5 gap-y-2">
                                {coverageAreas.map((area) => (
                                    <span
                                        key={area}
                                        className="text-sm text-[#BEB5B0]"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Bottom */}
                {/* <div className="mt-10 flex flex-col gap-4 border-t border-[#514B48] pt-6 text-xs text-[#928984] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        ©{currentYear} {copyrightName}. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <a
                            href={privacyHref}
                            className="transition-colors hover:text-[#E8A7B0]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href={termsHref}
                            className="transition-colors hover:text-[#E8A7B0]"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div> */}
            </div>

            <div className="border-t border-[#514B48] px-5 text-center text-xs text-[#756D69] space-y-3 py-4">
                <p>
                    ©{currentYear} {copyrightName}. All rights reserved.
                </p>
                <span>
                    Made with care in Bali{" "}
                    <Heart
                        className="mx-1 inline-block size-3 fill-[#E8A7B0] text-[#E8A7B0]"
                        aria-hidden="true"
                    />{" "}
                    for families from around the world.
                </span>
            </div>
        </footer>
    );
}
