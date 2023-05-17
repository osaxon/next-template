import Link from "next/link";
import siteConfig from "@/site.config";

const btnThemeMap = new Map();
btnThemeMap.set("default", "btn");
btnThemeMap.set("outline", "btn btn-outline");

export default function Nav() {
    const { siteTitle, navLinks, navButtons } = siteConfig;

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
