import React from "react";
import { Tabs } from "expo-router";
import { View, Text, Pressable, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path, Circle } from "react-native-svg";

const { width } = Dimensions.get("window");

// --- Constants ---
const TAB_BAR_HEIGHT = 82;
const ACTIVE_COLOR = "#B3D05E"; // light lime
const INACTIVE_COLOR = "#9CA3AF";
const TAB_BG = "#FFFFFF";

// --- Icons ---

function HomeIcon({ focused }: { focused: boolean }) {
    const color = focused ? ACTIVE_COLOR : INACTIVE_COLOR;
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke={color}
                strokeWidth={focused ? 2.5 : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function HistoryIcon({ focused }: { focused: boolean }) {
    const color = focused ? ACTIVE_COLOR : INACTIVE_COLOR;
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Circle
                cx="12"
                cy="12"
                r="10"
                stroke={color}
                strokeWidth={focused ? 2.5 : 2}
            />
            <Path
                d="M12 6V12L16 14"
                stroke={color}
                strokeWidth={focused ? 2.5 : 2}
                strokeLinecap="round"
            />
        </Svg>
    );
}

function HelpIcon({ focused }: { focused: boolean }) {
    const color = focused ? ACTIVE_COLOR : INACTIVE_COLOR;
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 18V12C3 10.3431 3.68571 8.75438 4.90381 7.58162C6.12191 6.40885 7.77609 5.75 9.5 5.75H14.5C16.2239 5.75 17.8781 6.40885 19.0962 7.58162C20.3143 8.75438 21 10.3431 21 12V18"
                stroke={color}
                strokeWidth={focused ? 2.5 : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M21 18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H18C17.4696 20 16.9609 19.7893 16.5858 19.4142C16.2107 19.0391 16 18.5304 16 18V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V18ZM3 18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H6C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V18Z"
                stroke={color}
                strokeWidth={focused ? 2.5 : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function ProfileIcon({ focused }: { focused: boolean }) {
    const color = focused ? ACTIVE_COLOR : INACTIVE_COLOR;
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Circle
                cx="12"
                cy="8"
                r="4"
                stroke={color}
                strokeWidth={focused ? 2.5 : 2}
            />
            <Path
                d="M6 21C6 17.134 8.68629 14 12 14C15.3137 14 18 17.134 18 21"
                stroke={color}
                strokeWidth={focused ? 2.5 : 2}
                strokeLinecap="round"
            />
        </Svg>
    );
}

// center download icon
function CenterActionIcon() {
    return (
        <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
            {/* Top rectangular slot */}
            <Path
                d="M6 7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V10"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Vertical line */}
            <Path
                d="M12 11V16"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
            />
            {/* Arrow head */}
            <Path
                d="M9.5 13.5L12 16L14.5 13.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Bottom line */}
            <Path
                d="M7 19H17"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    );
}

// --- Tab button ---

function TabButton({
    isFocused,
    onPress,
    options,
    Icon,
}: {
    isFocused: boolean;
    onPress: () => void;
    options: any;
    Icon: React.FC<{ focused: boolean }>;
}) {
    return (
        <Pressable
            onPress={onPress}
            className="flex-1 items-center justify-center"
            style={{ paddingTop: 6 }}
        >
            <Icon focused={isFocused} />
            <Text
                style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isFocused ? ACTIVE_COLOR : "#6C6A69",
                }}
            >
                {options.title}
            </Text>
        </Pressable>
    );
}

// --- Tabs layout wrapper ---

export default function TabsLayout() {
    const { bottom } = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: TAB_BAR_HEIGHT + bottom,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "transparent",
                    elevation: 0,
                    borderTopWidth: 0,
                },
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({ focused }) => <HistoryIcon focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="help"
                options={{
                    title: "Help",
                    tabBarIcon: ({ focused }) => <HelpIcon focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
                }}
            />
        </Tabs>
    );
}

// --- Custom bottom bar ---

function CustomTabBar({ state, descriptors, navigation }: any) {
    const { bottom } = useSafeAreaInsets();
    const height = TAB_BAR_HEIGHT + bottom;
    const centerX = width / 2;

    // bump geometry (the raised center wave)
    const bumpWidth = 120;
    const bumpHeight = 26;
    const leftEdgeY = bumpHeight;
    const rightEdgeY = bumpHeight;
    const centerY = 0;

    const path = [
        `M 0 ${leftEdgeY}`,
        `L ${centerX - bumpWidth / 2} ${leftEdgeY}`,
        `C ${centerX - bumpWidth / 4} ${leftEdgeY} ${centerX - bumpWidth / 4} ${centerY} ${centerX} ${centerY}`,
        `C ${centerX + bumpWidth / 4} ${centerY} ${centerX + bumpWidth / 4} ${rightEdgeY} ${centerX + bumpWidth / 2} ${rightEdgeY}`,
        `L ${width} ${rightEdgeY}`,
        `L ${width} ${height}`,
        `L 0 ${height}`,
        "Z",
    ].join(" ");

    const tabOrder = ["home", "history", "help", "profile"];

    const handleCenterPress = () => {
        // do something when main action is pressed
    };

    return (
        <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
            {/* Background with soft shadow */}
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    width,
                    height,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -3 },
                    shadowOpacity: 0.06,
                    shadowRadius: 10,
                    elevation: 10,
                }}
            >
                <Svg width={width} height={height}>
                    <Path d={path} fill={TAB_BG} />
                </Svg>
            </View>

            {/* Tabs row */}
            <View
                className="flex-row items-center justify-between px-6"
                style={{
                    height: TAB_BAR_HEIGHT,
                    paddingBottom: bottom > 0 ? bottom / 2 : 8,
                }}
            >
                {/* Left tabs: Home, History */}
                <View className="flex-row flex-1 justify-between">
                    {tabOrder.slice(0, 2).map((name) => {
                        const route = state.routes.find((r: any) => r.name === name);
                        if (!route) return null;

                        const { options } = descriptors[route.key];
                        const isFocused = state.index === state.routes.indexOf(route);

                        const onPress = () => {
                            const event = navigation.emit({
                                type: "tabPress",
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TabButton
                                key={route.key}
                                isFocused={isFocused}
                                onPress={onPress}
                                options={options}
                                Icon={options.tabBarIcon}
                            />
                        );
                    })}
                </View>

                {/* Space for center bump */}
                <View style={{ width: 80 }} />

                {/* Right tabs: Help, Profile */}
                <View className="flex-row flex-1 justify-between">
                    {tabOrder.slice(2, 4).map((name) => {
                        const route = state.routes.find((r: any) => r.name === name);
                        if (!route) return null;

                        const { options } = descriptors[route.key];
                        const isFocused = state.index === state.routes.indexOf(route);

                        const onPress = () => {
                            const event = navigation.emit({
                                type: "tabPress",
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TabButton
                                key={route.key}
                                isFocused={isFocused}
                                onPress={onPress}
                                options={options}
                                Icon={options.tabBarIcon}
                            />
                        );
                    })}
                </View>
            </View>

            {/* Floating center action button with double ring + glow */}
            <Pressable
                onPress={handleCenterPress}
                style={{
                    position: "absolute",
                    left: centerX - 38,
                    top: -12,
                }}
            >
                {/* Outer soft glow ring */}
                <View
                    style={{
                        width: 76,
                        height: 76,
                        borderRadius: 38,
                        backgroundColor: "rgba(179, 208, 94, 0.15)",
                        alignItems: "center",
                        justifyContent: "center",
                        shadowColor: ACTIVE_COLOR,
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.45,
                        shadowRadius: 18,
                        elevation: 16,
                    }}
                >
                    {/* White ring */}
                    <View
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: 32,
                            backgroundColor: "#FFFFFF",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Inner green circle */}
                        <View
                            style={{
                                width: 56,
                                height: 56,
                                borderRadius: 28,
                                backgroundColor: ACTIVE_COLOR,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <CenterActionIcon />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}
