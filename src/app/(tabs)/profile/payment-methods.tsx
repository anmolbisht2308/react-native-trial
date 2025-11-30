import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChevronLeft, Landmark, Plus } from "lucide-react-native";
import TopBlur from "../../../components/ui/TopBlur";

export default function PaymentMethodsScreen() {
    const { top } = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View className="flex-1 bg-white relative">
            <TopBlur />

            {/* Header */}
            <View style={{ paddingTop: top }} className="px-6 pb-4 border-b border-gray-100 bg-white/80">
                <View className="flex-row items-center gap-3 pt-2">
                    <Pressable onPress={() => router.back()} className="p-1 -ml-1">
                        <ChevronLeft size={24} color="#1F2937" />
                    </Pressable>
                    <Text className="text-xl font-bold text-gray-900">Payment Methods</Text>
                </View>
            </View>

            <View className="flex-1 items-center justify-center px-6">
                <View className="items-center mb-8">
                    <Landmark size={64} color="#ABD147" strokeWidth={1} />
                    <Text className="text-lg font-medium text-gray-900 mt-6 mb-2">No payment method added</Text>

                    <Pressable className="flex-row items-center gap-2 py-2">
                        <Plus size={20} color="#ABD147" />
                        <Text className="text-[#ABD147] font-bold text-base">Add Payment method</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
