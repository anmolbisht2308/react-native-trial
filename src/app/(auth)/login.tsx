import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import Svg, { Path } from "react-native-svg";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

function BackIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M15 18L9 12L15 6" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}

function LogoIcon() {
    return (
        <View className="w-16 h-16 bg-[#052e16] rounded-tl-2xl rounded-br-2xl items-center justify-center mb-6">
            <Text className="text-[#ABD147] text-3xl font-bold">e</Text>
        </View>
    );
}

export default function LoginScreen() {
    const router = useRouter();
    const [method, setMethod] = useState<"mobile" | "email">("mobile");
    const [inputValue, setInputValue] = useState("");

    const handleNext = () => {
        if (inputValue.length > 0) {
            router.push({ pathname: "/(auth)/otp", params: { method, value: inputValue } });
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 bg-white"
            >
                <StatusBar style="dark" />

                {/* Header */}
                <View className="px-6 pt-14 pb-4">
                    <Pressable
                        onPress={() => router.back()}
                        className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center active:bg-gray-200"
                    >
                        <BackIcon />
                    </Pressable>
                </View>

                <View className="flex-1 px-8 pt-4">
                    {/* Logo & Title */}
                    <Animated.View entering={FadeInDown.duration(600)} className="items-center">
                        <LogoIcon />
                        <Text className="text-2xl font-bold text-[#052e16] mb-2">Sign in to your account</Text>
                        <Text className="text-gray-500 text-center mb-10">
                            Enter your {method === "mobile" ? "mobile no." : "email"} and password to log in
                        </Text>
                    </Animated.View>

                    {/* Input Field */}
                    <Animated.View entering={FadeInDown.delay(200).duration(600)} className="w-full">
                        <Text className="text-sm font-medium text-gray-700 mb-2">
                            {method === "mobile" ? "Mobile No." : "Email ID"}
                        </Text>

                        <View className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3.5 bg-white focus:border-[#052e16]">
                            {method === "mobile" && (
                                <Text className="text-gray-900 font-medium mr-3 border-r border-gray-200 pr-3">+91</Text>
                            )}
                            <TextInput
                                className="flex-1 text-base text-gray-900"
                                placeholder={method === "mobile" ? "Enter Phone No." : "Enter Email ID"}
                                placeholderTextColor="#9CA3AF"
                                keyboardType={method === "mobile" ? "number-pad" : "email-address"}
                                autoCapitalize="none"
                                value={inputValue}
                                onChangeText={setInputValue}
                            />
                        </View>
                    </Animated.View>

                    {/* Next Button */}
                    <Animated.View entering={FadeInDown.delay(400).duration(600)} className="w-full mt-8">
                        <Pressable
                            onPress={handleNext}
                            className={`w-full py-4 rounded-xl items-center ${inputValue.length > 0 ? "bg-[#052e16]" : "bg-[#052e16]/50"}`}
                            disabled={inputValue.length === 0}
                        >
                            <Text className="text-white font-bold text-lg">Next</Text>
                        </Pressable>
                    </Animated.View>

                    {/* Divider */}
                    <Animated.View entering={FadeIn.delay(600)} className="flex-row items-center my-8">
                        <View className="flex-1 h-[1px] bg-gray-200" />
                        <Text className="mx-4 text-gray-400 text-sm">Or</Text>
                        <View className="flex-1 h-[1px] bg-gray-200" />
                    </Animated.View>

                    {/* Switch Method */}
                    <Animated.View entering={FadeInDown.delay(800).duration(600)} className="items-center">
                        <Pressable onPress={() => {
                            setMethod(method === "mobile" ? "email" : "mobile");
                            setInputValue("");
                        }}>
                            <Text className="text-gray-600">
                                Continue with <Text className="text-[#ABD147] font-bold">{method === "mobile" ? "Work-Email" : "Mobile No."}</Text>
                            </Text>
                        </Pressable>
                    </Animated.View>
                </View>

                {/* Footer */}
                <View className="pb-8 items-center">
                    <View className="flex-row items-center gap-2 mb-4">
                        <View className="w-4 h-4 border border-[#ABD147] rounded-sm items-center justify-center">
                            <View className="w-2 h-2 bg-[#ABD147] rounded-[1px]" />
                        </View>
                        <Text className="text-gray-400 text-xs">100% Safe & Secure</Text>
                    </View>
                    <Text className="text-gray-400 text-xs text-center px-8">
                        By clicking Next, you are agree to our <Text className="text-[#ABD147]">Terms & Conditions.</Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
