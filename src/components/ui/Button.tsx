import React from "react";
import { Text, Pressable, ActivityIndicator, View } from "react-native";
import { cn } from "../../lib/utils";

interface ButtonProps {
    onPress?: () => void;
    title: string;
    variant?: "primary" | "outline" | "ghost";
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    textClassName?: string;
}

export const Button = ({
    onPress,
    title,
    variant = "primary",
    loading = false,
    disabled = false,
    className,
    textClassName,
}: ButtonProps) => {
    const baseStyles = "w-full py-4 rounded-xl items-center justify-center flex-row gap-2";

    const variants = {
        primary: "bg-[#052e16] active:opacity-90",
        outline: "border border-gray-200 bg-white active:bg-gray-50",
        ghost: "bg-transparent active:bg-gray-50",
    };

    const textVariants = {
        primary: "text-white font-bold text-lg",
        outline: "text-gray-900 font-medium text-lg",
        ghost: "text-gray-600 font-medium text-lg",
    };

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || loading}
            className={cn(
                baseStyles,
                variants[variant],
                disabled && "opacity-50",
                className
            )}
        >
            {loading ? (
                <ActivityIndicator color={variant === "primary" ? "white" : "#052e16"} />
            ) : (
                <Text className={cn(textVariants[variant], textClassName)}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
};
