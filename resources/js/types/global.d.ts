import type { Auth } from "@/types/auth";
import {
    FooterContact,
    NavigationLink,
    Service,
    SocialLink,
} from "./landing-page";

declare module "react" {
    interface InputHTMLAttributes<T> {
        passwordrules?: string;
    }
}

declare module "@inertiajs/core" {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            brand: {
                fullName: string;
                firstName: string;
                lastName: string;
                subtitle: string;
                description: string;
            };
            auth: Auth;
            sidebarOpen: boolean;
            navigationLinks: NavigationLink[];
            whatsappUrl: string;
            services: Service[];
            socialLinks: SocialLink[];
            footerContact: FooterContact;
            coverageAreas: string[];
            [key: string]: unknown;
        };
    }
}
