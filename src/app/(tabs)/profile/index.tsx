import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    User,
    CreditCard,
    Users,
    ShieldCheck,
    Languages,
    Bell,
    Fingerprint,
    Moon,
    Info,
    LogOut,
    ChevronRight
} from "lucide-react-native";
import TopBlur from "../../../components/ui/TopBlur";
import Avatar5 from "../../../assets/avatar5.svg";

// Reusable menu item component
const MenuItem = ({
    icon: Icon,
    label,
    onPress,
    showBorder = false,
    textColor = "#1F2937" // gray-800
}: {
    icon: any;
    label: string;
    onPress: () => void;
    showBorder?: boolean;
    textColor?: string;
}) => (
    <Pressable
        onPress={onPress}
        className={`flex-row items-center justify-between py-4 ${showBorder ? "border-b border-gray-100" : ""}`}
    >
        <View className="flex-row items-center gap-4">
            <Icon size={22} color={textColor === "#1F2937" ? "#052e16" : textColor} strokeWidth={1.5} />
            <Text className={`text-base font-medium`} style={{ color: textColor }}>{label}</Text>
        </View>
        <ChevronRight size={20} color="#9CA3AF" />
    </Pressable>
);

export default function ProfileScreen() {
    const { top } = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View className="flex-1 bg-white relative">
            <TopBlur />

            {/* Header */}
            <View style={{ paddingTop: top }} className="px-6 pb-4 border-b border-gray-100 bg-white/80">
                <View className="flex-row items-center gap-3 pt-2">
                    <Pressable onPress={() => router.back()}>
                        {/* Back arrow if needed, though usually tabs don't have back on root */}
                        {/* <ChevronLeft size={24} color="#1F2937" /> */}
                    </Pressable>
                    <Text className="text-xl font-bold text-gray-900">Profile & Settings</Text>
                </View>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* User Card */}
                <View className="px-6 py-6 border-b border-gray-100">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-4">
                            <View className="w-16 h-16 rounded-full overflow-hidden bg-yellow-100 items-center justify-center">
                                <Avatar5 width={64} height={64} />
                            </View>
                            <View>
                                <Text className="text-xl font-bold text-gray-900">Pankaj Saini</Text>
                                <Text className="text-gray-500 text-sm">Senior Software Engineer</Text>
                            </View>
                        </View>
                        <View className="bg-[#ABD147] px-3 py-1 rounded-full flex-row items-center gap-1">
                            <View className="w-1.5 h-1.5 bg-white rounded-full" />
                            <Text className="text-white text-xs font-bold">Active</Text>
                        </View>
                    </View>
                </View>

                {/* Quick Actions */}
                <View className="px-6 py-6">
                    <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Quick Actions</Text>

                    <MenuItem
                        icon={User}
                        label="Manage Profile"
                        onPress={() => router.push("/(tabs)/profile/manage")}
                    />
                    <MenuItem
                        icon={CreditCard}
                        label="Payment Methods"
                        onPress={() => router.push("/(tabs)/profile/payment-methods")}
                    />
                    <MenuItem
                        icon={Users}
                        label="Refer and Earn"
                        onPress={() => { }}
                    />
                    <MenuItem
                        icon={ShieldCheck}
                        label="Security & Privacy"
                        onPress={() => { }}
                    />
                </View>

                {/* Settings & Preferences */}
                <View className="px-6 pb-6">
                    <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Settings & Preferences</Text>

                    <MenuItem
                        icon={Languages}
                        label="Languages"
                        onPress={() => { }}
                    />
                    <MenuItem
                        icon={Bell}
                        label="Reminders"
                        onPress={() => { }}
                    />
                    <MenuItem
                        icon={Fingerprint}
                        label="Biometric and Screen Lock"
                        onPress={() => { }}
                    />
                    {/* Duplicate Languages in screenshot? Assuming typo in design or different context. Skipping duplicate. */}
                    <MenuItem
                        icon={Moon}
                        label="Theme"
                        onPress={() => { }}
                    />
                </View>

                {/* Footer Actions */}
                <View className="px-6 pb-32">
                    <View className="h-[1px] bg-gray-100 my-4" />
                    <MenuItem
                        icon={Info}
                        label="About evoliq"
                        onPress={() => { }}
                    />
                    <MenuItem
                        icon={LogOut}
                        label="Logout"
                        onPress={() => router.replace("/(auth)/welcome")}
                        textColor="#ABD147"
                    />
                </View>
            </ScrollView>
        </View>
    );
}
