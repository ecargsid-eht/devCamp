import {
  StyleSheet,
} from "react-native";
import { ScrollView, Text, View, YStack } from "tamagui";
import React, { useContext, } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignupForm from "@/components/authComponents/SignupForm";
import { CampContext } from "../ctx/CampContext";
import { useNavigation } from "expo-router";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import BackButton from "@/components/BackButton";

const Signup = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { colorScheme } = useContext(CampContext);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 15 }}>
          <BackButton navigation={navigation} colorScheme={colorScheme} />
          <View height={"$xxl"} />
          <YStack style={styles.textContainer}>
            <Text
              style={{ fontFamily: "PoppinsBold", fontSize: 30 }}
              textAlign="center"
            >
              Create Account
            </Text>
            <Text
              style={{ fontFamily: "Playwrite", fontSize: 16 }}
              textAlign="center"
            >
              A few details and we are good to go.
            </Text>
          </YStack>
          <View height={"$xl"} />
          <SignupForm colorScheme={colorScheme} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
