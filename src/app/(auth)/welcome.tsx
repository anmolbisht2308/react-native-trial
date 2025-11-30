import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, Pressable, Image, Dimensions } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withDelay,
    withTiming,
    FadeInDown,
    FadeIn
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

import Avatar1 from "../../assets/avatar1.svg";
import Avatar2 from "../../assets/avatar2.svg";
import Avatar3 from "../../assets/avatar3.svg";
import Avatar4 from "../../assets/avatar4.svg";
import Avatar5 from "../../assets/avatar5.svg";

const { width } = Dimensions.get("window");

export default function WelcomeScreen() {
    const router = useRouter();

    // Animation values
    const logoScale = useSharedValue(0);
    const circleScale1 = useSharedValue(0);
    const circleScale2 = useSharedValue(0);
    const circleScale3 = useSharedValue(0);

    useEffect(() => {
        // Staggered animation for circles - smoother timing
        circleScale1.value = withDelay(0, withTiming(1, { duration: 1000 }));
        circleScale2.value = withDelay(200, withTiming(1, { duration: 1000 }));
        circleScale3.value = withDelay(400, withTiming(1, { duration: 1000 }));

        // Logo animation - smooth scale
        logoScale.value = withDelay(600, withTiming(1, { duration: 800 }));
    }, []);

    const logoStyle = useAnimatedStyle(() => ({
        transform: [{ scale: logoScale.value }]
    }));

    const circle1Style = useAnimatedStyle(() => ({ transform: [{ scale: circleScale1.value }] }));
    const circle2Style = useAnimatedStyle(() => ({ transform: [{ scale: circleScale2.value }] }));
    const circle3Style = useAnimatedStyle(() => ({ transform: [{ scale: circleScale3.value }] }));

    return (
        <View className="flex-1 bg-[#052e16] items-center justify-between py-12 relative overflow-hidden">
            <StatusBar style="light" />

            {/* Background Circles */}
            <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
                {/* Outer Ring (Ring 3) */}
                <Animated.View
                    style={[circle3Style, { width: width * 1.8, height: width * 1.8, borderRadius: width * 0.9, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)", position: "absolute" }]}
                >
                    {/* Avatar 5: Top Center */}
                    <View style={{ position: "absolute", top: -20, left: "50%", marginLeft: -20 }}>
                        <Avatar5 width={40} height={40} />
                    </View>
                </Animated.View>

                {/* Middle Ring (Ring 2) */}
                <Animated.View
                    style={[circle2Style, { width: width * 1.4, height: width * 1.4, borderRadius: width * 0.7, borderWidth: 1, borderColor: "rgba(255,255,255,0.08)", position: "absolute" }]}
                >
                    {/* Avatar 3: Top Left */}
                    <View style={{ position: "absolute", top: "15%", left: "15%" }}>
                        <Avatar3 width={45} height={45} />
                    </View>
                    {/* Avatar 4: Bottom Right */}
                    <View style={{ position: "absolute", bottom: "15%", right: "15%" }}>
                        <Avatar4 width={45} height={45} />
                    </View>
                </Animated.View>

                {/* Inner Ring (Ring 1) */}
                <Animated.View
                    style={[circle1Style, { width: width, height: width, borderRadius: width * 0.5, borderWidth: 1, borderColor: "rgba(255,255,255,0.1)", position: "absolute" }]}
                >
                    {/* Avatar 1: Top Right */}
                    <View style={{ position: "absolute", top: "10%", right: "10%" }}>
                        <Avatar1 width={50} height={50} />
                    </View>
                    {/* Avatar 2: Bottom Left */}
                    <View style={{ position: "absolute", bottom: "10%", left: "10%" }}>
                        <Avatar2 width={50} height={50} />
                    </View>
                </Animated.View>
            </View>

            {/* Header Content */}
            <Animated.View entering={FadeInDown.delay(800).duration(800)} className="items-center mt-10 z-10">
                <View className="flex-row items-center gap-2 mb-2">
                    <Text className="text-white/80 text-sm font-medium">Proudly built for Indian workers</Text>
                    <Text className="text-sm">🇮🇳</Text>
                </View>
            </Animated.View>

            {/* Center Logo/Branding */}
            <View className="items-center z-10">
                {/* Floating Avatars (Mock representation) */}
                {/* In a real app, these would be positioned absolutely around the center */}

                <Animated.View style={logoStyle} className="items-center">
                    <View className="flex-row items-center gap-2 mb-4">
                        {/* Logo Icon */}
                        <View className="w-12 h-12 bg-[#ABD147] rounded-tl-2xl rounded-br-2xl items-center justify-center">
                            <Text className="text-[#052e16] text-2xl font-bold">e</Text>
                        </View>
                        <Text className="text-5xl font-bold text-white tracking-tight">evoliq</Text>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeIn.delay(1000)} className="items-center mt-8 px-8">
                    <Text className="text-[#ABD147] text-lg font-semibold text-center mb-2">
                        India's Trusted Early Wage Platform
                    </Text>
                    <Text className="text-white/60 text-center leading-6">
                        Instant cash, earned by you — for you.
                    </Text>
                </Animated.View>
            </View>

            {/* Bottom Actions */}
            <Animated.View entering={FadeInDown.delay(1200).duration(800)} className="w-full px-6 gap-4 z-10">
                <Pressable
                    onPress={() => router.push("/(onboarding)/work-details")}
                    className="w-full bg-[#E8F5D6] py-4 rounded-xl items-center active:opacity-90"
                >
                    <Text className="text-[#052e16] font-bold text-lg">Get Started</Text>
                </Pressable>

                <Pressable
                    onPress={() => router.push("/(auth)/login")}
                    className="w-full border border-white/20 py-4 rounded-xl items-center active:bg-white/5"
                >
                    <Text className="text-white font-medium text-lg">I have an account</Text>
                </Pressable>
            </Animated.View>
        </View>
    );
}
