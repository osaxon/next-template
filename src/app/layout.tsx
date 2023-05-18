import dynamic from "next/dynamic";
import "./globals.css";
import Nav from "@/components/Nav";
import siteConfig from "@/site.config";

// only load Announcement component if displayAnnuncement property is set to true
const Hero = dynamic(() => import("../components/Hero"), {
    ssr: false,
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme={siteConfig.siteTheme}>
            <body>
                <Nav />
                {siteConfig.displayHero && <Hero />}
                {children}
            </body>
        </html>
    );
}
