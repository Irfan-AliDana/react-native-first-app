import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const options = [
    {
        icon: <FontAwesome name="cog" size={28} color={"#3b68ff"} />,
        text: "Settings",
        id: "1A",
    },
    {
        icon: <Ionicons name="help-circle-outline" size={28} color="#3b68ff" />,
        text: "Help",
        id: "2B",
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="alert-circle-outline"
                size={28}
                color="#3b68ff"
            />
        ),
        text: "How it Works",
        id: "3C",
    },
    {
        icon: (
            <MaterialCommunityIcons name="logout" size={28} color="#3b68ff" />
        ),
        text: "Logout",
        id: "4D",
    },
];

export default function Profile() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.pageHeading}>My Profile</Text>
                <View style={styles.topSection}>
                    <Image
                        style={styles.image}
                        source={require("@/assets/images/female-img.png")}
                        alt="react-logo"
                    />
                    <View>
                        <Text style={styles.profileNameText}>
                            Olivia Rosser
                        </Text>
                        <Text style={styles.profileGmailText}>
                            oliviarosser@gmail.com
                        </Text>
                    </View>
                </View>
                <View style={styles.optionsSection}>
                    {options.map((option) => {
                        return (
                            <View style={styles.card} key={option.id}>
                                {option.icon}
                                <Text style={styles.cardText}>
                                    {option.text}
                                </Text>
                                <View style={{ flex: 1 }}></View>
                                <View style={styles.buttonCard}>
                                    <Ionicons
                                        name="chevron-forward-outline"
                                        size={28}
                                        color={"#3b68ff"}
                                    />
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingTop: 30,
        backgroundColor: "#fff",
        height: "100%",
    },
    pageHeading: {
        fontSize: 28,
        fontWeight: "500",
    },
    topSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
        gap: 25,
    },
    image: {
        width: 80,
        height: 80,
    },
    profileNameText: {
        fontSize: 22,
    },
    profileGmailText: {
        color: "#bdc4d9",
    },
    card: {
        paddingVertical: 15,
        paddingLeft: 25,
        borderWidth: 1,
        borderColor: "#f2f4f5",
        borderRadius: 35,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
    },
    optionsSection: {
        gap: 20,
        marginVertical: 50,
    },
    cardText: {
        fontSize: 16,
    },
    buttonCard: {
        padding: 20,
        borderColor: "#f2f4f5",
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 15,
    },
});
