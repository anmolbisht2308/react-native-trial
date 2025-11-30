import React from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "../../components/ui/Button";

const { height } = Dimensions.get("window");

export default function ConsentModal() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-black/50 justify-end">
            <Pressable className="flex-1" onPress={() => router.back()} />

            <View className="bg-white rounded-t-3xl p-6 pb-10" style={{ maxHeight: height * 0.85 }}>
                <Text className="text-[#052e16] text-xl font-bold mb-6">Consent Notice</Text>

                <View className="gap-4 mb-8">
                    <Text className="text-gray-500 leading-6">
                        By accessing this application, you consent to the collection, use, and disclosure of your personal data by Evolving to facilitate the Early Wage Access benefit provided through your employer. You also explicitly authorize your employer to share your date of joining and monthly net take-home salary for this purpose.
                    </Text>

                    <Text className="text-gray-500 leading-6">
                        You acknowledge that your employer is not responsible for the handling or use of this data by Evolving. Additionally, you voluntarily consent to the collection of your bank account details and EPFO information using your phone number.
                    </Text>

                    <Text className="text-gray-500 leading-6">
                        By clicking the Next button, you confirm your consent for your employer to share the necessary data with Evolving and acknowledge that you have read and accepted Evolving's Privacy Policy.
                    </Text>
                </View>

                <Button title="Okay" onPress={() => router.push("/(auth)/login")} />
            </View>
        </View>
    );
}
