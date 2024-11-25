import { HelloWave } from "@/components/HelloWave";
import React from "react";
import {
    View,
    Text,
    YStack,
    XStack,
    Card,
    H2,
    Paragraph,
    H3,
    ScrollView,
} from "tamagui";

export default function Dashboard() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <YStack
                flex={1}
                padding="$4"
                backgroundColor="#f5f7fb"
                height={"100%"}
            >
                <Text
                    fontFamily={"$body"}
                    fontSize="$7"
                    fontWeight="bold"
                    marginBottom="$4"
                >
                    Hi,
                    <Text color="#000080">
                        Irfan 👋 <HelloWave />
                    </Text>
                </Text>
                <XStack justifyContent="space-between" flexWrap="wrap">
                    <Card
                        padding="$3"
                        marginBottom="$4"
                        borderRadius={"$2"}
                        backgroundColor={"#1c1c40"}
                        elevation={"$1"}
                        width={"48%"}
                    >
                        <Card.Header padding={0}>
                            <H2
                                fontSize={18}
                                fontWeight={"bold"}
                                marginBottom={"$2"}
                                color={"$color.white"}
                            >
                                Results
                            </H2>
                            <Paragraph
                                fontSize={28}
                                fontWeight={"bold"}
                                color="$color.white"
                            >
                                24%
                            </Paragraph>
                        </Card.Header>
                        <Card.Footer
                            justifyContent="space-between"
                            paddingTop={30}
                        >
                            <View>
                                <Text fontSize="$3" color="#ccc">
                                    24
                                </Text>
                                <Text fontSize="$3" color="#ccc">
                                    Positive
                                </Text>
                            </View>
                            <View>
                                <Text fontSize="$3" color="#ccc">
                                    76
                                </Text>
                                <Text fontSize="$3" color="#ccc">
                                    Negative
                                </Text>
                            </View>
                        </Card.Footer>
                    </Card>
                    <Card
                        padding="$3"
                        marginBottom="$4"
                        borderRadius={"$2"}
                        elevation={"$1"}
                        width={"48%"}
                        borderColor={"#3d69fe"}
                        borderWidth={1}
                        backgroundColor={"$white"}
                    >
                        <Card.Header padding={0}>
                            <H2
                                fontSize={18}
                                fontWeight={"bold"}
                                marginBottom={"$2"}
                            >
                                Entrance Rate
                            </H2>
                            <Paragraph fontSize={28} fontWeight={"bold"}>
                                76%
                            </Paragraph>
                        </Card.Header>
                        <Card.Footer
                            justifyContent="space-between"
                            paddingTop={30}
                        >
                            <Paragraph color={"#ccc"}>
                                From public to dirty zone
                            </Paragraph>
                        </Card.Footer>
                    </Card>
                </XStack>
                <XStack flex={1} justifyContent="space-between">
                    <YStack width={"48%"}>
                        <Card
                            padding="$3"
                            marginBottom="$4"
                            borderRadius={"$2"}
                            elevation={"$1"}
                            width={"100%"}
                            backgroundColor={"$white"}
                            gap={40}
                        >
                            <Card.Header padding={0}>
                                <H2
                                    fontSize={18}
                                    fontWeight={"bold"}
                                    marginBottom={"$2"}
                                >
                                    In Queue
                                </H2>
                            </Card.Header>
                            <Card.Footer
                                justifyContent="space-between"
                                flexWrap="wrap"
                                gap={"$2"}
                            >
                                <YStack>
                                    <H3 fontSize={"$3"} fontWeight={"bold"}>
                                        105
                                    </H3>
                                    <Paragraph color="#ccc" fontSize={"$1"}>
                                        Dirty Zone
                                    </Paragraph>
                                </YStack>
                                <YStack>
                                    <H3 fontSize={"$3"} fontWeight={"bold"}>
                                        22
                                    </H3>
                                    <Paragraph color="#ccc" fontSize={"$1"}>
                                        Clean Zone
                                    </Paragraph>
                                </YStack>
                            </Card.Footer>
                        </Card>
                        <Card
                            padding="$3"
                            marginBottom="$4"
                            borderRadius={"$2"}
                            elevation={"$1"}
                            width={"100%"}
                            backgroundColor={"$white"}
                            gap={40}
                        >
                            <Card.Header padding={0}>
                                <H2
                                    fontSize={18}
                                    fontWeight={"bold"}
                                    marginBottom={"$2"}
                                >
                                    In Clean Zone
                                </H2>
                            </Card.Header>
                            <YStack>
                                <H3 fontSize={"$3"} fontWeight={"bold"}>
                                    126
                                </H3>
                                <Paragraph color="#ccc" fontSize={"$1"}>
                                    People
                                </Paragraph>
                            </YStack>
                        </Card>
                    </YStack>
                    <Card
                        padding="$3"
                        marginBottom="$4"
                        borderRadius={"$2"}
                        elevation={"$1"}
                        width={"48%"}
                        backgroundColor={"$white"}
                    >
                        <Card.Header
                            flex={1}
                            justifyContent="space-between"
                            padding={0}
                        >
                            <H2
                                fontSize={18}
                                fontWeight={"bold"}
                                marginBottom={"$2"}
                            >
                                Waiting Time
                            </H2>
                            <View
                                height={60}
                                marginVertical={"$2"}
                                backgroundColor={"#ffe5e5"}
                                borderRadius={5}
                            ></View>
                            <Paragraph
                                fontSize={"$4"}
                                color={"#e63946"}
                                fontWeight={"bold"}
                            >
                                08:02 Minutes
                            </Paragraph>
                        </Card.Header>
                    </Card>
                </XStack>
            </YStack>
        </ScrollView>
    );
}
