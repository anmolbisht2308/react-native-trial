import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                contentStyle: { backgroundColor: "white" },
            }}
        >
            <Stack.Screen name="work-details" />
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
