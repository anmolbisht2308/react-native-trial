import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { Colors } from '../../constants/colors';

interface EarningProcessProps {
    progressPercentage: number;
    earnedSoFar: number;
    totalEarned: number;
}

function TrendingUpIcon() {
    return (
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <Path
                d="M23 6L13.5 15.5L8.5 10.5L1 18"
                stroke={Colors.primaryGreen}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M17 6H23V12"
                stroke={Colors.primaryGreen}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function CalendarIcon() {
    return (
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <Rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                stroke={Colors.primaryGreen}
                strokeWidth="2"
            />
            <Path d="M16 2V6" stroke={Colors.primaryGreen} strokeWidth="2" strokeLinecap="round" />
            <Path d="M8 2V6" stroke={Colors.primaryGreen} strokeWidth="2" strokeLinecap="round" />
            <Path d="M3 10H21" stroke={Colors.primaryGreen} strokeWidth="2" />
        </Svg>
    );
}

export default function EarningProcess({ progressPercentage, earnedSoFar, totalEarned }: EarningProcessProps) {
    return (
        <View className="px-6 py-4">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-4">
                <View>
                    <View className="flex-row items-center gap-2">
                        <Text className="text-lg font-bold" style={{ color: Colors.textPrimary }}>
                            Earning Process
                        </Text>
                        <View className="px-2 py-1 rounded-full" style={{ backgroundColor: Colors.lightGreen }}>
                            <Text className="text-xs font-semibold" style={{ color: Colors.primaryGreen }}>
                                Active
                            </Text>
                        </View>
                    </View>
                    <Text className="text-xs mt-1" style={{ color: Colors.textSecondary }}>
                        Track your monthly journey
                    </Text>
                </View>
            </View>

            {/* Progress */}
            <View className="mb-4">
                <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm" style={{ color: Colors.textSecondary }}>
                        Progress to net payday
                    </Text>
                    <Text className="text-sm font-semibold" style={{ color: Colors.primaryGreen }}>
                        {progressPercentage}%
                    </Text>
                </View>

                {/* Progress Bar */}
                <View className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: Colors.lightGray }}>
                    <View
                        className="h-full rounded-full"
                        style={{
                            backgroundColor: Colors.primaryGreen,
                            width: `${progressPercentage}%`,
                        }}
                    />
                </View>
            </View>

            {/* Stats Cards */}
            <View className="flex-row gap-3">
                {/* Earned So Far */}
                <View className="flex-1 p-4 rounded-2xl flex-row items-center gap-3" style={{ backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.lightGray }}>
                    <View className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: Colors.lightGreen }}>
                        <TrendingUpIcon />
                    </View>
                    <View className="flex-1">
                        <Text className="text-lg font-bold" style={{ color: Colors.textPrimary }}>
                            ₹ {earnedSoFar.toLocaleString('en-IN')}
                        </Text>
                        <Text className="text-xs" style={{ color: Colors.textSecondary }}>
                            Earned so far
                        </Text>
                    </View>
                </View>

                {/* Total Earned */}
                <View className="flex-1 p-4 rounded-2xl flex-row items-center gap-3" style={{ backgroundColor: Colors.lightGreen }}>
                    <View className="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: Colors.white }}>
                        <CalendarIcon />
                    </View>
                    <View className="flex-1">
                        <Text className="text-lg font-bold" style={{ color: Colors.textPrimary }}>
                            ₹ {totalEarned.toLocaleString('en-IN')}
                        </Text>
                        <Text className="text-xs" style={{ color: Colors.textSecondary }}>
                            Earned so far
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
