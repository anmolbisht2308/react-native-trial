import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TopBlur from "../../components/ui/TopBlur";

export default function HelpPage() {
    const { top } = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-white relative" style={{ paddingTop: top }}>
            <TopBlur />
            <View className="px-6 py-4 border-b border-gray-200">
                <Text className="text-2xl font-bold text-gray-800">Help</Text>
            </View>

            <ScrollView className="flex-1 px-6 py-6">
                <View className="gap-4">
                    <Text className="text-lg text-gray-600">
                        How can we help you?
                    </Text>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="text-base text-gray-700 leading-6">
                            This is the Help page. FAQs, support options, and help documentation will appear here.
                        </Text>
                    </View>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="font-semibold text-gray-800 mb-2">Common Questions</Text>
                        <Text className="text-gray-600">Frequently asked questions and support resources will be listed here.</Text>
                    </View>

                    <View className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <Text className="font-semibold text-gray-800 mb-2">Contact Support</Text>
                        <Text className="text-gray-600">Get in touch with our support team for assistance.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
