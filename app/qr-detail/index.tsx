import { View, Text, YStack, XStack, ScrollView } from "tamagui";
import { useLocalSearchParams } from "expo-router";

const QrDetail = () => {
    const { qrData } = useLocalSearchParams();

    return (
        <View paddingHorizontal="$5" marginTop="$4" flex={1}>
            <Text fontSize={32} fontWeight="bold">
                Details
            </Text>
            <Text fontSize="$5" fontWeight={300} marginBottom="$6">
                Here are the details of the attendant.
            </Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <XStack justifyContent="space-between" flexWrap="wrap" gap="$6">
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Last Name
                        </Text>
                        <Text>Ali</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            First Name
                        </Text>
                        <Text>{qrData}</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Phone
                        </Text>
                        <Text>03131231231</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Email
                        </Text>
                        <Text>irfan@gmail.com</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            City
                        </Text>
                        <Text>Quetta</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Zip
                        </Text>
                        <Text>57300</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            State
                        </Text>
                        <Text>Balochistan</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Address
                        </Text>
                        <Text>My Address</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            DOB
                        </Text>
                        <Text>16 Mar 1995</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Gender
                        </Text>
                        <Text>Male</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Organization
                        </Text>
                        <Text>CarbonTeq</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Current City
                        </Text>
                        <Text>Lahore</Text>
                    </YStack>
                    <YStack gap="$1" width="45%">
                        <Text fontSize="$4" color="#bdc4d9">
                            Age
                        </Text>
                        <Text>29</Text>
                    </YStack>
                </XStack>
            </ScrollView>
        </View>
    );
};

export default QrDetail;
