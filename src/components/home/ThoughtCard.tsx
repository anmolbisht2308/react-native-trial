import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Colors } from '../../constants/colors';

interface ThoughtCardProps {
    quote: string;
}

function LightbulbIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M9 18H15M12 2C8.68629 2 6 4.68629 6 8C6 10.5 7 11.5 8 13C8.5 13.5 9 15 9 16H15C15 15 15.5 13.5 16 13C17 11.5 18 10.5 18 8C18 4.68629 15.3137 2 12 2Z"
                stroke={Colors.darkGreenText}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path d="M9 21H15" stroke={Colors.darkGreenText} strokeWidth="2" strokeLinecap="round" />
        </Svg>
    );
}

export default function ThoughtCard({ quote }: ThoughtCardProps) {
    return (
        <View
            className="mx-6 p-5 rounded-2xl"
            style={{ backgroundColor: Colors.darkGreen }}
        >
            <View className="flex-row items-center gap-2 mb-3">
                <LightbulbIcon />
                <Text className="font-semibold" style={{ color: Colors.darkGreenText }}>
                    Thought of the Month
                </Text>
            </View>

            <Text className="text-sm leading-5" style={{ color: '#D1D5DB' }}>
                {quote}
            </Text>
        </View>
    );
}
