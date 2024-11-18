import { CameraView } from "expo-camera";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export default function Qr() {
    const [scanned, setScanned] = useState(false);
    const router = useRouter();

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
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
            />
            <View style={styles.overlay}>
                <View style={styles.topOverlay} />
                <View style={styles.centerRow}>
                    <View style={styles.sideOverlay} />
                    <View style={styles.focusBox} />
                    <View style={styles.sideOverlay} />
                </View>
                <View style={styles.bottomOverlay} />
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get("window");
const focusBoxSize = width * 0.7;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    topOverlay: {
        width: width,
        height: (height - focusBoxSize) / 2,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    centerRow: {
        flexDirection: "row",
    },
    sideOverlay: {
        width: (width - focusBoxSize) / 2,
        height: focusBoxSize,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    focusBox: {
        width: focusBoxSize,
        height: focusBoxSize,
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: "transparent",
    },
    bottomOverlay: {
        width: width,
        height: (height - focusBoxSize) / 2,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});
