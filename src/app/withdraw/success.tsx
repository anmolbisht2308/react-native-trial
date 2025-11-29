import React from "react";
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Check, ArrowUpRight, Clock, Download, Share2, Headphones, ChevronRight } from "lucide-react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function WithdrawalSuccess() {
    const router = useRouter();
    const { top, bottom } = useSafeAreaInsets();
    const params = useLocalSearchParams();
    const amount = params.amount ? Number(params.amount) : 4850;

    return (
        <View className="flex-1 bg-white" style={{ paddingTop: top }}>
            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Success Header */}
                <View className="items-center mt-12 mb-8">
                    {/* Success Animation Placeholder - Using a static check for now */}
                    {/* <View className="w-20 h-20 bg-[#ABD147] rounded-full items-center justify-center mb-6 shadow-lg shadow-[#ABD147]/30">
                        <Check size={40} color="white" strokeWidth={3} />
                    </View> */}

                    <Text className="text-4xl font-bold text-gray-900 mb-2">₹ {amount.toLocaleString()}.00</Text>
                    <Text className="text-gray-900 font-semibold text-lg mb-2">Salary Disbursed Successfully!</Text>
                    <Text className="text-gray-400 text-sm">09 Aug 2020 | 05:28</Text>
                </View>

                {/* Divider */}
                <View className="mx-6 border-t border-dashed border-gray-300 my-4" />

                {/* Transaction Details */}
                <View className="mx-6">
                    <View className="flex-row justify-between mb-6">
                        <View>
                            <Text className="text-gray-400 text-xs mb-1">Transaction ID</Text>
                            <Text className="text-gray-900 font-medium">0021512421421</Text>
                        </View>
                        <View>
                            <Text className="text-gray-400 text-xs mb-1">Reference No.</Text>
                            <Text className="text-gray-900 font-medium">0021512421421</Text>
                        </View>
                    </View>

                    <View className="mb-6 pt-4 border-t border-gray-100">
                        <Text className="text-gray-400 text-xs mb-1">Receiver's Bank Name</Text>
                        <Text className="text-gray-900 font-medium">ICICI Bank</Text>
                    </View>

                    <View className="mb-6 pt-4 border-t border-gray-100 flex-row justify-between items-center">
                        <View>
                            <Text className="text-gray-400 text-xs mb-1">Credited Account No.</Text>
                            <Text className="text-gray-900 font-medium">0121XXXX4412</Text>
                        </View>
                        {/* Eye icon placeholder */}
                        <View className="opacity-50">
                            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ABD147" strokeWidth="2">
                                <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
                            </Svg>
                        </View>
                    </View>
                </View>

                {/* Divider */}
                <View className="mx-6 border-t border-dashed border-gray-300 my-4" />

                <Text className="text-center font-semibold text-gray-900 mb-8">Pankaj Saini</Text>

                {/* Divider */}
                <View className="mx-6 border-t border-dashed border-gray-300 mb-8" />

                {/* Action Grid */}
                <View className="flex-row justify-between mx-8 mb-10">
                    <View className="items-center gap-2">
                        <View className="w-12 h-12 bg-[#052e16] rounded-xl items-center justify-center">
                            <ArrowUpRight size={20} color="#ABD147" />
                        </View>
                        <Text className="text-xs text-center text-gray-900 font-medium">Withdraw{'\n'}More</Text>
                    </View>

                    <View className="items-center gap-2">
                        <View className="w-12 h-12 bg-[#052e16] rounded-xl items-center justify-center">
                            <Clock size={20} color="#ABD147" />
                        </View>
                        <Text className="text-xs text-center text-gray-900 font-medium">Transact{'\n'}History</Text>
                    </View>

                    <View className="items-center gap-2">
                        <View className="w-12 h-12 bg-[#052e16] rounded-xl items-center justify-center">
                            <Download size={20} color="#ABD147" />
                        </View>
                        <Text className="text-xs text-center text-gray-900 font-medium">Download{'\n'}Receipt</Text>
                    </View>

                    <View className="items-center gap-2">
                        <View className="w-12 h-12 bg-[#052e16] rounded-xl items-center justify-center">
                            <Share2 size={20} color="#ABD147" />
                        </View>
                        <Text className="text-xs text-center text-gray-900 font-medium">Share{'\n'}Receipt</Text>
                    </View>
                </View>

                {/* Support Banner */}
                <Pressable className="mx-6 bg-[#F7FAE6] p-4 rounded-2xl flex-row items-center justify-between border border-[#ABD147]/20">
                    <View className="flex-row items-center gap-3">
                        <View className="w-10 h-10 bg-white rounded-full items-center justify-center border border-[#ABD147]/20">
                            <Headphones size={20} color="#052e16" />
                        </View>
                        <Text className="text-gray-900 font-medium">Contact evoliq Support</Text>
                    </View>
                    <ChevronRight size={20} color="#ABD147" />
                </Pressable>

                <Text className="text-center text-xs text-gray-400 mt-6 px-10 leading-5">
                    *Transaction completion may take 24-48 hours. Thank you for your patience.
                </Text>
            </ScrollView>

            {/* Bottom Action */}
            <View className="px-6 pt-4 bg-white" style={{ paddingBottom: bottom + 16 }}>
                <Pressable
                    onPress={() => router.replace("/(tabs)/home")}
                    className="w-full bg-[#052e16] py-4 rounded-xl items-center active:opacity-90"
                >
                    <Text className="text-white font-semibold text-lg">Go to Home Page</Text>
                </Pressable>
            </View>
        </View>
    );
}
