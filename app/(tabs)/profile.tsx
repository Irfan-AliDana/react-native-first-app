import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Text, View, Image, ScrollView, XStack, YStack } from "tamagui";

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
            <View
                paddingHorizontal="$5"
                paddingTop="$6"
                backgroundColor="#fff"
                flex={1}
            >
                <Text fontSize="$8">My Profile</Text>
                <XStack paddingTop="$4" gap="$5" alignItems="center">
                    <Image
                        width={80}
                        height={80}
                        source={require("@/assets/images/female-img.png")}
                        alt="react-logo"
                    />
                    <YStack>
                        <Text fontSize="$7">Olivia Rosser</Text>
                        <Text color="#bdc4d9">oliviarosser@gmail.com</Text>
                    </YStack>
                </XStack>
                <YStack gap="$4" marginVertical={50}>
                    {options.map((option) => {
                        return (
                            <XStack
                                paddingVertical="$3"
                                paddingLeft="$5"
                                borderWidth={1}
                                borderColor="#f2f4f5"
                                borderRadius={35}
                                gap="$3"
                                alignItems="center"
                                key={option.id}
                            >
                                {option.icon}
                                <Text fontSize="$4">{option.text}</Text>
                                <XStack flex={1}></XStack>
                                <View
                                    padding="$4"
                                    borderColor="#f2f4f5"
                                    borderWidth={1}
                                    borderRadius="$3"
                                    marginRight="$3"
                                    backgroundColor="$white"
                                    elevationAndroid={20}
                                >
                                    <Ionicons
                                        name="chevron-forward-outline"
                                        size={28}
                                        color={"#3b68ff"}
                                    />
                                </View>
                            </XStack>
                        );
                    })}
                </YStack>
            </View>
        </ScrollView>
    );
}
