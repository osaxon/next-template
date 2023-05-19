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
                primaryFill="fill-accent"
                primaryStroke="stroke-accent"
                secondaryFill="fill-primary"
                secondaryStroke="stroke-primary"
                tertiaryFill="fill-secondary"
                tertiaryStroke="stroke-secodary"
                className="absolute top-0 left-0"
            />

            {/* Text */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between w-full h-[70vh] items-center">
                <span className="grow px-4 justify-center md:justify-start text-center font-mono text-7xl base-content uppercase h-[50vh] md:h-auto flex items-center">
                    {heroText}
                </span>

                {/* Shape with text */}
                <span className="flex flex-col justify-center items-center bg-accent bg-opacity-80 h-full w-full md:basis-2/5 rounded-t-full border-t-4 border-x-4 border-accent-content">
                    <span className="text-5xl text-accent-content font-mono -skew-y-12">
                        Test
                    </span>
                    <span className="text-5xl text-accent-content font-mono -skew-y-12">
                        Test
                    </span>
                    <span className="text-5xl text-accent-content font-mono -skew-y-12">
                        Test
                    </span>
                </span>
            </div>
        </article>
    );
}
