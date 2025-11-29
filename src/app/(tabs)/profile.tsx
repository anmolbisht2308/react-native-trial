import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TopBlur from "../../components/ui/TopBlur";

export default function ProfilePage() {
    const { top } = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-white relative" style={{ paddingTop: top }}>
            <TopBlur />
            <View className="px-6 py-4 border-b border-gray-200">
                <Text className="text-2xl font-bold text-gray-800">Profile</Text>
            </View>

            <ScrollView className="flex-1 px-6 py-6">
                <View className="gap-4">
                    <View className="items-center py-4">
                        <View className="w-20 h-20 rounded-full items-center justify-center mb-3" style={{ backgroundColor: '#ABD147' }}>
                            <Text className="text-3xl text-white font-bold">U</Text>
                        </View>
                        <Text className="text-xl font-semibold text-gray-800">User Name</Text>
                        <Text className="text-gray-600">user@example.com</Text>
                    </View>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="text-base text-gray-700 leading-6">
                            This is the Profile page. User information, settings, and account details will appear here.
                        </Text>
                    </View>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="font-semibold text-gray-800 mb-2">Account Settings</Text>
                        <Text className="text-gray-600">Manage your account preferences and settings.</Text>
                    </View>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="font-semibold text-gray-800 mb-2">Bank Details</Text>
                        <Text className="text-gray-600">Link and manage your bank account for wage transfers.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
