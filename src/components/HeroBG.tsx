import * as React from "react";
import { SVGProps } from "react";

type BGColourProps = {
    primaryFill: string;
    primaryStroke: string;
    secondaryFill: string;
    secondaryStroke: string;
    tertiaryFill: string;
    tertiaryStroke: string;
};

type BGProps = BGColourProps & SVGProps<SVGSVGElement>;

const HeroBG = (props: BGProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1440}
        height={560}
        preserveAspectRatio="none"
        {...props}
    >
        <g fill="none" mask='url("#a")'>
            <path
                fill="url(#c)"
                d="M357.78 21.83h276v276h-276z"
                clipPath='url("#b")'
                transform="rotate(217.01 495.78 159.83)"
            />
            <path
                // stroke="#037b0b"
                className={props.secondaryStroke}
                strokeDasharray="3, 2"
                d="M365.07 154.43a5.6 5.6 0 1 0 2.21 10.98 5.6 5.6 0 1 0-2.21-10.98zm3.15 15.69a5.6 5.6 0 1 0 2.22 10.98 5.6 5.6 0 1 0-2.22-10.98zm3.16 15.68a5.6 5.6 0 1 0 2.22 10.98 5.6 5.6 0 1 0-2.22-10.98zm3.16 15.69a5.6 5.6 0 1 0 2.22 10.98 5.6 5.6 0 1 0-2.22-10.98z"
            />
            <path
                fill="url(#e)"
                d="M64.56 111.53h99.8v99.8h-99.8z"
                clipPath='url("#d")'
                transform="rotate(238.14 114.46 161.43)"
            />
            <circle
                cx={477.39}
                cy={382.29}
                r={60.117}
                // fill="#037b0b"
                className={props.secondaryFill}
            />
            <path
                fill="url(#g)"
                d="M42.07 324.78h192v192h-192z"
                clipPath='url("#f")'
                transform="rotate(34.46 138.07 420.78)"
            />
            <path
                fill="url(#i)"
                d="M539.3 342.96h300v300h-300z"
                clipPath='url("#h")'
                transform="rotate(138.04 689.3 492.96)"
            />
            <path
                fill="url(#k)"
                d="M-159.08-142.28h336v336h-336z"
                clipPath='url("#j")'
                transform="rotate(212.09 8.92 25.72)"
            />
            <circle
                cx={773.82}
                cy={311.49}
                r={70.786}
                // stroke="rgba(66, 68, 90, 1)"
                className={props.tertiaryStroke}
                strokeDasharray="3, 2"
                strokeWidth={2.12}
            />
            <path
                // stroke="#D3B714"
                strokeDasharray="4, 4"
                strokeWidth={2.24}
                className={props.primaryStroke}
                d="M120.29 84.87a5.6 5.6 0 1 0-7.07 8.68 5.6 5.6 0 1 0 7.07-8.68zm-10.11 12.4a5.6 5.6 0 1 0-7.07 8.68 5.6 5.6 0 1 0 7.07-8.68zm-10.11 12.4a5.6 5.6 0 1 0-7.08 8.69 5.6 5.6 0 1 0 7.08-8.69zm-10.11 12.41a5.6 5.6 0 1 0-7.08 8.68 5.6 5.6 0 1 0 7.08-8.68z"
            />
            <path
                // fill="#037b0b"
                className={props.secondaryFill}
                d="M783.98 431.38a5.6 5.6 0 1 0 10.17 4.69 5.6 5.6 0 1 0-10.17-4.69zm14.53 6.7a5.6 5.6 0 1 0 10.17 4.68 5.6 5.6 0 1 0-10.17-4.68zm14.53 6.69a5.6 5.6 0 1 0 10.18 4.69 5.6 5.6 0 1 0-10.18-4.69zm14.54 6.7a5.6 5.6 0 1 0 10.17 4.69 5.6 5.6 0 1 0-10.17-4.69zm-79.36-18.95a5.6 5.6 0 1 0 10.17 4.69 5.6 5.6 0 1 0-10.17-4.69zm14.53 6.7a5.6 5.6 0 1 0 10.18 4.68 5.6 5.6 0 1 0-10.18-4.68zm14.54 6.69a5.6 5.6 0 1 0 10.17 4.69 5.6 5.6 0 1 0-10.17-4.69zm14.53 6.7a5.6 5.6 0 1 0 10.17 4.68 5.6 5.6 0 1 0-10.17-4.68zm-79.36-18.95a5.6 5.6 0 1 0 10.18 4.69 5.6 5.6 0 1 0-10.18-4.69zm14.53 6.69a5.6 5.6 0 1 0 10.18 4.69 5.6 5.6 0 1 0-10.18-4.69zm14.54 6.7a5.6 5.6 0 1 0 10.17 4.69 5.6 5.6 0 1 0-10.17-4.69zm14.53 6.7a5.6 5.6 0 1 0 10.17 4.68 5.6 5.6 0 1 0-10.17-4.68z"
            />
            <path
                // stroke="rgba(66, 68, 90, 1)"
                className={props.tertiaryStroke}
                strokeDasharray="2, 2"
                strokeWidth={2.43}
                d="M1003.44 340.63a5.6 5.6 0 1 0 .91 11.16 5.6 5.6 0 1 0-.91-11.16zm1.31 15.94a5.6 5.6 0 1 0 .91 11.16 5.6 5.6 0 1 0-.91-11.16zm1.31 15.95a5.6 5.6 0 1 0 .91 11.16 5.6 5.6 0 1 0-.91-11.16zm1.3 15.94a5.6 5.6 0 1 0 .92 11.17 5.6 5.6 0 1 0-.92-11.17zm-22.48-78.42a5.6 5.6 0 1 0 .91 11.16 5.6 5.6 0 1 0-.91-11.16zm1.3 15.95a5.6 5.6 0 1 0 .92 11.16 5.6 5.6 0 1 0-.92-11.16zm1.31 15.94a5.6 5.6 0 1 0 .92 11.17 5.6 5.6 0 1 0-.92-11.17zm1.31 15.95a5.6 5.6 0 1 0 .92 11.16 5.6 5.6 0 1 0-.92-11.16zm-22.49-78.42a5.6 5.6 0 1 0 .92 11.16 5.6 5.6 0 1 0-.92-11.16zm1.31 15.94a5.6 5.6 0 1 0 .92 11.17 5.6 5.6 0 1 0-.92-11.17zm1.31 15.95a5.6 5.6 0 1 0 .92 11.16 5.6 5.6 0 1 0-.92-11.16zm1.31 15.95a5.6 5.6 0 1 0 .91 11.16 5.6 5.6 0 1 0-.91-11.16z"
            />
            <path
                // fill="#D3B714"
                className={props.primaryFill}
                d="m1213.29 386.88-40.99-3.28-1.132 23.267z"
            />
        </g>
        <defs>
            <clipPath id="b">
                <circle cx={495.78} cy={159.83} r={69} />
            </clipPath>
            <clipPath id="d">
                <circle cx={114.46} cy={161.43} r={24.95} />
            </clipPath>
            <clipPath id="f">
                <circle cx={138.07} cy={420.78} r={48} />
            </clipPath>
            <clipPath id="h">
                <circle cx={689.3} cy={492.96} r={75} />
            </clipPath>
            <clipPath id="j">
                <circle cx={8.92} cy={25.72} r={84} />
            </clipPath>
            <pattern
                id="c"
                width={6}
                height={6}
                x={0}
                y={0}
                patternUnits="userSpaceOnUse"
            >
                <path
                    fill="none"
                    // stroke="#D3B714"
                    className={props.primaryStroke}
                    d="m0 6 3-6 3 6"
                />
            </pattern>
            <pattern
                id="e"
                width={9.98}
                height={9.98}
                x={0}
                y={0}
                patternUnits="userSpaceOnUse"
            >
                <path
                    fill="none"
                    // stroke="rgba(66, 68, 90, 1)"
                    className={props.tertiaryStroke}
                    strokeWidth={1.17}
                    d="M4.99 1v7.98M1 4.99h7.98"
                />
            </pattern>
            <pattern
                id="g"
                width={6}
                height={6}
                x={0}
                y={0}
                patternUnits="userSpaceOnUse"
            >
                <path
                    fill="none"
                    // stroke="#D3B714"
                    className={props.primaryStroke}
                    d="m0 6 3-6 3 6"
                />
            </pattern>
            <pattern
                id="i"
                width={300}
                height={6}
                x={0}
                y={0}
                patternUnits="userSpaceOnUse"
            >
                <path
                    // fill="rgba(66, 68, 90, 1)"
                    d="M0 0h300v3H0z"
                    className={props.tertiaryFill}
                />
                <path fill="rgba(0, 0, 0, 0)" d="M0 3h300v3H0z" />
            </pattern>
            <pattern
                id="k"
                width={336}
                height={7}
                x={0}
                y={0}
                patternUnits="userSpaceOnUse"
            >
                <path
                    // fill="#037b0b"
                    d="M0 0h336v3.5H0z"
                    className={props.secondaryFill}
                />
                <path fill="rgba(0, 0, 0, 0)" d="M0 3.5h336V7H0z" />
            </pattern>
            <mask id="a">
                <path fill="#fff" d="M0 0h1440v560H0z" />
            </mask>
        </defs>
    </svg>
);
export default HeroBG;
