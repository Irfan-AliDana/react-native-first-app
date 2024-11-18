import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Dashboard() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    Hi, <Text style={styles.name}>Irfan 👋</Text>
                </Text>

                <View style={styles.row}>
                    <View style={[styles.card, styles.resultsCard]}>
                        <Text style={[styles.cardTitle, { color: "#fff" }]}>
                            Results
                        </Text>
                        <Text style={styles.percentage}>24%</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingTop: 30,
                            }}
                        >
                            <View>
                                <Text style={styles.subtext}>24</Text>
                                <Text style={styles.subtext}>Positive</Text>
                            </View>
                            <View>
                                <Text style={styles.subtext}>76</Text>
                                <Text style={styles.subtext}>Negative</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.card, styles.entranceRateCard]}>
                        <Text style={styles.cardTitle}>Entrance Rate</Text>
                        <Text style={styles.entranceRate}>76%</Text>
                        <Text style={[styles.subtext, { paddingTop: 30 }]}>
                            From public to dirty zone
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flex: 1,
                    }}
                >
                    <View style={{ width: "48%" }}>
                        <View style={[styles.card, { width: "100%", gap: 45 }]}>
                            <Text style={styles.cardTitle}>In Queue</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    gap: 10,
                                    flexWrap: "wrap",
                                }}
                            >
                                <View>
                                    <Text style={styles.queueText}>105</Text>
                                    <Text style={styles.queueText}>
                                        Dirty Zone
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.queueText}>22</Text>
                                    <Text style={styles.queueText}>
                                        Clean Zone
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.card, { width: "100%", gap: 45 }]}>
                            <Text style={styles.cardTitle}>In Clean Zone</Text>
                            <Text style={styles.peopleText}>126 People</Text>
                        </View>
                    </View>
                    <View style={[styles.card, styles.largeCard]}>
                        <Text style={styles.cardTitle}>Waiting Time</Text>
                        <View style={styles.graphPlaceholder}></View>
                        <Text style={styles.timeText}>08:02 Minutes</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f7fb",
    },
    greeting: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    name: {
        color: "#000080",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 15,
        width: "48%",
    },
    largeCard: {
        justifyContent: "space-between",
    },
    resultsCard: {
        backgroundColor: "#1c1c40",
    },
    entranceRateCard: {
        borderColor: "#3d69fe",
        borderWidth: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    percentage: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    entranceRate: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#3d69fe",
    },
    queueText: {
        fontSize: 12,
        color: "#333",
    },
    subtext: {
        fontSize: 14,
        color: "#ccc",
    },
    graphPlaceholder: {
        height: 60,
        marginVertical: 10,
        backgroundColor: "#ffe5e5",
        borderRadius: 5,
    },
    timeText: {
        fontSize: 16,
        color: "#e63946",
        fontWeight: "bold",
    },
    peopleText: {
        fontSize: 24,
        color: "#333",
        fontWeight: "bold",
    },
});
