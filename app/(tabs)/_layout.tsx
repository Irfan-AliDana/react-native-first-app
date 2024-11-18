import { FontAwesome } from "@expo/vector-icons";
import { Tabs, usePathname, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useCameraPermissions } from "expo-camera";
import { useEffect } from "react";

export default function TabLayout() {
    const [permission, requestPermission] = useCameraPermissions();

    const router = useRouter();

    const pathname = usePathname();

    useEffect(() => {
        if (permission && pathname.startsWith("/(tabs)")) {
            router.navigate("/(tabs)/qr");
        }
    }, [permission, pathname]);

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={32} name="home" color={color} />
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="qr"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.qrIcon}>
                            <FontAwesome
                                size={32}
                                name="qrcode"
                                color={!focused ? "white" : "black"}
                                onPress={requestPermission}
                            />
                        </View>
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={32} name="user" color={color} />
                    ),
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    qrIcon: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: "#3d69fe",
        bottom: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
    },
    tabBarStyle: {
        height: 95,
    },
});
