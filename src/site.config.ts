type NavButton = {
    label: string;
    href: string;
    style: NavButtonStyle;
};

type NavButtonStyle = "default" | "outline";

type NavLink = {
    label: string;
    href: string;
};

type SiteConfig = {
    clientName: string;
    clientLogo: string;
    siteTitle: string;
    siteDescription: string;
    navLinks: NavLink[];
    navButtons: NavButton[];
    siteTheme: string;
    displayHero: boolean;
    heroText?: string;
    heroImg?: string;
};

const siteConfig: SiteConfig = {
    clientName: "Client name",
    clientLogo: "/logo.png",
    siteTitle: "Site",
    siteDescription: "Description",
    navLinks: [
        {
            label: "About",
            href: "/",
        },
        {
            label: "FAQ",
            href: "/",
        },
    ],
    navButtons: [
        {
            label: "Contact",
            href: "/",
            style: "default",
        },
        {
            label: "Sign up",
            href: "/",
            style: "outline",
        },
    ],
    displayHero: true,
    heroText: "Coming soon!",
    heroImg: "/images/heroImg.jpg",
    siteTheme: "night",
};

export default siteConfig;
