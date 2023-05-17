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
};

const siteConfig: SiteConfig = {
    clientName: "Client name",
    clientLogo: "/logo.png",
    siteTitle: "Testing",
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
    siteTheme: "lofi",
};

export default siteConfig;
