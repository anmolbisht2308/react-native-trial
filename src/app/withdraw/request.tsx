import React, { useState, useMemo, useEffect } from "react";
import { View, Text, Pressable, ScrollView, Dimensions, PanResponder, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedProps,
    runOnJS,
    useDerivedValue
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function RequestAdvance() {
    const router = useRouter();
    const { top, bottom } = useSafeAreaInsets();

    // State for logic / submission
    const [amount, setAmount] = useState(5000);
    const [sliderWidth, setSliderWidth] = useState(0);

    const maxAmount = 50000;
    const minAmount = 1000;

    // Reanimated Shared Values
    // Progress is 0 to 1
    const progress = useSharedValue((5000 - minAmount) / (maxAmount - minAmount));

    // Update shared value when state changes (e.g. from presets)
    useEffect(() => {
        const newProgress = (amount - minAmount) / (maxAmount - minAmount);
        progress.value = newProgress;
    }, [amount]);

    // Fees calculation (derived from state for display in details)
    const processingFee = 100;
    const gst = 50;
    const receiveAmount = amount - processingFee - gst;

    const handlePreset = (val: number) => {
        setAmount(val);
        // Progress update handled by useEffect
    };

    const updateAmountFromProgress = (prog: number) => {
        const rawAmount = minAmount + prog * (maxAmount - minAmount);
        const snapped = Math.round(rawAmount / 100) * 100;
        setAmount(snapped);
    };

    const panResponder = useMemo(
        () =>
            PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onMoveShouldSetPanResponder: () => true,
                onPanResponderGrant: (evt) => {
                    const { locationX } = evt.nativeEvent;
                    if (sliderWidth > 0) {
                        const newProgress = Math.max(0, Math.min(1, locationX / sliderWidth));
                        progress.value = newProgress;
                    }
                },
                onPanResponderMove: (evt) => {
                    if (sliderWidth > 0) {
                        const { locationX } = evt.nativeEvent;
                        const newProgress = Math.max(0, Math.min(1, locationX / sliderWidth));
                        progress.value = newProgress;
                    }
                },
                onPanResponderRelease: () => {
                    // Sync back to React state on release
                    runOnJS(updateAmountFromProgress)(progress.value);
                },
            }),
        [sliderWidth, maxAmount, minAmount]
    );

    // Animated Styles
    const trackStyle = useAnimatedStyle(() => ({
        width: `${progress.value * 100}%`,
    }));

    const thumbStyle = useAnimatedStyle(() => ({
        left: `${progress.value * 100}%`,
        marginLeft: -12,
    }));

    // Animated Props for TextInput
    const animatedTextProps = useAnimatedProps(() => {
        const currentVal = minAmount + progress.value * (maxAmount - minAmount);
        const snapped = Math.round(currentVal / 100) * 100;
        return {
            text: `₹ ${snapped.toLocaleString('en-IN')}`,
            // We use 'text' prop which works on Android/iOS for TextInput to update without re-render
            // If that fails, we might need 'value' but that can be tricky. 
            // Usually 'text' is the direct native prop.
        } as any;
    });

    return (
        <View className="flex-1 bg-white" style={{ paddingTop: top }}>
            {/* Header */}
            <View className="px-6 py-4 flex-row items-center gap-4">
                <Pressable onPress={() => router.back()} className="p-2 -ml-2">
                    <ArrowLeft size={24} color="#1F2937" />
                </Pressable>
                <Text className="text-xl font-semibold text-gray-900">Request Advance</Text>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }} scrollEnabled={true}>
                {/* Amount Card */}
                <View className="mx-6 mt-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                    {/* Background leaf decoration */}
                    <View className="absolute -right-10 -top-10 opacity-10">
                        <Svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                            <Path d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z" fill="#ABD147" />
                        </Svg>
                    </View>

                    <Text className="text-center text-gray-500 mb-1">Available Amount: <Text className="text-[#ABD147] font-bold">₹ {maxAmount.toLocaleString()}</Text></Text>

                    <View className="items-center my-6">
                        {/* Animated Text Input for smooth updates */}
                        <AnimatedTextInput
                            underlineColorAndroid="transparent"
                            editable={false}
                            value={`₹ ${amount.toLocaleString('en-IN')}`} // Initial value
                            animatedProps={animatedTextProps}
                            style={{
                                fontSize: 36,
                                fontWeight: 'bold',
                                color: '#111827',
                                textAlign: 'center',
                                width: '100%'
                            }}
                        />
                        <Text className="text-gray-400 text-sm mt-1">Select amount to withdraw</Text>
                    </View>

                    {/* Interactive Slider */}
                    <View
                        className="h-10 justify-center mb-6"
                        onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
                        {...panResponder.panHandlers}
                    >
                        {/* Track Background */}
                        <View className="h-2 bg-[#F3F4F6] rounded-full w-full absolute" />

                        {/* Active Track */}
                        <Animated.View
                            className="h-2 bg-[#ABD147] rounded-full absolute left-0"
                            style={trackStyle}
                        />

                        {/* Thumb */}
                        <Animated.View
                            className="w-6 h-6 bg-white border-2 border-[#ABD147] rounded-full absolute shadow-sm"
                            style={thumbStyle}
                        />
                    </View>

                    <View className="flex-row justify-between mb-6">
                        <Text className="text-xs text-gray-500 font-medium">₹ {minAmount.toLocaleString()}</Text>
                        <Text className="text-xs text-gray-500 font-medium">₹ {maxAmount.toLocaleString()}</Text>
                    </View>

                    {/* Preset Buttons */}
                    <View className="flex-row justify-between gap-2">
                        {[1000, 5000, 25000, 50000].map((val) => (
                            <Pressable
                                key={val}
                                onPress={() => handlePreset(val)}
                                className={`flex-1 py-2 rounded-lg border ${amount === val ? 'border-[#ABD147] bg-[#F7FAE6]' : 'border-gray-200 bg-white'} items-center`}
                            >
                                <Text className={`text-[10px] font-medium ${amount === val ? 'text-[#ABD147]' : 'text-gray-600'}`}>
                                    ₹ {val >= 1000 ? (val / 1000) + 'k' : val}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                {/* Transaction Details */}
                <View className="mx-6 mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <Text className="text-lg font-semibold text-gray-900 mb-6">Transaction Details</Text>

                    <View className="flex-row justify-between mb-4">
                        <Text className="text-gray-500">Amount Requested</Text>
                        <Text className="text-gray-900 font-medium">₹ {amount.toLocaleString()}</Text>
                    </View>

                    <View className="flex-row justify-between mb-4">
                        <Text className="text-gray-500">Processing Fee (2%)</Text>
                        <Text className="text-gray-900 font-medium">- ₹ {processingFee}</Text>
                    </View>

                    <View className="flex-row justify-between mb-4 pb-4 border-b border-gray-100">
                        <Text className="text-gray-500">GST (Paid to the government)</Text>
                        <Text className="text-gray-900 font-medium">- ₹ {gst}</Text>
                    </View>

                    <View className="flex-row justify-between items-center">
                        <Text className="text-gray-900 font-semibold">You'll Receive</Text>
                        <Text className="text-xl font-bold text-gray-900">₹ {receiveAmount.toLocaleString()}</Text>
                    </View>
                </View>

                <Text className="mx-8 mt-6 text-center text-xs text-gray-400 leading-5">
                    <Text className="text-[#ABD147]">*</Text> Withdrawals will be deducted from your upcoming salary. No hidden charges.
                </Text>
            </ScrollView>

            {/* Bottom Action */}
            <View className="px-6 pt-4 bg-white border-t border-gray-100" style={{ paddingBottom: bottom + 16 }}>
                <Pressable
                    onPress={() => router.push({ pathname: "/withdraw/success", params: { amount: receiveAmount } })}
                    className="w-full bg-[#052e16] py-4 rounded-xl items-center active:opacity-90"
                >
                    <Text className="text-white font-semibold text-lg">Confirm Transfer</Text>
                </Pressable>
            </View>
        </View>
    );
}
