import React from "react";
import { View, Text, Pressable } from "react-native";
import { cn } from "../../lib/utils";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupProps {
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    containerClassName?: string;
}

export const RadioGroup = ({
    options,
    value,
    onChange,
    label,
    containerClassName,
}: RadioGroupProps) => {
    return (
        <View className={cn("w-full gap-3", containerClassName)}>
            {label && (
                <Text className="text-gray-900 font-bold text-base">{label}</Text>
            )}
            <View className="flex-row flex-wrap gap-4">
                {options.map((option) => {
                    const isSelected = value === option.value;
                    return (
                        <Pressable
                            key={option.value}
                            onPress={() => onChange(option.value)}
                            className="flex-row items-center gap-2"
                        >
                            <View className={cn(
                                "w-5 h-5 rounded-full border items-center justify-center",
                                isSelected ? "border-[#ABD147]" : "border-gray-200"
                            )}>
                                {isSelected && (
                                    <View className="w-2.5 h-2.5 rounded-full bg-[#ABD147]" />
                                )}
                            </View>
                            <Text className={cn(
                                "text-base",
                                isSelected ? "text-gray-900 font-medium" : "text-gray-600"
                            )}>
                                {option.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
};
