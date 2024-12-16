import { Alert, StyleSheet } from "react-native";
import {
  Button,
  Form,
  Input,
  Label,
  Text,
  View,
  XStack,
} from "tamagui";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { signupApi } from "@/api/services";
import { FormInterface } from "@/app/interfaces/SignupFormInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupForm = (props: FormInterface) => {
  const { colorScheme,navigation } = props;
  const firstName = useRef<string>("");
  const lastName = useRef<string>("");
  const email = useRef<string>("");
  const password = useRef<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function signUpWithEmail() {
    setLoading(true);
    if(firstName.current.trim() !== "" && lastName.current.trim() !== "" && email.current.trim() !== "" && password.current.trim() !== ""){
        const res = await signupApi(
          firstName.current.trim(),
          lastName.current.trim(),
          email.current.trim(),
          password.current.trim()
        );
        console.log(res)
        if(typeof res === "string"){
          Alert.alert(res)
        }
        else{
          AsyncStorage.setItem('access_token',res?.access_key as string)
          AsyncStorage.setItem('refresh_token',res?.refresh_key as string)
          AsyncStorage.setItem('user',JSON.stringify(res?.user?.user_metadata) || '{}')
          AsyncStorage.setItem('created_at',res?.user?.created_at as string)
          navigation.navigate('(auth)',{screen:'moreDetails'})
        }
      }
    
    setLoading(false);
  }

  return (
    <View>
      <Form onSubmit={() => {}}>
        <XStack gap={10}>
          <View flex={0.5}>
            <Label style={styles.label}>First Name</Label>
            <Input
              borderWidth={0}
              style={styles.input}
              size={"$xl"}
              onChangeText={(e) => (firstName.current = e)}
              placeholder="Eg. John"
              placeholderTextColor={
                colorScheme === "dark" ? "#909090" : "#404040"
              }
              backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
            />
          </View>
          <View flex={0.5}>
            <Label style={styles.label}>Last Name</Label>
            <Input
              borderWidth={0}
              style={styles.input}
              size={"$xl"}
              onChangeText={(e) => (lastName.current = e)}
              placeholder="Eg. Mathew"
              placeholderTextColor={
                colorScheme === "dark" ? "#909090" : "#404040"
              }
              backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
            />
          </View>
        </XStack>
        <View height={"$small"} />
        <View>
          <Label>Email Address</Label>
          <Input
            borderWidth={0}
            style={styles.input}
            textContentType="emailAddress"
            size={"$xl"}
            onChangeText={(e) => (email.current = e)}
            keyboardType="email-address"
            placeholder="Eg. johnmathew@email.com"
            placeholderTextColor={
              colorScheme === "dark" ? "#909090" : "#404040"
            }
            backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
          />
        </View>
        <View height={"$small"} />
        <View>
          <Label>Password</Label>
          <Input
            borderWidth={0}
            style={styles.input}
            size={"$xl"}
            onChangeText={(e) => (password.current = e)}
            secureTextEntry
            placeholder="Enter a secure password."
            placeholderTextColor={
              colorScheme === "dark" ? "#909090" : "#404040"
            }
            backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
          />
        </View>
        <View height={"$large"} />
        <XStack justifyContent="space-between">
          <Text
            flex={0.9}
            style={{
              fontFamily: "PoppinsExtraLight",
              fontSize: 12,
              verticalAlign: "middle",
            }}
          >
            By going ahead, you'll be agreeing to our terms and conditions.
          </Text>
          <Button
            circular
            size={"$3"}
            onPress={signUpWithEmail}
            alignSelf="flex-end"
            style={styles.startButton}
            pressStyle={{ backgroundColor: "$black" }}
            icon={<Ionicons name="arrow-forward" size={30} />}
          />
        </XStack>
      </Form>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  label: {
    fontFamily: "PoppinsRegular",
  },
  startButton: {
    backgroundColor: "#f4bb44",
    padding: 10,
  },
  input: {
    fontFamily: "PoppinsRegular",
    borderRadius: 10,
    fontSize: 16,
  },
});
