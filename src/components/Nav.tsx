import Link from "next/link";
import siteConfig from "@/site.config";

type NavButtonStyle = "default" | "outline";

type NavLink = {
    label: string;
    href: string;
};

const btnThemeMap = new Map();
btnThemeMap.set("default", "btn");
btnThemeMap.set("outline", "btn btn-outline");

type NavButton = {
    label: string;
    href: string;
    style: NavButtonStyle;
};

type NavProps = {
    clientName: string;
    clientLogo: string;
    siteTitle: string;
    siteDescription: string;
    navLinks: NavLink[];
    navButtons: NavButton[];
};

const { siteTitle, navLinks, navButtons } = siteConfig;

export default function Nav() {
    return (
        <nav>
            <div className="max-w-5xl mx-auto flex justify-between py-8 px-4">
                <div className="text-3xl">{siteTitle}</div>
                <div>
                    <ul className="flex gap-x-8 items-center">
                        {navLinks.map(({ label, href }, i) => (
                            <li key={i}>
                                <Link className="link" href={href}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                        {navButtons.map(({ label, href, style }, i) => (
                            <li key={i}>
                                <Link
                                    className={btnThemeMap.get(style)}
                                    href={href}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
