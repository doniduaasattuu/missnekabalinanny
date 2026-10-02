// resources/js/types/landing-page.ts

import { Facebook, Instagram, PlayCircle, Twitter } from "lucide-react";

export type SiteSettingType = "string" | "text" | "url";

export interface SiteSetting {
    id: number;
    key: string;
    value: string | null;
    type: SiteSettingType;
    created_at: string;
    updated_at: string;
}

export interface NavigationLink {
    id: number;
    label: string;
    href: string;
    url: string;
    is_direct: boolean;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface HeroSlide {
    id: number;
    eyebrow: string | null;
    title: string;
    accent: string | null;
    description: string | null;
    image: string;
    image_alt: string | null;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type TrustBadgeIcon = "shield-check" | "check" | "clock" | "users";

export interface TrustBadge {
    id: number;
    value: string;
    label: string;
    icon: TrustBadgeIcon;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type ServiceIcon =
    | "sun"
    | "moon"
    | "heart"
    | "map-pin"
    | "hotel"
    | "gem"
    | "drama"
    | "wavesladder"
    | "paintbrush"
    | "custom";

export type ServicesBanner = {
    title: string;
    description: string;
};

export interface Service {
    id: number;
    title: string;
    label: string;
    href?: string;
    description: string | null;
    features: string[];
    icon: ServiceIcon;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface GalleryItem {
    id: number;
    image: string;
    title: string;
    description: string | null;
    imageAlt: string | null;
}

export interface Testimonial {
    id: number;
    name: string;
    country: string;
    quote: string;
    avatar: string | null;
    avatar_alt: string | null;
    rating: number;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface About {
    image: string;
    imageAlt: string;
    video: string;
    videoAlt: string;
    paragraphs: string[];
    features: AboutFeature[];
    socialLinks: SocialLink[];
    quote: string;
    quoteAuthor: string;
}

export type AboutFeatureIcon = "shield-check" | "check" | "heart" | "users";

export interface AboutFeature {
    id: number;
    title: string;
    description: string | null;
    icon: AboutFeatureIcon;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type SocialPlatform = "instagram" | "facebook" | "tiktok" | "x";

export interface SocialLink {
    id: number;
    platform: SocialPlatform;
    label: string;
    url: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface CoverageArea {
    id: number;
    name: string;
    sort_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type FooterContact = {
    whatsapp?: string;
    whatsappUrl: string;
    email?: string;
    location?: string;
};

export type FooterService = {
    id: string | number;
    label: string;
    href?: string;
};

export type FooterLink = {
    id: string | number;
    label: string;
    href: string;
};

export interface AboutVideo {
    id: string;
    url: string;
    thumbnail_url: string;
    title: string;
    label: string;
    is_active: boolean;
}
