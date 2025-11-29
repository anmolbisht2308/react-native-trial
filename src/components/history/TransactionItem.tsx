import React from "react";
import { View, Text } from "react-native";
import { ArrowUpRight } from "lucide-react-native";
import Svg, { Path } from "react-native-svg";

interface TransactionItemProps {
    amount: number;
    date: string;
    status: "Success" | "Failed" | "Pending";
    bankName?: string;
}

export default function TransactionItem({ amount, date, status, bankName = "Credited to" }: TransactionItemProps) {
    return (
        <View className="flex-row items-center justify-between py-4 border-b border-gray-50">
            <View className="flex-row items-center gap-4">
                {/* Icon Box */}
                <View className="w-12 h-12 bg-[#F0FDF4] rounded-xl items-center justify-center">
                    <ArrowUpRight size={20} color="#166534" />
                </View>

                {/* Details */}
                <View>
                    <Text className="text-base font-bold text-gray-900">₹ {amount.toLocaleString('en-IN')}</Text>
                    <Text className="text-xs text-gray-400 mt-1">{date}</Text>
                </View>
            </View>

            {/* Status & Bank */}
            <View className="items-end gap-1">
                <View className={`px-2 py-1 rounded-md ${status === 'Success' ? 'bg-[#DCFCE7]' : 'bg-red-50'}`}>
                    <Text className={`text-[10px] font-medium ${status === 'Success' ? 'text-[#166534]' : 'text-red-600'}`}>
                        {status}
                    </Text>
                </View>
                <View className="flex-row items-center gap-1">
                    <Text className="text-xs text-gray-400">{bankName}</Text>
                    {/* Bank Icon Placeholder (Axis Bank logo style) */}
                    <View className="w-4 h-4 bg-red-800 rounded-sm items-center justify-center">
                        <Text className="text-[8px] text-white font-bold italic">a</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
