import React from "react";
import { Button, YStack, Sheet } from "tamagui";
import "react-native-reanimated";

const BottomSheet = () => {
    const [open, setIsOpen] = React.useState(false);
    const [position, setPosition] = React.useState(0);

    return (
        <>
            <Button onPress={() => setIsOpen(true)}>Open Sheet</Button>
            <Sheet
                modal
                open={open}
                onOpenChange={setIsOpen}
                snapPoints={[50, 100, 300]}
                snapPointsMode="constant"
                dismissOnSnapToBottom
                zIndex={100_000}
                position={position}
                onPositionChange={setPosition}
                animation=""
            >
                <Sheet.Overlay />
                <Sheet.Handle />
                <Sheet.Frame padding="$4" backgroundColor="$background">
                    <YStack gap="$4">
                        <Button onPress={() => setIsOpen(false)}>Close</Button>
                        <Button>Option 1</Button>
                        <Button>Option 2</Button>
                    </YStack>
                </Sheet.Frame>
            </Sheet>
        </>
    );
};

export default BottomSheet;
