import { KeyboardAvoidingView, Platform } from "react-native";
import { View, Text, Input, Button, YStack } from "tamagui";
import React, { useEffect, useState } from "react";
import { Href, Link, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, isAuthenticated } = useAuth();

    const handleLogin = () => {
        if (email === "irfan" && password === "irfan") {
            login();
            router.navigate("/(tabs)/profile");
        } else {
            setError("Wrong username and password combination!");
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.navigate("/(tabs)/");
        }
    }, [isAuthenticated]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
            }}
            keyboardVerticalOffset={50}
        >
            <YStack
                paddingHorizontal={25}
                paddingTop={50}
                flex={1}
                justifyContent="space-evenly"
            >
                <YStack>
                    <Text fontFamily="$body" fontSize="$11">
                        Welcome
                    </Text>
                    <Text fontFamily="$body" fontSize="$7" fontWeight="$thin">
                        Enter your credentials to continue.
                    </Text>
                </YStack>
                <YStack gap="$3">
                    <Input
                        height={50}
                        borderWidth="$0"
                        borderRadius="$2"
                        borderColor="$light-gray"
                        paddingHorizontal="$4"
                        placeholder="Email"
                        autoFocus
                        onChangeText={(text) => setEmail(text)}
                    />
                    <YStack>
                        <Input
                            height={50}
                            borderWidth="$0"
                            borderRadius="$2"
                            borderColor="$light-gray"
                            paddingHorizontal="$4"
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Link
                            href={"/(tabs)/" as Href}
                            style={{
                                textAlign: "right",
                                paddingTop: 10,
                                color: "#c9c9c9",
                            }}
                        >
                            Forgot your password?
                        </Link>
                    </YStack>
                </YStack>
                <YStack gap="$1">
                    <Text color="red">{error}</Text>
                    <Button
                        backgroundColor={"#1794a7"}
                        height={60}
                        borderRadius="$2"
                        fontSize="$5"
                        color="$color.white"
                        onPress={handleLogin}
                    >
                        Sign In
                    </Button>
                </YStack>
            </YStack>
        </KeyboardAvoidingView>
    );
};

export default Login;
