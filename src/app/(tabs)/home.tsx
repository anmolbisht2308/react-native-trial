import React from "react";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserHeader from "../../components/home/UserHeader";
import BalanceCard from "../../components/home/BalanceCard";
import FinancialOverview from "../../components/home/FinancialOverview";
import ThoughtCard from "../../components/home/ThoughtCard";
import EarningProcess from "../../components/home/EarningProcess";
import RecentActivity from "../../components/home/RecentActivity";
import { Colors } from "../../constants/colors";

export default function HomePage() {
    const { top } = useSafeAreaInsets();

    return (
        <View className="flex-1" style={{ backgroundColor: Colors.background, paddingTop: top }}>
            {/* User Header */}
            <UserHeader userName="Pankaj Saini" greeting="Good Morning!" />

            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                {/* Balance Card */}
                <View className="mb-5">
                    <BalanceCard amount={25000} nextPaydayDays={12} />
                </View>

                {/* Financial Overview */}
                <View className="mb-5">
                    <FinancialOverview
                        monthlySalary={100000}
                        earned={50000}
                        outstanding={25000}
                    />
                </View>

                {/* Thought of the Month */}
                <View className="mb-5">
                    <ThoughtCard quote="Stay committed to your goals. The results will follow — just like your paycheck." />
                </View>

                {/* Earning Process */}
                <View className="mb-5">
                    <EarningProcess
                        progressPercentage={60}
                        earnedSoFar={50000}
                        totalEarned={50000}
                    />
                </View>

                {/* Recent Activity */}
                <View className="mb-5">
                    <RecentActivity />
                </View>
            </ScrollView>
        </View>
    );
}
