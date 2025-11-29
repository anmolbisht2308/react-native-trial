import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Dimensions, Modal } from "react-native";
import { X, Check } from "lucide-react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

const { height } = Dimensions.get("window");

interface FilterModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function FilterModal({ visible, onClose }: FilterModalProps) {
    const [activeTab, setActiveTab] = useState<"Months" | "Status">("Months");
    const [selectedMonths, setSelectedMonths] = useState<string[]>(["Aug 2025"]);
    const [selectedStatus, setSelectedStatus] = useState<string[]>(["All"]);

    const months = [
        "Aug 2025", "July 2025", "Jun 2025", "May 2025",
        "Apr 2025", "Mar 2025", "Feb 2025", "Jan 2025",
        "Dec 2024", "Nov 2024", "Oct 2024", "Sep 2024"
    ];

    const statuses = ["All", "Failed", "Success"];

    const toggleMonth = (month: string) => {
        if (selectedMonths.includes(month)) {
            setSelectedMonths(selectedMonths.filter(m => m !== month));
        } else {
            setSelectedMonths([...selectedMonths, month]);
        }
    };

    const toggleStatus = (status: string) => {
        if (status === "All") {
            setSelectedStatus(["All"]);
            return;
        }

        let newStatus = selectedStatus.filter(s => s !== "All");
        if (selectedStatus.includes(status)) {
            newStatus = newStatus.filter(s => s !== status);
        } else {
            newStatus = [...newStatus, status];
        }

        if (newStatus.length === 0) newStatus = ["All"];
        setSelectedStatus(newStatus);
    };

    if (!visible) return null;

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View className="flex-1 bg-black/50 justify-end">
                <Animated.View
                    entering={FadeInDown.duration(300)}
                    exiting={FadeOutDown.duration(200)}
                    className="bg-white rounded-t-3xl h-[85%] w-full overflow-hidden"
                >
                    {/* Header */}
                    <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F7FAE6]">
                        <Text className="text-lg font-bold text-gray-900">Filters</Text>
                        <Pressable onPress={onClose} className="p-1">
                            <X size={24} color="#9CA3AF" />
                        </Pressable>
                    </View>

                    {/* Tabs */}
                    <View className="flex-row px-6 pt-4 border-b border-gray-100 bg-[#F7FAE6]">
                        <Pressable
                            onPress={() => setActiveTab("Months")}
                            className={`mr-8 pb-3 ${activeTab === "Months" ? "border-b-2 border-[#ABD147]" : ""}`}
                        >
                            <Text className={`font-semibold ${activeTab === "Months" ? "text-[#ABD147]" : "text-gray-500"}`}>
                                Months
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => setActiveTab("Status")}
                            className={`pb-3 ${activeTab === "Status" ? "border-b-2 border-[#ABD147]" : ""}`}
                        >
                            <Text className={`font-semibold ${activeTab === "Status" ? "text-[#ABD147]" : "text-gray-500"}`}>
                                Status
                            </Text>
                        </Pressable>
                    </View>

                    {/* Content */}
                    <ScrollView className="flex-1 px-6 pt-4">
                        {activeTab === "Months" ? (
                            <View className="gap-6 pb-20">
                                {months.map((month) => (
                                    <Pressable
                                        key={month}
                                        onPress={() => toggleMonth(month)}
                                        className="flex-row items-center justify-between"
                                    >
                                        <Text className="text-gray-700 font-medium">{month}</Text>
                                        <View className={`w-5 h-5 rounded border ${selectedMonths.includes(month) ? 'bg-[#ABD147] border-[#ABD147]' : 'border-gray-300'} items-center justify-center`}>
                                            {selectedMonths.includes(month) && <Check size={14} color="white" />}
                                        </View>
                                    </Pressable>
                                ))}

                                <View className="pt-4 border-t border-gray-100 mt-2">
                                    <View className="flex-row items-center justify-between">
                                        <Text className="text-gray-900 font-medium">Custom date range</Text>
                                        <View className="w-5 h-5 rounded-full border border-gray-300" />
                                    </View>

                                    <View className="flex-row gap-4 mt-4">
                                        <View className="flex-1 border border-gray-200 rounded-xl p-3 flex-row items-center gap-2">
                                            <Text className="text-gray-400">Start From</Text>
                                        </View>
                                        <View className="flex-1 border border-gray-200 rounded-xl p-3 flex-row items-center gap-2">
                                            <Text className="text-gray-400">End date</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <View className="gap-6 pb-20">
                                {statuses.map((status) => (
                                    <Pressable
                                        key={status}
                                        onPress={() => toggleStatus(status)}
                                        className="flex-row items-center justify-between"
                                    >
                                        <Text className="text-gray-700 font-medium">{status}</Text>
                                        <View className={`w-5 h-5 rounded border ${selectedStatus.includes(status) ? 'bg-[#ABD147] border-[#ABD147]' : 'border-gray-300'} items-center justify-center`}>
                                            {selectedStatus.includes(status) && <Check size={14} color="white" />}
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
                            <Text className="text-white font-semibold text-lg">Apply</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </View>
        </Modal>
    );
}
