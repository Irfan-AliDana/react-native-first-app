import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
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
            style={styles.container}
            keyboardVerticalOffset={50}
        >
            {/* <ScrollView style={{ flexGrow: 1 }}> */}
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.signInText}>
                        Enter your credentials to continue.
                    </Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        placeholder="Email"
                        style={styles.inputEmail}
                        autoFocus
                        onChangeText={(text) => setEmail(text)}
                    />
                    <View>
                        <TextInput
                            placeholder="Password"
                            style={styles.inputEmail}
                            secureTextEntry
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Link
                            href={"/(tabs)/" as Href}
                            style={styles.forgotPasswordText}
                        >
                            Forgot your password?
                        </Link>
                    </View>
                </View>
                <View style={styles.btnWrapper}>
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.touchableOpacity}
                        onPress={handleLogin}
                    >
                        <View style={styles.btnTextWraper}>
                            <Text style={styles.btnText}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ flex: 1, borderWidth: 1 }}>
                    <Text>Hello world</Text>
                </View> */}
            </View>
            {/* </ScrollView> */}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        paddingHorizontal: 25,
        paddingTop: 50,
        flex: 1,
        justifyContent: "space-evenly",
        // flexGrow: 1,
    },
    welcome: {
        fontSize: 40,
        fontWeight: "500",
    },
    signInText: {
        fontSize: 22,
        fontWeight: "300",
    },
    inputWrapper: {
        // paddingTop: 45,
        gap: 20,
    },
    inputEmail: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#f3f2f4",
        paddingHorizontal: 20,
        paddingTop: 0,
    },
    forgotPasswordText: {
        textAlign: "right",
        paddingTop: 10,
        color: "#c9c9c9",
    },
    btnWrapper: {
        // marginTop: 50,
        gap: 5,
    },
    touchableOpacity: {
        backgroundColor: "#1794a7",
        height: 60,
        borderRadius: 10,
    },
    btnTextWraper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
    },
    errorText: {
        color: "red",
    },
});

export default Login;
