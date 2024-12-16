import { View, Text, Image, Button } from "tamagui";
import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect, useNavigation } from "expo-router";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

const Welcome = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const navigateSignup = () => {
    navigation.navigate("(auth)",{screen:"signup"})
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: require("@/assets/images/logocamp.png"),
              width: 200,
              height: 200,
            }}
          />
        </View>
        <Text fontSize={30} style={styles.logoText}>
          Camp
        </Text>
        <Text fontSize={18} style={styles.smallText}>
          A safe space to your thoughts.
        </Text>
        <View flex={0.8} />
        <Button
          style={styles.startButton}
          pressStyle={{ backgroundColor: "$black" }}
          onPress={navigateSignup}
          textProps={{
            style: {
              fontFamily: "PoppinsBold",
              fontSize: 30,
              verticalAlign: "center",
            },
          }}
        >
          Sign Up
        </Button>
        <Text style={{ fontFamily: "PoppinsRegular" }} textAlign="center">
          Already a user? <Link href={"login"} style={{textDecorationLine:"underline", color:"#f4bb44"}}>Sign in.</Link>
        </Text>
        <View height={10} />
        <Text style={{ fontFamily: "PlaywriteLight" }} textAlign="center">
          Developed by Amrit Utsav
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  imageContainer: {
    alignItems: "flex-end",
    height: "55%",
    justifyContent: "center",
    flexDirection: "row",
  },
  logoText: {
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  smallText: {
    textAlign: "center",
    fontFamily: "Playwrite",
  },
  startButton: {
    borderRadius: 10,
    backgroundColor: "#f4bb44",
    height: "auto",
    marginHorizontal: 20,
  },
});
