import { AuthProvider, useAuth } from "@/context/AuthContext";
// import {
//     Poppins_400Regular,
//     Poppins_500Medium,
//     Poppins_600SemiBold,
//     useFonts,
// } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Href, SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const router = useRouter();

    const [fontsLoaded, error] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    useEffect(() => {
        // Navigate based on authentication status
        if (isAuthenticated !== null && fontsLoaded) {
            if (isAuthenticated) {
                router.replace("/(tabs)/" as Href);
            } else {
                router.replace("(auth)/login" as Href);
            }
        }
    }, [isAuthenticated, fontsLoaded]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <AuthProvider>
            <TamaguiProvider config={tamaguiConfig}>
                <SafeAreaView style={styles.safeArea}>
                    <Stack
                        screenOptions={{
                            headerShown: false,
                            contentStyle: { backgroundColor: "#fff" },
                        }}
                    >
                        <Stack.Screen
                            name="(auth)/login"
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="(tabs)"
                            options={{ headerShown: false }}
                        />
                    </Stack>
                </SafeAreaView>
            </TamaguiProvider>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 10,
        // paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
});
