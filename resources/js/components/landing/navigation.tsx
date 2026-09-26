import { Heart, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export type NavigationItem = {
    label: string;
    href: string;
};

export type NavigationProps = {
    brandName?: string;
    brandSubtitle?: string;
    navigationItems?: NavigationItem[];
    whatsappUrl: string;
};

const defaultNavigationItems: NavigationItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];

export default function Navigation({
    brandName = "Miss Neka",
    brandSubtitle = "Nanny Bali",
    navigationItems = defaultNavigationItems,
    whatsappUrl,
}: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const handleNavigation = (href: string) => {
        setMobileMenuOpen(false);

        const element = document.querySelector(href);

        element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl">
            <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                {/* Brand */}
                <button
                    type="button"
                    onClick={() => handleNavigation("#home")}
                    className="group flex items-center gap-3 text-left"
                    aria-label={`Go to ${brandName} homepage`}
                >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F4] text-[#DB2777] transition-colors group-hover:bg-[#FCE7F3]">
                        <Heart
                            className="h-5 w-5 fill-current"
                            strokeWidth={1.8}
                        />
                    </span>

                    <span className="leading-tight">
                        <span
                            className="block text-lg font-semibold text-[#111827]"
                            style={{
                                fontFamily:
                                    "'Playfair Display', Georgia, serif",
                            }}
                        >
                            {brandName}
                        </span>

                        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DB2777]">
                            {brandSubtitle}
                        </span>
                    </span>
                </button>

                {/* Desktop Navigation */}
                <nav
                    className="hidden items-center gap-7 lg:flex"
                    aria-label="Main navigation"
                >
                    {navigationItems.map((item) => (
                        <button
                            key={item.href}
                            type="button"
                            onClick={() => handleNavigation(item.href)}
                            className="text-[13px] font-semibold text-gray-600 transition-colors hover:text-[#DB2777]"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all hover:-translate-y-0.5 hover:bg-[#DB2777]"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Book via WhatsApp
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen((open) => !open)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F4] text-[#111827] transition-colors hover:bg-[#FCE7F3] lg:hidden"
                    aria-label={
                        mobileMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {mobileMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                id="mobile-navigation"
                className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
                    mobileMenuOpen
                        ? "max-h-150 opacity-100"
                        : "max-h-0 opacity-0"
                }`}
                aria-hidden={!mobileMenuOpen}
            >
                <nav className="px-5 pb-5 pt-3" aria-label="Mobile navigation">
                    {navigationItems.map((item) => (
                        <button
                            key={item.href}
                            type="button"
                            onClick={() => handleNavigation(item.href)}
                            tabIndex={mobileMenuOpen ? 0 : -1}
                            className="block w-full border-b border-gray-100 py-4 text-left text-sm font-semibold text-gray-700 transition-colors hover:text-[#DB2777]"
                        >
                            {item.label}
                        </button>
                    ))}

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        tabIndex={mobileMenuOpen ? 0 : -1}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#DB2777] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#BE185D]"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Book via WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    );
}
