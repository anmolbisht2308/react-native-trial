import { Tabs } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path, Rect, Circle, Defs, ClipPath } from "react-native-svg";

function HomeIcon({ focused }: { focused: boolean }) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke={focused ? "#ABD147" : "#9CA3AF"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function HistoryIcon({ focused }: { focused: boolean }) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle
                cx="12"
                cy="12"
                r="10"
                stroke={focused ? "#ABD147" : "#9CA3AF"}
                strokeWidth="2"
            />
            <Path
                d="M12 6V12L16 14"
                stroke={focused ? "#ABD147" : "#9CA3AF"}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </Svg>
    );
}

function HelpIcon({ focused }: { focused: boolean }) {
    const strokeColor = focused ? "#ABD147" : "#9CA3AF";

    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 18V12C3 10.3431 3.68571 8.75438 4.90381 7.58162C6.12191 6.40885 7.77609 5.75 9.5 5.75H14.5C16.2239 5.75 17.8781 6.40885 19.0962 7.58162C20.3143 8.75438 21 10.3431 21 12V18"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M21 18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H18C17.4696 20 16.9609 19.7893 16.5858 19.4142C16.2107 19.0391 16 18.5304 16 18V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V18ZM3 18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H6C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V18Z"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function ProfileIcon({ focused }: { focused: boolean }) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Circle
                cx="12"
                cy="8"
                r="4"
                stroke={focused ? "#ABD147" : "#9CA3AF"}
                strokeWidth="2"
            />
            <Path
                d="M6 21C6 17.134 8.68629 14 12 14C15.3137 14 18 17.134 18 21"
                stroke={focused ? "#ABD147" : "#9CA3AF"}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </Svg>
    );
}

function CenterActionIcon() {
    return (
        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <Rect
                x="7"
                y="5"
                width="14"
                height="10"
                rx="2"
                stroke="white"
                strokeWidth="2"
            />
            <Path
                d="M14 9V16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <Path
                d="M11 13L14 16L17 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default function TabsLayout() {
    const { bottom } = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70 + bottom,
                    paddingBottom: bottom,
                    paddingTop: 10,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: "white",
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

function CustomTabBar({ state, descriptors, navigation }: any) {
    const { bottom } = useSafeAreaInsets();

    const handleCenterPress = () => {
        // Handle center button action
        console.log("Center action pressed");
    };

    // Define the order of tabs: Home, History, [Center Button], Help, Profile
    const tabOrder = ["home", "history", "help", "profile"];

    return (
        <View
            style={{
                backgroundColor: "transparent",
                paddingBottom: bottom,
            }}
        >
            <View className="h-20 relative justify-center">
                {/* Tab bar background with cutout */}
                <Svg
                    width="100%"
                    height="80"
                    viewBox="0 0 375 80"
                    preserveAspectRatio="none"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <Path
                        d="M0,20 L0,80 L375,80 L375,20 L375,20 C375,20 320,20 270,20 C250,20 245,10 230,5 C220,2 210,0 187.5,0 C165,0 155,2 145,5 C130,10 125,20 105,20 C55,20 0,20 0,20 Z"
                        fill="white"
                    />
                </Svg>

                {/* Tab buttons container */}
                <View className="flex-row items-center z-10" style={{ paddingHorizontal: 8 }}>
                    {/* Left side: Home and History */}
                    <View className="flex-row flex-1">
                        {tabOrder.slice(0, 2).map((routeName) => {
                            const route = state.routes.find((r: any) => r.name === routeName);
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
                                <Pressable
                                    key={route.key}
                                    onPress={onPress}
                                    className="flex-1 items-center justify-center gap-1"
                                >
                                    {options.tabBarIcon &&
                                        options.tabBarIcon({ focused: isFocused })}
                                    <Text
                                        className="text-xs"
                                        style={{ color: isFocused ? "#ABD147" : "#9CA3AF" }}
                                    >
                                        {options.title}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>

                    {/* Center spacer for the floating button */}
                    <View style={{ width: 80 }} />

                    {/* Right side: Help and Profile */}
                    <View className="flex-row flex-1">
                        {tabOrder.slice(2, 4).map((routeName) => {
                            const route = state.routes.find((r: any) => r.name === routeName);
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
                                <Pressable
                                    key={route.key}
                                    onPress={onPress}
                                    className="flex-1 items-center justify-center gap-1"
                                >
                                    {options.tabBarIcon &&
                                        options.tabBarIcon({ focused: isFocused })}
                                    <Text
                                        className="text-xs"
                                        style={{ color: isFocused ? "#ABD147" : "#9CA3AF" }}
                                    >
                                        {options.title}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>

                {/* Center floating button */}
                <Pressable
                    onPress={handleCenterPress}
                    style={{
                        position: "absolute",
                        alignSelf: "center",
                        top: -35,
                        zIndex: 20,
                    }}
                >
                    {/* Subtle outer glow/ring */}
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(171, 209, 71, 0.1)",
                        }}
                    >
                        {/* Main green circle */}
                        <View
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#ABD147",
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.2,
                                shadowRadius: 6,
                                elevation: 8,
                            }}
                        >
                            <CenterActionIcon />
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}