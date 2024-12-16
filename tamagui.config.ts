import { createMedia } from "@tamagui/react-native-media-driver";
import { createFont, createTamagui, createTokens } from "tamagui";
import { createAnimations } from "@tamagui/animations-css";
// Create a font:

// To work with the tamagui UI kit styled components (which is optional)
// you'd want the keys used for `size`, `lineHeight`, `weight` and
// `letterSpacing` to be consistent. The `createFont` function
// will fill-in any missing values if `lineHeight`, `weight` or
// `letterSpacing` are subsets of `size`.


const interFont = createFont({
  family: "PoppinsRegular",
  size: {
    1: 12,
    2: 14,
    3: 15,
    4: 16,
    5: 25,
    6: 65,
  },
  lineHeight: {
    // 1 will be 22
    2: 22,
  },
  weight: {
    1: "300",
    // 2 will be 300
    3: "600",
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native only) swaps out fonts by face/style
  face: {
    300: { normal: "PoppinsLight" },
    600: { normal: "PoppinsBold" },
  },
});


// Set up our tokens

// The keys can be whatever you want, but we do recommend keeping them
// consistent across the different token categories and intended for
// usage together to make nice designs - eg for a Button to use.

const size = {
  0: 0,
  1: 5,
  2: 10,
  // ....
};

export const tokens = createTokens({
  size: {
    small: 20,
    medium: 30,
    true: 30, // note true = 30 just like medium, your default size token
    large: 45,
    xl:50,
    xxl:100
  },
  space: {
    small: 10,
    medium: 20,
    true: 20, // same goes for space and other token categories
    large: 30,
  },
  radius: { small: 0, medium: 3 },
  zIndex: { small: 0, medium: 100, large: 200 },
  color: {
    white: "#fff",
    black: "#000",
    gray: "#ddd"
  },
});


const config = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: interFont,
    body: interFont,
  },
  tokens,

  // For more on themes, see the Themes page
  themes: {
    light: {
      background: "#fff",
      color: "#000",
      placeholderTextColor:"#000",
      borderColor:"#000",
    },
    dark: {
      background: "#181818",
      color: "#fff",
      placeholderTextColor:"#fff",
      borderColor:"#eee",
    },
  },

  // For web-only, media queries work out of the box and you can avoid the
  // `createMedia` call here by passing the media object directly.
  // If you are going to target React Native, use `createMedia` (it's an identity
  // function on web so you can import it there without concern).
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),

  // Shorthands
  // Adds <View m={10} /> to <View margin={10} />
  // See Settings section on this page to only allow shorthands
  // Be sure to have `as const` at the end
  shorthands: {
    px: "paddingHorizontal",
    f: "flex",
    m: "margin",
    w: "width",
  } as const,


});

type AppConfig = typeof config;

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}

  // if you want types for group styling props, define them like so:
  interface TypeOverride {
    groupNames(): "a" | "b" | "c";
  }
}

export default config;
