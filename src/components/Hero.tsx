import siteConfig from "@/site.config";
import Image from "next/image";
import imgSrc from "../../public/images/heroImg.jpg";
import HeroBG from "./HeroBG";

export default function Hero() {
    const { heroImg, heroText } = siteConfig;
    return (
        <article className="relative flex h-[70vh] overflow-hidden">
            {/* BG image */}
            <HeroBG
                primaryfill="fill-primary"
                primarystroke="stroke-primary"
                secondaryfill="fill-secondary"
                secondarystroke="stroke-secondary"
                tertiaryfill="fill-accent"
                tertiarystroke="stroke-accent"
                className="absolute top-0 right-0 -scale-x-100"
            />

            {/* Hero text */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between w-full h-[70vh] items-center">
                <span className="px-6 justify-center md:justify-start font-mono text-7xl base-content uppercase h-[50vh] md:h-auto flex items-center">
                    {heroText}
                </span>

                {/* Shape with text */}
                <span className="bg-neutral flex items-center justify-center bg-opacity-80 h-full w-full rounded-t-full border-t-4 border-x-4 border-accent-content grow-0">
                    <div className="flex flex-col border-2 p-20 rounded-t-full justify-center items-center">
                        <span className="text-5xl text-accent-content font-mono -skew-y-12">
                            Test
                        </span>
                        <span className="text-5xl text-accent-content font-mono -skew-y-12">
                            Test
                        </span>
                        <span className="text-5xl text-accent-content font-mono -skew-y-12">
                            Test
                        </span>
                    </div>
                </span>
            </div>
        </article>
    );
}
