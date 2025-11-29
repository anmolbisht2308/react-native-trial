import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Dimensions, Modal } from "react-native";
import { X, Calendar } from "lucide-react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

const { height } = Dimensions.get("window");

interface DownloadModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function DownloadModal({ visible, onClose }: DownloadModalProps) {
    const [activeTab, setActiveTab] = useState<"Range" | "Financial Year">("Range");
    const [selectedRange, setSelectedRange] = useState<string>("Custom date range");
    const [selectedFY, setSelectedFY] = useState<string>("Current FY");

    const ranges = ["Last 30 days", "Last 90 days", "Last 180 days", "Last 365 days", "Custom date range"];
    const financialYears = ["Current FY", "FY 2024-2025", "FY 2023-2024", "FY 2022-2023", "FY 2021-2022"];

    if (!visible) return null;

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View className="flex-1 bg-black/50 justify-end">
                <Animated.View
                    entering={FadeInDown.duration(300)}
                    exiting={FadeOutDown.duration(200)}
                    className="bg-white rounded-t-3xl h-[70%] w-full overflow-hidden"
                >
                    {/* Header */}
                    <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F7FAE6]">
                        <Text className="text-lg font-bold text-gray-900">Download Statement</Text>
                        <Pressable onPress={onClose} className="p-1">
                            <X size={24} color="#9CA3AF" />
                        </Pressable>
                    </View>

                    {/* Tabs */}
                    <View className="flex-row px-6 pt-4 border-b border-gray-100 bg-[#F7FAE6]">
                        <Pressable
                            onPress={() => setActiveTab("Range")}
                            className={`mr-8 pb-3 ${activeTab === "Range" ? "border-b-2 border-[#ABD147]" : ""}`}
                        >
                            <Text className={`font-semibold ${activeTab === "Range" ? "text-[#ABD147]" : "text-gray-500"}`}>
                                Range
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => setActiveTab("Financial Year")}
                            className={`pb-3 ${activeTab === "Financial Year" ? "border-b-2 border-[#ABD147]" : ""}`}
                        >
                            <Text className={`font-semibold ${activeTab === "Financial Year" ? "text-[#ABD147]" : "text-gray-500"}`}>
                                Financial Year
                            </Text>
                        </Pressable>
                    </View>

                    {/* Content */}
                    <ScrollView className="flex-1 px-6 pt-4">
                        {activeTab === "Range" ? (
                            <View className="gap-6 pb-20">
                                {ranges.map((range) => (
                                    <View key={range}>
                                        <Pressable
                                            onPress={() => setSelectedRange(range)}
                                            className="flex-row items-center justify-between"
                                        >
                                            <Text className="text-gray-700 font-medium">{range}</Text>
                                            <View className={`w-5 h-5 rounded-full border ${selectedRange === range ? 'border-[#ABD147]' : 'border-gray-300'} items-center justify-center`}>
                                                {selectedRange === range && <View className="w-3 h-3 rounded-full bg-[#ABD147]" />}
                                            </View>
                                        </Pressable>

                                        {/* Custom Date Inputs */}
                                        {range === "Custom date range" && selectedRange === "Custom date range" && (
                                            <View className="flex-row gap-4 mt-4">
                                                <View className="flex-1 border border-gray-200 rounded-xl p-3 flex-row items-center gap-2">
                                                    <Calendar size={20} color="#9CA3AF" />
                                                    <Text className="text-gray-400">Start From</Text>
                                                </View>
                                                <View className="flex-1 border border-gray-200 rounded-xl p-3 flex-row items-center gap-2">
                                                    <Calendar size={20} color="#9CA3AF" />
                                                    <Text className="text-gray-400">End date</Text>
                                                </View>
                                            </View>
                                        )}
                                    </View>
                                ))}
                            </View>
                        ) : (
                            <View className="gap-6 pb-20">
                                {financialYears.map((fy) => (
                                    <Pressable
                                        key={fy}
                                        onPress={() => setSelectedFY(fy)}
                                        className="flex-row items-center justify-between"
                                    >
                                        <Text className="text-gray-700 font-medium">{fy}</Text>
                                        <View className={`w-5 h-5 rounded-full border ${selectedFY === fy ? 'border-[#ABD147]' : 'border-gray-300'} items-center justify-center`}>
                                            {selectedFY === fy && <View className="w-3 h-3 rounded-full bg-[#ABD147]" />}
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        )}
                    </ScrollView>

                    {/* Footer */}
                    <View className="p-6 border-t border-gray-100 bg-white shadow-lg">
                        <Pressable
                            onPress={onClose}
                            className="w-full bg-[#052e16] py-4 rounded-xl items-center active:opacity-90"
                        >
                            <Text className="text-white font-semibold text-lg">Download</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}
