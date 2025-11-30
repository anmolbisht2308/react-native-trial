import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, ChevronRight, Search } from "lucide-react-native";
import { StatusBar } from "expo-status-bar";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { RadioGroup } from "../../components/ui/RadioGroup";

import Logo from "../../assets/logo.svg";

const LogoContainer = () => (
    <View className="mb-6">
        <Logo width={64} height={64} />
    </View>
);

export default function WorkDetailsScreen() {
    const router = useRouter();
    const [companyName, setCompanyName] = useState("");
    const [fullName, setFullName] = useState("");
    const [verificationMethod, setVerificationMethod] = useState("employee_id");
    const [verificationValue, setVerificationValue] = useState("");

    const verificationOptions = [
        { label: "Employee ID", value: "employee_id" },
        { label: "Mobile", value: "mobile" },
        { label: "Work Email", value: "work_email" },
    ];

    const getVerificationLabel = () => {
        switch (verificationMethod) {
            case "employee_id": return "Employee ID";
            case "mobile": return "Mobile No.";
            case "work_email": return "Work Email";
            default: return "";
        }
    };

    const getVerificationPlaceholder = () => {
        switch (verificationMethod) {
            case "employee_id": return "Employee ID";
            case "mobile": return "Enter Phone No.";
            case "work_email": return "Enter Email ID";
            default: return "";
        }
    };

    const handleNext = () => {
        router.push("/(onboarding)/consent");
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style="dark" />

            {/* Header */}
            <View className="px-6 py-4">
                <Pressable
                    onPress={() => router.back()}
                    className="w-10 h-10 bg-gray-100 rounded-xl items-center justify-center active:bg-gray-200"
                >
                    <ChevronLeft size={24} color="#1f2937" />
                </Pressable>
            </View>

            <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
                <View className="items-center mt-4">
                    <LogoContainer />
                    <Text className="text-2xl font-bold text-[#052e16] mb-2">Work Details</Text>
                    <Text className="text-gray-500 text-center mb-8">Tell us about your workplace</Text>
                </View>

                <View className="gap-6">
                    {/* Company Name Search */}
                    <View className="gap-2">
                        <Text className="text-gray-900 font-medium text-base">Company Name</Text>
                        <Pressable className="flex-row items-center border border-gray-200 rounded-xl px-4 py-3.5 bg-white active:bg-gray-50">
                            <Text className="flex-1 text-gray-400 text-base">Search or enter company name</Text>
                            <ChevronRight size={20} color="#9CA3AF" />
                        </Pressable>
                        <Text className="text-gray-400 text-xs text-center mt-1">
                            *If your company is not listed, contact HR to get onboarded
                        </Text>
                    </View>

                    {/* Verification Method */}
                    <View className="gap-3 mt-2">
                        <Text className="text-gray-900 font-bold text-base">Verify your employment</Text>
                        <Text className="text-gray-500 text-sm leading-5">
                            You can verify your employment by using any of the following methods
                        </Text>

                        <RadioGroup
                            options={verificationOptions}
                            value={verificationMethod}
                            onChange={setVerificationMethod}
                            containerClassName="mt-2"
                        />
                    </View>

                    {/* Full Name & Dynamic Input */}
                    <View className="gap-4">
                        <Input
                            label="Full Name"
                            placeholder="Ex. Bhumika Saini"
                            value={fullName}
                            onChangeText={setFullName}
                        />

                        <View className="gap-2">
                            <Input
                                label={getVerificationLabel()}
                                placeholder={getVerificationPlaceholder()}
                                value={verificationValue}
                                onChangeText={setVerificationValue}
                                leftIcon={verificationMethod === "mobile" ? <Text className="text-gray-900 font-medium">+91 |</Text> : null}
                            />
                            {verificationMethod === "employee_id" && (
                                <View className="flex-row items-center gap-2 mt-1">
                                    <Text className="text-gray-400 text-xs">
                                        *You can find your employee code on your ID card and salary slip.
                                    </Text>
                                </View>
                            )}
                            {verificationMethod === "mobile" && (
                                <Text className="text-gray-400 text-xs mt-1">
                                    *Please enter the mobile number associated with your employer
                                </Text>
                            )}
                            {verificationMethod === "work_email" && (
                                <Text className="text-gray-400 text-xs mt-1">
                                    *Please provide your work email id.
                                </Text>
                            )}
                        </View>
                    </View>
                </View>

                {/* Bottom Spacer */}
                <View className="h-32" />
            </ScrollView>

            {/* Footer */}
            <View className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 border-t border-gray-100">
                <Button title="Next" onPress={handleNext} />

                <View className="flex-row items-center justify-center gap-2 mt-4 mb-2">
                    <View className="w-4 h-4 rounded-full border border-[#ABD147] items-center justify-center">
                        {/* Shield icon placeholder */}
                    </View>
                    <Text className="text-gray-400 text-xs">100% Safe & Secure</Text>
                </View>
                <Text className="text-gray-400 text-xs text-center">
                    By clicking Next, you are agree to our <Text className="text-[#ABD147]">Terms & Conditions.</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}
