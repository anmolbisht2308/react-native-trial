import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronLeft, Copy, Calendar, Wallet } from "lucide-react-native";
import TopBlur from "../../../components/ui/TopBlur";
import Avatar5 from "../../../assets/avatar5.svg";
import { Input } from "../../../components/ui/Input";

const InfoCard = ({ icon: Icon, label, value, subLabel }: { icon: any, label: string, value: string, subLabel: string }) => (
    <View className="flex-1 bg-gray-50 p-4 rounded-2xl items-center justify-center gap-2">
        <Icon size={24} color="#052e16" strokeWidth={1.5} />
        <View className="items-center">
            <Text className="text-lg font-bold text-gray-900">{value}</Text>
            <Text className="text-xs text-gray-500">{subLabel}</Text>
        </View>
    </View>
);

const ReadOnlyField = ({ label, value, onCopy }: { label: string, value: string, onCopy?: () => void }) => (
    <View className="mb-6">
        <Text className="text-gray-500 text-sm mb-1">{label}</Text>
        <View className="flex-row items-center justify-between border-b border-gray-200 pb-2">
            <Text className="text-base font-semibold text-gray-900">{value}</Text>
            {onCopy && (
                <Pressable onPress={onCopy}>
                    <Copy size={18} color="#9CA3AF" />
                </Pressable>
            )}
        </View>
    </View>
);

export default function ManageProfileScreen() {
    const { top } = useSafeAreaInsets();
    const router = useRouter();

    // Mock data
    const [phone] = useState("+91 987-654-3210");
    const [email] = useState("pankaj.saini@tcs.com");
    const [employeeId] = useState("PS00121");
    const [employer] = useState("Tata Consultancy Services");
    const [location] = useState("Jaipur, Rajasthan");

    return (
        <View className="flex-1 bg-white relative">
            <TopBlur />

            {/* Header */}
            <View style={{ paddingTop: top }} className="px-6 pb-4 border-b border-gray-100 bg-white/80">
                <View className="flex-row items-center gap-3 pt-2">
                    <Pressable onPress={() => router.back()} className="p-1 -ml-1">
                        <ChevronLeft size={24} color="#1F2937" />
                    </Pressable>
                    <Text className="text-xl font-bold text-gray-900">Manage Profile</Text>
                </View>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* User Header */}
                <View className="px-6 py-6 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-4">
                        <View className="w-14 h-14 rounded-full overflow-hidden bg-yellow-100 items-center justify-center">
                            <Avatar5 width={56} height={56} />
                        </View>
                        <View>
                            <Text className="text-lg font-bold text-gray-900">Pankaj Saini</Text>
                            <Text className="text-gray-500 text-sm">Senior Software Engineer</Text>
                        </View>
                    </View>
                    <View className="bg-[#ABD147] px-3 py-1 rounded-full flex-row items-center gap-1">
                        <View className="w-1.5 h-1.5 bg-white rounded-full" />
                        <Text className="text-white text-xs font-bold">Active</Text>
                    </View>
                </View>

                {/* Stats Cards */}
                <View className="px-6 flex-row gap-4 mb-8">
                    <InfoCard
                        icon={Wallet}
                        value="₹ 1,00,000.00"
                        subLabel="Monthly Salary"
                        label="Salary"
                    />
                    <InfoCard
                        icon={Calendar}
                        value="5"
                        subLabel="Years"
                        label="Experience"
                    />
                </View>

                {/* Personal Information */}
                <View className="px-6 mb-2">
                    <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-6">Personal Information</Text>

                    <ReadOnlyField
                        label="Phone No."
                        value={phone}
                        onCopy={() => { }}
                    />
                    <ReadOnlyField
                        label="Email"
                        value={email}
                        onCopy={() => { }}
                    />
                </View>

                {/* Work Information */}
                <View className="px-6 pb-10">
                    <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-6">Work Information</Text>

                    <ReadOnlyField
                        label="Employee ID"
                        value={employeeId}
                        onCopy={() => { }}
                    />

                    <View className="mb-6">
                        <Text className="text-gray-500 text-sm mb-1">Employer</Text>
                        <View className="border-b border-gray-200 pb-2">
                            <Text className="text-base font-semibold text-gray-900">{employer}</Text>
                        </View>
                    </View>

                    <View className="mb-6">
                        <Text className="text-gray-500 text-sm mb-1">Work Location</Text>
                        <View className="border-b border-gray-200 pb-2">
                            <Text className="text-base font-semibold text-gray-900">{location}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
