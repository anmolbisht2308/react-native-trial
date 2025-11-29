import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                contentStyle: { backgroundColor: "white" },
            }}
        >
            <Stack.Screen name="welcome" />
            <Stack.Screen name="login" />
            <Stack.Screen name="otp" />
            <Stack.Screen
                name="consent"
                options={{
                    presentation: "transparentModal",
                    animation: "fade",
                }}
            />
        </Stack>
    );
}
