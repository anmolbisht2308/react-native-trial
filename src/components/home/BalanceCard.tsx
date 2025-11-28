import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Colors } from '../../constants/colors';


interface BalanceCardProps {
    amount: number;
    nextPaydayDays: number;
}

function EyeIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
        </Svg>
    );
}

function ArrowRightIcon() {
    return (
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <Path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}


export default function BalanceCard({ amount, nextPaydayDays }: BalanceCardProps) {
    return (
        <View className="mx-6 rounded-3xl p-6 relative overflow-hidden" style={{ backgroundColor: Colors.secondaryGreen }}>


            {/* Available to withdraw */}
            <Text className="text-white text-sm mb-2 opacity-90">
                Available to withdraw
            </Text>

            {/* Amount */}
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-white text-4xl font-bold">
                    ₹ {amount.toLocaleString('en-IN')}.00
                </Text>
                <Pressable>
                    <EyeIcon />
                </Pressable>
            </View>

            {/* Footer */}
            <View className="flex-row items-center justify-between">
                <Text className="text-white text-sm opacity-90">
                    Next payday in {nextPaydayDays} days
                </Text>
                <Pressable className="flex-row items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Text className="text-white font-semibold">Withdraw</Text>
                    <ArrowRightIcon />
                </Pressable>
            </View>

            {/* Small decorative dot - bottom left */}
            <View className="absolute bottom-4 left-6 opacity-20">
                <View className="w-2 h-2 rounded-full bg-white" />
            </View>
        </View>
    );
}
