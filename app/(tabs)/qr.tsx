import { CameraView } from "expo-camera";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View, XStack } from "tamagui";

export default function Qr() {
    const [scanned, setScanned] = useState(false);
    const router = useRouter();

    const { width, height } = Dimensions.get("window");
    const focusBoxSize = width * 0.7;

    const handleBarcodeScanned = ({ data }: { data: any }) => {
        if (!scanned) {
            setScanned(true);
            router.push({ pathname: "/qr-detail", params: { qrData: data } });
        }
    };

    useFocusEffect(
        useCallback(() => {
            setScanned(false);
        }, [])
    );

    return (
        <View flex={1}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            />
            <View justifyContent="center" alignItems="center">
                <View
                    width={width}
                    height={(height - focusBoxSize) / 2}
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                />
                <XStack>
                    <View
                        width={(width - focusBoxSize) / 2}
                        height={focusBoxSize}
                        backgroundColor="rgba(0, 0, 0, 0.5)"
                    />
                    <View
                        width={focusBoxSize}
                        height={focusBoxSize}
                        borderColor="$white"
                        borderWidth={2}
                        backgroundColor="transparent"
                    />
                    <View
                        width={(width - focusBoxSize) / 2}
                        height={focusBoxSize}
                        backgroundColor="rgba(0, 0, 0, 0.5)"
                    />
                </XStack>
                <View
                    width={width}
                    height={(height - focusBoxSize) / 2}
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                />
            </View>
        </View>
    );
}
