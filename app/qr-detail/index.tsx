import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const QrDetail = () => {
    const { qrData } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.pageHeading}>Details</Text>
            <Text style={styles.signInText}>
                Here are the details of the attendant.
            </Text>
            <View style={styles.wrapper}>
                <View style={styles.text}>
                    <Text style={styles.textLabel}>Name</Text>
                    <Text>{qrData}</Text>
                </View>
            </View>
        </View>
    );
};

export default QrDetail;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginTop: 20,
    },
    pageHeading: {
        fontSize: 36,
        fontWeight: "500",
    },
    signInText: {
        fontSize: 22,
        fontWeight: "300",
    },
    wrapper: {
        paddingTop: 30,
    },
    text: {
        gap: 5,
    },
    textLabel: {
        fontSize: 20,
        color: "#bdc4d9",
    },
});
