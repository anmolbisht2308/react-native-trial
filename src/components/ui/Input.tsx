import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { cn } from "../../lib/utils";

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    containerClassName?: string;
}

export const Input = ({
    label,
    error,
    leftIcon,
    rightIcon,
    containerClassName,
    className,
    ...props
}: InputProps) => {
    return (
        <View className={cn("w-full gap-2", containerClassName)}>
            {label && (
                <Text className="text-gray-700 font-medium text-base">{label}</Text>
            )}
            <View className={cn(
                "flex-row items-center border border-gray-200 rounded-xl px-4 py-3.5 bg-white focus:border-[#052e16]",
                error && "border-red-500",
                props.editable === false && "bg-gray-50"
            )}>
                {leftIcon && <View className="mr-3">{leftIcon}</View>}
                <TextInput
                    className={cn("flex-1 text-gray-900 text-base", className)}
                    placeholderTextColor="#9CA3AF"
                    {...props}
                />
                {rightIcon && <View className="ml-3">{rightIcon}</View>}
            </View>
            {error && (
                <Text className="text-red-500 text-sm">{error}</Text>
            )}
        </View>
    );
};
