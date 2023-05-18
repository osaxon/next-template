import siteConfig from "@/site.config";
import Image from "next/image";
import imgSrc from "../../public/images/heroImg.jpg";

export default function Hero() {
    const { heroImg, heroText } = siteConfig;
    return (
        <article
            style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
            className="relative h-[66vh] flex"
        >
            <div className="flex items-center justify-between w-full p-12 text-primary-content">
                <span className="grow text-5xl uppercase">{heroText}</span>
                <span>Some other text</span>
            </div>
        </article>
    );
}
