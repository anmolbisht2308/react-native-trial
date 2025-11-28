import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withSequence,
  withTiming,
  Easing,
  FadeInDown,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  // Shared values for animations
  const logoScale = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const textTranslateY = useSharedValue(20);
  const subTextOpacity = useSharedValue(0);

  useEffect(() => {
    // 1. Logo Animation
    logoScale.value = withSpring(1, { damping: 12, stiffness: 90 });
    logoOpacity.value = withTiming(1, { duration: 800 });

    // 2. Main Text Animation (delayed)
    textOpacity.value = withDelay(
      600,
      withTiming(1, { duration: 800, easing: Easing.out(Easing.exp) })
    );
    textTranslateY.value = withDelay(
      600,
      withSpring(0, { damping: 12, stiffness: 90 })
    );

    // 3. Subtext Animation (delayed further)
    subTextOpacity.value = withDelay(
      1200,
      withTiming(1, { duration: 800 })
    );

    // Navigation timer
    const timer = setTimeout(() => {
      router.replace("/(tabs)/home");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: logoScale.value }],
      opacity: logoOpacity.value,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
      transform: [{ translateY: textTranslateY.value }],
    };
  });

  const subTextStyle = useAnimatedStyle(() => {
    return {
      opacity: subTextOpacity.value,
    };
  });

  return (
    <View className="flex-1 bg-white items-center justify-center px-6 relative">
      <StatusBar style="dark" />

      {/* Decorative Background Elements - Subtle Gradients/Shapes could go here */}
      <View className="absolute top-0 left-0 right-0 h-1/3 bg-gray-50 rounded-b-[100px] opacity-50 scale-x-150" />

      <View className="items-center z-10">
        {/* Logo Representation */}
        <Animated.View style={[logoStyle]} className="mb-8">
          {/* Placeholder for a real logo image, using a stylized text/shape for now */}
          <View className="w-24 h-24 bg-[#ABD147] rounded-3xl items-center justify-center shadow-lg shadow-[#ABD147]/40 rotate-12">
            <Text className="text-white text-5xl font-bold italic -rotate-12">e</Text>
          </View>
        </Animated.View>

        <Animated.View style={[textStyle]} className="items-center gap-2">
          <Text className="text-5xl font-extrabold text-gray-900 tracking-tight">
            evoliq
          </Text>

          <View className="h-1 w-12 bg-[#ABD147] rounded-full mt-2" />
        </Animated.View>

        <Animated.View style={[subTextStyle]} className="items-center mt-8 gap-4">
          <Text className="text-xl font-medium text-gray-800 text-center px-4">
            India's Trusted <Text className="text-[#ABD147] font-bold">Early Wage</Text> Platform
          </Text>

          <Text className="text-base text-gray-500 text-center leading-relaxed max-w-[80%]">
            Instant cash, earned by you — for you.
          </Text>
        </Animated.View>
      </View>

      {/* Footer / Loading Indicator */}
      <Animated.View
        entering={FadeInDown.delay(2000).duration(1000)}
        className="absolute bottom-12 items-center"
      >
        <Text className="text-xs text-gray-400 font-medium tracking-widest uppercase">
          Secure • Fast • Reliable
        </Text>
      </Animated.View>
    </View>
  );
}
