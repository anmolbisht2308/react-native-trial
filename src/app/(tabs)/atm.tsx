import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";

export default function ATMPage() {
    const { top } = useSafeAreaInsets();

    return (
        <View className="flex-1" style={{ backgroundColor: Colors.background, paddingTop: top }}>
            <View className="px-6 py-4">
                <Text className="text-2xl font-bold" style={{ color: Colors.textPrimary }}>
                    ATM / Withdraw
                </Text>
                <Text className="text-sm mt-2" style={{ color: Colors.textSecondary }}>
                    Withdraw your earned wages
                </Text>
            </View>

            <View className="flex-1 items-center justify-center px-6">
                <Text className="text-base text-center" style={{ color: Colors.textSecondary }}>
                    ATM/Withdraw functionality will be implemented here
                </Text>
            </View>
        </View>
    );
}
