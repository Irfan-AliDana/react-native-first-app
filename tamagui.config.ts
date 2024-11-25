import { createFont, createTamagui, createTokens } from "tamagui";

const interFont = createFont({
    family: "Inter",
    size: {
        1: 11,
        2: 12,
        3: 14,
        4: 16,
        5: 18,
        6: 20,
        7: 24,
        8: 28,
        9: 32,
        10: 36,
        11: 40,
    },
    lineHeight: {
        1: 16,
        2: 17,
        3: 22,
        4: 25,
    },
    weight: {
        thin: "300",
        regular: "400",
        medium: "500",
        bold: "700",
    },
    letterSpacing: {
        4: 0,
        8: -1,
    },
    face: {
        400: {
            normal: "Inter",
        },
        700: {
            normal: "InterBold",
        },
    },
});

export const themes = {
    light: {
        bg: "#fff",
        color: "#000",
        // borderColor: "#ccc",
    },
    dark: {
        bg: "#000",
        color: "#fff",
        borderColor: "#333",
    },
};

const tokens = createTokens({
    size: {
        0: 1,
        1: 12,
        2: 25,
        3: 50,
        4: 100,
        11: 40,
        true: 12,
    },
    space: {
        1: 5,
        2: 10,
        3: 15,
        4: 20,
        5: 25,
        6: 30,
        7: 35,
        8: 40,
        true: 10,
    },
    radius: {
        1: 5,
        2: 10,
        3: 20,
    },
    zIndex: {
        1: 0,
        2: 100,
        3: 200,
    },
    color: {
        white: "#fff",
        black: "#000",
        "light-gray": "#f3f2f4",
    },
});

const appConfig = createTamagui({
    fonts: { body: interFont },
    tokens,
    themes,
    defaultFont: "body",
    shorthands: {
        p: "padding",
        pt: "paddingTop",
        m: "margin",
        bg: "backgroundColor",
        br: "borderRadius",
    } as const,
});

export type AppConfig = typeof appConfig;

declare module "tamagui" {
    // or '@tamagui/core'
    // overrides TamaguiCustomConfig so your custom types
    // work everywhere you import `tamagui`
    interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
