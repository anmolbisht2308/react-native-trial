import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { Colors } from '../../constants/colors';

interface FinancialOverviewProps {
    monthlySalary: number;
    earned: number;
    outstanding: number;
}

function ChartIcon() {
    return (
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <Path
                d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3"
                stroke={Colors.textPrimary}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path d="M7 14L10 11L14 15L21 8" stroke={Colors.primaryGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}

function WalletIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M21 12V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V12ZM21 12H17C15.8954 12 15 12.8954 15 14C15 15.1046 15.8954 16 17 16H21"
                stroke={Colors.blue}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </Svg>
    );
}

function DocumentIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                stroke={Colors.greenCard}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path d="M14 2V8H20" stroke={Colors.greenCard} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}

function ClockIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle cx="12" cy="12" r="10" stroke={Colors.gray} strokeWidth="2" />
            <Path d="M12 6V12L16 14" stroke={Colors.gray} strokeWidth="2" strokeLinecap="round" />
        </Svg>
    );
}

export default function FinancialOverview({ monthlySalary, earned, outstanding }: FinancialOverviewProps) {
    return (
        <View className="px-6 py-4">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-2">
                <View>
                    <View className="flex-row items-center gap-2">
                        <Text className="text-lg font-bold" style={{ color: Colors.textPrimary }}>
                            Financial Overview
                        </Text>
                        <ChartIcon />
                    </View>
                    <Text className="text-xs mt-1" style={{ color: Colors.textSecondary }}>
                        Your Money at a TCS
                    </Text>
                </View>
            </View>

            {/* Cards */}
            <View className="flex-row gap-3 mt-4">
                {/* Monthly Salary */}
                <View
                    className="flex-1 p-4 rounded-2xl border-2"
                    style={{ backgroundColor: Colors.white, borderColor: Colors.blueBorder }}
                >
                    <WalletIcon />
                    <Text className="text-lg font-bold mt-3" style={{ color: Colors.textPrimary }}>
                        ₹ {monthlySalary.toLocaleString('en-IN')}
                    </Text>
                    <Text className="text-xs mt-1" style={{ color: Colors.textSecondary }}>
                        Monthly Salary
                    </Text>
                </View>

                {/* Earned */}
                <View
                    className="flex-1 p-4 rounded-2xl border-2"
                    style={{ backgroundColor: Colors.white, borderColor: Colors.greenCardBorder }}
                >
                    <DocumentIcon />
                    <Text className="text-lg font-bold mt-3" style={{ color: Colors.textPrimary }}>
                        ₹ {earned.toLocaleString('en-IN')}
                    </Text>
                    <Text className="text-xs mt-1" style={{ color: Colors.textSecondary }}>
                        Earned
                    </Text>
                </View>

                {/* Outstanding */}
                <View
                    className="flex-1 p-4 rounded-2xl border-2"
                    style={{ backgroundColor: Colors.white, borderColor: Colors.gray }}
                >
                    <ClockIcon />
                    <Text className="text-lg font-bold mt-3" style={{ color: Colors.textPrimary }}>
                        ₹ {outstanding.toLocaleString('en-IN')}
                    </Text>
                    <Text className="text-xs mt-1" style={{ color: Colors.textSecondary }}>
                        Outstanding
                    </Text>
                </View>
            </View>
        </View>
    );
}
