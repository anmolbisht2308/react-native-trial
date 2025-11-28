import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Colors } from '../../constants/colors';

interface UserHeaderProps {
    userName: string;
    greeting?: string;
}

function BellIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke={Colors.textPrimary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke={Colors.textPrimary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default function UserHeader({ userName, greeting = 'Good Morning!' }: UserHeaderProps) {
    return (
        <View className="flex-row items-center justify-between px-6 py-4">
            <View className="flex-row items-center gap-3">
                {/* Avatar */}
                <View
                    className="w-12 h-12 rounded-full items-center justify-center"
                    style={{ backgroundColor: '#FF6B6B' }}
                >
                    <Text className="text-white text-xl font-bold">
                        {userName.charAt(0).toUpperCase()}
                    </Text>
                </View>

                {/* Greeting */}
                <View>
                    <Text className="text-xs" style={{ color: Colors.textSecondary }}>
                        {greeting}
                    </Text>
                    <Text className="text-base font-semibold" style={{ color: Colors.textPrimary }}>
                        {userName}
                    </Text>
                </View>
            </View>

            {/* Notification Bell */}
            <Pressable>
                <BellIcon />
            </Pressable>
        </View>
    );
}
