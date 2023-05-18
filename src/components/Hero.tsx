import siteConfig from "@/site.config";
import Image from "next/image";
import imgSrc from "../../public/images/heroImg.jpg";
import HeroBG from "./HeroBG";

export default function Hero() {
    const { heroImg, heroText } = siteConfig;
    return (
        <article className="relative flex h-[70vh] overflow-hidden">
            {/* BG image */}
            <div className="absolute top-0">
                <HeroBG
                    primaryFill="fill-primary"
                    primaryStroke="stroke-primary"
                    secondaryFill="fill-secondary"
                    secondaryStroke="stroke-secondary"
                    tertiaryFill="fill-accent"
                    tertiaryStroke="stroke-accent"
                />
            </div>

            {/* Text */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between w-full h-[70vh] items-center">
                <span className="grow px-4 justify-center md:justify-start text-center font-mono text-7xl text-secondary-content uppercase h-[50vh] md:h-auto flex items-center">
                    {heroText}
                </span>
                <span className="flex flex-col justify-center items-center bg-secondary bg-opacity-80 h-full w-full md:basis-2/5 rounded-t-full border-t-4 border-x-4 border-warning">
                    <span className="text-5xl text-base-100 font-mono -skew-y-12">
                        Test
                    </span>
                    <span className="text-5xl text-base-100 font-mono -skew-y-12">
                        Test
                    </span>
                    <span className="text-5xl text-base-100 font-mono -skew-y-12">
                        Test
                    </span>
                </span>
            </div>
        </article>
    );
}
