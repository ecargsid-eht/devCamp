import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import { AppState, KeyboardAvoidingView, Platform, useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { useFonts } from "expo-font";
import { CampContext } from "./ctx/CampContext";
import { supabase } from "@/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Playwrite: require("@/assets/fonts/PlaywriteFRModerne-Regular.ttf"),
    PlaywriteThin: require("@/assets/fonts/PlaywriteFRModerne-Thin.ttf"),
    PlaywriteLight: require("@/assets/fonts/PlaywriteFRModerne-Light.ttf"),
    PoppinsRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    PoppinsBlack: require("@/assets/fonts/Poppins-Black.ttf"),
    PoppinsThin: require("@/assets/fonts/Poppins-Thin.ttf"),
    PoppinsLight: require("@/assets/fonts/Poppins-Light.ttf"),
    PoppinsExtraLight: require("@/assets/fonts/Poppins-ExtraLight.ttf"),
  });

  // make sure you register this only once!
  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      console.log("active")
      supabase.auth.startAutoRefresh();
    } else {
      console.log("inactive")
      supabase.auth.stopAutoRefresh();
    }
  });

  if (!loaded) {
    return null;
  }

  return (
    <CampContext.Provider
      value={{ colorScheme: colorScheme === "dark" ? "dark" : "light" }}
    >
      <TamaguiProvider config={config} defaultTheme={colorScheme!}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          >
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </KeyboardAvoidingView>
        </ThemeProvider>
      </TamaguiProvider>
    </CampContext.Provider>
  );
}
