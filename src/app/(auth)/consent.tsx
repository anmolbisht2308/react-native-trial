import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";
import Svg, { Path, Circle } from "react-native-svg";

const { width } = Dimensions.get("window");

function CheckIcon() {
    return (
        <Svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="12" fill="#ABD147" />
            <Path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}

import TopBlur from "../../components/ui/TopBlur";

export default function ConsentScreen() {
    const router = useRouter();

    const handleAllow = () => {
        // Navigate to Home and reset stack
        router.replace("/(tabs)/home");
    };

    return (
        <View className="flex-1 bg-black/50 justify-end relative">
            <TopBlur />
            <StatusBar style="light" />

            {/* Modal Content */}
            <Animated.View
                entering={FadeInDown.duration(600)}
                className="bg-white rounded-t-3xl p-8 items-center"
                style={{ minHeight: 400 }}
            >
                <View className="w-12 h-1 bg-gray-200 rounded-full mb-8" />

                <Animated.View entering={FadeIn.delay(200)} className="mb-6">
                    <CheckIcon />
                </Animated.View>

                <Text className="text-2xl font-bold text-[#052e16] mb-2 text-center">
                    Consent Request
                </Text>

                <Text className="text-gray-500 text-center mb-8 leading-6 px-4">
                    To provide you with the best experience, we need your permission to access your device location and notifications. This helps us ensure secure transactions and timely updates.
                </Text>

                <View className="w-full gap-4">
                    <Pressable
                        onPress={handleAllow}
                        className="w-full bg-[#052e16] py-4 rounded-xl items-center active:opacity-90"
                    >
                        <Text className="text-white font-bold text-lg">Allow Access</Text>
                    </Pressable>

                    <Pressable
                        onPress={handleAllow}
                        className="w-full py-4 rounded-xl items-center active:bg-gray-50"
                    >
                        <Text className="text-gray-500 font-medium text-lg">Maybe Later</Text>
                    </Pressable>
                </View>
            </Animated.View>
        </View>
    );
}
