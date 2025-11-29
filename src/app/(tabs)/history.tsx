import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TopBlur from "../../components/ui/TopBlur";

export default function HistoryPage() {
    const { top } = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-white relative" style={{ paddingTop: top }}>
            <TopBlur />
            <View className="px-6 py-4 border-b border-gray-200">
                <Text className="text-2xl font-bold text-gray-800">History</Text>
            </View>

            <ScrollView className="flex-1 px-6 py-6" contentContainerStyle={{ paddingBottom: 120 }}>
                <View className="gap-4">
                    <Text className="text-lg text-gray-600">
                        Transaction History
                    </Text>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="text-base text-gray-700 leading-6">
                            This is the History page. Your transaction history and wage withdrawals will appear here.
                        </Text>
                    </View>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="font-semibold text-gray-800 mb-2">Recent Transactions</Text>
                        <Text className="text-gray-600">List of recent wage withdrawals and transactions will be shown here.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
