import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Pressable, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Search, SlidersHorizontal, ArrowLeft, Download, Megaphone } from "lucide-react-native";
import { useRouter } from "expo-router";

import TransactionItem from "../../components/history/TransactionItem";
import FilterModal from "../../components/history/FilterModal";
import DownloadModal from "../../components/history/DownloadModal";

export default function HistoryPage() {
    const { top, bottom } = useSafeAreaInsets();
    const router = useRouter();

    const [filterVisible, setFilterVisible] = useState(false);
    const [downloadVisible, setDownloadVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Mock Data
    const transactions = [
        { id: '1', amount: 50000, date: '01/02/2024, at 8:11am', status: 'Success' as const },
        { id: '2', amount: 50000, date: '01/02/2024, at 8:11am', status: 'Success' as const },
        { id: '3', amount: 50000, date: '01/02/2024, at 8:11am', status: 'Success' as const },
        { id: '4', amount: 50000, date: '01/02/2024, at 8:11am', status: 'Success' as const },
        { id: '5', amount: 50000, date: '01/02/2024, at 8:11am', status: 'Success' as const },
        { id: '6', amount: 50000, date: '01/02/2024, at 8:11am', status: 'Success' as const },
    ];

    return (
        <View className="flex-1 bg-white" style={{ paddingTop: top }}>
            {/* Header */}
            <View className="px-6 py-4 flex-row items-center justify-between">
                <View className="flex-row items-center gap-4">
                    <Pressable onPress={() => router.back()} className="p-2 -ml-2">
                        <ArrowLeft size={24} color="#1F2937" />
                    </Pressable>
                    <Text className="text-xl font-semibold text-gray-900">Transaction History</Text>
                </View>
                <Pressable onPress={() => setDownloadVisible(true)} className="p-2">
                    <Download size={24} color="#166534" />
                </Pressable>
            </View>

            {/* Search & Filter */}
            <View className="px-6 pb-4 flex-row gap-3">
                <View className="flex-1 flex-row items-center bg-[#F7FAE6] rounded-xl px-4 h-12 border border-[#E5E7EB]">
                    <Search size={20} color="#9CA3AF" />
                    <TextInput
                        className="flex-1 ml-2 text-gray-900"
                        placeholder="Search"
                        placeholderTextColor="#9CA3AF"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <Pressable
                    onPress={() => setFilterVisible(true)}
                    className="w-12 h-12 bg-[#F7FAE6] rounded-xl items-center justify-center border border-[#E5E7EB]"
                >
                    <SlidersHorizontal size={20} color="#ABD147" />
                </Pressable>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Refer and Earn Banner */}
                <View className="mx-6 mb-6 bg-[#ECFDF5] rounded-2xl p-4 flex-row items-center justify-between overflow-hidden relative">
                    <View className="flex-1 z-10">
                        <Text className="text-lg font-bold text-[#064E3B] mb-1">Refer and Earn</Text>
                        <Text className="text-xs text-gray-500 mb-3 w-4/5">Earn 50 evoliq coins for every successful referral</Text>
                        <Pressable className="flex-row items-center gap-1">
                            <Text className="text-[#ABD147] font-bold text-sm">Invite Now</Text>
                            <ArrowLeft size={14} color="#ABD147" style={{ transform: [{ rotate: '180deg' }] }} />
                        </Pressable>
                    </View>

                    {/* Placeholder for Banner Image */}
                    <View className="w-24 h-24 bg-[#DCFCE7] rounded-full absolute -right-4 -bottom-4 items-center justify-center opacity-50">
                        <Megaphone size={40} color="#166534" />
                    </View>
                </View>

                {/* Transaction List */}
                <View className="px-6">
                    {transactions.map((item) => (
                        <TransactionItem
                            key={item.id}
                            amount={item.amount}
                            date={item.date}
                            status={item.status}
                        />
                    ))}
                </View>
            </ScrollView>

            {/* Modals */}
            <FilterModal visible={filterVisible} onClose={() => setFilterVisible(false)} />
            <DownloadModal visible={downloadVisible} onClose={() => setDownloadVisible(false)} />
        </View>
    );
}
