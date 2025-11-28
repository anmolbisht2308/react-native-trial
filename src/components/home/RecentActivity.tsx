import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../constants/colors';

function ChevronRightIcon() {
    return (
        <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <Path
                d="M9 18L15 12L9 6"
                stroke={Colors.primaryGreen}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default function RecentActivity() {
    return (
        <View className="px-6 py-4">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-4">
                <View>
                    <Text className="text-lg font-bold" style={{ color: Colors.textPrimary }}>
                        Recent Activity
                    </Text>
                    <Text className="text-xs mt-1" style={{ color: Colors.textSecondary }}>
                        Your latest transactions
                    </Text>
                </View>

                <Pressable className="flex-row items-center gap-1">
                    <Text className="text-sm font-semibold" style={{ color: Colors.primaryGreen }}>
                        View All
                    </Text>
                    <ChevronRightIcon />
                </Pressable>
            </View>

            {/* Placeholder */}
            <View className="p-6 rounded-2xl items-center" style={{ backgroundColor: Colors.lightGray }}>
                <Text className="text-sm" style={{ color: Colors.textSecondary }}>
                    No recent transactions
                </Text>
            </View>
        </View>
    );
}
