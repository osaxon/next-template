"use client";
import Link from "next/link";
import siteConfig from "@/site.config";
import { useState } from "react";
import { BurgerSwipe } from "react-icons-animated";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const btnThemeMap = new Map();
btnThemeMap.set("default", "btn btn-primary");
btnThemeMap.set("outline", "btn-outline btn btn-accent");

export default function Nav() {
    const [isClosed, setIsClosed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    /* Mobile navigation Style */
    const isHiddenStyle = "hidden";
    const isVisibleStyle =
        "absolute space-y-10 bg-white w-full p-6 left-0 right-0 top-0 min-h-screen text-primary-content";

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 500, damping: 24 },
        },
        closed: { opacity: 0, y: -120, transition: { duration: 0.2 } },
    };

    const { siteTitle, navLinks, navButtons } = siteConfig;

    return (
        <nav className="z-50">
            <div className="relative w-full sm:max-w-7xl sm:mx-auto flex justify-between cursor-pointer items-center p-6">
                <div className="flex-col gap-5 font-bold bg-primary text-base-content h-24 w-24 flex justify-center items-center">
                    <h1 className="text-3xl font-bold font-poppins ">LOGO</h1>
                </div>

                <ul className="gap-4 hidden sm:flex items-center">
                    {navLinks.map(({ label, href }, i) => (
                        <li key={i}>
                            <Link className="link text-2xl" href={href}>
                                {label}
                            </Link>
                        </li>
                    ))}
                    {navButtons.map(({ label, href, style }, i) => (
                        <li key={i}>
                            <Link href={href}>
                                <button className={btnThemeMap.get(style)}>
                                    {label}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* React Icons Animated Container */}
                <motion.button
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    onClick={() => {
                        setIsClosed(!isClosed);
                        setIsOpen(!isOpen);
                        setIsHidden(!isHidden);
                    }}
                    className={
                        isHidden
                            ? "sm:hidden z-50 top-5 right-5 grid w-[50px] h-[50px] place-items-center bg-primary rounded-full"
                            : "sm:hidden z-50 top-5 right-5 grid w-[50px] h-[50px] place-items-center bg-primary rounded-full"
                    }
                >
                    <BurgerSwipe isClosed={isClosed} />
                </motion.button>

                {/* Mobile Menu and Navigation */}
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className="flex z-40 flex-col w-full absolute top-0 left-0 sm:hidden"
                >
                    <motion.ul
                        /* Here is our animation property for the Framer Motion Navigation Menu Container */
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 0px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05,
                                },
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 0px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3,
                                },
                            },
                        }}
                        layout
                        className={isHidden ? isHiddenStyle : isVisibleStyle}
                    >
                        <div className="flex-col gap-5 font-bold bg-primary text-base-content h-24 w-24 flex justify-center items-center">
                            <h1 className="text-3xl font-bold font-poppins ">
                                LOGO
                            </h1>
                        </div>

                        <div className="flex flex-col gap-5 justify-center font-bold text-3xl lg:text-5xl">
                            {navLinks.map(({ label, href }, i) => (
                                <div key={i + 1}>
                                    <motion.li
                                        variants={itemVariants}
                                        className="font-normal font-poppins"
                                    >
                                        <a
                                            href={href}
                                            className="flex gap-5 lg:gap-10 items-center hover:text-primary-focus"
                                        >
                                            {label}
                                        </a>
                                    </motion.li>
                                    <motion.li
                                        variants={itemVariants}
                                        className="h-[0.5px] bg-base-300 w-full my-5"
                                    ></motion.li>
                                </div>
                            ))}
                        </div>

                        <div>
                            {/* Social Links  */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-4 font-normal"
                            >
                                <SocialIcon
                                    url="https://linkedin.com/"
                                    className="w-6 h-6"
                                />
                                <SocialIcon
                                    url="https://twitter.com/"
                                    className="w-6 h-6"
                                />
                                <SocialIcon
                                    url="https://google.com/"
                                    className="w-6 h-6"
                                />
                            </motion.div>
                        </div>
                    </motion.ul>
                </motion.div>
            </div>
        </nav>
    );
}
