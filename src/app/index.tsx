import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withDelay,
  FadeInDown
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen() {
  const router = useRouter();

  // Animation values
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Start animations - smoother timing
    scale.value = withTiming(1, { duration: 800 });
    opacity.value = withDelay(500, withTiming(1, { duration: 800 }));

    const checkLogin = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

        // Wait for animations + delay
        setTimeout(() => {
          if (isLoggedIn === "true") {
            router.replace("/(tabs)/home");
          } else {
            router.replace("/(auth)/welcome");
          }
        }, 3500);
      } catch (e) {
        // Fallback to welcome on error
        router.replace("/(auth)/welcome");
      }
    };

    checkLogin();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: withTiming(opacity.value * 0, { duration: 800 }) }]
    };
  });

  return (
    <View className="flex-1 bg-white items-center justify-center px-8">
      <View className="items-center gap-6">
        {/* Logo Placeholder */}
        <Animated.View style={[animatedStyle]} className="mb-4">
          <View className="w-24 h-24 bg-[#ABD147] rounded-3xl items-center justify-center shadow-lg shadow-green-200">
            <Text className="text-white text-6xl font-bold">e</Text>
          </View>
        </Animated.View>

        <Animated.Text
          style={[textStyle]}
          className="text-5xl font-extrabold text-gray-800 mb-2 tracking-tight"
        >
          evoliq
        </Animated.Text>

        <View className="items-center gap-3">
          <Animated.View entering={FadeInDown.delay(1000).duration(800)}>
            <Text className="text-xl font-bold text-center" style={{ color: '#ABD147' }}>
              India's Trusted Early Wage Platform
            </Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(1200).duration(800)}>
            <Text className="text-base font-medium text-gray-500 text-center leading-6">
              Instant cash, earned by you — for you.
            </Text>
          </Animated.View>
        </View>
      </View>

      {/* Footer */}
      <Animated.View
        entering={FadeInDown.delay(1500)}
        className="absolute bottom-12"
      >
        <Text className="text-gray-400 font-medium text-sm tracking-widest uppercase">
          Secure • Fast • Reliable
        </Text>
      </Animated.View>
    </View>
  );
}
