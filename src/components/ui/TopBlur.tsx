import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { G, Path, Defs, RadialGradient, Stop, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";

const { width } = Dimensions.get("window");
// Maintain aspect ratio: 1058 / 845
const aspectRatio = 1058 / 845;
const svgWidth = width * 1.5; // Make it wider
const svgHeight = svgWidth / aspectRatio;

export default function TopBlur() {
    return (
        <View
            style={{
                position: "absolute",
                top: -svgHeight * 0.5, // Show more of the image (was 0.5)
                left: -(svgWidth - width) / 2, // Center horizontally
                right: 0,
                alignItems: "center",
                // zIndex: -1, // Removed to prevent hiding behind parent backgrounds
                opacity: 1 // Increased opacity for better visibility
            }}
            pointerEvents="none"
        >
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 1058 845"
                fill="none"
            >
                <G opacity="0.7">
                    <G filter="url(#filter0_f_4001_4002)">
                        <Path
                            d="M106.762 625.961C106.762 625.961 208.378 334.848 528.991 422.23C849.605 509.611 951.221 218.498 951.221 218.498"
                            stroke="url(#paint0_radial_4001_4002)"
                            strokeWidth="115.808"
                        />
                    </G>
                    <G filter="url(#filter1_f_4001_4002)">
                        <Path
                            d="M106.762 625.961C106.762 625.961 208.378 334.848 528.991 422.23C849.605 509.611 951.221 218.498 951.221 218.498"
                            stroke="url(#paint1_radial_4001_4002)"
                            strokeWidth="115.808"
                        />
                    </G>
                </G>
                <Defs>
                    <Filter
                        id="filter0_f_4001_4002"
                        x="-3.05176e-05"
                        y="147.044"
                        width="1057.98"
                        height="550.372"
                        filterUnits="userSpaceOnUse"
                    >
                        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                        <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <FeGaussianBlur stdDeviation="26.0568" result="effect1_foregroundBlur_4001_4002" />
                    </Filter>
                    <Filter
                        id="filter1_f_4001_4002"
                        x="46.3231"
                        y="193.367"
                        width="965.337"
                        height="457.726"
                        filterUnits="userSpaceOnUse"
                    >
                        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                        <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <FeGaussianBlur stdDeviation="2.8952" result="effect1_foregroundBlur_4001_4002" />
                    </Filter>
                    <RadialGradient
                        id="paint0_radial_4001_4002"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(514.925 348.323) rotate(109.242) scale(424.146 406.775)"
                    >
                        <Stop offset="0.0479167" stopColor="#ABD147" />
                        <Stop offset="0.846416" stopColor="#E6F3EB" stopOpacity="0" />
                    </RadialGradient>
                    <RadialGradient
                        id="paint1_radial_4001_4002"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(570.742 188.416) rotate(109.242) scale(593.515 569.208)"
                    >
                        <Stop offset="0.0479167" stopColor="#ABD147" />
                        <Stop offset="0.504878" stopColor="#E6F3EB" stopOpacity="0" />
                    </RadialGradient>
                </Defs>
            </Svg>
        </View>
    );
}
