import { usePage } from "@inertiajs/react";

import AppLogoIcon from "@/components/app-logo-icon";
import Logo from "./landing/logo";

export default function AppLogo() {
    const { name } = usePage().props;

    return (
        <>
            <div className="flex aspect-square rounded-full items-center justify-center bg-sidebar-primary text-sidebar-primary-foreground">
                {/* <AppLogoIcon className="size-5 fill-current text-white dark:text-black" /> */}
                <Logo />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    {name}
                </span>
            </div>
        </>
    );
}
