import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import Svg, { Path } from "react-native-svg";
import Animated, { FadeInDown } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

export default function OTPScreen() {
    const router = useRouter();
    const { method, value } = useLocalSearchParams();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<Array<TextInput | null>>([]);
    const [timer, setTimer] = useState(141); // 2:21

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `0${mins}:${secs < 10 ? `0${secs}` : secs}`;
    };

    const handleOtpChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length === 1 && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (text: string, index: number) => {
        if (text.length === 0 && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = async () => {
        const otpString = otp.join("");
        if (otpString.length === 6) {
            // Mock verification success
            try {
                await AsyncStorage.setItem("isLoggedIn", "true");
                await AsyncStorage.setItem("userMethod", method as string);
                await AsyncStorage.setItem("userValue", value as string);

                // Navigate to Consent Popup first, which will then go to Home
                router.replace("/(auth)/consent");
            } catch (e) {
                console.error("Failed to save login state", e);
            }
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
                        <Text className="text-2xl font-bold text-[#052e16] mb-2">Enter OTP</Text>
                        <Text className="text-gray-500 text-center mb-2">
                            Please enter the OTP to create your new password.
                        </Text>
                        <Text className="text-gray-400 text-center text-xs px-4 mb-10 leading-5">
                            For your security, we've sent a One-Time Password (OTP) to your {method === "mobile" ? "mobile number" : "email"}. Please enter it to verify.
                        </Text>
                    </Animated.View>

                    {/* OTP Inputs */}
                    <Animated.View entering={FadeInDown.delay(200).duration(600)} className="flex-row justify-between mb-8">
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={(ref: any) => (inputRefs.current[index] = ref)}
                                className={`w-12 h-12 border ${digit ? "border-[#052e16] bg-[#052e16]/5" : "border-gray-200 bg-white"} rounded-xl text-center text-lg font-bold text-[#052e16]`}
                                keyboardType="number-pad"
                                maxLength={1}
                                value={digit}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === 'Backspace') {
                                        handleBackspace(digit, index);
                                    }
                                }}
                            />
                        ))}
                    </Animated.View>

                    {/* Timer */}
                    <Animated.View entering={FadeInDown.delay(400).duration(600)} className="items-center mb-8">
                        <Text className="text-gray-600 font-medium">
                            OTP expires in <Text className="text-[#ABD147]">{formatTime(timer)}</Text>
                        </Text>
                    </Animated.View>

                    {/* Verify Button */}
                    <Animated.View entering={FadeInDown.delay(600).duration(600)} className="w-full">
                        <Pressable
                            onPress={handleVerify}
                            className={`w-full py-4 rounded-xl items-center ${otp.join("").length === 6 ? "bg-[#052e16]" : "bg-[#052e16]/50"}`}
                            disabled={otp.join("").length !== 6}
                        >
                            <Text className="text-white font-bold text-lg">Verify OTP</Text>
                        </Pressable>
                    </Animated.View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
